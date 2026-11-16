// Pearson Edexcel GCSE (9-1) Chinese (1CN0), Issue 5.
// Traditional Chinese vocabulary transcribed from PDF viewer pages 88-111.
// Source page is retained for audit and correction.

export type VocabularySection = "high-frequency" | "topic-specific";
export type VocabularyTier = "core" | "foundation" | "higher";

export type EdexcelVocabularyCard = {
  id: string;
  section: VocabularySection;
  category: string;
  tier: VocabularyTier;
  english: string;
  traditional: string;
  sourcePage: number;
};

export type EdexcelVocabularyCategory = {
  id: string;
  section: VocabularySection;
  label: string;
  labelZh: string;
};

export const EDEXCEL_VOCABULARY_CATEGORIES: EdexcelVocabularyCategory[] = [
  {
    "id": "common-verbs",
    "section": "high-frequency",
    "label": "Common verbs",
    "labelZh": "常用動詞"
  },
  {
    "id": "common-adjectives",
    "section": "high-frequency",
    "label": "Common adjectives",
    "labelZh": "常用形容詞"
  },
  {
    "id": "common-adverbs",
    "section": "high-frequency",
    "label": "Common adverbs",
    "labelZh": "常用副詞"
  },
  {
    "id": "colours",
    "section": "high-frequency",
    "label": "Colours",
    "labelZh": "顏色"
  },
  {
    "id": "numbers",
    "section": "high-frequency",
    "label": "Numbers",
    "labelZh": "數字"
  },
  {
    "id": "quantities-measures",
    "section": "high-frequency",
    "label": "Quantities and measures",
    "labelZh": "數量及量詞"
  },
  {
    "id": "time-expressions",
    "section": "high-frequency",
    "label": "Time expressions",
    "labelZh": "時間用語"
  },
  {
    "id": "days-of-week",
    "section": "high-frequency",
    "label": "Days of the week",
    "labelZh": "星期"
  },
  {
    "id": "months-seasons",
    "section": "high-frequency",
    "label": "Months and seasons of the year",
    "labelZh": "月份及季節"
  },
  {
    "id": "question-words",
    "section": "high-frequency",
    "label": "Question words",
    "labelZh": "疑問詞"
  },
  {
    "id": "other-high-frequency",
    "section": "high-frequency",
    "label": "Other high-frequency words",
    "labelZh": "其他高頻詞語"
  },
  {
    "id": "countries-languages",
    "section": "high-frequency",
    "label": "Countries, continents, nationalities and languages",
    "labelZh": "國家、洲、國籍及語言"
  },
  {
    "id": "social-conventions",
    "section": "high-frequency",
    "label": "Social conventions",
    "labelZh": "社交禮儀"
  },
  {
    "id": "other-useful-expressions",
    "section": "high-frequency",
    "label": "Other useful expressions",
    "labelZh": "其他實用句語"
  },
  {
    "id": "prepositions",
    "section": "high-frequency",
    "label": "Prepositions",
    "labelZh": "介詞"
  },
  {
    "id": "dialogue-messages",
    "section": "high-frequency",
    "label": "Language used in dialogues and messages",
    "labelZh": "對話及訊息用語"
  },
  {
    "id": "identity-daily-life-food",
    "section": "topic-specific",
    "label": "Identity and culture - daily life, food and drink, including eating out",
    "labelZh": "身份與文化：日常生活、飲食及外出用餐"
  },
  {
    "id": "identity-dress-style",
    "section": "topic-specific",
    "label": "Identity and culture - dress and style",
    "labelZh": "身份與文化：衣著及風格"
  },
  {
    "id": "identity-relations-characteristics",
    "section": "topic-specific",
    "label": "Identity and culture - relations, relationships and personal characteristics",
    "labelZh": "身份與文化：關係及個人特徵"
  },
  {
    "id": "identity-cultural-life",
    "section": "topic-specific",
    "label": "Identity and culture - cultural life",
    "labelZh": "身份與文化：文化生活"
  },
  {
    "id": "identity-social-media",
    "section": "topic-specific",
    "label": "Identity and culture - using social media",
    "labelZh": "身份與文化：社交媒體"
  },
  {
    "id": "local-area-holiday-travel",
    "section": "topic-specific",
    "label": "Local area, holiday and travel",
    "labelZh": "本地、假期及旅遊"
  },
  {
    "id": "weather",
    "section": "topic-specific",
    "label": "Phrases associated with weather",
    "labelZh": "天氣相關用語"
  },
  {
    "id": "asking-directions",
    "section": "topic-specific",
    "label": "Asking for directions",
    "labelZh": "問路"
  },
  {
    "id": "dealing-with-problems",
    "section": "topic-specific",
    "label": "Dealing with problems",
    "labelZh": "處理問題"
  },
  {
    "id": "school",
    "section": "topic-specific",
    "label": "School",
    "labelZh": "學校"
  },
  {
    "id": "future-study-work",
    "section": "topic-specific",
    "label": "Future aspirations, study and work",
    "labelZh": "未來志向、升學及工作"
  },
  {
    "id": "international-global",
    "section": "topic-specific",
    "label": "International and global dimension - bringing the world together and environmental issues",
    "labelZh": "國際及全球議題"
  }
];

