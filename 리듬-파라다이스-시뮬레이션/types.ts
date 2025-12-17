
export interface Character {
  id: string;
  name: string;
  age: string;
  gender: string;
  category: '어트랙션' | '보안부' | '본부' | '식당' | '의무실' | '경찰' | '기타';
  role: string;
  description: string;
  keywords: string[];
  avatar: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Insane';
  initialInventory: string[];
  quote: string;
}

export interface GameState {
  currentLocation: string;
  sanity: number;
  inventory: string[];
  rulesRead: string[];
  status: 'playing' | 'dead' | 'escaped' | 'lost';
  logs: string[];
  currentRuleSet: string[];
}

export interface EncounterResponse {
  description: string;
  options: {
    text: string;
    consequence: string;
    sanityChange: number;
    itemGain?: string;
  }[];
  isDangerous: boolean;
  newRule?: string;
}
