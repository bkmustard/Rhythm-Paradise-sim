
import { GoogleGenAI, Type } from "@google/genai";
import { GameState, EncounterResponse, Character } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateEncounter(character: Character, state: GameState): Promise<EncounterResponse> {
    const prompt = `
      당신은 '리듬 파라다이스'라는 기괴한 놀이공원의 나폴리탄 괴담 시뮬레이터입니다.
      
      현재 플레이 중인 캐릭터 정보:
      - 이름: ${character.name} (나이: ${character.age}, 성별: ${character.gender})
      - 역할: ${character.role} (${character.category} 소속)
      - 성격 키워드: ${character.keywords.join(', ')}
      - 설명: ${character.description}
      - 현재 상태: 정신력 ${state.sanity}/100, 소지품 [${state.inventory.join(', ')}]
      
      놀이공원 규칙:
      ${state.currentRuleSet.join('\n')}

      가이드라인:
      1. 리듬 파라다이스의 고유 설정을 활용하세요 (칼리스토인, 정화, 본부의 비밀, 특정 캐릭터와의 조우 등).
      2. 텍스트는 차갑고 사무적이면서도 기괴한 '나폴리탄 괴담' 특유의 문체를 사용하세요.
      3. 캐릭터의 성격에 따라 반응이 달라질 수 있도록 상황을 설정하세요.
      4. 가끔씩 매우 위험한 상황(isDangerous: true)을 연출하여 규칙 준수를 강요하세요.
      5. 소지품을 얻거나 잃는 옵션을 포함할 수 있습니다.

      응답은 반드시 아래 JSON 형식을 지켜야 합니다:
      {
        "description": "기괴하고 상세한 상황 묘사 (한국어)",
        "options": [
          {"text": "행동 선택지 1", "consequence": "결과에 대한 짧은 암시", "sanityChange": 정신력 변화량, "itemGain": "획득 아이템(선택사항)"},
          {"text": "행동 선택지 2", "consequence": "결과에 대한 짧은 암시", "sanityChange": 정신력 변화량}
        ],
        "isDangerous": 위험 여부,
        "newRule": "새롭게 발견된 쪽지나 규칙 (선택사항)"
      }
    `;

    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            description: { type: Type.STRING },
            options: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  text: { type: Type.STRING },
                  consequence: { type: Type.STRING },
                  sanityChange: { type: Type.NUMBER },
                  itemGain: { type: Type.STRING }
                },
                required: ["text", "consequence", "sanityChange"]
              }
            },
            isDangerous: { type: Type.BOOLEAN },
            newRule: { type: Type.STRING }
          },
          required: ["description", "options", "isDangerous"]
        }
      }
    });

    try {
      return JSON.parse(response.text || "{}") as EncounterResponse;
    } catch (e) {
      console.error("Gemini parse error", e);
      throw e;
    }
  }
}