export const EDEXCEL_VOCABULARY_CARDS: EdexcelVocabularyCard[] = [
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "should",
    "traditional": "應該",
    "sourcePage": 88,
    "id": "edexcel-0001"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to arrive,to get to",
    "traditional": "到",
    "sourcePage": 88,
    "id": "edexcel-0002"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to ask",
    "traditional": "問",
    "sourcePage": 88,
    "id": "edexcel-0003"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to be",
    "traditional": "是",
    "sourcePage": 88,
    "id": "edexcel-0004"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to be able to, can",
    "traditional": "能",
    "sourcePage": 88,
    "id": "edexcel-0005"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to be interested in",
    "traditional": "對……有興趣",
    "sourcePage": 88,
    "id": "edexcel-0006"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to be quiet",
    "traditional": "安靜",
    "sourcePage": 88,
    "id": "edexcel-0007"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to begin",
    "traditional": "開始",
    "sourcePage": 88,
    "id": "edexcel-0008"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to buy",
    "traditional": "買",
    "sourcePage": 88,
    "id": "edexcel-0009"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to call,to be named",
    "traditional": "叫",
    "sourcePage": 88,
    "id": "edexcel-0010"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to change",
    "traditional": "換（錢/車/衣服etc.）",
    "sourcePage": 88,
    "id": "edexcel-0011"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to close, to switch off",
    "traditional": "關（燈/電視/門etc.）",
    "sourcePage": 88,
    "id": "edexcel-0012"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to come",
    "traditional": "來",
    "sourcePage": 88,
    "id": "edexcel-0013"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to convince",
    "traditional": "說服",
    "sourcePage": 88,
    "id": "edexcel-0014"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to do, to be/become (occupation)",
    "traditional": "做",
    "sourcePage": 88,
    "id": "edexcel-0015"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to draw/paint (picture)",
    "traditional": "畫",
    "sourcePage": 88,
    "id": "edexcel-0016"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to drink",
    "traditional": "喝",
    "sourcePage": 88,
    "id": "edexcel-0017"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to eat",
    "traditional": "吃",
    "sourcePage": 88,
    "id": "edexcel-0018"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to enter",
    "traditional": "進",
    "sourcePage": 88,
    "id": "edexcel-0019"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to find, to look for",
    "traditional": "找",
    "sourcePage": 88,
    "id": "edexcel-0020"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to forget",
    "traditional": "忘",
    "sourcePage": 88,
    "id": "edexcel-0021"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to get angry",
    "traditional": "生氣",
    "sourcePage": 88,
    "id": "edexcel-0022"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to give",
    "traditional": "給",
    "sourcePage": 88,
    "id": "edexcel-0023"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to give (present), to deliver, to say goodbye to someone",
    "traditional": "送",
    "sourcePage": 88,
    "id": "edexcel-0024"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to go",
    "traditional": "去",
    "sourcePage": 88,
    "id": "edexcel-0025"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to go out",
    "traditional": "出",
    "sourcePage": 88,
    "id": "edexcel-0026"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to go to bed, to sleep",
    "traditional": "睡覺",
    "sourcePage": 88,
    "id": "edexcel-0027"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to have",
    "traditional": "有",
    "sourcePage": 88,
    "id": "edexcel-0028"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to help",
    "traditional": "幫助",
    "sourcePage": 88,
    "id": "edexcel-0029"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to hold, to conduct, to run",
    "traditional": "舉辦",
    "sourcePage": 88,
    "id": "edexcel-0030"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to hope",
    "traditional": "希望",
    "sourcePage": 88,
    "id": "edexcel-0031"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to increase, to add",
    "traditional": "增加",
    "sourcePage": 88,
    "id": "edexcel-0032"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to invite, to ask, please",
    "traditional": "請",
    "sourcePage": 88,
    "id": "edexcel-0033"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to jump",
    "traditional": "跳",
    "sourcePage": 88,
    "id": "edexcel-0034"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to justify",
    "traditional": "解釋",
    "sourcePage": 88,
    "id": "edexcel-0035"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to laugh, smile",
    "traditional": "笑",
    "sourcePage": 89,
    "id": "edexcel-0036"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to learn, to study",
    "traditional": "學習",
    "sourcePage": 89,
    "id": "edexcel-0037"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to let, to allow, to make",
    "traditional": "讓",
    "sourcePage": 89,
    "id": "edexcel-0038"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to like",
    "traditional": "喜歡",
    "sourcePage": 89,
    "id": "edexcel-0039"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to listen/hear",
    "traditional": "聽",
    "sourcePage": 89,
    "id": "edexcel-0040"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to live",
    "traditional": "住",
    "sourcePage": 89,
    "id": "edexcel-0041"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to love",
    "traditional": "愛",
    "sourcePage": 89,
    "id": "edexcel-0042"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to meet",
    "traditional": "見/見面",
    "sourcePage": 89,
    "id": "edexcel-0043"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to play",
    "traditional": "玩",
    "sourcePage": 89,
    "id": "edexcel-0044"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to play (ball game), to make (phone call), to beat",
    "traditional": "打",
    "sourcePage": 89,
    "id": "edexcel-0045"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to play (football), to kick",
    "traditional": "踢",
    "sourcePage": 89,
    "id": "edexcel-0046"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to prepare",
    "traditional": "準備",
    "sourcePage": 89,
    "id": "edexcel-0047"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to put, to set free",
    "traditional": "放",
    "sourcePage": 89,
    "id": "edexcel-0048"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to remember, to write down",
    "traditional": "記",
    "sourcePage": 89,
    "id": "edexcel-0049"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to return",
    "traditional": "回",
    "sourcePage": 89,
    "id": "edexcel-0050"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to ride (a bicycle/horse)",
    "traditional": "騎",
    "sourcePage": 89,
    "id": "edexcel-0051"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to say, to speak, to talk",
    "traditional": "說",
    "sourcePage": 89,
    "id": "edexcel-0052"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to see, to read, to watch, to look at",
    "traditional": "看",
    "sourcePage": 89,
    "id": "edexcel-0053"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to seem",
    "traditional": "好像",
    "sourcePage": 89,
    "id": "edexcel-0054"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to sell",
    "traditional": "賣",
    "sourcePage": 89,
    "id": "edexcel-0055"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to send (a letter)",
    "traditional": "寄（信）",
    "sourcePage": 89,
    "id": "edexcel-0056"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "（an email） to send",
    "traditional": "發（電子郵件）",
    "sourcePage": 89,
    "id": "edexcel-0057"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to sing",
    "traditional": "唱",
    "sourcePage": 89,
    "id": "edexcel-0058"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to sit",
    "traditional": "坐",
    "sourcePage": 89,
    "id": "edexcel-0059"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to spend (time/money); flower",
    "traditional": "花",
    "sourcePage": 89,
    "id": "edexcel-0060"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to stop",
    "traditional": "停",
    "sourcePage": 89,
    "id": "edexcel-0061"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to switch on, to turn on, to open",
    "traditional": "開（燈/電視/門etc.）",
    "sourcePage": 89,
    "id": "edexcel-0062"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to take part",
    "traditional": "參加",
    "sourcePage": 89,
    "id": "edexcel-0063"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to teach",
    "traditional": "教",
    "sourcePage": 89,
    "id": "edexcel-0064"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to tell",
    "traditional": "告訴",
    "sourcePage": 89,
    "id": "edexcel-0065"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to think, to feel",
    "traditional": "覺得",
    "sourcePage": 89,
    "id": "edexcel-0066"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to try",
    "traditional": "試",
    "sourcePage": 89,
    "id": "edexcel-0067"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to understand",
    "traditional": "懂",
    "sourcePage": 89,
    "id": "edexcel-0068"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to use",
    "traditional": "用",
    "sourcePage": 89,
    "id": "edexcel-0069"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to wait for",
    "traditional": "等",
    "sourcePage": 89,
    "id": "edexcel-0070"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to want",
    "traditional": "想",
    "sourcePage": 89,
    "id": "edexcel-0071"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to want, be going to",
    "traditional": "要",
    "sourcePage": 89,
    "id": "edexcel-0072"
  },
  {
    "section": "high-frequency",
    "category": "common-verbs",
    "tier": "core",
    "english": "to wash",
    "traditional": "洗",
    "sourcePage": 89,
    "id": "edexcel-0073"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "advanced",
    "traditional": "先進",
    "sourcePage": 90,
    "id": "edexcel-0074"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "bad",
    "traditional": "壞",
    "sourcePage": 90,
    "id": "edexcel-0075"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "beautiful",
    "traditional": "漂亮",
    "sourcePage": 90,
    "id": "edexcel-0076"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "big",
    "traditional": "大",
    "sourcePage": 90,
    "id": "edexcel-0077"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "bored, boring",
    "traditional": "無聊/沒意思",
    "sourcePage": 90,
    "id": "edexcel-0078"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "busy",
    "traditional": "忙",
    "sourcePage": 90,
    "id": "edexcel-0079"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "clean",
    "traditional": "乾淨",
    "sourcePage": 90,
    "id": "edexcel-0080"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "cold",
    "traditional": "冷",
    "sourcePage": 90,
    "id": "edexcel-0081"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "comfortable",
    "traditional": "舒服",
    "sourcePage": 90,
    "id": "edexcel-0082"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "correct, right",
    "traditional": "對",
    "sourcePage": 90,
    "id": "edexcel-0083"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "dirty",
    "traditional": "髒",
    "sourcePage": 90,
    "id": "edexcel-0084"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "easy",
    "traditional": "容易",
    "sourcePage": 90,
    "id": "edexcel-0085"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "fast, quick",
    "traditional": "快",
    "sourcePage": 90,
    "id": "edexcel-0086"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "fat",
    "traditional": "胖，肥",
    "sourcePage": 90,
    "id": "edexcel-0087"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "full up, eaten to one’s satisfaction",
    "traditional": "飽",
    "sourcePage": 90,
    "id": "edexcel-0088"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "fun, funny, interesting",
    "traditional": "有趣",
    "sourcePage": 90,
    "id": "edexcel-0089"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "good",
    "traditional": "好",
    "sourcePage": 90,
    "id": "edexcel-0090"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "happy",
    "traditional": "快樂",
    "sourcePage": 90,
    "id": "edexcel-0091"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "hard, difficult",
    "traditional": "難",
    "sourcePage": 90,
    "id": "edexcel-0092"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "hardworking",
    "traditional": "努力",
    "sourcePage": 90,
    "id": "edexcel-0093"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "harmful",
    "traditional": "有害",
    "sourcePage": 90,
    "id": "edexcel-0094"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "healthy, health",
    "traditional": "健康",
    "sourcePage": 90,
    "id": "edexcel-0095"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "high, tall",
    "traditional": "高",
    "sourcePage": 90,
    "id": "edexcel-0096"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "hot",
    "traditional": "熱",
    "sourcePage": 90,
    "id": "edexcel-0097"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "hungry",
    "traditional": "餓",
    "sourcePage": 90,
    "id": "edexcel-0098"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "interesting",
    "traditional": "有意思",
    "sourcePage": 90,
    "id": "edexcel-0099"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "interesting, amusing, cute",
    "traditional": "好玩",
    "sourcePage": 90,
    "id": "edexcel-0100"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "long",
    "traditional": "長",
    "sourcePage": 90,
    "id": "edexcel-0101"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "lovely, loveable",
    "traditional": "可愛",
    "sourcePage": 90,
    "id": "edexcel-0102"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "most",
    "traditional": "最",
    "sourcePage": 90,
    "id": "edexcel-0103"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "near",
    "traditional": "近",
    "sourcePage": 90,
    "id": "edexcel-0104"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "new",
    "traditional": "新",
    "sourcePage": 90,
    "id": "edexcel-0105"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "old",
    "traditional": "老/舊",
    "sourcePage": 90,
    "id": "edexcel-0106"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "pleased, happy",
    "traditional": "高興/開心",
    "sourcePage": 90,
    "id": "edexcel-0107"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "rich",
    "traditional": "有錢",
    "sourcePage": 90,
    "id": "edexcel-0108"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "same",
    "traditional": "一樣",
    "sourcePage": 90,
    "id": "edexcel-0109"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "short",
    "traditional": "短",
    "sourcePage": 90,
    "id": "edexcel-0110"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "slow",
    "traditional": "慢",
    "sourcePage": 90,
    "id": "edexcel-0111"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "thirsty",
    "traditional": "渴",
    "sourcePage": 91,
    "id": "edexcel-0112"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "tired",
    "traditional": "累",
    "sourcePage": 91,
    "id": "edexcel-0113"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "useful",
    "traditional": "有用",
    "sourcePage": 91,
    "id": "edexcel-0114"
  },
  {
    "section": "high-frequency",
    "category": "common-adjectives",
    "tier": "core",
    "english": "wrong",
    "traditional": "錯",
    "sourcePage": 91,
    "id": "edexcel-0115"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "again",
    "traditional": "再",
    "sourcePage": 91,
    "id": "edexcel-0116"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "almost",
    "traditional": "差不多",
    "sourcePage": 91,
    "id": "edexcel-0117"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "already",
    "traditional": "已經",
    "sourcePage": 91,
    "id": "edexcel-0118"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "around, about, approximately",
    "traditional": "大約/差不多",
    "sourcePage": 91,
    "id": "edexcel-0119"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "to be in the process of",
    "traditional": "正在",
    "sourcePage": 91,
    "id": "edexcel-0120"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "both, all",
    "traditional": "都",
    "sourcePage": 91,
    "id": "edexcel-0121"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "especially",
    "traditional": "特別",
    "sourcePage": 91,
    "id": "edexcel-0122"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "extremely",
    "traditional": "非常",
    "sourcePage": 91,
    "id": "edexcel-0123"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "here",
    "traditional": "這裡/這兒",
    "sourcePage": 91,
    "id": "edexcel-0124"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "immediately",
    "traditional": "馬上",
    "sourcePage": 91,
    "id": "edexcel-0125"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "(for a) long time",
    "traditional": "很久",
    "sourcePage": 91,
    "id": "edexcel-0126"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "more",
    "traditional": "更",
    "sourcePage": 91,
    "id": "edexcel-0127"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "nearby",
    "traditional": "附近",
    "sourcePage": 91,
    "id": "edexcel-0128"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "not",
    "traditional": "不",
    "sourcePage": 91,
    "id": "edexcel-0129"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "not (have)",
    "traditional": "沒",
    "sourcePage": 91,
    "id": "edexcel-0130"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "often",
    "traditional": "常常",
    "sourcePage": 91,
    "id": "edexcel-0131"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "perhaps, possibly",
    "traditional": "可能",
    "sourcePage": 91,
    "id": "edexcel-0132"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "sometimes",
    "traditional": "有時候",
    "sourcePage": 91,
    "id": "edexcel-0133"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "there",
    "traditional": "那裡/那兒",
    "sourcePage": 91,
    "id": "edexcel-0134"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "too",
    "traditional": "也",
    "sourcePage": 91,
    "id": "edexcel-0135"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "too (adjectives)",
    "traditional": "太……了",
    "sourcePage": 91,
    "id": "edexcel-0136"
  },
  {
    "section": "high-frequency",
    "category": "common-adverbs",
    "tier": "core",
    "english": "very",
    "traditional": "很",
    "sourcePage": 91,
    "id": "edexcel-0137"
  },
  {
    "section": "high-frequency",
    "category": "colours",
    "tier": "core",
    "english": "black",
    "traditional": "黑",
    "sourcePage": 91,
    "id": "edexcel-0138"
  },
  {
    "section": "high-frequency",
    "category": "colours",
    "tier": "core",
    "english": "blue",
    "traditional": "藍",
    "sourcePage": 91,
    "id": "edexcel-0139"
  },
  {
    "section": "high-frequency",
    "category": "colours",
    "tier": "core",
    "english": "colour",
    "traditional": "顔色",
    "sourcePage": 91,
    "id": "edexcel-0140"
  },
  {
    "section": "high-frequency",
    "category": "colours",
    "tier": "core",
    "english": "green",
    "traditional": "綠",
    "sourcePage": 91,
    "id": "edexcel-0141"
  },
  {
    "section": "high-frequency",
    "category": "colours",
    "tier": "core",
    "english": "orange",
    "traditional": "橙",
    "sourcePage": 91,
    "id": "edexcel-0142"
  },
  {
    "section": "high-frequency",
    "category": "colours",
    "tier": "core",
    "english": "red",
    "traditional": "紅",
    "sourcePage": 91,
    "id": "edexcel-0143"
  },
  {
    "section": "high-frequency",
    "category": "colours",
    "tier": "core",
    "english": "white",
    "traditional": "白",
    "sourcePage": 91,
    "id": "edexcel-0144"
  },
  {
    "section": "high-frequency",
    "category": "colours",
    "tier": "core",
    "english": "yellow",
    "traditional": "黃",
    "sourcePage": 91,
    "id": "edexcel-0145"
  },
  {
    "section": "high-frequency",
    "category": "numbers",
    "tier": "core",
    "english": "1 – 10",
    "traditional": "一，二，三，四，五，六，七，八，九，十",
    "sourcePage": 92,
    "id": "edexcel-0146"
  },
  {
    "section": "high-frequency",
    "category": "numbers",
    "tier": "core",
    "english": "11 – 99",
    "traditional": "十一，二十，二十一，三十，……九十九",
    "sourcePage": 92,
    "id": "edexcel-0147"
  },
  {
    "section": "high-frequency",
    "category": "numbers",
    "tier": "core",
    "english": "hundred",
    "traditional": "百",
    "sourcePage": 92,
    "id": "edexcel-0148"
  },
  {
    "section": "high-frequency",
    "category": "numbers",
    "tier": "core",
    "english": "thousand",
    "traditional": "千",
    "sourcePage": 92,
    "id": "edexcel-0149"
  },
  {
    "section": "high-frequency",
    "category": "numbers",
    "tier": "core",
    "english": "10 thousand",
    "traditional": "萬",
    "sourcePage": 92,
    "id": "edexcel-0150"
  },
  {
    "section": "high-frequency",
    "category": "numbers",
    "tier": "core",
    "english": "(for quantity) two + Measure Word + noun",
    "traditional": "兩",
    "sourcePage": 92,
    "id": "edexcel-0151"
  },
  {
    "section": "high-frequency",
    "category": "numbers",
    "tier": "core",
    "english": "zero",
    "traditional": "零",
    "sourcePage": 92,
    "id": "edexcel-0152"
  },
  {
    "section": "high-frequency",
    "category": "quantities-measures",
    "tier": "core",
    "english": "measure word for animals",
    "traditional": "隻",
    "sourcePage": 92,
    "id": "edexcel-0153"
  },
  {
    "section": "high-frequency",
    "category": "quantities-measures",
    "tier": "core",
    "english": "measure word for books",
    "traditional": "本",
    "sourcePage": 92,
    "id": "edexcel-0154"
  },
  {
    "section": "high-frequency",
    "category": "quantities-measures",
    "tier": "core",
    "english": "measure word for knives",
    "traditional": "把",
    "sourcePage": 92,
    "id": "edexcel-0155"
  },
  {
    "section": "high-frequency",
    "category": "quantities-measures",
    "tier": "core",
    "english": "measure word for long pieces (hair, branch, trousers etc.)",
    "traditional": "條",
    "sourcePage": 92,
    "id": "edexcel-0156"
  },
  {
    "section": "high-frequency",
    "category": "quantities-measures",
    "tier": "core",
    "english": "measure word for table, picture, paper etc.",
    "traditional": "張",
    "sourcePage": 92,
    "id": "edexcel-0157"
  },
  {
    "section": "high-frequency",
    "category": "quantities-measures",
    "tier": "core",
    "english": "a bottle of",
    "traditional": "瓶",
    "sourcePage": 92,
    "id": "edexcel-0158"
  },
  {
    "section": "high-frequency",
    "category": "quantities-measures",
    "tier": "core",
    "english": "a bowl of",
    "traditional": "碗",
    "sourcePage": 92,
    "id": "edexcel-0159"
  },
  {
    "section": "high-frequency",
    "category": "quantities-measures",
    "tier": "core",
    "english": "a cup of",
    "traditional": "杯",
    "sourcePage": 92,
    "id": "edexcel-0160"
  },
  {
    "section": "high-frequency",
    "category": "quantities-measures",
    "tier": "core",
    "english": "a packet of, package",
    "traditional": "包",
    "sourcePage": 92,
    "id": "edexcel-0161"
  },
  {
    "section": "high-frequency",
    "category": "quantities-measures",
    "tier": "core",
    "english": "a pair of",
    "traditional": "雙",
    "sourcePage": 92,
    "id": "edexcel-0162"
  },
  {
    "section": "high-frequency",
    "category": "quantities-measures",
    "tier": "core",
    "english": "a piece of (garment)",
    "traditional": "件",
    "sourcePage": 92,
    "id": "edexcel-0163"
  },
  {
    "section": "high-frequency",
    "category": "quantities-measures",
    "tier": "core",
    "english": "few",
    "traditional": "少",
    "sourcePage": 92,
    "id": "edexcel-0164"
  },
  {
    "section": "high-frequency",
    "category": "quantities-measures",
    "tier": "core",
    "english": "many, how (+adjectives)",
    "traditional": "多",
    "sourcePage": 92,
    "id": "edexcel-0165"
  },
  {
    "section": "high-frequency",
    "category": "quantities-measures",
    "tier": "core",
    "english": "several",
    "traditional": "幾個",
    "sourcePage": 92,
    "id": "edexcel-0166"
  },
  {
    "section": "high-frequency",
    "category": "quantities-measures",
    "tier": "core",
    "english": "the most common measure word",
    "traditional": "個",
    "sourcePage": 92,
    "id": "edexcel-0167"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "afternoon",
    "traditional": "下午",
    "sourcePage": 92,
    "id": "edexcel-0168"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "date",
    "traditional": "號/日",
    "sourcePage": 92,
    "id": "edexcel-0169"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "early",
    "traditional": "早",
    "sourcePage": 92,
    "id": "edexcel-0170"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "evening",
    "traditional": "晚上",
    "sourcePage": 92,
    "id": "edexcel-0171"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "everyday",
    "traditional": "每天，天天",
    "sourcePage": 92,
    "id": "edexcel-0172"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "from",
    "traditional": "從",
    "sourcePage": 92,
    "id": "edexcel-0173"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "half",
    "traditional": "半",
    "sourcePage": 92,
    "id": "edexcel-0174"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "hour",
    "traditional": "小時/鐘頭",
    "sourcePage": 92,
    "id": "edexcel-0175"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "in the future, future",
    "traditional": "將來",
    "sourcePage": 92,
    "id": "edexcel-0176"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "in the past, past",
    "traditional": "過去",
    "sourcePage": 92,
    "id": "edexcel-0177"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "last week",
    "traditional": "上星期",
    "sourcePage": 92,
    "id": "edexcel-0178"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "last year",
    "traditional": "去年",
    "sourcePage": 92,
    "id": "edexcel-0179"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "month",
    "traditional": "月",
    "sourcePage": 93,
    "id": "edexcel-0180"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "morning",
    "traditional": "早上/上午",
    "sourcePage": 93,
    "id": "edexcel-0181"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "next week",
    "traditional": "下星期",
    "sourcePage": 93,
    "id": "edexcel-0182"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "next year",
    "traditional": "明年",
    "sourcePage": 93,
    "id": "edexcel-0183"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "now",
    "traditional": "現在",
    "sourcePage": 93,
    "id": "edexcel-0184"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "o’clock",
    "traditional": "點",
    "sourcePage": 93,
    "id": "edexcel-0185"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "this year",
    "traditional": "今年",
    "sourcePage": 93,
    "id": "edexcel-0186"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "today",
    "traditional": "今天",
    "sourcePage": 93,
    "id": "edexcel-0187"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "tomorrow",
    "traditional": "明天",
    "sourcePage": 93,
    "id": "edexcel-0188"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "week",
    "traditional": "星期",
    "sourcePage": 93,
    "id": "edexcel-0189"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "weekend",
    "traditional": "週末",
    "sourcePage": 93,
    "id": "edexcel-0190"
  },
  {
    "section": "high-frequency",
    "category": "time-expressions",
    "tier": "core",
    "english": "yesterday",
    "traditional": "昨天",
    "sourcePage": 93,
    "id": "edexcel-0191"
  },
  {
    "section": "high-frequency",
    "category": "days-of-week",
    "tier": "core",
    "english": "Monday",
    "traditional": "星期一",
    "sourcePage": 93,
    "id": "edexcel-0192"
  },
  {
    "section": "high-frequency",
    "category": "days-of-week",
    "tier": "core",
    "english": "Tuesday",
    "traditional": "星期二",
    "sourcePage": 93,
    "id": "edexcel-0193"
  },
  {
    "section": "high-frequency",
    "category": "days-of-week",
    "tier": "core",
    "english": "Wednesday",
    "traditional": "星期三",
    "sourcePage": 93,
    "id": "edexcel-0194"
  },
  {
    "section": "high-frequency",
    "category": "days-of-week",
    "tier": "core",
    "english": "Thursday",
    "traditional": "星期四",
    "sourcePage": 93,
    "id": "edexcel-0195"
  },
  {
    "section": "high-frequency",
    "category": "days-of-week",
    "tier": "core",
    "english": "Friday",
    "traditional": "星期五",
    "sourcePage": 93,
    "id": "edexcel-0196"
  },
  {
    "section": "high-frequency",
    "category": "days-of-week",
    "tier": "core",
    "english": "Saturday",
    "traditional": "星期六",
    "sourcePage": 93,
    "id": "edexcel-0197"
  },
  {
    "section": "high-frequency",
    "category": "days-of-week",
    "tier": "core",
    "english": "Sunday",
    "traditional": "星期日，星期天",
    "sourcePage": 93,
    "id": "edexcel-0198"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "January",
    "traditional": "一月",
    "sourcePage": 93,
    "id": "edexcel-0199"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "February",
    "traditional": "二月",
    "sourcePage": 93,
    "id": "edexcel-0200"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "March",
    "traditional": "三月",
    "sourcePage": 93,
    "id": "edexcel-0201"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "April",
    "traditional": "四月",
    "sourcePage": 93,
    "id": "edexcel-0202"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "May",
    "traditional": "五月",
    "sourcePage": 93,
    "id": "edexcel-0203"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "June",
    "traditional": "六月",
    "sourcePage": 93,
    "id": "edexcel-0204"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "July",
    "traditional": "七月",
    "sourcePage": 93,
    "id": "edexcel-0205"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "August",
    "traditional": "八月",
    "sourcePage": 93,
    "id": "edexcel-0206"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "September",
    "traditional": "九月",
    "sourcePage": 93,
    "id": "edexcel-0207"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "October",
    "traditional": "十月",
    "sourcePage": 93,
    "id": "edexcel-0208"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "November",
    "traditional": "十一月",
    "sourcePage": 93,
    "id": "edexcel-0209"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "December",
    "traditional": "十二月",
    "sourcePage": 93,
    "id": "edexcel-0210"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "autumn",
    "traditional": "秋",
    "sourcePage": 93,
    "id": "edexcel-0211"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "season",
    "traditional": "季節",
    "sourcePage": 93,
    "id": "edexcel-0212"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "spring",
    "traditional": "春",
    "sourcePage": 93,
    "id": "edexcel-0213"
  },
  {
    "section": "high-frequency",
    "category": "months-seasons",
    "tier": "core",
    "english": "summer",
    "traditional": "夏",
    "sourcePage": 93,
    "id": "edexcel-0214"
  },
  {
    "section": "high-frequency",
    "category": "question-words",
    "tier": "core",
    "english": "(question marker) used after a question sentence, e.g. 'Have you had your dinner?'",
    "traditional": "嗎",
    "sourcePage": 94,
    "id": "edexcel-0215"
  },
  {
    "section": "high-frequency",
    "category": "question-words",
    "tier": "core",
    "english": "(question marker) often used at the end of a sentence where there is a statement followed by a question, e.g. 'I am very busy, what about you?'",
    "traditional": "呢",
    "sourcePage": 94,
    "id": "edexcel-0216"
  },
  {
    "section": "high-frequency",
    "category": "question-words",
    "tier": "core",
    "english": "used as an expression at the end of a statement, e.g. 'that's fine'",
    "traditional": "吧",
    "sourcePage": 94,
    "id": "edexcel-0217"
  },
  {
    "section": "high-frequency",
    "category": "question-words",
    "tier": "core",
    "english": "how many",
    "traditional": "多少",
    "sourcePage": 94,
    "id": "edexcel-0218"
  },
  {
    "section": "high-frequency",
    "category": "question-words",
    "tier": "core",
    "english": "what",
    "traditional": "什麼",
    "sourcePage": 94,
    "id": "edexcel-0219"
  },
  {
    "section": "high-frequency",
    "category": "question-words",
    "tier": "core",
    "english": "where",
    "traditional": "哪裡/哪兒",
    "sourcePage": 94,
    "id": "edexcel-0220"
  },
  {
    "section": "high-frequency",
    "category": "question-words",
    "tier": "core",
    "english": "which",
    "traditional": "哪（個、本）",
    "sourcePage": 94,
    "id": "edexcel-0221"
  },
  {
    "section": "high-frequency",
    "category": "question-words",
    "tier": "core",
    "english": "who",
    "traditional": "誰",
    "sourcePage": 94,
    "id": "edexcel-0222"
  },
  {
    "section": "high-frequency",
    "category": "question-words",
    "tier": "core",
    "english": "why",
    "traditional": "為什麼",
    "sourcePage": 94,
    "id": "edexcel-0223"
  },
  {
    "section": "high-frequency",
    "category": "other-high-frequency",
    "tier": "core",
    "english": "he, him",
    "traditional": "他",
    "sourcePage": 94,
    "id": "edexcel-0224"
  },
  {
    "section": "high-frequency",
    "category": "other-high-frequency",
    "tier": "core",
    "english": "I, me",
    "traditional": "我",
    "sourcePage": 94,
    "id": "edexcel-0225"
  },
  {
    "section": "high-frequency",
    "category": "other-high-frequency",
    "tier": "core",
    "english": "Miss",
    "traditional": "小姐",
    "sourcePage": 94,
    "id": "edexcel-0226"
  },
  {
    "section": "high-frequency",
    "category": "other-high-frequency",
    "tier": "core",
    "english": "Mr，sir",
    "traditional": "先生",
    "sourcePage": 94,
    "id": "edexcel-0227"
  },
  {
    "section": "high-frequency",
    "category": "other-high-frequency",
    "tier": "core",
    "english": "Mrs",
    "traditional": "太太",
    "sourcePage": 94,
    "id": "edexcel-0228"
  },
  {
    "section": "high-frequency",
    "category": "other-high-frequency",
    "tier": "core",
    "english": "number",
    "traditional": "號碼",
    "sourcePage": 94,
    "id": "edexcel-0229"
  },
  {
    "section": "high-frequency",
    "category": "other-high-frequency",
    "tier": "core",
    "english": "she, her",
    "traditional": "她",
    "sourcePage": 94,
    "id": "edexcel-0230"
  },
  {
    "section": "high-frequency",
    "category": "other-high-frequency",
    "tier": "core",
    "english": "some",
    "traditional": "些/一些",
    "sourcePage": 94,
    "id": "edexcel-0231"
  },
  {
    "section": "high-frequency",
    "category": "other-high-frequency",
    "tier": "core",
    "english": "that",
    "traditional": "那",
    "sourcePage": 94,
    "id": "edexcel-0232"
  },
  {
    "section": "high-frequency",
    "category": "other-high-frequency",
    "tier": "core",
    "english": "thing",
    "traditional": "東西",
    "sourcePage": 94,
    "id": "edexcel-0233"
  },
  {
    "section": "high-frequency",
    "category": "other-high-frequency",
    "tier": "core",
    "english": "this",
    "traditional": "這",
    "sourcePage": 94,
    "id": "edexcel-0234"
  },
  {
    "section": "high-frequency",
    "category": "other-high-frequency",
    "tier": "core",
    "english": "time",
    "traditional": "時間",
    "sourcePage": 94,
    "id": "edexcel-0235"
  },
  {
    "section": "high-frequency",
    "category": "other-high-frequency",
    "tier": "core",
    "english": "way, method, solution",
    "traditional": "辦法",
    "sourcePage": 94,
    "id": "edexcel-0236"
  },
  {
    "section": "high-frequency",
    "category": "other-high-frequency",
    "tier": "core",
    "english": "we, us, you, they, them",
    "traditional": "我們,你們,他們,她們",
    "sourcePage": 94,
    "id": "edexcel-0237"
  },
  {
    "section": "high-frequency",
    "category": "other-high-frequency",
    "tier": "core",
    "english": "you",
    "traditional": "你",
    "sourcePage": 94,
    "id": "edexcel-0238"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "Africa",
    "traditional": "非洲",
    "sourcePage": 95,
    "id": "edexcel-0239"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "America",
    "traditional": "美洲",
    "sourcePage": 95,
    "id": "edexcel-0240"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "American",
    "traditional": "美國人",
    "sourcePage": 95,
    "id": "edexcel-0241"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "Asia",
    "traditional": "亞洲",
    "sourcePage": 95,
    "id": "edexcel-0242"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "British",
    "traditional": "英國人",
    "sourcePage": 95,
    "id": "edexcel-0243"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "China",
    "traditional": "中國",
    "sourcePage": 95,
    "id": "edexcel-0244"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "Chinese",
    "traditional": "中國人",
    "sourcePage": 95,
    "id": "edexcel-0245"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "Chinese language",
    "traditional": "中文",
    "sourcePage": 95,
    "id": "edexcel-0246"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "country",
    "traditional": "國家",
    "sourcePage": 95,
    "id": "edexcel-0247"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "English language",
    "traditional": "英語/英文",
    "sourcePage": 95,
    "id": "edexcel-0248"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "Europe",
    "traditional": "歐洲",
    "sourcePage": 95,
    "id": "edexcel-0249"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "foreign language",
    "traditional": "外語",
    "sourcePage": 95,
    "id": "edexcel-0250"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "France",
    "traditional": "法國",
    "sourcePage": 95,
    "id": "edexcel-0251"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "French",
    "traditional": "法國人",
    "sourcePage": 95,
    "id": "edexcel-0252"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "French language",
    "traditional": "法文",
    "sourcePage": 95,
    "id": "edexcel-0253"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "language",
    "traditional": "語言",
    "sourcePage": 95,
    "id": "edexcel-0254"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "nationality",
    "traditional": "國籍",
    "sourcePage": 95,
    "id": "edexcel-0255"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "people, person",
    "traditional": "人",
    "sourcePage": 95,
    "id": "edexcel-0256"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "Standard Chinese language",
    "traditional": "漢語/普通話",
    "sourcePage": 95,
    "id": "edexcel-0257"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "United Kingdom",
    "traditional": "英國",
    "sourcePage": 95,
    "id": "edexcel-0258"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "foundation",
    "english": "United States",
    "traditional": "美國",
    "sourcePage": 95,
    "id": "edexcel-0259"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "higher",
    "english": "Canada",
    "traditional": "加拿大",
    "sourcePage": 95,
    "id": "edexcel-0260"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "higher",
    "english": "Germany",
    "traditional": "德國",
    "sourcePage": 95,
    "id": "edexcel-0261"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "higher",
    "english": "Italy",
    "traditional": "意大利",
    "sourcePage": 95,
    "id": "edexcel-0262"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "higher",
    "english": "Malaysia",
    "traditional": "馬來西亞",
    "sourcePage": 95,
    "id": "edexcel-0263"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "higher",
    "english": "Singapore",
    "traditional": "新加坡",
    "sourcePage": 95,
    "id": "edexcel-0264"
  },
  {
    "section": "high-frequency",
    "category": "countries-languages",
    "tier": "higher",
    "english": "Spain",
    "traditional": "西班牙",
    "sourcePage": 95,
    "id": "edexcel-0265"
  },
  {
    "section": "high-frequency",
    "category": "social-conventions",
    "tier": "core",
    "english": "excuse me",
    "traditional": "請問",
    "sourcePage": 95,
    "id": "edexcel-0266"
  },
  {
    "section": "high-frequency",
    "category": "social-conventions",
    "tier": "core",
    "english": "goodbye",
    "traditional": "再見",
    "sourcePage": 95,
    "id": "edexcel-0267"
  },
  {
    "section": "high-frequency",
    "category": "social-conventions",
    "tier": "core",
    "english": "good evening",
    "traditional": "晚上好",
    "sourcePage": 95,
    "id": "edexcel-0268"
  },
  {
    "section": "high-frequency",
    "category": "social-conventions",
    "tier": "core",
    "english": "good night",
    "traditional": "晚安",
    "sourcePage": 95,
    "id": "edexcel-0269"
  },
  {
    "section": "high-frequency",
    "category": "social-conventions",
    "tier": "core",
    "english": "hello",
    "traditional": "你好",
    "sourcePage": 95,
    "id": "edexcel-0270"
  },
  {
    "section": "high-frequency",
    "category": "social-conventions",
    "tier": "core",
    "english": "hello, everyone",
    "traditional": "大家好",
    "sourcePage": 95,
    "id": "edexcel-0271"
  },
  {
    "section": "high-frequency",
    "category": "social-conventions",
    "tier": "core",
    "english": "it doesn’t matter",
    "traditional": "沒關係",
    "sourcePage": 95,
    "id": "edexcel-0272"
  },
  {
    "section": "high-frequency",
    "category": "other-useful-expressions",
    "tier": "core",
    "english": "bored, comment about something that looks or sounds stupid",
    "traditional": "無聊",
    "sourcePage": 96,
    "id": "edexcel-0273"
  },
  {
    "section": "high-frequency",
    "category": "other-useful-expressions",
    "tier": "core",
    "english": "it’s bad; how terrible!",
    "traditional": "糟糕!",
    "sourcePage": 96,
    "id": "edexcel-0274"
  },
  {
    "section": "high-frequency",
    "category": "other-useful-expressions",
    "tier": "core",
    "english": "not bad; that’s right",
    "traditional": "不錯",
    "sourcePage": 96,
    "id": "edexcel-0275"
  },
  {
    "section": "high-frequency",
    "category": "prepositions",
    "tier": "core",
    "english": "after……",
    "traditional": "......以後",
    "sourcePage": 96,
    "id": "edexcel-0276"
  },
  {
    "section": "high-frequency",
    "category": "prepositions",
    "tier": "core",
    "english": "before……",
    "traditional": "......以前",
    "sourcePage": 96,
    "id": "edexcel-0277"
  },
  {
    "section": "high-frequency",
    "category": "prepositions",
    "tier": "core",
    "english": "behind",
    "traditional": "後（邊）",
    "sourcePage": 96,
    "id": "edexcel-0278"
  },
  {
    "section": "high-frequency",
    "category": "prepositions",
    "tier": "core",
    "english": "down",
    "traditional": "下",
    "sourcePage": 96,
    "id": "edexcel-0279"
  },
  {
    "section": "high-frequency",
    "category": "prepositions",
    "tier": "core",
    "english": "during……",
    "traditional": "......的時候",
    "sourcePage": 96,
    "id": "edexcel-0280"
  },
  {
    "section": "high-frequency",
    "category": "prepositions",
    "tier": "core",
    "english": "in",
    "traditional": "裡（邊）",
    "sourcePage": 96,
    "id": "edexcel-0281"
  },
  {
    "section": "high-frequency",
    "category": "prepositions",
    "tier": "core",
    "english": "in, at, on",
    "traditional": "在",
    "sourcePage": 96,
    "id": "edexcel-0282"
  },
  {
    "section": "high-frequency",
    "category": "prepositions",
    "tier": "core",
    "english": "in front of",
    "traditional": "前（邊）",
    "sourcePage": 96,
    "id": "edexcel-0283"
  },
  {
    "section": "high-frequency",
    "category": "prepositions",
    "tier": "core",
    "english": "middle",
    "traditional": "中間",
    "sourcePage": 96,
    "id": "edexcel-0284"
  },
  {
    "section": "high-frequency",
    "category": "prepositions",
    "tier": "core",
    "english": "outside",
    "traditional": "外（邊）",
    "sourcePage": 96,
    "id": "edexcel-0285"
  },
  {
    "section": "high-frequency",
    "category": "prepositions",
    "tier": "core",
    "english": "up",
    "traditional": "上",
    "sourcePage": 96,
    "id": "edexcel-0286"
  },
  {
    "section": "high-frequency",
    "category": "dialogue-messages",
    "tier": "core",
    "english": "I will put you through.",
    "traditional": "請等等",
    "sourcePage": 96,
    "id": "edexcel-0287"
  },
  {
    "section": "high-frequency",
    "category": "dialogue-messages",
    "tier": "core",
    "english": "I’ll be right back.",
    "traditional": "馬上回來",
    "sourcePage": 96,
    "id": "edexcel-0288"
  },
  {
    "section": "high-frequency",
    "category": "dialogue-messages",
    "tier": "core",
    "english": "I’m listening.",
    "traditional": "請說",
    "sourcePage": 96,
    "id": "edexcel-0289"
  },
  {
    "section": "high-frequency",
    "category": "dialogue-messages",
    "tier": "core",
    "english": "Wait a moment.",
    "traditional": "等一下",
    "sourcePage": 96,
    "id": "edexcel-0290"
  },
  {
    "section": "high-frequency",
    "category": "dialogue-messages",
    "tier": "core",
    "english": "wrong number.",
    "traditional": "打錯了",
    "sourcePage": 96,
    "id": "edexcel-0291"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "advantage",
    "traditional": "優點/好處",
    "sourcePage": 97,
    "id": "edexcel-0292"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "beef",
    "traditional": "牛肉",
    "sourcePage": 97,
    "id": "edexcel-0293"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "bread",
    "traditional": "麵包",
    "sourcePage": 97,
    "id": "edexcel-0294"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "breakfast",
    "traditional": "早飯/早餐",
    "sourcePage": 97,
    "id": "edexcel-0295"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "cake",
    "traditional": "蛋糕",
    "sourcePage": 97,
    "id": "edexcel-0296"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "celebration(s)/to celebrate",
    "traditional": "慶祝",
    "sourcePage": 97,
    "id": "edexcel-0297"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "cheap",
    "traditional": "便宜",
    "sourcePage": 97,
    "id": "edexcel-0298"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "chicken",
    "traditional": "雞",
    "sourcePage": 97,
    "id": "edexcel-0299"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "chopsticks",
    "traditional": "筷子",
    "sourcePage": 97,
    "id": "edexcel-0300"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "coffee",
    "traditional": "咖啡",
    "sourcePage": 97,
    "id": "edexcel-0301"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "convenient",
    "traditional": "方便",
    "sourcePage": 97,
    "id": "edexcel-0302"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "credit card",
    "traditional": "信用卡",
    "sourcePage": 97,
    "id": "edexcel-0303"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "culture",
    "traditional": "文化",
    "sourcePage": 97,
    "id": "edexcel-0304"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "customs/traditions",
    "traditional": "傳統/習俗",
    "sourcePage": 97,
    "id": "edexcel-0305"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "delicious",
    "traditional": "好吃/美味",
    "sourcePage": 97,
    "id": "edexcel-0306"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "duck",
    "traditional": "鴨",
    "sourcePage": 97,
    "id": "edexcel-0307"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "dumpling",
    "traditional": "餃子",
    "sourcePage": 97,
    "id": "edexcel-0308"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "egg",
    "traditional": "蛋",
    "sourcePage": 97,
    "id": "edexcel-0309"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "evening meal, dinner, supper",
    "traditional": "晚飯/晚餐",
    "sourcePage": 97,
    "id": "edexcel-0310"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "fast food restaurant",
    "traditional": "快餐店",
    "sourcePage": 97,
    "id": "edexcel-0311"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "film",
    "traditional": "電影",
    "sourcePage": 97,
    "id": "edexcel-0312"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "fish",
    "traditional": "魚",
    "sourcePage": 97,
    "id": "edexcel-0313"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "food and drink",
    "traditional": "食物和飲料",
    "sourcePage": 97,
    "id": "edexcel-0314"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "fruit",
    "traditional": "水果",
    "sourcePage": 97,
    "id": "edexcel-0315"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "fruit juice",
    "traditional": "果汁",
    "sourcePage": 97,
    "id": "edexcel-0316"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "identity",
    "traditional": "身份",
    "sourcePage": 97,
    "id": "edexcel-0317"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "interests/hobbies",
    "traditional": "興趣/愛好",
    "sourcePage": 97,
    "id": "edexcel-0318"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "lunch",
    "traditional": "午飯/午餐",
    "sourcePage": 97,
    "id": "edexcel-0319"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "meat",
    "traditional": "肉",
    "sourcePage": 97,
    "id": "edexcel-0320"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "menu",
    "traditional": "菜單",
    "sourcePage": 97,
    "id": "edexcel-0321"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "milk",
    "traditional": "牛奶",
    "sourcePage": 97,
    "id": "edexcel-0322"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "money",
    "traditional": "錢",
    "sourcePage": 97,
    "id": "edexcel-0323"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "moon cake (related to Mid-Autumn festival)",
    "traditional": "月餅",
    "sourcePage": 97,
    "id": "edexcel-0324"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "mutton",
    "traditional": "羊肉",
    "sourcePage": 97,
    "id": "edexcel-0325"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "pork",
    "traditional": "豬肉",
    "sourcePage": 98,
    "id": "edexcel-0326"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "restaurant",
    "traditional": "餐廳/飯館",
    "sourcePage": 98,
    "id": "edexcel-0327"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "rice (cooked/boiled)",
    "traditional": "米飯",
    "sourcePage": 98,
    "id": "edexcel-0328"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "rice dumpling (related to Dragon Boat Festival)",
    "traditional": "粽子",
    "sourcePage": 98,
    "id": "edexcel-0329"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "role models",
    "traditional": "偶像",
    "sourcePage": 98,
    "id": "edexcel-0330"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "roast",
    "traditional": "烤",
    "sourcePage": 98,
    "id": "edexcel-0331"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "shopping",
    "traditional": "買東西/購物",
    "sourcePage": 98,
    "id": "edexcel-0332"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "soft drinks, fizzy drinks",
    "traditional": "汽水",
    "sourcePage": 98,
    "id": "edexcel-0333"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "soup",
    "traditional": "湯",
    "sourcePage": 98,
    "id": "edexcel-0334"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "sport",
    "traditional": "運動",
    "sourcePage": 98,
    "id": "edexcel-0335"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "tea",
    "traditional": "茶",
    "sourcePage": 98,
    "id": "edexcel-0336"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "to cook, prepare a meal",
    "traditional": "做飯",
    "sourcePage": 98,
    "id": "edexcel-0337"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "to order (from a menu)",
    "traditional": "點菜",
    "sourcePage": 98,
    "id": "edexcel-0338"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "to pay",
    "traditional": "付錢",
    "sourcePage": 98,
    "id": "edexcel-0339"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "vegetable",
    "traditional": "青菜",
    "sourcePage": 98,
    "id": "edexcel-0340"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "wallet, purse",
    "traditional": "錢包",
    "sourcePage": 98,
    "id": "edexcel-0341"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "water",
    "traditional": "水",
    "sourcePage": 98,
    "id": "edexcel-0342"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "wine",
    "traditional": "酒",
    "sourcePage": 98,
    "id": "edexcel-0343"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "foundation",
    "english": "yuan",
    "traditional": "元/塊",
    "sourcePage": 98,
    "id": "edexcel-0344"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "chips",
    "traditional": "薯條",
    "sourcePage": 98,
    "id": "edexcel-0345"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "choice",
    "traditional": "選擇",
    "sourcePage": 98,
    "id": "edexcel-0346"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "confectionary",
    "traditional": "糖果",
    "sourcePage": 98,
    "id": "edexcel-0347"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "cultural life",
    "traditional": "文化生活",
    "sourcePage": 98,
    "id": "edexcel-0348"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "daily life",
    "traditional": "日常生活",
    "sourcePage": 98,
    "id": "edexcel-0349"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "delicious",
    "traditional": "好味道",
    "sourcePage": 98,
    "id": "edexcel-0350"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "dessert",
    "traditional": "甜點",
    "sourcePage": 98,
    "id": "edexcel-0351"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "disadvantage",
    "traditional": "缺點/壞處",
    "sourcePage": 98,
    "id": "edexcel-0352"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "fried",
    "traditional": "炒",
    "sourcePage": 98,
    "id": "edexcel-0353"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "fried rice/noodles",
    "traditional": "炒飯,炒麵",
    "sourcePage": 98,
    "id": "edexcel-0354"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "knife and fork",
    "traditional": "刀叉",
    "sourcePage": 98,
    "id": "edexcel-0355"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "salad",
    "traditional": "沙拉",
    "sourcePage": 98,
    "id": "edexcel-0356"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "seafood",
    "traditional": "海鮮",
    "sourcePage": 98,
    "id": "edexcel-0357"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "self-service (buffet)",
    "traditional": "自助(自助餐)",
    "sourcePage": 98,
    "id": "edexcel-0358"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "snack",
    "traditional": "點心,小吃",
    "sourcePage": 98,
    "id": "edexcel-0359"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "sweet",
    "traditional": "甜",
    "sourcePage": 98,
    "id": "edexcel-0360"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "salty",
    "traditional": "鹹",
    "sourcePage": 98,
    "id": "edexcel-0361"
  },
  {
    "section": "topic-specific",
    "category": "identity-daily-life-food",
    "tier": "higher",
    "english": "spicy",
    "traditional": "辣",
    "sourcePage": 98,
    "id": "edexcel-0362"
  },
  {
    "section": "topic-specific",
    "category": "identity-dress-style",
    "tier": "foundation",
    "english": "shoe",
    "traditional": "鞋/鞋子",
    "sourcePage": 99,
    "id": "edexcel-0363"
  },
  {
    "section": "topic-specific",
    "category": "identity-dress-style",
    "tier": "foundation",
    "english": "size (large, medium, small)",
    "traditional": "號/號碼(大號,中號,小號)",
    "sourcePage": 99,
    "id": "edexcel-0364"
  },
  {
    "section": "topic-specific",
    "category": "identity-dress-style",
    "tier": "foundation",
    "english": "skirt",
    "traditional": "裙子",
    "sourcePage": 99,
    "id": "edexcel-0365"
  },
  {
    "section": "topic-specific",
    "category": "identity-dress-style",
    "tier": "foundation",
    "english": "sweater/jumper",
    "traditional": "毛衣",
    "sourcePage": 99,
    "id": "edexcel-0366"
  },
  {
    "section": "topic-specific",
    "category": "identity-dress-style",
    "tier": "foundation",
    "english": "to try on (for size)",
    "traditional": "試穿/試試",
    "sourcePage": 99,
    "id": "edexcel-0367"
  },
  {
    "section": "topic-specific",
    "category": "identity-dress-style",
    "tier": "foundation",
    "english": "trainers",
    "traditional": "運動鞋",
    "sourcePage": 99,
    "id": "edexcel-0368"
  },
  {
    "section": "topic-specific",
    "category": "identity-dress-style",
    "tier": "foundation",
    "english": "trousers",
    "traditional": "褲子",
    "sourcePage": 99,
    "id": "edexcel-0369"
  },
  {
    "section": "topic-specific",
    "category": "identity-dress-style",
    "tier": "foundation",
    "english": "watch",
    "traditional": "手錶",
    "sourcePage": 99,
    "id": "edexcel-0370"
  },
  {
    "section": "topic-specific",
    "category": "identity-dress-style",
    "tier": "higher",
    "english": "fashion",
    "traditional": "時尚",
    "sourcePage": 99,
    "id": "edexcel-0371"
  },
  {
    "section": "topic-specific",
    "category": "identity-dress-style",
    "tier": "higher",
    "english": "hat",
    "traditional": "帽子",
    "sourcePage": 99,
    "id": "edexcel-0372"
  },
  {
    "section": "topic-specific",
    "category": "identity-dress-style",
    "tier": "higher",
    "english": "shirt",
    "traditional": "襯衣/襯衫",
    "sourcePage": 99,
    "id": "edexcel-0373"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "age",
    "traditional": "年齡",
    "sourcePage": 99,
    "id": "edexcel-0374"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "bed",
    "traditional": "床",
    "sourcePage": 99,
    "id": "edexcel-0375"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "birthday",
    "traditional": "生日",
    "sourcePage": 99,
    "id": "edexcel-0376"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "bird",
    "traditional": "鳥",
    "sourcePage": 99,
    "id": "edexcel-0377"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "birth, to be born",
    "traditional": "出生",
    "sourcePage": 99,
    "id": "edexcel-0378"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "boy",
    "traditional": "男孩",
    "sourcePage": 99,
    "id": "edexcel-0379"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "cat",
    "traditional": "貓",
    "sourcePage": 99,
    "id": "edexcel-0380"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "chair",
    "traditional": "椅子",
    "sourcePage": 99,
    "id": "edexcel-0381"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "child",
    "traditional": "孩子/兒童",
    "sourcePage": 99,
    "id": "edexcel-0382"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "clock",
    "traditional": "鐘",
    "sourcePage": 99,
    "id": "edexcel-0383"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "clothes",
    "traditional": "衣服",
    "sourcePage": 99,
    "id": "edexcel-0384"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "date of birth",
    "traditional": "出生日期",
    "sourcePage": 99,
    "id": "edexcel-0385"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "dog",
    "traditional": "狗",
    "sourcePage": 99,
    "id": "edexcel-0386"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "door",
    "traditional": "門",
    "sourcePage": 99,
    "id": "edexcel-0387"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "elder brother",
    "traditional": "哥哥",
    "sourcePage": 99,
    "id": "edexcel-0388"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "eye",
    "traditional": "眼睛",
    "sourcePage": 100,
    "id": "edexcel-0389"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "family, home",
    "traditional": "家",
    "sourcePage": 100,
    "id": "edexcel-0390"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "family (member)",
    "traditional": "家人",
    "sourcePage": 100,
    "id": "edexcel-0391"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "father",
    "traditional": "爸爸",
    "sourcePage": 100,
    "id": "edexcel-0392"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "first name",
    "traditional": "名字",
    "sourcePage": 100,
    "id": "edexcel-0393"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "friend",
    "traditional": "朋友",
    "sourcePage": 100,
    "id": "edexcel-0394"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "fridge",
    "traditional": "冰箱",
    "sourcePage": 100,
    "id": "edexcel-0395"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "full name",
    "traditional": "姓名",
    "sourcePage": 100,
    "id": "edexcel-0396"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "girl",
    "traditional": "女孩",
    "sourcePage": 100,
    "id": "edexcel-0397"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "glasses",
    "traditional": "眼鏡",
    "sourcePage": 100,
    "id": "edexcel-0398"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "grandfather",
    "traditional": "爺爺",
    "sourcePage": 100,
    "id": "edexcel-0399"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "grandmother",
    "traditional": "奶奶",
    "sourcePage": 100,
    "id": "edexcel-0400"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "hair",
    "traditional": "頭髮",
    "sourcePage": 100,
    "id": "edexcel-0401"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "house",
    "traditional": "房子/房屋",
    "sourcePage": 100,
    "id": "edexcel-0402"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "house work",
    "traditional": "家務",
    "sourcePage": 100,
    "id": "edexcel-0403"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "marry",
    "traditional": "結婚",
    "sourcePage": 100,
    "id": "edexcel-0404"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "mother",
    "traditional": "媽媽",
    "sourcePage": 100,
    "id": "edexcel-0405"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "pet",
    "traditional": "寵物",
    "sourcePage": 100,
    "id": "edexcel-0406"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "relationship",
    "traditional": "關係",
    "sourcePage": 100,
    "id": "edexcel-0407"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "self, oneself",
    "traditional": "自己",
    "sourcePage": 100,
    "id": "edexcel-0408"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "sofa",
    "traditional": "沙發",
    "sourcePage": 100,
    "id": "edexcel-0409"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "table",
    "traditional": "桌子",
    "sourcePage": 100,
    "id": "edexcel-0410"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "telephone",
    "traditional": "電話",
    "sourcePage": 100,
    "id": "edexcel-0411"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "television",
    "traditional": "電視機",
    "sourcePage": 100,
    "id": "edexcel-0412"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "window",
    "traditional": "窗",
    "sourcePage": 100,
    "id": "edexcel-0413"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "year",
    "traditional": "年",
    "sourcePage": 100,
    "id": "edexcel-0414"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "……years old",
    "traditional": "……歲",
    "sourcePage": 100,
    "id": "edexcel-0415"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "younger brother",
    "traditional": "弟弟",
    "sourcePage": 100,
    "id": "edexcel-0416"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "younger sister",
    "traditional": "妹妹",
    "sourcePage": 100,
    "id": "edexcel-0417"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "foundation",
    "english": "young people",
    "traditional": "年轻人",
    "sourcePage": 100,
    "id": "edexcel-0418"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "higher",
    "english": "friendly",
    "traditional": "友好",
    "sourcePage": 100,
    "id": "edexcel-0419"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "higher",
    "english": "kitchen",
    "traditional": "廚房",
    "sourcePage": 100,
    "id": "edexcel-0420"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "higher",
    "english": "lamp",
    "traditional": "燈",
    "sourcePage": 100,
    "id": "edexcel-0421"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "higher",
    "english": "to look after",
    "traditional": "照顧",
    "sourcePage": 100,
    "id": "edexcel-0422"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "higher",
    "english": "neighbour",
    "traditional": "鄰居",
    "sourcePage": 100,
    "id": "edexcel-0423"
  },
  {
    "section": "topic-specific",
    "category": "identity-relations-characteristics",
    "tier": "higher",
    "english": "polite",
    "traditional": "有禮貌",
    "sourcePage": 100,
    "id": "edexcel-0424"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "Chinese New Year/Spring Festival",
    "traditional": "中國新年/春節",
    "sourcePage": 101,
    "id": "edexcel-0425"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "Christmas",
    "traditional": "聖誕節",
    "sourcePage": 101,
    "id": "edexcel-0426"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "competition/matches",
    "traditional": "比賽",
    "sourcePage": 101,
    "id": "edexcel-0427"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "concert",
    "traditional": "音樂會",
    "sourcePage": 101,
    "id": "edexcel-0428"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "cycling",
    "traditional": "騎自行車(單車)",
    "sourcePage": 101,
    "id": "edexcel-0429"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "dance",
    "traditional": "舞",
    "sourcePage": 101,
    "id": "edexcel-0430"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "Dragon Dance",
    "traditional": "舞龙",
    "sourcePage": 101,
    "id": "edexcel-0431"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "(to) do sports",
    "traditional": "做運動",
    "sourcePage": 101,
    "id": "edexcel-0432"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "electronic game",
    "traditional": "電子遊戲",
    "sourcePage": 101,
    "id": "edexcel-0433"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "festival",
    "traditional": "節日",
    "sourcePage": 101,
    "id": "edexcel-0434"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "free time",
    "traditional": "有空",
    "sourcePage": 101,
    "id": "edexcel-0435"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "ice skating",
    "traditional": "滑冰",
    "sourcePage": 101,
    "id": "edexcel-0436"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "Lion Dance",
    "traditional": "舞獅",
    "sourcePage": 101,
    "id": "edexcel-0437"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "New Year",
    "traditional": "新年",
    "sourcePage": 101,
    "id": "edexcel-0438"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "performance",
    "traditional": "表演/演出",
    "sourcePage": 101,
    "id": "edexcel-0439"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "play a ball game (tennis, basketball… etc.)",
    "traditional": "打球",
    "sourcePage": 101,
    "id": "edexcel-0440"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "(play) badminton",
    "traditional": "(打)羽毛球",
    "sourcePage": 101,
    "id": "edexcel-0441"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "(play) basketball",
    "traditional": "(打)籃球",
    "sourcePage": 101,
    "id": "edexcel-0442"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "(play) football",
    "traditional": "(踢)足球",
    "sourcePage": 101,
    "id": "edexcel-0443"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "(play) table tennis",
    "traditional": "(打)乒乓球",
    "sourcePage": 101,
    "id": "edexcel-0444"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "(play) tennis",
    "traditional": "(打)網球",
    "sourcePage": 101,
    "id": "edexcel-0445"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "programme",
    "traditional": "節目",
    "sourcePage": 101,
    "id": "edexcel-0446"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "reading",
    "traditional": "看書/閱讀",
    "sourcePage": 101,
    "id": "edexcel-0447"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "running, jogging",
    "traditional": "跑步",
    "sourcePage": 101,
    "id": "edexcel-0448"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "skiing",
    "traditional": "滑雪",
    "sourcePage": 101,
    "id": "edexcel-0449"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "song",
    "traditional": "歌",
    "sourcePage": 101,
    "id": "edexcel-0450"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "The Mid-Autumn Festival",
    "traditional": "中秋節",
    "sourcePage": 101,
    "id": "edexcel-0451"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "to dance",
    "traditional": "跳舞",
    "sourcePage": 101,
    "id": "edexcel-0452"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "to listen to music",
    "traditional": "聽音樂",
    "sourcePage": 101,
    "id": "edexcel-0453"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "to sing, singing",
    "traditional": "唱歌",
    "sourcePage": 101,
    "id": "edexcel-0454"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "swimming",
    "traditional": "游泳",
    "sourcePage": 101,
    "id": "edexcel-0455"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "watch movies",
    "traditional": "看電影",
    "sourcePage": 101,
    "id": "edexcel-0456"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "watch news",
    "traditional": "看新聞",
    "sourcePage": 101,
    "id": "edexcel-0457"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "foundation",
    "english": "watch television",
    "traditional": "看電視",
    "sourcePage": 101,
    "id": "edexcel-0458"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "higher",
    "english": "athlete, sportsman",
    "traditional": "運動員",
    "sourcePage": 101,
    "id": "edexcel-0459"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "higher",
    "english": "Easter",
    "traditional": "復活節",
    "sourcePage": 102,
    "id": "edexcel-0460"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "higher",
    "english": "firecracker (related to the Chinese New Year)",
    "traditional": "鞭炮",
    "sourcePage": 102,
    "id": "edexcel-0461"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "higher",
    "english": "(to) go for a walk/stroll",
    "traditional": "散步",
    "sourcePage": 102,
    "id": "edexcel-0462"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "higher",
    "english": "socialising",
    "traditional": "社交",
    "sourcePage": 102,
    "id": "edexcel-0463"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "higher",
    "english": "summer camp",
    "traditional": "夏令營",
    "sourcePage": 102,
    "id": "edexcel-0464"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "higher",
    "english": "team",
    "traditional": "隊",
    "sourcePage": 102,
    "id": "edexcel-0465"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "higher",
    "english": "team member, player",
    "traditional": "隊員",
    "sourcePage": 102,
    "id": "edexcel-0466"
  },
  {
    "section": "topic-specific",
    "category": "identity-cultural-life",
    "tier": "higher",
    "english": "The Dragon Boat Festival",
    "traditional": "端午節",
    "sourcePage": 102,
    "id": "edexcel-0467"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "foundation",
    "english": "blog",
    "traditional": "博客",
    "sourcePage": 102,
    "id": "edexcel-0468"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "foundation",
    "english": "computer",
    "traditional": "電腦",
    "sourcePage": 102,
    "id": "edexcel-0469"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "foundation",
    "english": "e-mail",
    "traditional": "電子郵件",
    "sourcePage": 102,
    "id": "edexcel-0470"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "foundation",
    "english": "e-pal",
    "traditional": "網友",
    "sourcePage": 102,
    "id": "edexcel-0471"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "foundation",
    "english": "social media",
    "traditional": "社交媒體",
    "sourcePage": 102,
    "id": "edexcel-0472"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "foundation",
    "english": "surf the internet",
    "traditional": "上網",
    "sourcePage": 102,
    "id": "edexcel-0473"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "foundation",
    "english": "technology",
    "traditional": "科技",
    "sourcePage": 102,
    "id": "edexcel-0474"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "foundation",
    "english": "to chat (online, on MSN etc.)",
    "traditional": "聊天",
    "sourcePage": 102,
    "id": "edexcel-0475"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "higher",
    "english": "chat room",
    "traditional": "聊天室",
    "sourcePage": 102,
    "id": "edexcel-0476"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "higher",
    "english": "desktop computer",
    "traditional": "台式電腦",
    "sourcePage": 102,
    "id": "edexcel-0477"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "higher",
    "english": "laptop computer",
    "traditional": "筆記本電腦",
    "sourcePage": 102,
    "id": "edexcel-0478"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "higher",
    "english": "text message",
    "traditional": "短信",
    "sourcePage": 102,
    "id": "edexcel-0479"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "higher",
    "english": "to text",
    "traditional": "發短信",
    "sourcePage": 102,
    "id": "edexcel-0480"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "higher",
    "english": "to download",
    "traditional": "下載",
    "sourcePage": 102,
    "id": "edexcel-0481"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "higher",
    "english": "virus",
    "traditional": "病毒",
    "sourcePage": 102,
    "id": "edexcel-0482"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "higher",
    "english": "URL/web address",
    "traditional": "網址",
    "sourcePage": 102,
    "id": "edexcel-0483"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "higher",
    "english": "web page",
    "traditional": "網頁",
    "sourcePage": 102,
    "id": "edexcel-0484"
  },
  {
    "section": "topic-specific",
    "category": "identity-social-media",
    "tier": "higher",
    "english": "website",
    "traditional": "網站",
    "sourcePage": 102,
    "id": "edexcel-0485"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "accommodation",
    "traditional": "住的地方",
    "sourcePage": 102,
    "id": "edexcel-0486"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "activity",
    "traditional": "活動",
    "sourcePage": 102,
    "id": "edexcel-0487"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "Beijing",
    "traditional": "北京",
    "sourcePage": 103,
    "id": "edexcel-0488"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "bicycle",
    "traditional": "自行車/單車",
    "sourcePage": 103,
    "id": "edexcel-0489"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "boat/ship/ferry",
    "traditional": "船",
    "sourcePage": 103,
    "id": "edexcel-0490"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "bridge",
    "traditional": "橋",
    "sourcePage": 103,
    "id": "edexcel-0491"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "bus",
    "traditional": "公共汽車",
    "sourcePage": 103,
    "id": "edexcel-0492"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "by (car/train/bus/boat etc.)",
    "traditional": "坐(車/火車……)",
    "sourcePage": 103,
    "id": "edexcel-0493"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "calligraphy",
    "traditional": "書法",
    "sourcePage": 103,
    "id": "edexcel-0494"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "car",
    "traditional": "汽車",
    "sourcePage": 103,
    "id": "edexcel-0495"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "car park",
    "traditional": "停車場",
    "sourcePage": 103,
    "id": "edexcel-0496"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "cathedral/church",
    "traditional": "教堂",
    "sourcePage": 103,
    "id": "edexcel-0497"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "cinema",
    "traditional": "電影院",
    "sourcePage": 103,
    "id": "edexcel-0498"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "city",
    "traditional": "城市",
    "sourcePage": 103,
    "id": "edexcel-0499"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "Chinese brush",
    "traditional": "毛筆",
    "sourcePage": 103,
    "id": "edexcel-0500"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "Chinese painting",
    "traditional": "國畫",
    "sourcePage": 103,
    "id": "edexcel-0501"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "countryside",
    "traditional": "農村",
    "sourcePage": 103,
    "id": "edexcel-0502"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "court (sports – e.g. football, tennis... etc.)",
    "traditional": "球場(足球場,網球場……)",
    "sourcePage": 103,
    "id": "edexcel-0503"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "destination",
    "traditional": "目的地",
    "sourcePage": 103,
    "id": "edexcel-0504"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "exhibition",
    "traditional": "展覽會",
    "sourcePage": 103,
    "id": "edexcel-0505"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "experience",
    "traditional": "經驗/經歷",
    "sourcePage": 103,
    "id": "edexcel-0506"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "factory",
    "traditional": "工廠",
    "sourcePage": 103,
    "id": "edexcel-0507"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "floor (1st, 2nd…)",
    "traditional": "(一，二，……)層/樓",
    "sourcePage": 103,
    "id": "edexcel-0508"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "flower",
    "traditional": "花",
    "sourcePage": 103,
    "id": "edexcel-0509"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "garden",
    "traditional": "花園",
    "sourcePage": 103,
    "id": "edexcel-0510"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "gift, present",
    "traditional": "禮物",
    "sourcePage": 103,
    "id": "edexcel-0511"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "grass",
    "traditional": "草",
    "sourcePage": 103,
    "id": "edexcel-0512"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "Guangzhou",
    "traditional": "廣州",
    "sourcePage": 103,
    "id": "edexcel-0513"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "guest",
    "traditional": "客人",
    "sourcePage": 103,
    "id": "edexcel-0514"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "hill/mountain",
    "traditional": "山",
    "sourcePage": 103,
    "id": "edexcel-0515"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "holiday",
    "traditional": "假期",
    "sourcePage": 103,
    "id": "edexcel-0516"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "Hong Kong",
    "traditional": "香港",
    "sourcePage": 103,
    "id": "edexcel-0517"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "hospital",
    "traditional": "醫院",
    "sourcePage": 103,
    "id": "edexcel-0518"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "hotel",
    "traditional": "酒店",
    "sourcePage": 103,
    "id": "edexcel-0519"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "kite",
    "traditional": "風箏",
    "sourcePage": 103,
    "id": "edexcel-0520"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "lake",
    "traditional": "湖",
    "sourcePage": 103,
    "id": "edexcel-0521"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "library",
    "traditional": "圖書館",
    "sourcePage": 103,
    "id": "edexcel-0522"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "local area",
    "traditional": "當地",
    "sourcePage": 103,
    "id": "edexcel-0523"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "London",
    "traditional": "倫敦",
    "sourcePage": 103,
    "id": "edexcel-0524"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "luggage",
    "traditional": "行李",
    "sourcePage": 103,
    "id": "edexcel-0525"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "panda",
    "traditional": "熊猫",
    "sourcePage": 104,
    "id": "edexcel-0526"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "park",
    "traditional": "公園",
    "sourcePage": 104,
    "id": "edexcel-0527"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "passport",
    "traditional": "護照",
    "sourcePage": 104,
    "id": "edexcel-0528"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "place",
    "traditional": "地方",
    "sourcePage": 104,
    "id": "edexcel-0529"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "plane",
    "traditional": "飛機",
    "sourcePage": 104,
    "id": "edexcel-0530"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "police station",
    "traditional": "警察局",
    "sourcePage": 104,
    "id": "edexcel-0531"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "post office",
    "traditional": "郵局",
    "sourcePage": 104,
    "id": "edexcel-0532"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "postcard",
    "traditional": "明信片",
    "sourcePage": 104,
    "id": "edexcel-0533"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "pound sterling",
    "traditional": "英鎊/鎊",
    "sourcePage": 104,
    "id": "edexcel-0534"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "preference",
    "traditional": "更喜歡",
    "sourcePage": 104,
    "id": "edexcel-0535"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "problem",
    "traditional": "問題",
    "sourcePage": 104,
    "id": "edexcel-0536"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "railway station",
    "traditional": "火車站",
    "sourcePage": 104,
    "id": "edexcel-0537"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "region",
    "traditional": "地區",
    "sourcePage": 104,
    "id": "edexcel-0538"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "return journey (ticket)",
    "traditional": "回程/雙程（票）",
    "sourcePage": 104,
    "id": "edexcel-0539"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "river",
    "traditional": "河",
    "sourcePage": 104,
    "id": "edexcel-0540"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "road, line/route, bus number",
    "traditional": "路",
    "sourcePage": 104,
    "id": "edexcel-0541"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "scenery",
    "traditional": "風景",
    "sourcePage": 104,
    "id": "edexcel-0542"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "sea",
    "traditional": "海",
    "sourcePage": 104,
    "id": "edexcel-0543"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "seaside",
    "traditional": "海邊",
    "sourcePage": 104,
    "id": "edexcel-0544"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "Shanghai",
    "traditional": "上海",
    "sourcePage": 104,
    "id": "edexcel-0545"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "shop",
    "traditional": "商店",
    "sourcePage": 104,
    "id": "edexcel-0546"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "shopping centre",
    "traditional": "購物中心",
    "sourcePage": 104,
    "id": "edexcel-0547"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "single journey",
    "traditional": "單程（票）",
    "sourcePage": 104,
    "id": "edexcel-0548"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "sports ground",
    "traditional": "運動場",
    "sourcePage": 104,
    "id": "edexcel-0549"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "square",
    "traditional": "廣場",
    "sourcePage": 104,
    "id": "edexcel-0550"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "stadium",
    "traditional": "體育館",
    "sourcePage": 104,
    "id": "edexcel-0551"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "stamp",
    "traditional": "郵票",
    "sourcePage": 104,
    "id": "edexcel-0552"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "station/stop (public transport)",
    "traditional": "車站",
    "sourcePage": 104,
    "id": "edexcel-0553"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "supermarket",
    "traditional": "超級市場",
    "sourcePage": 104,
    "id": "edexcel-0554"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "swimming pool",
    "traditional": "游泳池",
    "sourcePage": 104,
    "id": "edexcel-0555"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "Taiwan",
    "traditional": "臺灣",
    "sourcePage": 104,
    "id": "edexcel-0556"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "The Great Wall",
    "traditional": "長城",
    "sourcePage": 104,
    "id": "edexcel-0557"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "things to do",
    "traditional": "可做的事",
    "sourcePage": 104,
    "id": "edexcel-0558"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "Tiananmen Square",
    "traditional": "天安門廣場",
    "sourcePage": 104,
    "id": "edexcel-0559"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "ticket",
    "traditional": "票",
    "sourcePage": 104,
    "id": "edexcel-0560"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "to book, to reserve",
    "traditional": "訂（房，票）",
    "sourcePage": 104,
    "id": "edexcel-0561"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "to drive",
    "traditional": "開車",
    "sourcePage": 104,
    "id": "edexcel-0562"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "to get off, to alight",
    "traditional": "下車",
    "sourcePage": 104,
    "id": "edexcel-0563"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "to get on, to board (train, bus etc.)",
    "traditional": "上車",
    "sourcePage": 104,
    "id": "edexcel-0564"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "to visit (a place, a museum, etc.)",
    "traditional": "參觀",
    "sourcePage": 105,
    "id": "edexcel-0565"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "to welcome",
    "traditional": "歡迎",
    "sourcePage": 105,
    "id": "edexcel-0566"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "town centre",
    "traditional": "市中心",
    "sourcePage": 105,
    "id": "edexcel-0567"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "train",
    "traditional": "火車",
    "sourcePage": 105,
    "id": "edexcel-0568"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "transport",
    "traditional": "交通",
    "sourcePage": 105,
    "id": "edexcel-0569"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "travel",
    "traditional": "旅行",
    "sourcePage": 105,
    "id": "edexcel-0570"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "tree",
    "traditional": "樹",
    "sourcePage": 105,
    "id": "edexcel-0571"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "underground station",
    "traditional": "地鐵站",
    "sourcePage": 105,
    "id": "edexcel-0572"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "underground train, tube, metro",
    "traditional": "地鐵",
    "sourcePage": 105,
    "id": "edexcel-0573"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "waiter/waitress/attendant",
    "traditional": "服務員",
    "sourcePage": 105,
    "id": "edexcel-0574"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "foundation",
    "english": "zoo",
    "traditional": "動物園",
    "sourcePage": 105,
    "id": "edexcel-0575"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "accommodation",
    "traditional": "住宿",
    "sourcePage": 105,
    "id": "edexcel-0576"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "arrive",
    "traditional": "到達",
    "sourcePage": 105,
    "id": "edexcel-0577"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "asking for help",
    "traditional": "找人幫忙/尋求幫助",
    "sourcePage": 105,
    "id": "edexcel-0578"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "coach",
    "traditional": "旅遊車",
    "sourcePage": 105,
    "id": "edexcel-0579"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "dealing with problems",
    "traditional": "解決問題",
    "sourcePage": 105,
    "id": "edexcel-0580"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "eating out",
    "traditional": "出去吃飯",
    "sourcePage": 105,
    "id": "edexcel-0581"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "fare",
    "traditional": "車費",
    "sourcePage": 105,
    "id": "edexcel-0582"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "scenic spots, places of interest",
    "traditional": "名勝",
    "sourcePage": 105,
    "id": "edexcel-0583"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "service desk",
    "traditional": "服務台",
    "sourcePage": 105,
    "id": "edexcel-0584"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "set off, depart",
    "traditional": "出發",
    "sourcePage": 105,
    "id": "edexcel-0585"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "souvenir",
    "traditional": "紀念品",
    "sourcePage": 105,
    "id": "edexcel-0586"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "stay (number of nights)",
    "traditional": "住",
    "sourcePage": 105,
    "id": "edexcel-0587"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "stay, stop over",
    "traditional": "停留",
    "sourcePage": 105,
    "id": "edexcel-0588"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "Taipei",
    "traditional": "臺北",
    "sourcePage": 105,
    "id": "edexcel-0589"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "tall building/block/apartments",
    "traditional": "高樓",
    "sourcePage": 105,
    "id": "edexcel-0590"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "ticket office",
    "traditional": "售票處",
    "sourcePage": 105,
    "id": "edexcel-0591"
  },
  {
    "section": "topic-specific",
    "category": "local-area-holiday-travel",
    "tier": "higher",
    "english": "timetable (transport)",
    "traditional": "時刻表",
    "sourcePage": 105,
    "id": "edexcel-0592"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "autumn",
    "traditional": "秋天",
    "sourcePage": 105,
    "id": "edexcel-0593"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "cloud",
    "traditional": "雲",
    "sourcePage": 105,
    "id": "edexcel-0594"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "cloudy",
    "traditional": "多雲",
    "sourcePage": 105,
    "id": "edexcel-0595"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "degree (temperature)",
    "traditional": "度",
    "sourcePage": 106,
    "id": "edexcel-0596"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "fog",
    "traditional": "霧",
    "sourcePage": 106,
    "id": "edexcel-0597"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "foggy",
    "traditional": "大霧",
    "sourcePage": 106,
    "id": "edexcel-0598"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "moon",
    "traditional": "月亮",
    "sourcePage": 106,
    "id": "edexcel-0599"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "rain",
    "traditional": "雨",
    "sourcePage": 106,
    "id": "edexcel-0600"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "snow",
    "traditional": "雪",
    "sourcePage": 106,
    "id": "edexcel-0601"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "spring",
    "traditional": "春天",
    "sourcePage": 106,
    "id": "edexcel-0602"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "sun",
    "traditional": "太陽",
    "sourcePage": 106,
    "id": "edexcel-0603"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "summer",
    "traditional": "夏天",
    "sourcePage": 106,
    "id": "edexcel-0604"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "to rain",
    "traditional": "下雨",
    "sourcePage": 106,
    "id": "edexcel-0605"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "to snow",
    "traditional": "下雪",
    "sourcePage": 106,
    "id": "edexcel-0606"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "weather",
    "traditional": "天氣",
    "sourcePage": 106,
    "id": "edexcel-0607"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "wind",
    "traditional": "風",
    "sourcePage": 106,
    "id": "edexcel-0608"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "windy",
    "traditional": "刮風/大風",
    "sourcePage": 106,
    "id": "edexcel-0609"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "foundation",
    "english": "winter",
    "traditional": "冬天",
    "sourcePage": 106,
    "id": "edexcel-0610"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "higher",
    "english": "lowest temperature",
    "traditional": "最低氣溫",
    "sourcePage": 106,
    "id": "edexcel-0611"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "higher",
    "english": "highest temperature",
    "traditional": "最高氣溫",
    "sourcePage": 106,
    "id": "edexcel-0612"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "higher",
    "english": "temperature",
    "traditional": "氣溫",
    "sourcePage": 106,
    "id": "edexcel-0613"
  },
  {
    "section": "topic-specific",
    "category": "weather",
    "tier": "higher",
    "english": "weather forecast",
    "traditional": "天氣預報",
    "sourcePage": 106,
    "id": "edexcel-0614"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "behind",
    "traditional": "後邊",
    "sourcePage": 106,
    "id": "edexcel-0615"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "direction",
    "traditional": "方向",
    "sourcePage": 106,
    "id": "edexcel-0616"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "far",
    "traditional": "遠",
    "sourcePage": 106,
    "id": "edexcel-0617"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "go straight on",
    "traditional": "一直走",
    "sourcePage": 106,
    "id": "edexcel-0618"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "in front of",
    "traditional": "在……前邊",
    "sourcePage": 106,
    "id": "edexcel-0619"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "near (in distance)/close by",
    "traditional": "近",
    "sourcePage": 106,
    "id": "edexcel-0620"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "next to",
    "traditional": "在……旁邊",
    "sourcePage": 106,
    "id": "edexcel-0621"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "on foot",
    "traditional": "走路",
    "sourcePage": 106,
    "id": "edexcel-0622"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "on the left",
    "traditional": "左邊",
    "sourcePage": 106,
    "id": "edexcel-0623"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "on the right",
    "traditional": "右邊",
    "sourcePage": 106,
    "id": "edexcel-0624"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "opposite",
    "traditional": "對面",
    "sourcePage": 106,
    "id": "edexcel-0625"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "the next",
    "traditional": "下一個",
    "sourcePage": 106,
    "id": "edexcel-0626"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "to cross (road, bridge, river etc.)",
    "traditional": "過",
    "sourcePage": 106,
    "id": "edexcel-0627"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "to turn (left, right)",
    "traditional": "轉",
    "sourcePage": 106,
    "id": "edexcel-0628"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "towards",
    "traditional": "向",
    "sourcePage": 106,
    "id": "edexcel-0629"
  },
  {
    "section": "topic-specific",
    "category": "asking-directions",
    "tier": "core",
    "english": "east",
    "traditional": "東",
    "sourcePage": 106,
    "id": "edexcel-0630"
  },
  {
    "section": "topic-specific",
    "category": "dealing-with-problems",
    "tier": "foundation",
    "english": "to change (to another one)",
    "traditional": "換",
    "sourcePage": 107,
    "id": "edexcel-0631"
  },
  {
    "section": "topic-specific",
    "category": "dealing-with-problems",
    "tier": "foundation",
    "english": "damaged/broken",
    "traditional": "壞了",
    "sourcePage": 107,
    "id": "edexcel-0632"
  },
  {
    "section": "topic-specific",
    "category": "dealing-with-problems",
    "tier": "foundation",
    "english": "disappear/lost something",
    "traditional": "不見了",
    "sourcePage": 107,
    "id": "edexcel-0633"
  },
  {
    "section": "topic-specific",
    "category": "dealing-with-problems",
    "tier": "foundation",
    "english": "manager",
    "traditional": "經理",
    "sourcePage": 107,
    "id": "edexcel-0634"
  },
  {
    "section": "topic-specific",
    "category": "dealing-with-problems",
    "tier": "foundation",
    "english": "mistake",
    "traditional": "不對/錯",
    "sourcePage": 107,
    "id": "edexcel-0635"
  },
  {
    "section": "topic-specific",
    "category": "dealing-with-problems",
    "tier": "foundation",
    "english": "noisy",
    "traditional": "吵",
    "sourcePage": 107,
    "id": "edexcel-0636"
  },
  {
    "section": "topic-specific",
    "category": "dealing-with-problems",
    "tier": "foundation",
    "english": "police/policeman",
    "traditional": "警察",
    "sourcePage": 107,
    "id": "edexcel-0637"
  },
  {
    "section": "topic-specific",
    "category": "dealing-with-problems",
    "tier": "foundation",
    "english": "service",
    "traditional": "服務",
    "sourcePage": 107,
    "id": "edexcel-0638"
  },
  {
    "section": "topic-specific",
    "category": "dealing-with-problems",
    "tier": "higher",
    "english": "ill/sick/unwell",
    "traditional": "生病/不舒服",
    "sourcePage": 107,
    "id": "edexcel-0639"
  },
  {
    "section": "topic-specific",
    "category": "dealing-with-problems",
    "tier": "higher",
    "english": "noise",
    "traditional": "噪音",
    "sourcePage": 107,
    "id": "edexcel-0640"
  },
  {
    "section": "topic-specific",
    "category": "dealing-with-problems",
    "tier": "higher",
    "english": "pleased/satisfactory",
    "traditional": "滿意",
    "sourcePage": 107,
    "id": "edexcel-0641"
  },
  {
    "section": "topic-specific",
    "category": "dealing-with-problems",
    "tier": "higher",
    "english": "safe",
    "traditional": "安全",
    "sourcePage": 107,
    "id": "edexcel-0642"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "book",
    "traditional": "書",
    "sourcePage": 107,
    "id": "edexcel-0643"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "classroom",
    "traditional": "教室",
    "sourcePage": 107,
    "id": "edexcel-0644"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "dictionary",
    "traditional": "字典",
    "sourcePage": 107,
    "id": "edexcel-0645"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "examination",
    "traditional": "考試",
    "sourcePage": 107,
    "id": "edexcel-0646"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "exchange",
    "traditional": "交換",
    "sourcePage": 107,
    "id": "edexcel-0647"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "foreign languages",
    "traditional": "外語",
    "sourcePage": 107,
    "id": "edexcel-0648"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "geography",
    "traditional": "地理",
    "sourcePage": 107,
    "id": "edexcel-0649"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "go to school (as a student)",
    "traditional": "上學",
    "sourcePage": 107,
    "id": "edexcel-0650"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "have a lesson",
    "traditional": "上課",
    "sourcePage": 107,
    "id": "edexcel-0651"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "head teacher",
    "traditional": "校長",
    "sourcePage": 107,
    "id": "edexcel-0652"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "history",
    "traditional": "歷史",
    "sourcePage": 107,
    "id": "edexcel-0653"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "homework",
    "traditional": "作業",
    "sourcePage": 107,
    "id": "edexcel-0654"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "maths",
    "traditional": "數學",
    "sourcePage": 107,
    "id": "edexcel-0655"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "music",
    "traditional": "音樂",
    "sourcePage": 107,
    "id": "edexcel-0656"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "P.E. (physical education)",
    "traditional": "體育",
    "sourcePage": 107,
    "id": "edexcel-0657"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "pen",
    "traditional": "筆",
    "sourcePage": 107,
    "id": "edexcel-0658"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "pressure",
    "traditional": "壓力",
    "sourcePage": 107,
    "id": "edexcel-0659"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "primary school",
    "traditional": "小學",
    "sourcePage": 107,
    "id": "edexcel-0660"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "results, marks, achievement",
    "traditional": "成績",
    "sourcePage": 107,
    "id": "edexcel-0661"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "rule",
    "traditional": "規定",
    "sourcePage": 107,
    "id": "edexcel-0662"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "school term",
    "traditional": "學期",
    "sourcePage": 108,
    "id": "edexcel-0663"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "school uniform",
    "traditional": "校服",
    "sourcePage": 108,
    "id": "edexcel-0664"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "schoolmate, classmate",
    "traditional": "同學",
    "sourcePage": 108,
    "id": "edexcel-0665"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "science",
    "traditional": "科學",
    "sourcePage": 108,
    "id": "edexcel-0666"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "secondary school",
    "traditional": "中學",
    "sourcePage": 108,
    "id": "edexcel-0667"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "student",
    "traditional": "學生",
    "sourcePage": 108,
    "id": "edexcel-0668"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "subject",
    "traditional": "科目",
    "sourcePage": 108,
    "id": "edexcel-0669"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "summer holiday",
    "traditional": "暑假",
    "sourcePage": 108,
    "id": "edexcel-0670"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "teacher",
    "traditional": "老師",
    "sourcePage": 108,
    "id": "edexcel-0671"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "foundation",
    "english": "university",
    "traditional": "大學",
    "sourcePage": 108,
    "id": "edexcel-0672"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "Biology",
    "traditional": "生物",
    "sourcePage": 108,
    "id": "edexcel-0673"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "break",
    "traditional": "休息",
    "sourcePage": 108,
    "id": "edexcel-0674"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "celebrating success",
    "traditional": "慶祝成功",
    "sourcePage": 108,
    "id": "edexcel-0675"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "Chemistry",
    "traditional": "化學",
    "sourcePage": 108,
    "id": "edexcel-0676"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "essay",
    "traditional": "文章",
    "sourcePage": 108,
    "id": "edexcel-0677"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "GCE equivalent",
    "traditional": "高考",
    "sourcePage": 108,
    "id": "edexcel-0678"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "GCSE equivalent",
    "traditional": "中學會考",
    "sourcePage": 108,
    "id": "edexcel-0679"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "graduate",
    "traditional": "畢業",
    "sourcePage": 108,
    "id": "edexcel-0680"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "mark, grade",
    "traditional": "分數",
    "sourcePage": 108,
    "id": "edexcel-0681"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "physics",
    "traditional": "物理",
    "sourcePage": 108,
    "id": "edexcel-0682"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "school exchange",
    "traditional": "校際交換",
    "sourcePage": 108,
    "id": "edexcel-0683"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "school events/school activites",
    "traditional": "學校活動",
    "sourcePage": 108,
    "id": "edexcel-0684"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "student studying abroad",
    "traditional": "留學生",
    "sourcePage": 108,
    "id": "edexcel-0685"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "timetable",
    "traditional": "時間表",
    "sourcePage": 108,
    "id": "edexcel-0686"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "to pay attention",
    "traditional": "集中/用心",
    "sourcePage": 108,
    "id": "edexcel-0687"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "plan, intention",
    "traditional": "打算",
    "sourcePage": 108,
    "id": "edexcel-0688"
  },
  {
    "section": "topic-specific",
    "category": "school",
    "tier": "higher",
    "english": "plan, to plan",
    "traditional": "計劃",
    "sourcePage": 108,
    "id": "edexcel-0689"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "actor/actress",
    "traditional": "演員",
    "sourcePage": 108,
    "id": "edexcel-0690"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "advert",
    "traditional": "廣告",
    "sourcePage": 108,
    "id": "edexcel-0691"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "ambition/ideal",
    "traditional": "理想",
    "sourcePage": 108,
    "id": "edexcel-0692"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "aspiration",
    "traditional": "心願",
    "sourcePage": 108,
    "id": "edexcel-0693"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "business/trade",
    "traditional": "做生意",
    "sourcePage": 108,
    "id": "edexcel-0694"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "company/office",
    "traditional": "公司",
    "sourcePage": 109,
    "id": "edexcel-0695"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "doctor",
    "traditional": "醫生",
    "sourcePage": 109,
    "id": "edexcel-0696"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "driver",
    "traditional": "司機",
    "sourcePage": 109,
    "id": "edexcel-0697"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "engineer",
    "traditional": "工程師",
    "sourcePage": 109,
    "id": "edexcel-0698"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "employment",
    "traditional": "僱傭",
    "sourcePage": 109,
    "id": "edexcel-0699"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "famous",
    "traditional": "有名",
    "sourcePage": 109,
    "id": "edexcel-0700"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "interview",
    "traditional": "訪問/採訪",
    "sourcePage": 109,
    "id": "edexcel-0701"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "(job) interview",
    "traditional": "面試",
    "sourcePage": 109,
    "id": "edexcel-0702"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "introduction, to introduce",
    "traditional": "介紹",
    "sourcePage": 109,
    "id": "edexcel-0703"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "job, work",
    "traditional": "工作",
    "sourcePage": 109,
    "id": "edexcel-0704"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "journalist",
    "traditional": "記者",
    "sourcePage": 109,
    "id": "edexcel-0705"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "magazine",
    "traditional": "雜誌",
    "sourcePage": 109,
    "id": "edexcel-0706"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "news",
    "traditional": "新聞",
    "sourcePage": 109,
    "id": "edexcel-0707"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "newspaper",
    "traditional": "報紙",
    "sourcePage": 109,
    "id": "edexcel-0708"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "nurse",
    "traditional": "護士",
    "sourcePage": 109,
    "id": "edexcel-0709"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "part time",
    "traditional": "兼職",
    "sourcePage": 109,
    "id": "edexcel-0710"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "profession",
    "traditional": "職業",
    "sourcePage": 109,
    "id": "edexcel-0711"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "salary",
    "traditional": "工資",
    "sourcePage": 109,
    "id": "edexcel-0712"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "sales assistant",
    "traditional": "售貨員",
    "sourcePage": 109,
    "id": "edexcel-0713"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "singer",
    "traditional": "歌星",
    "sourcePage": 109,
    "id": "edexcel-0714"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "study",
    "traditional": "學習",
    "sourcePage": 109,
    "id": "edexcel-0715"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "to apply, application",
    "traditional": "申請",
    "sourcePage": 109,
    "id": "edexcel-0716"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "to earn money",
    "traditional": "賺錢",
    "sourcePage": 109,
    "id": "edexcel-0717"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "to recruit, to employ",
    "traditional": "招請/聘請",
    "sourcePage": 109,
    "id": "edexcel-0718"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "training",
    "traditional": "訓練/培訓",
    "sourcePage": 109,
    "id": "edexcel-0719"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "travel agency",
    "traditional": "旅行社",
    "sourcePage": 109,
    "id": "edexcel-0720"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "volunteer",
    "traditional": "志願者/義工",
    "sourcePage": 109,
    "id": "edexcel-0721"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "volunteering",
    "traditional": "志願服務/義工服務",
    "sourcePage": 109,
    "id": "edexcel-0722"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "foundation",
    "english": "worker",
    "traditional": "工人",
    "sourcePage": 109,
    "id": "edexcel-0723"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "higher",
    "english": "beyond the classroom",
    "traditional": "課外",
    "sourcePage": 109,
    "id": "edexcel-0724"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "higher",
    "english": "building relationships",
    "traditional": "建立關係",
    "sourcePage": 109,
    "id": "edexcel-0725"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "higher",
    "english": "cook/chef",
    "traditional": "厨師",
    "sourcePage": 109,
    "id": "edexcel-0726"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "higher",
    "english": "confidence",
    "traditional": "信心",
    "sourcePage": 109,
    "id": "edexcel-0727"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "higher",
    "english": "experienced",
    "traditional": "有經驗",
    "sourcePage": 109,
    "id": "edexcel-0728"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "higher",
    "english": "further study",
    "traditional": "進一步學習",
    "sourcePage": 109,
    "id": "edexcel-0729"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "higher",
    "english": "organisation",
    "traditional": "組織/機構",
    "sourcePage": 109,
    "id": "edexcel-0730"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "higher",
    "english": "organiser",
    "traditional": "組織者",
    "sourcePage": 109,
    "id": "edexcel-0731"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "higher",
    "english": "to reduce, to cut back",
    "traditional": "減少",
    "sourcePage": 110,
    "id": "edexcel-0732"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "higher",
    "english": "success, successful",
    "traditional": "成功",
    "sourcePage": 110,
    "id": "edexcel-0733"
  },
  {
    "section": "topic-specific",
    "category": "future-study-work",
    "tier": "higher",
    "english": "work experience",
    "traditional": "工作經驗",
    "sourcePage": 110,
    "id": "edexcel-0734"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "animals",
    "traditional": "勳物",
    "sourcePage": 110,
    "id": "edexcel-0735"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "audience",
    "traditional": "觀眾",
    "sourcePage": 110,
    "id": "edexcel-0736"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "being ‘green’",
    "traditional": "綠色環保的",
    "sourcePage": 110,
    "id": "edexcel-0737"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "campaign",
    "traditional": "運動",
    "sourcePage": 110,
    "id": "edexcel-0738"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "carry on",
    "traditional": "繼續",
    "sourcePage": 110,
    "id": "edexcel-0739"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "charity",
    "traditional": "慈善",
    "sourcePage": 110,
    "id": "edexcel-0740"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "donate",
    "traditional": "捐",
    "sourcePage": 110,
    "id": "edexcel-0741"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "good causes",
    "traditional": "公益",
    "sourcePage": 110,
    "id": "edexcel-0742"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "electricity",
    "traditional": "電",
    "sourcePage": 110,
    "id": "edexcel-0743"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "environment",
    "traditional": "環境",
    "sourcePage": 110,
    "id": "edexcel-0744"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "environmental issues",
    "traditional": "環境問題",
    "sourcePage": 110,
    "id": "edexcel-0745"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "(music) festival",
    "traditional": "(音樂)節",
    "sourcePage": 110,
    "id": "edexcel-0746"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "gas",
    "traditional": "煤氣",
    "sourcePage": 110,
    "id": "edexcel-0747"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "global, world wide",
    "traditional": "全球",
    "sourcePage": 110,
    "id": "edexcel-0748"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "important",
    "traditional": "重要",
    "sourcePage": 110,
    "id": "edexcel-0749"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "international",
    "traditional": "國際",
    "sourcePage": 110,
    "id": "edexcel-0750"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "international activity",
    "traditional": "國際活動",
    "sourcePage": 110,
    "id": "edexcel-0751"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "music event",
    "traditional": "音樂活動",
    "sourcePage": 110,
    "id": "edexcel-0752"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "natural resources",
    "traditional": "自然資源",
    "sourcePage": 110,
    "id": "edexcel-0753"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "Olympic Games",
    "traditional": "奧運會",
    "sourcePage": 110,
    "id": "edexcel-0754"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "protection, to protect",
    "traditional": "保護",
    "sourcePage": 110,
    "id": "edexcel-0755"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "recycling",
    "traditional": "回收",
    "sourcePage": 110,
    "id": "edexcel-0756"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "rubbish",
    "traditional": "垃圾",
    "sourcePage": 110,
    "id": "edexcel-0757"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "to save (water)",
    "traditional": "節約（水）",
    "sourcePage": 110,
    "id": "edexcel-0758"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "sports event",
    "traditional": "運動會",
    "sourcePage": 110,
    "id": "edexcel-0759"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "wasteful, to waste",
    "traditional": "浪費",
    "sourcePage": 110,
    "id": "edexcel-0760"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "world",
    "traditional": "世界",
    "sourcePage": 110,
    "id": "edexcel-0761"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "foundation",
    "english": "World Cup (football)",
    "traditional": "世界盃/杯(足球)",
    "sourcePage": 110,
    "id": "edexcel-0762"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "higher",
    "english": "climate",
    "traditional": "氣候",
    "sourcePage": 111,
    "id": "edexcel-0763"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "higher",
    "english": "global warming",
    "traditional": "全球變暖",
    "sourcePage": 111,
    "id": "edexcel-0764"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "higher",
    "english": "pollution, to pollute, to contaminate",
    "traditional": "污染",
    "sourcePage": 111,
    "id": "edexcel-0765"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "higher",
    "english": "poverty",
    "traditional": "貧窮",
    "sourcePage": 111,
    "id": "edexcel-0766"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "higher",
    "english": "security",
    "traditional": "安全",
    "sourcePage": 111,
    "id": "edexcel-0767"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "higher",
    "english": "solar power",
    "traditional": "太陽能",
    "sourcePage": 111,
    "id": "edexcel-0768"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "higher",
    "english": "to save (energy)",
    "traditional": "節約(能源)",
    "sourcePage": 111,
    "id": "edexcel-0769"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "higher",
    "english": "to sort/separate (eg rubbish)",
    "traditional": "分類(垃圾)",
    "sourcePage": 111,
    "id": "edexcel-0770"
  },
  {
    "section": "topic-specific",
    "category": "international-global",
    "tier": "higher",
    "english": "volcano",
    "traditional": "火山",
    "sourcePage": 111,
    "id": "edexcel-0771"
  }
];
