
import { Character } from './types';

export const CHARACTERS: Character[] = [
  // 어트랙션 - 리듬 코스터
  {
    id: 'new', name: '뉴', age: '27', gender: '남', category: '어트랙션', role: '리듬 코스터',
    keywords: ['무던함', '완벽주의', '책임감'],
    description: '동안에 미남. 쉴 때는 나른해진다. 비 외에는 친한 직원이 없다.',
    quote: '활짝 스마일~ OK?', avatar: 'https://picsum.photos/seed/rp_new/400/600',
    difficulty: 'Easy', initialInventory: ['정돈된 매뉴얼', '비타민 음료']
  },
  {
    id: 'bee', name: '비', age: '21', gender: '남', category: '어트랙션', role: '리듬 코스터',
    keywords: ['귀찮음', '할일은 함', '표정에 감정이 다 드러남'],
    description: '보안부 지망생이었으나 어트랙션 배정. 헤드폰 없이 개인 모자를 쓰고 근무 중.',
    quote: 'OK OK~', avatar: 'https://picsum.photos/seed/rp_bee/400/600',
    difficulty: 'Medium', initialInventory: ['개인 모자', '껌 한 통']
  },
  // 어트랙션 - 리듬 라이드
  {
    id: 'moki', name: '모키', age: '23', gender: '여', category: '어트랙션', role: '리듬 라이드',
    keywords: ['활발', '질투심', '승부욕'],
    description: '소심했으나 어느 시점부터 성격이 완전히 바뀌었다.',
    quote: '추천 메뉴는 아이스크림이야!', avatar: 'https://picsum.photos/seed/rp_moki/400/600',
    difficulty: 'Medium', initialInventory: ['아이스크림 쿠폰']
  },
  {
    id: 'pel', name: '펠', age: '22', gender: '남', category: '어트랙션', role: '리듬 라이드',
    keywords: ['활발', '단순', '순진무구'],
    description: '누나 데아가 리듬 파라다이스 정규직이었다.',
    quote: '안녕하심까! 펠이라고 함다!', avatar: 'https://picsum.photos/seed/rp_pel/400/600',
    difficulty: 'Easy', initialInventory: ['누나의 사진']
  },
  // 어트랙션 - 리듬 범퍼카
  {
    id: 'sen', name: '센', age: '25', gender: '남', category: '어트랙션', role: '리듬 범퍼카',
    keywords: ['소심함', '자격지심'],
    description: '레이에게 멋진 선배가 되고 싶지만 소심해서 오히려 후배 레이를 쫓아다니는 신세.',
    quote: '앗! 같이 가자…!', avatar: 'https://picsum.photos/seed/rp_sen/400/600',
    difficulty: 'Hard', initialInventory: ['구겨진 손편지']
  },
  {
    id: 'ray', name: '레이', age: '20', gender: '남', category: '어트랙션', role: '리듬 범퍼카',
    keywords: ['정의로움', '강철멘탈', '친화력'],
    description: '리듬 파라다이스의 주인공. 어떤 상황에서도 멘탈을 유지한다.',
    quote: '잘 부탁드려요!', avatar: 'https://picsum.photos/seed/rp_ray/400/600',
    difficulty: 'Easy', initialInventory: ['주인공의 뱃지']
  },
  // 어트랙션 - 호러 하우스
  {
    id: 'asher', name: '애셔', age: '23', gender: '남', category: '어트랙션', role: '리듬 호러 하우스',
    keywords: ['과묵한', '장난기'],
    description: '조니에게 매일 시비를 걸리지만 묵묵히 제 할 일을 한다.',
    quote: '...너, 뒤에', avatar: 'https://picsum.photos/seed/rp_asher/400/600',
    difficulty: 'Medium', initialInventory: ['분장용 피']
  },
  {
    id: 'johnny', name: '조니', age: '24', gender: '남', category: '어트랙션', role: '리듬 호러 하우스',
    keywords: ['막말', '시비충', '성격 나쁨'],
    description: '애셔에게 매일 시비를 건다. 성격은 나쁘지만 미워할 순 없다.',
    quote: '너 그러다 죽을걸? 내 손에 말야!', avatar: 'https://picsum.photos/seed/rp_johnny/400/600',
    difficulty: 'Hard', initialInventory: ['가짜 단검']
  },
  {
    id: 'skull', name: '스컬', age: '25', gender: '남', category: '어트랙션', role: '리듬 호러 하우스',
    keywords: ['다정한', '조용한', '보호자'],
    description: '호러 하우스의 든든한 보호자 같은 존재.',
    quote: '호러 하우스에 어서오세요.', avatar: 'https://picsum.photos/seed/rp_skull/400/600',
    difficulty: 'Easy', initialInventory: ['손전등']
  },
  // 어트랙션 - 리듬 목마
  {
    id: 'door', name: '(dore)', age: '25', gender: '남', category: '어트랙션', role: '리듬 목마',
    keywords: ['평범', '희생정신', '트라우마'],
    description: '온갖 사건에 휘말려 트라우마가 생겼다. 과거 라디오 애청자.',
    quote: '평범한 나도 도움이 된다면! 하하하…', avatar: 'https://picsum.photos/seed/rp_door/400/600',
    difficulty: 'Hard', initialInventory: ['낡은 라디오']
  },
  {
    id: 'yo', name: '요우', age: '21', gender: '불명', category: '어트랙션', role: '리듬 목마',
    keywords: ['4차원', '독설가', '되팔이'],
    description: '굿즈 되팔이를 재테크라고 주장한다.',
    quote: 'Yo.', avatar: 'https://picsum.photos/seed/rp_yo/400/600',
    difficulty: 'Medium', initialInventory: ['미개봉 포토카드']
  },
  // 어트랙션 - 관람차
  {
    id: 'lagoon', name: '라군', age: '25', gender: '남', category: '어트랙션', role: '리듬 관람차',
    keywords: ['행운아', '미남', '선량함'],
    description: '행운의 대명사. 193cm의 장신 미남.',
    quote: '안녕~ 오늘 하루도 행운이 가득하길 바라!', avatar: 'https://picsum.photos/seed/rp_lagoon/400/600',
    difficulty: 'Easy', initialInventory: ['행운의 동전']
  },
  {
    id: 'indy', name: '인디', age: '25', gender: '남', category: '어트랙션', role: '리듬 관람차',
    keywords: ['다혈질', '불운'],
    description: '불행의 대명사. 라군과 대비되는 성격.',
    quote: '씨발.', avatar: 'https://picsum.photos/seed/rp_indy/400/600',
    difficulty: 'Insane', initialInventory: ['부러진 열쇠']
  },
  // 보안부
  {
    id: 'prote', name: '프로트', age: '31', gender: '남', category: '보안부', role: '보안부장',
    keywords: ['꼰대', '손님껜 친절'],
    description: '과거 본부 소속. 직원들에겐 꼰대지만 손님에겐 천사.',
    quote: '손님 여러분의 안전을 책임지겠습니… 야, 가서 일해!', avatar: 'https://picsum.photos/seed/rp_prote/400/600',
    difficulty: 'Medium', initialInventory: ['보안부 완장', '확성기']
  },
  {
    id: 'teti', name: '테티', age: '20', gender: '여', category: '보안부', role: '보안부 직원',
    keywords: ['친절', '말을 아낌'],
    description: '타고난 체력이 매우 좋다. 유일하게 프로트를 기피하지 않는 직원.',
    quote: '안전한 놀이공원을 위해…', avatar: 'https://picsum.photos/seed/rp_teti/400/600',
    difficulty: 'Easy', initialInventory: ['아령', '손수건']
  },
  {
    id: 'radi', name: '라디', age: '30', gender: '남', category: '보안부', role: '스토커 (보안부 소속)',
    keywords: ['광적', '사이코패스', '집착'],
    description: '(dore)를 스토킹하는 것이 취미. 과거 라디오 방송 경력.',
    quote: '오직, (dore) 선배만', avatar: 'https://picsum.photos/seed/rp_radi/400/600',
    difficulty: 'Insane', initialInventory: ['(dore)의 머리카락', '망원경']
  },
  {
    id: 'kao', name: '카오', age: '불명', gender: '남', category: '보안부', role: '보안부 직원',
    keywords: ['과묵함', '베일에 감춰짐'],
    description: '전 칼리스토군. 본모습을 부상으로 드러낼 수 없다.',
    quote: '...', avatar: 'https://picsum.photos/seed/rp_kao/400/600',
    difficulty: 'Hard', initialInventory: ['낡은 훈장']
  },
  {
    id: 'glass', name: '글라스', age: '28', gender: '남', category: '보안부', role: '보안부 직원',
    keywords: ['유리멘탈', '거짓말쟁이'],
    description: '손님에겐 거짓말하지 않는 프로페셔널.',
    quote: '오늘 날씨가 좋네요~ 우중충하고.', avatar: 'https://picsum.photos/seed/rp_glass/400/600',
    difficulty: 'Medium', initialInventory: ['비상용 안경']
  },
  {
    id: 'maxim', name: '막심', age: '25', gender: '남', category: '보안부', role: '보안부 직원',
    keywords: ['활기찬', '이중인격'],
    description: '전직 DJ. 영어를 섞어쓰는 화법을 구사한다. 이중인격 소문이 있다.',
    quote: 'YO! 반갑습니다! MY NAME, 막심입니다!', avatar: 'https://picsum.photos/seed/rp_maxim/400/600',
    difficulty: 'Medium', initialInventory: ['DJ 헤드셋']
  },
  {
    id: 'nero', name: '네로', age: '23', gender: '남', category: '보안부', role: '보안부 직원',
    keywords: ['어리숙함', '게임중독'],
    description: '부잣집 도련님. 금전감각이 어긋나있다. 친구 사귀려고 알바 지원.',
    quote: '친하게 지내자!', avatar: 'https://picsum.photos/seed/rp_nero/400/600',
    difficulty: 'Easy', initialInventory: ['황금 신용카드']
  },
  {
    id: 'sera', name: '세라', age: '21', gender: '여', category: '보안부', role: '보안부 신입',
    keywords: ['외로운', '정의로운'],
    description: '하나뿐인 가족을 잃고 이곳으로 왔다. 정의감이 강하다.',
    quote: '무슨 일이야?', avatar: 'https://picsum.photos/seed/rp_sera/400/600',
    difficulty: 'Medium', initialInventory: ['가족 사진']
  },
  {
    id: 'anta', name: '앤타', age: '26', gender: '여', category: '보안부', role: '보안부 직원',
    keywords: ['상여자', '차분함', '겁 없음'],
    description: '디저트를 매우 좋아한다. 특히 커피젤리와 푸딩.',
    quote: '푸딩 파나?', avatar: 'https://picsum.photos/seed/rp_anta/400/600',
    difficulty: 'Easy', initialInventory: ['휴대용 푸딩']
  },
  {
    id: 'iron', name: '아이언', age: '40', gender: '남', category: '보안부', role: '보안부 직원',
    keywords: ['과묵한', '강경한'],
    description: '전직 경호원. 죽은 아들의 비밀을 밝히려 이곳에 들어왔다.',
    quote: '강철같은 마음으로 철통같이 지킨다.', avatar: 'https://picsum.photos/seed/rp_iron/400/600',
    difficulty: 'Hard', initialInventory: ['아들의 장난감']
  },
  // 본부
  {
    id: 'jack', name: '잭', age: '40', gender: '남', category: '본부', role: 'CEO',
    keywords: ['철두철미', '일하기 싫음'],
    description: '파라다이스 사의 CEO. 과자 에이스를 좋아한다.',
    quote: '리듬 파라다이스에 어서오세요.', avatar: 'https://picsum.photos/seed/rp_jack/400/600',
    difficulty: 'Easy', initialInventory: ['에이스 과자']
  },
  {
    id: 'seth', name: '세스', age: '40대 추정', gender: '남', category: '본부', role: '본부 직원',
    keywords: ['광적', '정화'],
    description: '정화에 광적으로 반응한다. 핀트가 나가 있다.',
    quote: '모두를 행복하게 하기 위해서 필연코 하는 것이 정화입니다.', avatar: 'https://picsum.photos/seed/rp_seth/400/600',
    difficulty: 'Insane', initialInventory: ['정화용 액체']
  },
  // 식당
  {
    id: 'tan', name: '탄', age: '30', gender: '남', category: '식당', role: '주방장',
    keywords: ['둔한', '선량한'],
    description: '식당 망해서 입사. 버팔로윙을 제일 좋아한다.',
    quote: '최고의 버팔로윙을 위하여!', avatar: 'https://picsum.photos/seed/rp_tan/400/600',
    difficulty: 'Medium', initialInventory: ['비밀 소스']
  }
];

