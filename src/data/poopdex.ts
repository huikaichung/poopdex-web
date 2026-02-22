/**
 * PoopDex Collection Data
 * 便便圖鑑資料 - 每種便便都有獨特的角色設定
 */

export interface PoopCharacter {
  id: string;
  bristolType: number;          // 1-7 Bristol Scale, 0 for special
  name: string;                 // 中文名
  nameEn: string;               // 英文名
  emoji: string;                // 代表 emoji
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary' | 'mythic';
  personality: string;          // 性格描述
  catchphrase: string;          // 招牌台詞
  description: string;          // 詳細描述
  healthTip: string;            // 健康小知識
  unlockCondition: string;      // 解鎖條件
  unlockHint: string;           // 解鎖提示（給玩家看的）
  color: string;                // 主題色
  bgGradient: string;           // 背景漸層
}

// ===== Bristol Scale 基礎款 (Type 1-7) =====

export const BRISTOL_CHARACTERS: PoopCharacter[] = [
  {
    id: 'nut-squad',
    bristolType: 1,
    name: '堅果軍團',
    nameEn: 'Nut Squad',
    emoji: '🥜',
    rarity: 'uncommon',
    personality: '害羞、團結、有點硬脾氣',
    catchphrase: '我們...我們只是需要多一點水分！',
    description: '一群害羞的小傢伙，總是抱團出現。他們其實很想順利畢業，但就是卡住了。',
    healthTip: '多喝水、多吃纖維，讓他們順利出場！每天至少 8 杯水。',
    unlockCondition: 'bristol_type_1',
    unlockHint: '當你便秘的時候...',
    color: '#8B4513',
    bgGradient: 'linear-gradient(135deg, #D2691E 0%, #8B4513 100%)',
  },
  {
    id: 'rocky-sausage',
    bristolType: 2,
    name: '岩石香腸',
    nameEn: 'Rocky Sausage',
    emoji: '🪨',
    rarity: 'common',
    personality: '頑固、努力、快要成功了',
    catchphrase: '再給我一點時間，我快好了！',
    description: '外表粗糙但內心柔軟，正在努力變得更順暢。離完美只差一步！',
    healthTip: '快到了！增加蔬菜攝取，明天會更好。',
    unlockCondition: 'bristol_type_2',
    unlockHint: '有點硬，但成型了',
    color: '#696969',
    bgGradient: 'linear-gradient(135deg, #A9A9A9 0%, #696969 100%)',
  },
  {
    id: 'crack-dog',
    bristolType: 3,
    name: '裂紋熱狗',
    nameEn: 'Crack Dog',
    emoji: '🌭',
    rarity: 'common',
    personality: '自信、有個性、不完美但很 OK',
    catchphrase: '裂紋是我的特色，不是缺點！',
    description: '表面有些裂紋，但這只是性格的展現。健康狀態其實不錯！',
    healthTip: '正常範圍！表面裂紋代表水分可以再多一點。',
    unlockCondition: 'bristol_type_3',
    unlockHint: '成型良好，表面有紋路',
    color: '#CD853F',
    bgGradient: 'linear-gradient(135deg, #DEB887 0%, #CD853F 100%)',
  },
  {
    id: 'golden-banana',
    bristolType: 4,
    name: '黃金香蕉',
    nameEn: 'Golden Banana',
    emoji: '🍌',
    rarity: 'rare',
    personality: '自信、優雅、完美主義者',
    catchphrase: '我就是傳說中的完美便便！✨',
    description: '便便界的黃金標準！光滑、柔軟、形狀完美。遇見他代表你的腸道非常健康！',
    healthTip: '恭喜！這是理想狀態，代表飲食均衡、水分充足。繼續保持！',
    unlockCondition: 'bristol_type_4',
    unlockHint: '光滑完美的傳說',
    color: '#FFD700',
    bgGradient: 'linear-gradient(135deg, #FFE135 0%, #FFD700 100%)',
  },
  {
    id: 'soft-bubbles',
    bristolType: 5,
    name: '軟泡泡',
    nameEn: 'Soft Bubbles',
    emoji: '🫧',
    rarity: 'common',
    personality: '溫柔、隨和、有點太軟',
    catchphrase: '我只是比較溫柔啦～',
    description: '柔軟的小團塊，邊緣清晰。他們很隨和，但可能需要多一點纖維來定型。',
    healthTip: '稍微軟了點，建議增加全穀類和蔬菜攝取。',
    unlockCondition: 'bristol_type_5',
    unlockHint: '軟軟的小塊狀',
    color: '#87CEEB',
    bgGradient: 'linear-gradient(135deg, #B0E0E6 0%, #87CEEB 100%)',
  },
  {
    id: 'mud-monster',
    bristolType: 6,
    name: '泥漿怪',
    nameEn: 'Mud Monster',
    emoji: '💩',
    rarity: 'uncommon',
    personality: '混亂、急躁、需要休息',
    catchphrase: '我來得有點急...抱歉！',
    description: '蓬鬆的碎片，邊緣不規則。他來得太急了，可能是腸道在抗議什麼。',
    healthTip: '輕微腹瀉徵兆，注意是否吃了刺激性食物或壓力過大。',
    unlockCondition: 'bristol_type_6',
    unlockHint: '來得太急的傢伙',
    color: '#8B7355',
    bgGradient: 'linear-gradient(135deg, #A0826D 0%, #8B7355 100%)',
  },
  {
    id: 'water-tornado',
    bristolType: 7,
    name: '水龍捲',
    nameEn: 'Water Tornado',
    emoji: '💧',
    rarity: 'uncommon',
    personality: '狂野、失控、需要幫助',
    catchphrase: '嘩啦啦啦～我停不下來！',
    description: '完全液態，無法成形。這是腸道在緊急求救，需要好好休息和補水。',
    healthTip: '腹瀉狀態！請多補充水分和電解質，必要時就醫。',
    unlockCondition: 'bristol_type_7',
    unlockHint: '緊急狀態...',
    color: '#4169E1',
    bgGradient: 'linear-gradient(135deg, #6495ED 0%, #4169E1 100%)',
  },
];