export const INITIAL_RULES = [
  "1. 리듬 파라다이스에는 '노란 인형 탈'을 쓴 마스코트가 존재하지 않습니다. 만약 그가 말을 건다면 즉시 자신의 입을 막으십시오.",
  "2. 리듬 코스터가 1분 이상 정지해 있다면, 옆자리에 사람이 있는지 확인하십시오. 만약 아무도 없다면 당신은 이미 코스터 밖입니다.",
  "3. 밤 12시 이후, 리듬 목마에서 라디오 소리가 들린다면 즉시 귀를 막으십시오. (dore)가 아닌 다른 무언가가 방송 중일 확률이 높습니다.",
  "4. '정화'라는 단어를 언급하는 직원(특히 흰 가운)을 만나면 '이미 정화되었습니다'라고 3번 속삭이고 등을 돌리십시오.",
  "5. 세라(Sera)가 울고 있다면 다가가지 마십시오. 그녀는 당신의 가족이 아닙니다.",
  "6. 보안부장 프로트가 너무 친절하다면, 즉시 가장 가까운 쓰레기통에 숨으십시오."
];

// 로컬 시나리오 데이터 (AI 대신 사용)
export const LOCAL_ENCOUNTERS = [
  {
    description: "관람차 쪽에서 이상한 소리가 들립니다. 분명 모든 관람차가 멈춰있어야 할 시간인데, 하나만 거꾸로 돌고 있습니다. 그 안에선 익숙한 '에이스 과자' 냄새가 납니다.",
    options: [
      { text: "가까이 가서 확인한다", consequence: "과자 냄새가 핏비린내로 바뀝니다.", sanityChange: -20 },
      { text: "못 본 척하고 규칙서를 다시 읽는다", consequence: "규칙 7번이 새로 나타납니다.", sanityChange: 5, newRule: "7. 관람차에서 음식 냄새가 나면 절대 돌아보지 마십시오." }
    ],
    isDangerous: false
  },
  {
    description: "호러 하우스 앞을 지나가는데, 애셔가 당신의 어깨를 툭 칩니다. 하지만 그의 손은 너무나도 차갑고, 손가락이 7개인 것 같습니다. 그는 무언가 말하려 합니다.",
    options: [
      { text: "그의 말을 끝까지 듣는다", consequence: "그는 '뒤를 조심해'라고 말하곤 사라집니다.", sanityChange: -10 },
      { text: "조니의 이름을 부르며 도움을 요청한다", consequence: "조니가 나타나 애셔를 쫓아버립니다.", sanityChange: 10 }
    ],
    isDangerous: true
  },
  {
    description: "식당 칸 근처에서 탄(Tan)이 버팔로윙을 권합니다. 그런데 소스가 너무나도 붉고 진득합니다. 그가 웃으며 말합니다. '오늘 재료는 신선해요.'",
    options: [
      { text: "윙을 받아 먹는다", consequence: "맛있지만, 곧 속이 뒤집힙니다.", sanityChange: -15, itemGain: "붉은 뼈다귀" },
      { text: "배가 부르다며 정중히 거절한다", consequence: "탄의 표정이 순식간에 굳어집니다.", sanityChange: -5 }
    ],
    isDangerous: false
  },
  {
    description: "본부 근처 복도에서 세스(Seth)가 정화용 스프레이를 들고 서 있습니다. 그는 당신을 뚫어지게 쳐다보더니 '당신, 오염되었군요.'라고 낮게 읊조립니다.",
    options: [
      { text: "이미 정화되었습니다라고 3번 외친다", consequence: "세스가 고개를 끄덕이며 길을 비켜줍니다.", sanityChange: 15 },
      { text: "그의 말을 무시하고 뛰어간다", consequence: "등 뒤로 차가운 액체가 뿌려지는 느낌이 듭니다.", sanityChange: -30 }
    ],
    isDangerous: true
  }
];