// ===== 特殊發現款 (食物殘留) =====

export const SPECIAL_CHARACTERS: PoopCharacter[] = [
  {
    id: 'enoki-survivor',
    bristolType: 0,
    name: '金針菇勇者',
    nameEn: 'Enoki Survivor',
    emoji: '🍄',
    rarity: 'rare',
    personality: '堅韌、不屈不撓、永遠回來',
    catchphrase: 'See you tomorrow! 👋',
    description: '傳說中的不死戰士！無論經歷什麼，他總是完整歸來。消化系統的終極挑戰者。',
    healthTip: '金針菇富含纖維，消化系統無法完全分解是正常的！',
    unlockCondition: 'detected_enoki',
    unlockHint: '吃金針菇後仔細觀察...',
    color: '#F5DEB3',
    bgGradient: 'linear-gradient(135deg, #FAEBD7 0%, #F5DEB3 100%)',
  },
  {
    id: 'corn-champion',
    bristolType: 0,
    name: '玉米冠軍',
    nameEn: 'Corn Champion',
    emoji: '🌽',
    rarity: 'rare',
    personality: '樂觀、黃燦燦、不認輸',
    catchphrase: '任務失敗，但我會再來的！🌽',
    description: '金黃色的小戰士，經過腸道的旅程後依然保持完整。他的外殼是消化系統的剋星！',
    healthTip: '玉米的外殼是纖維素，人體無法消化。看到它是正常的！',
    unlockCondition: 'detected_corn',
    unlockHint: '玉米大餐之後...',
    color: '#FFD700',
    bgGradient: 'linear-gradient(135deg, #FFF8DC 0%, #FFD700 100%)',
  },
  {
    id: 'chili-phoenix',
    bristolType: 0,
    name: '辣椒鳳凰',
    nameEn: 'Chili Phoenix',
    emoji: '🌶️',
    rarity: 'legendary',
    personality: '火辣、刺激、讓人難忘',
    catchphrase: 'BURN BABY BURN! 🔥',
    description: '從火焰中重生的傳說！辣進去，辣出來，完美守恆。遇見他的人都會留下深刻印象。',
    healthTip: '辣椒素不會被消化，所以會有「二次燃燒」的感覺。多喝水！',
    unlockCondition: 'detected_chili',
    unlockHint: '麻辣鍋的隔天...',
    color: '#FF4500',
    bgGradient: 'linear-gradient(135deg, #FF6347 0%, #FF4500 100%)',
  },
  {
    id: 'sesame-ninja',
    bristolType: 0,
    name: '芝麻忍者',
    nameEn: 'Sesame Ninja',
    emoji: '⚫',
    rarity: 'uncommon',
    personality: '低調、神秘、數量龐大',
    catchphrase: '你看不見我...但我無處不在',
    description: '神秘的黑色小點，總是悄悄出現。他們數量眾多，但很容易被忽略。',
    healthTip: '芝麻籽的外殼很難消化，看到小黑點是正常的！',
    unlockCondition: 'detected_sesame',
    unlockHint: '芝麻醬或芝麻餅後觀察',
    color: '#2F4F4F',
    bgGradient: 'linear-gradient(135deg, #696969 0%, #2F4F4F 100%)',
  },
  {
    id: 'tomato-ghost',
    bristolType: 0,
    name: '番茄幽靈',
    nameEn: 'Tomato Ghost',
    emoji: '🍅',
    rarity: 'uncommon',
    personality: '透明、飄忽、讓人驚訝',
    catchphrase: '嘿！是我，番茄皮！',
    description: '半透明的紅色薄片，像幽靈一樣飄浮。其實只是番茄皮在打招呼。',
    healthTip: '番茄皮富含茄紅素，但消化系統不太能分解它。',
    unlockCondition: 'detected_tomato',
    unlockHint: '大量番茄後可能出現',
    color: '#FF6347',
    bgGradient: 'linear-gradient(135deg, #FFA07A 0%, #FF6347 100%)',
  },
];

// ===== 特殊成就款 =====

export const ACHIEVEMENT_CHARACTERS: PoopCharacter[] = [
  {
    id: 'rainbow-master',
    bristolType: 0,
    name: '彩虹大師',
    nameEn: 'Rainbow Master',
    emoji: '🌈',
    rarity: 'legendary',
    personality: '多彩、變化多端、收藏家',
    catchphrase: '集齊七種，召喚神龍！',
    description: '集齊所有 Bristol Scale 類型的傳說收藏家。你的腸道經歷了所有可能！',
    healthTip: '你體驗過所有類型，現在知道健康的重要性了！',
    unlockCondition: 'collect_all_bristol',
    unlockHint: '集齊 Bristol 1-7 型',
    color: '#9400D3',
    bgGradient: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 25%, #4ECDC4 50%, #45B7D1 75%, #9400D3 100%)',
  },
  {
    id: 'morning-glory',
    bristolType: 0,
    name: '晨光榮耀',
    nameEn: 'Morning Glory',
    emoji: '🌅',
    rarity: 'rare',
    personality: '早起、規律、健康達人',
    catchphrase: '早起的便便蟲有蟲吃！☀️',
    description: '連續 7 天在早上 6-9 點完成任務的健康達人。規律作息的典範！',
    healthTip: '早晨排便是最健康的習慣，你的生理時鐘很棒！',
    unlockCondition: 'morning_streak_7',
    unlockHint: '連續 7 天早起如廁',
    color: '#FF8C00',
    bgGradient: 'linear-gradient(135deg, #FFD93D 0%, #FF8C00 100%)',
  },
  {
    id: 'streak-legend',
    bristolType: 0,
    name: '連勝傳說',
    nameEn: 'Streak Legend',
    emoji: '🔥',
    rarity: 'legendary',
    personality: '堅持、毅力、不間斷',
    catchphrase: '30 天不間斷！這就是毅力！',
    description: '連續 30 天記錄的傳奇人物。你的毅力和對健康的關注值得讚賞！',
    healthTip: '持續追蹤是健康管理的關鍵，繼續保持！',
    unlockCondition: 'streak_30',
    unlockHint: '連續記錄 30 天',
    color: '#FF4500',
    bgGradient: 'linear-gradient(135deg, #FF6B35 0%, #FF4500 100%)',
  },
  {
    id: 'perfect-week',
    bristolType: 0,
    name: '完美週記',
    nameEn: 'Perfect Week',
    emoji: '⭐',
    rarity: 'mythic',
    personality: '完美、黃金、傳說中的存在',
    catchphrase: '連續七天黃金香蕉，我就是傳說！',
    description: '連續 7 天都是 Type 4（完美香蕉）的神話級存在。你的腸道是教科書等級！',
    healthTip: '你的飲食和生活習慣堪稱完美，請分享你的秘訣！',
    unlockCondition: 'perfect_week',
    unlockHint: '連續 7 天完美便便',
    color: '#FFD700',
    bgGradient: 'linear-gradient(135deg, #FFE135 0%, #FFD700 50%, #FFA500 100%)',
  },
  {
    id: 'night-owl',
    bristolType: 0,
    name: '夜貓子',
    nameEn: 'Night Owl',
    emoji: '🦉',
    rarity: 'uncommon',
    personality: '神秘、夜行、作息特別',
    catchphrase: '深夜的廁所是我的舞台...',
    description: '經常在午夜 12 點後造訪廁所的夜行者。你的作息比較特別！',
    healthTip: '深夜排便可能代表作息不規律，試著調整一下？',
    unlockCondition: 'night_visits_10',
    unlockHint: '10 次午夜如廁',
    color: '#191970',
    bgGradient: 'linear-gradient(135deg, #2C3E50 0%, #191970 100%)',
  },
];

// ===== 節日限定款 =====

export const SEASONAL_CHARACTERS: PoopCharacter[] = [
  {
    id: 'lunar-poop',
    bristolType: 0,
    name: '年獸便便',
    nameEn: 'Lunar Poop',
    emoji: '🧧',
    rarity: 'legendary',
    personality: '喜慶、紅包、過年限定',
    catchphrase: '恭喜發財，便便順利！',
    description: '農曆新年限定！紅通通的喜慶便便，代表新的一年腸道健康、萬事如意！',
    healthTip: '過年大魚大肉後，記得多吃蔬果保持腸道健康！',
    unlockCondition: 'lunar_new_year',
    unlockHint: '農曆新年期間記錄',
    color: '#FF0000',
    bgGradient: 'linear-gradient(135deg, #FF4444 0%, #CC0000 100%)',
  },
  {
    id: 'ghost-poop',
    bristolType: 0,
    name: '幽靈便便',
    nameEn: 'Ghost Poop',
    emoji: '👻',
    rarity: 'legendary',
    personality: '神秘、透明、萬聖節限定',
    catchphrase: 'Boo! 看不見我～',
    description: '萬聖節限定！據說這種便便會在你回頭時消失不見...只留下神秘的氣味。',
    healthTip: '「幽靈便便」指的是擦屁股時沒有痕跡的便便，這其實很健康！',
    unlockCondition: 'halloween',
    unlockHint: '萬聖節期間記錄',
    color: '#9370DB',
    bgGradient: 'linear-gradient(135deg, #DDA0DD 0%, #9370DB 100%)',
  },
  {
    id: 'santa-poop',
    bristolType: 0,
    name: '聖誕便便',
    nameEn: 'Santa Poop',
    emoji: '🎅',
    rarity: 'legendary',
    personality: '慷慨、豐盛、聖誕限定',
    catchphrase: 'Ho Ho Ho! 聖誕快樂！',
    description: '聖誕節限定！經過大餐洗禮後的豐盛便便，代表你好好享受了節日！',
    healthTip: '聖誕大餐後記得多喝水、多運動，幫助消化！',
    unlockCondition: 'christmas',
    unlockHint: '聖誕節期間記錄',
    color: '#228B22',
    bgGradient: 'linear-gradient(135deg, #FF0000 0%, #228B22 100%)',
  },
];

// ===== 所有角色彙總 =====

export const ALL_CHARACTERS: PoopCharacter[] = [
  ...BRISTOL_CHARACTERS,
  ...SPECIAL_CHARACTERS,
  ...ACHIEVEMENT_CHARACTERS,
  ...SEASONAL_CHARACTERS,
];

// ===== 稀有度設定 =====

export const RARITY_CONFIG = {
  common: {
    name: '普通',
    nameEn: 'Common',
    color: '#A0A0A0',
    bgColor: '#404040',
  },
  uncommon: {
    name: '稀有',
    nameEn: 'Uncommon',
    color: '#4CAF50',
    bgColor: '#2E7D32',
  },
  rare: {
    name: '珍貴',
    nameEn: 'Rare',
    color: '#2196F3',
    bgColor: '#1565C0',
  },
  legendary: {
    name: '傳說',
    nameEn: 'Legendary',
    color: '#FF9800',
    bgColor: '#E65100',
  },
  mythic: {
    name: '神話',
    nameEn: 'Mythic',
    color: '#9C27B0',
    bgColor: '#6A1B9A',
  },
};

// ===== 工具函數 =====

export function getCharacterById(id: string): PoopCharacter | undefined {
  return ALL_CHARACTERS.find(c => c.id === id);
}

export function getCharactersByRarity(rarity: PoopCharacter['rarity']): PoopCharacter[] {
  return ALL_CHARACTERS.filter(c => c.rarity === rarity);
}

export function getBristolCharacter(type: number): PoopCharacter | undefined {
  return BRISTOL_CHARACTERS.find(c => c.bristolType === type);
}

export function getTotalCharacterCount(): number {
  return ALL_CHARACTERS.length;
}
