const tarotCards = [
  {
    name: "愚者 The Fool",
    arcana: "Major",
    suit: "Major",
    element: "风 Air",
    keywords: ["开始", "自由", "信任", "冒险"],
    upright: "一条新的道路正在打开。愚者提醒你保持好奇、勇气，以及愿意从经验中学习的心。",
    reversed: "天真、逃避，或害怕迈出第一步。先看清脚下，再带着觉察做选择。"
  },
  {
    name: "魔术师 The Magician",
    arcana: "Major",
    suit: "Major",
    element: "风 Air",
    keywords: ["意志", "技能", "显化", "专注"],
    upright: "你已经拥有可用的工具。把注意力、语言和行动导向一个清晰的意图。",
    reversed: "能量分散、操控，或天赋尚未被使用。把行动带回专注与诚实。"
  },
  {
    name: "女祭司 The High Priestess",
    arcana: "Major",
    suit: "Major",
    element: "水 Water",
    keywords: ["直觉", "神秘", "静默", "梦境"],
    upright: "答案是安静的。相信内在知晓、象征、梦境，以及尚未被说出口的部分。",
    reversed: "直觉受阻，或有信息被隐藏。在急着确定之前，先给自己一点安静空间。"
  },
  {
    name: "皇后 The Empress",
    arcana: "Major",
    suit: "Major",
    element: "土 Earth",
    keywords: ["生长", "美感", "滋养", "创造"],
    upright: "滋养正在生长的事物。创造力、舒适感和身体感会帮助它开花结果。",
    reversed: "过度付出、创造力堵塞，或忽略身体需求。重新找回滋养与边界。"
  },
  {
    name: "皇帝 The Emperor",
    arcana: "Major",
    suit: "Major",
    element: "火 Fire",
    keywords: ["结构", "权威", "纪律", "保护"],
    upright: "建立框架。规则、责任和领导力会创造稳定的容器。",
    reversed: "僵化、控制，或边界不稳。找回成熟的权威，而不是压迫。"
  },
  {
    name: "恋人 The Lovers",
    arcana: "Major",
    suit: "Major",
    element: "风 Air",
    keywords: ["选择", "价值观", "结合", "一致"],
    upright: "从内心和价值观出发做选择。真正的结合始于内在一致。",
    reversed: "不一致、逃避，或欲望冲突。先看清自己真正选择的是什么。"
  },
  {
    name: "战车 The Chariot",
    arcana: "Major",
    suit: "Major",
    element: "水 Water",
    keywords: ["方向", "意志力", "胜利", "掌控"],
    upright: "带着纪律驾驭情绪。进展来自把相反力量导向同一个目标。",
    reversed: "失去方向、用力过猛，或疲惫耗竭。在继续冲刺前先重新校准。"
  },
  {
    name: "力量 Strength",
    arcana: "Major",
    suit: "Major",
    element: "火 Fire",
    keywords: ["勇气", "耐心", "慈悲", "内在力量"],
    upright: "温柔也是力量。勇气会通过耐心、柔软与自我掌握慢慢长出来。",
    reversed: "自我怀疑、反应过度，或压抑本能。用关怀面对内在的野性。"
  },
  {
    name: "隐士 The Hermit",
    arcana: "Major",
    suit: "Major",
    element: "土 Earth",
    keywords: ["独处", "智慧", "寻索", "指引"],
    upright: "退后一步，听见更深的课程。独处会把经验转化为智慧。",
    reversed: "孤立、退缩，或拒绝指引。让安静教你，但不要从世界中消失。"
  },
  {
    name: "死神 Death",
    arcana: "Major",
    suit: "Major",
    element: "水 Water",
    keywords: ["结束", "转化", "释放", "门槛"],
    upright: "某个形式已经完成。放下已经结束的部分，新的生命才有空间开始。",
    reversed: "抗拒改变、迟迟无法收尾，或害怕失去。转化需要你的同意。"
  },
  {
    name: "高塔 The Tower",
    arcana: "Major",
    suit: "Major",
    element: "火 Fire",
    keywords: ["震荡", "真相", "崩塌", "觉醒"],
    upright: "虚假的结构正在裂开。突如其来的真相会为更诚实的事物清出空间。",
    reversed: "被回避的危机，或内在的剧烈动荡。修复始于承认什么已经站不住脚。"
  },
  {
    name: "星星 The Star",
    arcana: "Major",
    suit: "Major",
    element: "风 Air",
    keywords: ["希望", "疗愈", "更新", "指引"],
    upright: "困难之后，光会回来。慢慢疗愈，并把方向交给值得信任的未来。",
    reversed: "灰心，或失去信念。让那些微小的更新迹象也变得重要。"
  },
  {
    name: "月亮 The Moon",
    arcana: "Major",
    suit: "Major",
    element: "水 Water",
    keywords: ["梦境", "幻象", "阴影", "直觉"],
    upright: "道路并不明亮，但它有意义。和象征、感受、不确定性一起工作。",
    reversed: "混乱开始散开，或恐惧正在向内投射。温柔地检验你的感受。"
  },
  {
    name: "太阳 The Sun",
    arcana: "Major",
    suit: "Major",
    element: "火 Fire",
    keywords: ["喜悦", "清晰", "成功", "生命力"],
    upright: "清晰感温暖了整个局面。允许自己被看见、感恩，并活在当下。",
    reversed: "喜悦被压低、暂时延迟，或难以接收好事。让光慢慢进来。"
  },
  {
    name: "权杖王牌 Ace of Wands",
    arcana: "Minor",
    suit: "权杖 Wands",
    element: "火 Fire",
    keywords: ["火花", "渴望", "主动", "创造"],
    upright: "一股新的创造力想要表达出来。在火焰冷却前先开始。",
    reversed: "火花受阻、开局不顺，或渴望尚不确定。先保护能量，等它真正点燃。"
  },
  {
    name: "圣杯二 Two of Cups",
    arcana: "Minor",
    suit: "圣杯 Cups",
    element: "水 Water",
    keywords: ["联结", "互惠", "吸引", "修复"],
    upright: "当双方都诚实相遇时，关系本身会成为一种疗愈。",
    reversed: "不和谐、交换不平衡，或一段需要修复的关系。"
  },
  {
    name: "宝剑三 Three of Swords",
    arcana: "Minor",
    suit: "宝剑 Swords",
    element: "风 Air",
    keywords: ["心碎", "真相", "悲伤", "释放"],
    upright: "一个痛苦的真相需要被感受、被命名。清晰会成为疗愈的开始。",
    reversed: "旧伤正在变软，或悲伤仍被压在心里。让心重新呼吸。"
  },
  {
    name: "星币四 Four of Pentacles",
    arcana: "Minor",
    suit: "星币 Pentacles",
    element: "土 Earth",
    keywords: ["安全", "控制", "紧握", "匮乏"],
    upright: "保护资源是必要的，但也要注意安全感何时变成紧抓不放。",
    reversed: "放松控制、金钱焦虑，或学习不带恐惧地分享。"
  },
  {
    name: "圣杯十 Ten of Cups",
    arcana: "Minor",
    suit: "圣杯 Cups",
    element: "水 Water",
    keywords: ["和谐", "归属", "喜悦", "家"],
    upright: "情感满足来自共享的喜悦、归属感与感恩。",
    reversed: "内心的理想可能与现实不一致。诚实地重新定义幸福。"
  },
  {
    name: "宝剑皇后 Queen of Swords",
    arcana: "Minor",
    suit: "宝剑 Swords",
    element: "风 Air",
    keywords: ["辨识", "真相", "边界", "清晰"],
    upright: "清楚地表达，并用智慧做选择。慈悲不需要以混乱为代价。",
    reversed: "冷漠、严苛评判，或把真相当作防御。让头脑锋利，但别关闭心。"
  }
];

const rwsBaseUrl = "https://commons.wikimedia.org/wiki/Special:FilePath/";

const majorImageFiles = {
  "The Fool": "RWS_Tarot_00_Fool.jpg",
  "The Magician": "RWS_Tarot_01_Magician.jpg",
  "The High Priestess": "RWS_Tarot_02_High_Priestess.jpg",
  "The Empress": "RWS_Tarot_03_Empress.jpg",
  "The Emperor": "RWS_Tarot_04_Emperor.jpg",
  "The Hierophant": "RWS_Tarot_05_Hierophant.jpg",
  "The Lovers": "RWS_Tarot_06_Lovers.jpg",
  "The Chariot": "RWS_Tarot_07_Chariot.jpg",
  "Strength": "RWS_Tarot_08_Strength.jpg",
  "The Hermit": "RWS_Tarot_09_Hermit.jpg",
  "Wheel of Fortune": "RWS_Tarot_10_Wheel_of_Fortune.jpg",
  "Justice": "RWS_Tarot_11_Justice.jpg",
  "The Hanged Man": "RWS_Tarot_12_Hanged_Man.jpg",
  "Death": "RWS_Tarot_13_Death.jpg",
  "Temperance": "RWS_Tarot_14_Temperance.jpg",
  "The Devil": "RWS_Tarot_15_Devil.jpg",
  "The Tower": "RWS_Tarot_16_Tower.jpg",
  "The Star": "RWS_Tarot_17_Star.jpg",
  "The Moon": "RWS_Tarot_18_Moon.jpg",
  "The Sun": "RWS_Tarot_19_Sun.jpg",
  "Judgement": "RWS_Tarot_20_Judgement.jpg",
  "The World": "RWS_Tarot_21_World.jpg"
};

const majorBasics = [
  [0, "愚人", "The Fool", "风 Air", ["开始", "自由", "信任", "冒险"], ["beginning", "freedom", "trust", "adventure"]],
  [1, "魔术师", "The Magician", "四元素 Elements", ["意志", "资源", "显化", "行动"], ["will", "resources", "manifestation", "action"]],
  [2, "女祭司", "The High Priestess", "水 Water", ["直觉", "静默", "秘密", "潜意识"], ["intuition", "silence", "secrets", "subconscious"]],
  [3, "皇后", "The Empress", "土 Earth", ["丰盛", "滋养", "创造", "身体", "自然"], ["abundance", "nurturing", "creation", "body", "nature"]],
  [4, "皇帝", "The Emperor", "火 Fire", ["结构", "权威", "纪律", "保护"], ["structure", "authority", "discipline", "protection"]],
  [5, "教皇", "The Hierophant", "土 Earth", ["传统", "信念", "学习", "制度"], ["tradition", "belief", "learning", "institution"]],
  [6, "恋人", "The Lovers", "风 Air", ["关系", "选择", "价值观", "结合"], ["relationship", "choice", "values", "union"]],
  [7, "战车", "The Chariot", "水 Water", ["方向", "意志", "胜利", "掌控"], ["direction", "willpower", "victory", "control"]],
  [8, "力量", "Strength", "火 Fire", ["勇气", "耐心", "慈悲", "本能"], ["courage", "patience", "compassion", "instinct"]],
  [9, "隐士", "The Hermit", "土 Earth", ["独处", "智慧", "寻找", "指引"], ["solitude", "wisdom", "search", "guidance"]],
  [10, "命运之轮", "Wheel of Fortune", "火 Fire", ["转变", "周期", "机会", "命运"], ["change", "cycle", "chance", "fate"]],
  [11, "正义", "Justice", "风 Air", ["公平", "真相", "选择", "因果"], ["fairness", "truth", "choice", "karma"]],
  [12, "倒吊人", "The Hanged Man", "水 Water", ["暂停", "臣服", "视角", "等待"], ["pause", "surrender", "perspective", "waiting"]],
  [13, "死神", "Death", "水 Water", ["结束", "释放", "转化", "重生"], ["ending", "release", "transformation", "rebirth"]],
  [14, "节制", "Temperance", "火 Fire", ["调和", "整合", "耐心", "疗愈"], ["balance", "integration", "patience", "healing"]],
  [15, "恶魔", "The Devil", "土 Earth", ["束缚", "欲望", "执着", "阴影"], ["bondage", "desire", "attachment", "shadow"]],
  [16, "塔", "The Tower", "火 Fire", ["冲击", "崩塌", "真相", "觉醒"], ["shock", "collapse", "truth", "awakening"]],
  [17, "星星", "The Star", "风 Air", ["希望", "疗愈", "更新", "指引"], ["hope", "healing", "renewal", "guidance"]],
  [18, "月亮", "The Moon", "水 Water", ["梦境", "迷雾", "恐惧", "直觉"], ["dreams", "fog", "fear", "intuition"]],
  [19, "太阳", "The Sun", "火 Fire", ["清晰", "喜悦", "成功", "生命力"], ["clarity", "joy", "success", "vitality"]],
  [20, "审判", "Judgement", "火 Fire", ["召唤", "觉醒", "复盘", "更新"], ["calling", "awakening", "review", "renewal"]],
  [21, "世界", "The World", "土 Earth", ["完成", "整合", "成就", "旅程"], ["completion", "integration", "achievement", "journey"]]
];

const suitBasics = [
  { key: "Wands", zh: "权杖", element: "火 Fire", elementZh: "火元素", file: "Wands", keywordsZh: ["行动", "创造", "热情", "事业"], keywordsEn: ["action", "creation", "passion", "career"] },
  { key: "Cups", zh: "圣杯", element: "水 Water", elementZh: "水元素", file: "Cups", keywordsZh: ["情绪", "关系", "直觉", "爱"], keywordsEn: ["emotion", "relationship", "intuition", "love"] },
  { key: "Swords", zh: "宝剑", element: "风 Air", elementZh: "风元素", file: "Swords", keywordsZh: ["思维", "沟通", "冲突", "真相"], keywordsEn: ["thought", "communication", "conflict", "truth"] },
  { key: "Pentacles", zh: "星币", element: "土 Earth", elementZh: "土元素", file: "Pentacles", keywordsZh: ["金钱", "身体", "工作", "稳定"], keywordsEn: ["money", "body", "work", "stability"] }
];

const rankBasics = [
  ["一", "Ace", "1", "01", ["开始", "种子", "潜能"], ["beginning", "seed", "potential"]],
  ["二", "Two", "2", "02", ["选择", "平衡", "关系"], ["choice", "balance", "partnership"]],
  ["三", "Three", "3", "03", ["成长", "表达", "合作"], ["growth", "expression", "collaboration"]],
  ["四", "Four", "4", "04", ["结构", "稳定", "限制"], ["structure", "stability", "limit"]],
  ["五", "Five", "5", "05", ["冲突", "变化", "不稳定"], ["conflict", "change", "instability"]],
  ["六", "Six", "6", "06", ["和谐", "调整", "疗愈"], ["harmony", "adjustment", "healing"]],
  ["七", "Seven", "7", "07", ["挑战", "信念", "策略"], ["challenge", "faith", "strategy"]],
  ["八", "Eight", "8", "08", ["推进", "力量", "掌握"], ["movement", "power", "mastery"]],
  ["九", "Nine", "9", "09", ["成熟", "积累", "接近完成"], ["culmination", "accumulation", "near completion"]],
  ["十", "Ten", "10", "10", ["完成", "负担", "周期结束"], ["completion", "burden", "cycle ending"]],
  ["侍从", "Page", "Page", "11", ["学习", "消息", "好奇"], ["learning", "message", "curiosity"]],
  ["骑士", "Knight", "Knight", "12", ["行动", "追求", "推进"], ["action", "pursuit", "movement"]],
  ["王后", "Queen", "Queen", "13", ["成熟", "承载", "内在掌握"], ["maturity", "holding", "inner mastery"]],
  ["国王", "King", "King", "14", ["领导", "掌控", "外在表达"], ["leadership", "command", "outer expression"]]
];

const fullTarotCatalog = [
  ...majorBasics.map(([number, zhName, nameEn, element, keywordsZh, keywordsEn]) => ({
    id: `major-${String(number).padStart(2, "0")}`,
    name: `${zhName} ${nameEn}`,
    zhName,
    nameEn,
    arcana: "Major",
    arcanaZh: "大阿尔卡那",
    suit: "Major",
    suitZh: "",
    number: String(number),
    element,
    elementZh: element.replace(" Air", "元素").replace(" Water", "元素").replace(" Fire", "元素").replace(" Earth", "元素").replace(" Elements", "元素"),
    keywordsZh,
    keywordsEn,
    keywords: keywordsZh,
    image: `${rwsBaseUrl}${majorImageFiles[nameEn]}`,
    imageAlt: `Rider-Waite-Smith ${zhName} ${nameEn} tarot card`,
    upright: `${zhName}的基础牌义待继续扩展。`,
    reversed: `${zhName}的逆位基础牌义待继续扩展。`
  })),
  ...suitBasics.flatMap((suit) => rankBasics.map(([rankZh, rankEn, number, fileNo, rankKeywordsZh, rankKeywordsEn]) => {
    const zhName = `${suit.zh}${rankZh}`;
    const nameEn = `${rankEn} of ${suit.key}`;
    return {
      id: `${suit.key.toLowerCase()}-${String(number).toLowerCase()}`,
      name: `${zhName} ${nameEn}`,
      zhName,
      nameEn,
      arcana: "Minor",
      arcanaZh: "小阿尔卡那",
      suit: `${suit.zh} ${suit.key}`,
      suitZh: suit.zh,
      number,
      element: suit.element,
      elementZh: suit.elementZh,
      keywordsZh: [...rankKeywordsZh, ...suit.keywordsZh].slice(0, 5),
      keywordsEn: [...rankKeywordsEn, ...suit.keywordsEn].slice(0, 5),
      keywords: [...rankKeywordsZh, ...suit.keywordsZh].slice(0, 5),
      image: `${rwsBaseUrl}RWS_Tarot_${suit.file}${fileNo}.jpg`,
      imageAlt: `Rider-Waite-Smith ${zhName} ${nameEn} tarot card`,
      upright: `${zhName}的基础牌义待继续扩展。`,
      reversed: `${zhName}的逆位基础牌义待继续扩展。`
    };
  }))
];

const cardByEnglishName = new Map(tarotCards.map((card) => [card.name.replace(/^.*? (?=(?:The |Ace |Two |Three |Four |Five |Six |Seven |Eight |Nine |Ten |Page |Knight |Queen |King |Strength|Justice|Temperance|Death|Judgement|Wheel|World))/, ""), card]));
fullTarotCatalog.forEach((card) => {
  const existing = cardByEnglishName.get(card.nameEn);
  if (existing) {
    Object.assign(existing, card, {
      name: existing.name,
      upright: existing.upright,
      reversed: existing.reversed,
      keywords: existing.keywords?.length ? existing.keywords : card.keywords
    });
  } else {
    tarotCards.push(card);
  }
});

tarotCards.forEach((card) => {
  card.visited = false;
});

const cardVisualData = {
  "愚者 The Fool": {
    image: `${rwsBaseUrl}RWS_Tarot_00_Fool.jpg`,
    imageAlt: "Rider-Waite-Smith 愚者 The Fool 塔罗牌图",
    imageReading: ["人物站在悬崖边，身体向前，象征新的开始与未知旅程。", "白色小狗像本能和提醒，既代表陪伴，也提醒他注意现实风险。", "白玫瑰象征纯粹动机，轻便包袱暗示经验不多但心态开放。", "这张牌不是单纯鲁莽，而是带着信任、好奇和不确定性走向新阶段。"],
    studyTip: "先观察人物是否看向脚下：这能帮助你区分信任、冒险和现实风险。"
  },
  "魔术师 The Magician": {
    image: `${rwsBaseUrl}RWS_Tarot_01_Magician.jpg`,
    imageAlt: "Rider-Waite-Smith 魔术师 The Magician 塔罗牌图",
    imageReading: ["桌面上的权杖、圣杯、宝剑、星币代表四元素资源已经齐备。", "一手指天一手指地，象征把灵感转化为现实。", "红白配色暗示意志、行动与纯粹意图的结合。", "解读时可以关注：你是否已经拥有资源，只是还没有开始整合它们。"],
    studyTip: "问自己：资源是否已经在桌上，只是还没有被整合使用？"
  },
  "女祭司 The High Priestess": {
    image: `${rwsBaseUrl}RWS_Tarot_02_High_Priestess.jpg`,
    imageAlt: "Rider-Waite-Smith 女祭司 The High Priestess 塔罗牌图",
    imageReading: ["女祭司坐在黑白柱之间，象征二元、门槛和隐藏知识。", "卷轴半掩在怀中，提示答案存在，但尚未完全展开。", "月亮与水的意象强调直觉、梦境和潜意识。", "帷幕后的石榴图案连接神秘、生命力和内在智慧。"],
    studyTip: "不要急着解释；记录梦、身体感和直觉线索。"
  },
  "皇后 The Empress": {
    image: `${rwsBaseUrl}RWS_Tarot_03_Empress.jpg`,
    imageAlt: "Rider-Waite-Smith 皇后 The Empress 塔罗牌图",
    imageReading: ["麦田、树林和水流呈现滋养、身体感与自然生长。", "皇后的姿态放松而稳定，象征接纳、孕育和创造。", "柔软布料与星冠提示感官、美感和周期性的生命力。"],
    studyTip: "关注画面中的自然元素：它们常指向需要被滋养的部分。"
  },
  "皇帝 The Emperor": {
    image: `${rwsBaseUrl}RWS_Tarot_04_Emperor.jpg`,
    imageAlt: "Rider-Waite-Smith 皇帝 The Emperor 塔罗牌图",
    imageReading: ["石质王座和山脉背景强调结构、稳定、边界和现实责任。", "红色衣袍表现行动力与权威，手中的权杖象征掌控方向。", "画面整体坚硬、干燥，提醒秩序可以保护，也可能过度僵化。"],
    studyTip: "问：这里需要更清楚的规则，还是需要放松控制？"
  },
  "恋人 The Lovers": {
    image: `${rwsBaseUrl}RWS_Tarot_06_Lovers.jpg`,
    imageAlt: "Rider-Waite-Smith 恋人 The Lovers 塔罗牌图",
    imageReading: ["两个人物站在天使下方，象征关系、选择与更高价值的见证。", "男女分别对应意识与本能、理性与感受，需要彼此对齐。", "树、蛇和山暗示欲望、诱惑、成长与选择后的责任。", "这张牌不只讲爱情，也讲是否按真实价值观做决定。"],
    studyTip: "留意人物是否彼此相望：它能提示关系中的连接或选择焦点。"
  },
  "战车 The Chariot": {
    image: `${rwsBaseUrl}RWS_Tarot_07_Chariot.jpg`,
    imageAlt: "Rider-Waite-Smith 战车 The Chariot 塔罗牌图",
    imageReading: ["战车停在城市前方，表现从安全区域出发并掌握方向。", "黑白狮身人面像象征相反力量，需要被同一个意志统合。", "人物没有明显缰绳，暗示真正的控制来自内在意志。"],
    studyTip: "观察画面左右对称：问题常和整合两股力量有关。"
  },
  "力量 Strength": {
    image: `${rwsBaseUrl}RWS_Tarot_08_Strength.jpg`,
    imageAlt: "Rider-Waite-Smith 力量 Strength 塔罗牌图",
    imageReading: ["人物温柔地触碰狮子，说明力量并不总是压制，也可以是安抚。", "白衣与花环暗示纯粹、耐心和心性的修炼。", "狮子代表本能、欲望和生命力，需要被理解而非消灭。"],
    studyTip: "关注人物的手势：它常提示用柔软方式处理强烈能量。"
  },
  "隐士 The Hermit": {
    image: `${rwsBaseUrl}RWS_Tarot_09_Hermit.jpg`,
    imageAlt: "Rider-Waite-Smith 隐士 The Hermit 塔罗牌图",
    imageReading: ["老人站在山顶，象征经历、距离和从高处回望人生。", "灯笼中的星光代表内在指引，不是外界喧哗的答案。", "手杖支持他前行，也提示智慧来自缓慢而稳定的探索。"],
    studyTip: "这张牌在提醒退后观察，还是提醒不要过度孤立？"
  },
  "死神 Death": {
    image: `${rwsBaseUrl}RWS_Tarot_13_Death.jpg`,
    imageAlt: "Rider-Waite-Smith 死神 Death 塔罗牌图",
    imageReading: ["骑士持黑旗前行，象征不可逆的转化正在经过旧世界。", "地上的人物与远处太阳同时出现，说明结束和新生并存。", "白玫瑰并不恐怖，它提示净化、更新和生命循环。", "这张牌更多指向形式的结束，而不是简单的灾难。"],
    studyTip: "先问：什么形式已经完成？什么新阶段正在露出光？"
  },
  "高塔 The Tower": {
    image: `${rwsBaseUrl}RWS_Tarot_16_Tower.jpg`,
    imageAlt: "Rider-Waite-Smith 高塔 The Tower 塔罗牌图",
    imageReading: ["闪电击中高塔，象征突如其来的真相打破不稳固结构。", "皇冠被击落，提示旧有权威、身份或假设正在失效。", "人物坠落不是惩罚，而是被迫离开已经无法承载真实的地方。", "黑色背景和火焰强调震荡，但也清理出重建空间。"],
    studyTip: "问：崩塌的是事实本身，还是我们对事实的错误结构？"
  },
  "星星 The Star": {
    image: `${rwsBaseUrl}RWS_Tarot_17_Star.jpg`,
    imageAlt: "Rider-Waite-Smith 星星 The Star 塔罗牌图",
    imageReading: ["裸身人物把水倒向池中和土地，象征情绪与现实同时被疗愈。", "一只脚在水中、一只脚在地上，提示直觉与现实之间的平衡。", "天空中的大星与小星带来希望、方向和宇宙秩序感。", "整体画面安静开放，说明疗愈通常是柔和、持续的过程。"],
    studyTip: "留意水流方向：它常提示能量正在回到生命系统中。"
  },
  "月亮 The Moon": {
    image: `${rwsBaseUrl}RWS_Tarot_18_Moon.jpg`,
    imageAlt: "Rider-Waite-Smith 月亮 The Moon 塔罗牌图",
    imageReading: ["月亮、狗、狼、水池和小路共同表现潜意识、恐惧和不确定。", "两座塔之间的小路象征穿越迷雾，需要依靠直觉而不是立刻下结论。", "水中爬出的动物暗示原始情绪或潜意识内容正在浮现。", "这张牌不一定代表坏事，而是提醒信息还不完全清晰。"],
    studyTip: "先标记哪些是事实，哪些是想象、投射或未确认的感受。"
  },
  "太阳 The Sun": {
    image: `${rwsBaseUrl}RWS_Tarot_19_Sun.jpg`,
    imageAlt: "Rider-Waite-Smith 太阳 The Sun 塔罗牌图",
    imageReading: ["明亮太阳照耀孩子和白马，象征清晰、生命力与自然表达。", "红旗显示行动力和胜利感，向日葵强调成长与丰盛。", "孩子没有盔甲，说明真正的自信可以是开放而不防御的。", "这张牌的光线感提醒：事情正在变得更明朗、更可见。"],
    studyTip: "问：什么正在被照亮？你是否允许自己接收好结果？"
  },
  "权杖王牌 Ace of Wands": {
    image: `${rwsBaseUrl}RWS_Tarot_Wands01.jpg`,
    imageAlt: "Rider-Waite-Smith 权杖王牌 Ace of Wands 塔罗牌图",
    imageReading: ["云中伸出的手握着发芽权杖，象征灵感突然降临并带来生命力。", "远方城堡提示愿景可以被建造成现实，但仍需要行动。"],
    studyTip: "这股热情要通过什么第一步落地？"
  },
  "圣杯二 Two of Cups": {
    image: `${rwsBaseUrl}RWS_Tarot_Cups02.jpg`,
    imageAlt: "Rider-Waite-Smith 圣杯二 Two of Cups 塔罗牌图",
    imageReading: ["牌面中两个人面对面举杯，显示出情感交换、同意和互相承认。", "两人之间不是一方追逐另一方，而是共同举杯，强调关系中的平等与回应。", "上方带翼狮头带来欲望、生命力和吸引力。", "双蛇杖式的符号暗示疗愈、协商和两种能量的整合。"],
    studyTip: "观察关系中是否有真实回应，而不只是情绪投射。"
  },
  "宝剑三 Three of Swords": {
    image: `${rwsBaseUrl}RWS_Tarot_Swords03.jpg`,
    imageAlt: "Rider-Waite-Smith 宝剑三 Three of Swords 塔罗牌图",
    imageReading: ["三把剑刺穿红心，把抽象的痛苦画成清楚可见的真相。", "雨云背景象征悲伤、失望和情绪释放。", "没有人物出现，提示这张牌关注的是心智中的真相与伤口本身。", "它不只是心碎，也提醒命名痛苦之后才可能开始疗愈。"],
    studyTip: "区分事实带来的痛，和想法反复刺痛自己的部分。"
  },
  "星币四 Four of Pentacles": {
    image: `${rwsBaseUrl}RWS_Tarot_Pentacles04.jpg`,
    imageAlt: "Rider-Waite-Smith 星币四 Four of Pentacles 塔罗牌图",
    imageReading: ["人物紧抱星币，脚下也踩着星币，象征安全感和控制需求。", "城市在身后，提示他拥有资源，却可能因为害怕失去而难以流动。"],
    studyTip: "这是必要保护，还是匮乏感造成的紧抓？"
  },
  "圣杯十 Ten of Cups": {
    image: `${rwsBaseUrl}RWS_Tarot_Cups10.jpg`,
    imageAlt: "Rider-Waite-Smith 圣杯十 Ten of Cups 塔罗牌图",
    imageReading: ["彩虹中的十只圣杯象征情感满足、祝福和共享喜悦。", "远处家园与相拥人物提示幸福不只是个人感受，也与归属有关。"],
    studyTip: "什么样的幸福是真实可生活的，而不只是理想画面？"
  },
  "宝剑皇后 Queen of Swords": {
    image: `${rwsBaseUrl}RWS_Tarot_Swords13.jpg`,
    imageAlt: "Rider-Waite-Smith 宝剑皇后 Queen of Swords 塔罗牌图",
    imageReading: ["皇后举剑直立，象征清晰判断、语言力量和不含糊的边界。", "她伸出的手像邀请对话，也像要求对方诚实面对事实。", "云与风的背景强调思维、沟通和从情绪中抽离出来看清真相。", "这张牌提醒：清楚表达可以很锋利，但不一定冷酷。"],
    studyTip: "练习把情绪和事实分开，再决定要说什么。"
  }
};

tarotCards.forEach((card) => {
  Object.assign(card, cardVisualData[card.name] || {
    image: card.image || "",
    imageAlt: card.imageAlt || `${card.name} 塔罗牌图占位`,
    imageReading: ["这张牌的图像解读可继续扩展：观察人物、姿态、颜色、背景与手中的物品如何支持牌义。"],
    studyTip: "先从牌面上最显眼的符号开始，再连接关键词和具体问题。"
  });
  card.localImage = `assets/cards/${card.id}.jpg`;
  card.remoteImage = card.arcana === "Major"
    ? `${rwsBaseUrl}${majorImageFiles[card.nameEn]}`
    : card.suitZh === "权杖"
      ? `${rwsBaseUrl}Wands${String(card.number).replace("Page", "11").replace("Knight", "12").replace("Queen", "13").replace("King", "14").padStart(2, "0")}.jpg`
      : card.suitZh === "圣杯"
        ? `${rwsBaseUrl}Cups${String(card.number).replace("Page", "11").replace("Knight", "12").replace("Queen", "13").replace("King", "14").padStart(2, "0")}.jpg`
        : card.suitZh === "宝剑"
          ? `${rwsBaseUrl}Swords${String(card.number).replace("Page", "11").replace("Knight", "12").replace("Queen", "13").replace("King", "14").padStart(2, "0")}.jpg`
          : card.suitZh === "星币"
            ? `${rwsBaseUrl}Pents${String(card.number).replace("Page", "11").replace("Knight", "12").replace("Queen", "13").replace("King", "14").padStart(2, "0")}.jpg`
      : "";
  card.image = card.remoteImage;
  card.imageSource = card.remoteImage ? "remote" : "fallback";
});

const cardNameParts = {
  "愚者 The Fool": ["愚者", "The Fool"],
  "魔术师 The Magician": ["魔术师", "The Magician"],
  "女祭司 The High Priestess": ["女祭司", "The High Priestess"],
  "皇后 The Empress": ["皇后", "The Empress"],
  "皇帝 The Emperor": ["皇帝", "The Emperor"],
  "恋人 The Lovers": ["恋人", "The Lovers"],
  "战车 The Chariot": ["战车", "The Chariot"],
  "力量 Strength": ["力量", "Strength"],
  "隐士 The Hermit": ["隐士", "The Hermit"],
  "死神 Death": ["死神", "Death"],
  "高塔 The Tower": ["高塔", "The Tower"],
  "星星 The Star": ["星星", "The Star"],
  "月亮 The Moon": ["月亮", "The Moon"],
  "太阳 The Sun": ["太阳", "The Sun"],
  "权杖王牌 Ace of Wands": ["权杖王牌", "Ace of Wands"],
  "圣杯二 Two of Cups": ["圣杯二", "Two of Cups"],
  "宝剑三 Three of Swords": ["宝剑三", "Three of Swords"],
  "星币四 Four of Pentacles": ["星币四", "Four of Pentacles"],
  "圣杯十 Ten of Cups": ["圣杯十", "Ten of Cups"],
  "宝剑皇后 Queen of Swords": ["宝剑皇后", "Queen of Swords"]
};

fullTarotCatalog.forEach((card) => {
  const actual = tarotCards.find((item) => item.id === card.id || item.nameEn === card.nameEn || item.name.endsWith(card.nameEn));
  if (actual) cardNameParts[actual.name] = [card.zhName, card.nameEn];
});

const cardLearningData = {
  "愚者 The Fool": {
    zhName: "愚人",
    nameEn: "The Fool",
    systemPathZh: "大阿尔卡那 → 直接元素大牌 → 风元素 → 新开始主题",
    systemPathEn: "Major Arcana → Direct Elemental Trump → Air Element → New Beginning Theme",
    coreThemeZh: "愚人代表新的开始、未知旅程、自由、信任、开放心态和尚未被经验限制的可能性。它不是单纯的“愚蠢”，而是站在经验之外，带着好奇和不确定走向下一阶段。",
    elementConnectionZh: "愚人作为直接元素大牌之一连接风元素。风元素在这里表现为自由、开放、移动、轻盈和不被固定身份束缚。它不像宝剑那样强调分析，而是更接近风的流动性和未知方向。",
    numberConnectionZh: "编号 0，代表未定形的潜能、旅程开始前的开放状态。",
    suitConnectionZh: "愚人不属于具体花色，但它与风元素相连，因此可以和宝剑系统产生间接联系。不过愚人的风不是冷静判断，而是自由移动、未被定义和愿意出发的状态。",
    systemTags: ["大阿尔卡那", "风元素", "道路", "动物", "白色"],
    imageReading: ["牌面中的人物站在悬崖边，身体向前，象征即将进入未知。", "白色小狗像本能和提醒，既代表陪伴，也提示他注意现实风险。", "白玫瑰象征纯粹动机，轻便包袱暗示经验不多但心态开放。", "远处山峰代表未来挑战，而他此刻还没有真正面对那些困难。"],
    colorReadingZh: "明亮的黄色背景带来希望、清晨感和新开始的气息。白色玫瑰与小狗让这张牌带有纯粹、无防备和信任感。衣服上的鲜艳色彩让愚人看起来轻盈、自由，也暗示他尚未被现实规则完全压住。",
    upright: "感情：新的关系可能开始，或需要以更开放的心态看待关系。工作：适合尝试新机会、新方向、新项目，但需要留意基本风险。学习 / 自我成长：进入新阶段，允许自己先探索，而不是一开始就要求完美。当前建议：可以出发，但不要完全忽略现实提醒。",
    uprightScenes: "感情：新的关系可能开始，或需要以更开放的心态看待关系。工作：适合尝试新机会、新方向、新项目，但需要留意基本风险。学习 / 自我成长：进入新阶段，允许自己先探索，而不是一开始就要求完美。当前建议：可以出发，但不要完全忽略现实提醒。",
    reversed: "逆位的愚人可能表示不敢开始、过度天真、逃避责任，或者在没有准备的情况下冲动行动。它也可能表示你太害怕犯错，所以迟迟不敢迈出第一步。",
    reversedLogic: "逆位的愚人可能表示不敢开始、过度天真、逃避责任，或者在没有准备的情况下冲动行动。它也可能表示你太害怕犯错，所以迟迟不敢迈出第一步。",
    spreadReadingZh: "当前情况：你正站在新阶段入口，事情还没有完全定型。阻碍：缺少计划，或过度害怕未知。建议：保持开放，但带上基本判断和安全感。结果：新的旅程会开始，但它更像探索，不是马上稳定的结果。",
    studyQuestions: ["我现在是真的自由，还是在逃避现实？", "这一步需要勇气，还是需要更多准备？", "牌面中的悬崖让我感到兴奋还是害怕？", "我带着什么包袱进入新阶段？"],
    relatedCards: ["魔术师 The Magician", "世界 The World", "星星 The Star", "宝剑侍从 Page of Swords", "权杖王牌 Ace of Wands"]
  },
  "魔术师 The Magician": {
    zhName: "魔术师",
    nameEn: "The Magician",
    systemPathZh: "大阿尔卡那 → 牌号 1 → 显化主题 → 四元素工具",
    systemPathEn: "Major Arcana → Card I → Manifestation Theme → Four Elemental Tools",
    coreThemeZh: "魔术师代表意志、行动、资源整合、显化和把想法带入现实的能力。它不是单纯的“聪明”或“会说话”，而是知道自己手里有什么，并能把潜在可能转化成具体行动。",
    elementConnectionZh: "魔术师不是某一个单一元素，而是同时连接四元素。桌面上的权杖、圣杯、宝剑和星币分别象征火、水、风、土，说明魔术师拥有行动力、情绪感知、思维表达和现实执行的工具。它强调的不是某种元素本身，而是调动元素的能力。",
    numberConnectionZh: "魔术师是大阿尔卡那第 1 号牌。1 代表开始、主动性、自我意志和把能量集中到一个方向。和愚人的 0 不同，魔术师已经从开放可能进入“我要开始做”的阶段。",
    suitConnectionZh: "魔术师不属于具体花色，但牌面中包含四花色工具，因此它可以同时连接权杖、圣杯、宝剑和星币。它像是四花色能量被放在同一张桌面上，等待被使用。",
    systemTags: ["大阿尔卡那", "四元素", "权杖", "圣杯", "宝剑", "星币", "红色", "白色"],
    imageReading: ["牌面中的人物一手指向天空，一手指向地面，象征“如上，如下”，也就是把精神、意志或想法带到现实层面。", "桌上的四件工具显示他已经具备行动所需资源。", "头顶无限符号代表持续流动的能量，腰间蛇形腰带象征循环和转化。", "花朵围绕他，说明显化不是空想，而是能量在现实中开花结果。"],
    colorReadingZh: "红色长袍象征行动、意志和生命力；白色内袍象征清明、纯粹的动机；桌面和花朵的暖色调让画面有一种“能量已经准备好”的感觉。红与白的组合表现出魔术师既需要热情，也需要清晰意图。",
    upright: "感情：主动表达、清楚展示自己，关系中有吸引力和推动力。工作：资源到位，适合启动项目、表达方案、争取机会。学习 / 自我成长：意识到自己已有工具和能力，可以开始实践。当前建议：不要只想，开始把想法变成具体动作。",
    uprightScenes: "感情：主动表达、清楚展示自己，关系中有吸引力和推动力。工作：资源到位，适合启动项目、表达方案、争取机会。学习 / 自我成长：意识到自己已有工具和能力，可以开始实践。当前建议：不要只想，开始把想法变成具体动作。",
    reversed: "逆位的魔术师可能表示资源没有被正确使用、表达不真诚、行动和意图脱节，或把能力用在操控上。它也可能表示你明明有工具，却迟迟没有真正开始。",
    reversedLogic: "逆位的魔术师可能表示资源没有被正确使用、表达不真诚、行动和意图脱节，或把能力用在操控上。它也可能表示你明明有工具，却迟迟没有真正开始。",
    spreadReadingZh: "当前情况：你手里已有关键资源，重点是如何使用。阻碍：意图不清，或能力被分散使用。建议：明确目标，把资源集中到一个行动方向。结果：如果意图清楚并开始执行，事情有机会从想法变成现实。",
    studyQuestions: ["我现在手里已经有什么资源？", "我缺的是能力，还是开始行动的意愿？", "我是在表达真实意图，还是在操控局面？", "哪一个元素工具是我现在最需要使用的？"],
    relatedCards: ["愚者 The Fool", "权杖王牌 Ace of Wands", "星币王牌 Ace of Pentacles", "宝剑王牌 Ace of Swords", "圣杯王牌 Ace of Cups"]
  },
  "女祭司 The High Priestess": {
    zhName: "女祭司",
    nameEn: "The High Priestess",
    systemPathZh: "大阿尔卡那 → 牌号 2 → 直觉主题 → 月亮 / 水元素",
    systemPathEn: "Major Arcana → Card II → Intuition Theme → Moon / Water Element",
    coreThemeZh: "女祭司代表直觉、沉默、内在知识、潜意识、秘密和等待显现的真相。她不是主动推进事件的牌，而是提醒你：有些答案需要向内听、慢慢观察，而不是马上用外部逻辑判断。",
    elementConnectionZh: "女祭司与水元素有很强连接。她不是圣杯牌，但通过月亮、潜意识、直觉、面纱和隐藏信息连接水元素。这里的水不是外显情绪，而是深层感知、梦境、身体直觉和未被说出的信息。",
    numberConnectionZh: "女祭司是大阿尔卡那第 2 号牌。2 代表二元、对立、平衡、接收和内在关系。牌面中的黑白柱也呼应了 2 的结构：光与暗、已知与未知、理性与直觉。",
    suitConnectionZh: "女祭司不属于具体花色，但可以通过水元素连接圣杯系统，也可以通过隐秘知识连接宝剑系统中的认知层面。她更强调“知道但不急着说出”的状态。",
    systemTags: ["大阿尔卡那", "水元素", "月亮", "蓝色", "白色", "水 / 河流 / 海"],
    imageReading: ["女祭司坐在黑白两柱之间，象征她处于对立力量之间的中介位置。", "身后的帷幕遮住了更深层的知识，说明真相存在，但还没有完全显露。", "她手中的卷轴代表隐藏的智慧，脚边的月亮象征潜意识和周期。", "她的静止姿态说明这张牌的力量来自接收，而不是外部行动。"],
    colorReadingZh: "蓝色长袍让画面有冷静、直觉和深水般的感觉；黑白柱形成强烈对比，强调二元和平衡；月亮的银白色让整张牌带有夜晚、梦境和神秘感。整体色彩不是热烈的，而是安静、收敛、深层的。",
    upright: "感情：关系中有未说出口的感受，需要观察而不是逼问。工作：信息尚未完全公开，适合收集线索、保持敏感度。学习 / 自我成长：直觉增强，适合写梦、冥想、复盘内在感受。当前建议：不要急着下判断，先听见自己真正的感受。",
    uprightScenes: "感情：关系中有未说出口的感受，需要观察而不是逼问。工作：信息尚未完全公开，适合收集线索、保持敏感度。学习 / 自我成长：直觉增强，适合写梦、冥想、复盘内在感受。当前建议：不要急着下判断，先听见自己真正的感受。",
    reversed: "逆位的女祭司可能表示忽略直觉、秘密被隐藏、过度沉默，或把不确定感误认为神秘。它也可能提醒你：你其实已经知道答案，但不愿承认。",
    reversedLogic: "逆位的女祭司可能表示忽略直觉、秘密被隐藏、过度沉默，或把不确定感误认为神秘。它也可能提醒你：你其实已经知道答案，但不愿承认。",
    spreadReadingZh: "当前情况：问题背后有隐藏信息或未被表达的感受。阻碍：你可能不相信自己的直觉，或过度依赖表面信息。建议：先观察，不要急着暴露全部想法。结果：真相会逐渐显现，但需要时间和安静的觉察。",
    studyQuestions: ["我内心其实已经知道什么？", "我是在等待信息，还是在逃避表达？", "这张牌里的帷幕后面可能藏着什么？", "黑白两柱代表我现在面对的哪两种力量？"],
    relatedCards: ["月亮 The Moon", "圣杯二 Two of Cups", "星星 The Star", "隐士 The Hermit", "宝剑二 Two of Swords"]
  },
  "恋人 The Lovers": {
    zhName: "恋人",
    nameEn: "The Lovers",
    systemPathZh: "大阿尔卡那 → 双子对应大牌 → 风元素 → 关系与选择主题",
    systemPathEn: "Major Arcana → Gemini Correspondence → Air Element → Relationship and Choice Theme",
    coreThemeZh: "恋人代表关系、选择、价值观一致、吸引与承诺。它不只是“恋爱牌”，更重要的是：你如何在关系、欲望和价值观之间做出真正符合自己的选择。",
    elementConnectionZh: "恋人通过双子座连接风元素。这里的风元素体现为沟通、选择、理解、镜像关系和价值判断。它不是单纯的情绪连接，而是要看双方是否能清楚交流、互相理解，并在选择中保持诚实。",
    numberConnectionZh: "恋人是大阿尔卡那第 6 号牌。6 代表和谐、关系、责任和调整。它显示关系不是只有吸引，还涉及选择之后是否愿意承担相应责任。",
    suitConnectionZh: "恋人不属于具体花色，但可以通过风元素连接宝剑系统中的选择和沟通，也可以通过关系主题连接圣杯系统中的情感交流。它是风与水的交界：既要感受，也要选择。",
    systemTags: ["大阿尔卡那", "风元素", "圣杯", "宝剑", "动物", "山", "红色"],
    imageReading: ["牌面中两个人站在天使之下，象征关系中的高层指引、祝福或价值判断。", "两人之间有吸引，也有距离，说明真正的关系不是融合成一个人，而是在独立个体之间建立连接。", "背景中的树、蛇和山都暗示选择、诱惑、成长和精神目标。", "天使的存在让这张牌不只是欲望，也涉及更高层面的价值一致。"],
    colorReadingZh: "明亮的天空和天使的红色翅膀让画面带有开放、热情和重要选择的感觉。绿色背景象征生命力与成长，人物的裸露状态表现真实和无防备。整体色彩让关系显得既自然又需要被认真面对。",
    upright: "感情：强烈吸引、关系确认、价值观靠近，或需要做出诚实选择。工作：合作关系、伙伴选择、价值一致性很重要。学习 / 自我成长：开始看见自己真正重视什么，而不是只迎合外部期待。当前建议：不要只问“我喜不喜欢”，也要问“我愿不愿意为这个选择负责”。",
    uprightScenes: "感情：强烈吸引、关系确认、价值观靠近，或需要做出诚实选择。工作：合作关系、伙伴选择、价值一致性很重要。学习 / 自我成长：开始看见自己真正重视什么，而不是只迎合外部期待。当前建议：不要只问“我喜不喜欢”，也要问“我愿不愿意为这个选择负责”。",
    reversed: "逆位的恋人可能表示关系失衡、沟通不清、价值观不一致，或逃避选择。它也可能说明你被吸引牵着走，却没有真正确认这是否符合自己的长期价值。",
    reversedLogic: "逆位的恋人可能表示关系失衡、沟通不清、价值观不一致，或逃避选择。它也可能说明你被吸引牵着走，却没有真正确认这是否符合自己的长期价值。",
    spreadReadingZh: "当前情况：关系、合作或重要选择是问题核心。阻碍：价值观不一致，或你不愿面对选择后果。建议：诚实沟通，确认这是不是你真正想选择的方向。结果：如果双方价值一致，关系会更明确；如果不一致，问题会暴露。",
    studyQuestions: ["我现在面对的是爱情，还是选择？", "这段关系是否符合我的价值观？", "我是在诚实沟通，还是只希望被选择？", "这张牌里的两个人是平等站立的吗？"],
    relatedCards: ["圣杯二 Two of Cups", "宝剑二 Two of Swords", "节制 Temperance", "恶魔 The Devil", "太阳 The Sun"]
  },
  "死神 Death": {
    zhName: "死神",
    nameEn: "Death",
    systemPathZh: "大阿尔卡那 → 天蝎对应大牌 → 水元素 → 结束与转化主题",
    systemPathEn: "Major Arcana → Scorpio Correspondence → Water Element → Ending and Transformation Theme",
    coreThemeZh: "死神代表结束、释放、转化、不可逆的变化和旧阶段的完成。它通常不是字面意义上的死亡，而是某种模式、关系、身份或阶段已经走到尽头，需要让位给新的生命形式。",
    elementConnectionZh: "死神通过天蝎座连接水元素。这里的水不是温柔流动，而是深层情绪、执着、剥离、净化和重生。它像水中的腐殖与更新：旧的东西被分解，新的东西才有空间出现。",
    numberConnectionZh: "死神是大阿尔卡那第 13 号牌。1 和 3 相加为 4，可以连接到结构重建。13 表示旧结构被终结后，新的稳定方式才可能出现。它不是混乱本身，而是深层更新前必须经历的切断。",
    suitConnectionZh: "死神不属于具体花色，但可以通过水元素连接圣杯系统中的情绪释放，也可以通过现实结束连接星币系统中的物质变化。它强调的是“必须放下”的过程。",
    systemTags: ["大阿尔卡那", "水元素", "圣杯", "星币", "黑色", "白色", "太阳"],
    imageReading: ["牌面中的骷髅骑士骑着白马前行，象征变化不可避免。", "地上的人物显示不同身份和地位的人都无法逃避转化。", "远处的太阳正在升起，说明结束并不是终点，也可能是新阶段的开始。", "黑色旗帜上的白色花朵暗示死亡与纯化、终结与新生同时存在。"],
    colorReadingZh: "黑色盔甲和旗帜让牌面带有结束、沉重和不可回避感；白马和白花则带来纯化和更新的意味；远处太阳的黄色暗示新生命正在远方出现。黑白与微弱光线的对比说明：结束很沉重，但并非没有出口。",
    upright: "感情：某种关系模式结束，需要放下执着或接受变化。工作：阶段转换、岗位变化、旧计划结束，适合清理无效结构。学习 / 自我成长：旧身份、旧习惯或旧叙事正在脱落。当前建议：不要抓住已经结束的东西，给新阶段留下空间。",
    uprightScenes: "感情：某种关系模式结束，需要放下执着或接受变化。工作：阶段转换、岗位变化、旧计划结束，适合清理无效结构。学习 / 自我成长：旧身份、旧习惯或旧叙事正在脱落。当前建议：不要抓住已经结束的东西，给新阶段留下空间。",
    reversed: "逆位的死神可能表示抗拒结束、拖延转化、害怕放手，或变化已经发生但你仍不愿承认。它也可能说明你正在经历缓慢的内在转化，但还没有完全表现出来。",
    reversedLogic: "逆位的死神可能表示抗拒结束、拖延转化、害怕放手，或变化已经发生但你仍不愿承认。它也可能说明你正在经历缓慢的内在转化，但还没有完全表现出来。",
    spreadReadingZh: "当前情况：某个阶段正在结束，旧模式已经难以继续。阻碍：你可能仍在抓住过去，或害怕失去熟悉的身份。建议：主动清理无效连接，接受必要变化。结果：如果愿意放下，新的结构会慢慢出现；如果抗拒，变化会变得更痛苦。",
    studyQuestions: ["这张牌要我结束什么？", "我害怕失去的是事实，还是熟悉感？", "哪个旧身份已经不再适合我？", "远处的太阳代表什么新的可能？"],
    relatedCards: ["高塔 The Tower", "月亮 The Moon", "星星 The Star", "审判 Judgement", "圣杯五 Five of Cups"]
  },
  "高塔 The Tower": {
    zhName: "塔",
    nameEn: "The Tower",
    systemPathZh: "大阿尔卡那 → 火元素式爆发 → 旧结构崩塌 → 突然真相",
    systemPathEn: "Major Arcana → Fire-like Disruption → Collapse of Old Structure → Sudden Truth",
    coreThemeZh: "塔代表突然冲击、旧结构崩塌、真相击穿、防御破裂和无法继续维持的状态。它不是为了惩罚，而是把已经不稳固的结构强行打破，让隐藏的问题无法再被忽略。",
    elementConnectionZh: "塔不是权杖牌，但它带有强烈的火元素式爆发。闪电、火焰、坠落和破坏都表现出突然释放的能量。它也带有风元素的“真相击穿”感：一个想法、认知或事实突然打破原来的安全感。",
    numberConnectionZh: "编号 16，1 的冲击与 6 的失衡共同形成旧结构的觉醒。",
    suitConnectionZh: "塔不属于具体花色，但可以和权杖的火元素、宝剑的真相与冲突产生联系。它既是能量爆发，也是认知崩塌。",
    systemTags: ["大阿尔卡那", "火元素", "塔 / 城堡", "皇冠", "黑色"],
    imageReading: ["牌面中高塔被闪电击中，顶部皇冠被打落，象征旧权威、旧身份或虚假的安全感被击穿。", "人物从塔中坠落，表示原本依靠的结构已经无法继续保护他们。", "黑色天空和火焰让画面充满危机感。", "闪电也像突然出现的真相，使隐藏的问题暴露出来。"],
    colorReadingZh: "黑色背景营造出危机、未知和不可控制的氛围。红色与黄色火焰代表爆发、冲击和强烈能量。闪电的亮黄色让这张牌不只是破坏，也是一种突然照亮真相的力量。",
    upright: "感情：关系中的问题可能突然爆发，无法继续假装没事。工作：结构、计划或组织方式可能被打断，需要面对真实问题。学习 / 自我成长：旧信念被冲击，原本的自我认知需要重建。当前建议：不要急着把旧结构拼回去，先看清它为什么会倒。",
    uprightScenes: "感情：关系中的问题可能突然爆发，无法继续假装没事。工作：结构、计划或组织方式可能被打断，需要面对真实问题。学习 / 自我成长：旧信念被冲击，原本的自我认知需要重建。当前建议：不要急着把旧结构拼回去，先看清它为什么会倒。",
    reversed: "逆位的塔可能表示你在抗拒必要的改变，或者冲击已经发生但你还没有真正接受。它也可能表示小规模的崩塌正在提醒你：如果继续忽略，之后会更难控制。",
    reversedLogic: "逆位的塔可能表示你在抗拒必要的改变，或者冲击已经发生但你还没有真正接受。它也可能表示小规模的崩塌正在提醒你：如果继续忽略，之后会更难控制。",
    spreadReadingZh: "当前情况：旧结构正在不稳，或某个真相已经无法隐藏。阻碍：你可能仍在抓住一个已经失效的安全感。建议：先停止粉饰问题，承认哪里已经不稳。结果：短期会混乱，但长期可能带来更真实的重建。",
    studyQuestions: ["这座塔代表我生活中的哪种旧结构？", "它是真的安全，还是只是看起来安全？", "这次冲击暴露了什么真相？", "如果不急着修复，我能从废墟里看见什么？"],
    relatedCards: ["死神 Death", "恶魔 The Devil", "星星 The Star", "宝剑三 Three of Swords", "权杖十 Ten of Wands"]
  },
  "星星 The Star": {
    zhName: "星星",
    nameEn: "The Star",
    systemPathZh: "大阿尔卡那 → 水瓶对应大牌 → 风元素 → 疗愈与希望主题",
    systemPathEn: "Major Arcana → Aquarius Correspondence → Air Element → Healing and Hope Theme",
    coreThemeZh: "星星代表疗愈、希望、恢复信任、精神指引和长期愿景。它不是立刻解决问题的牌，而是在冲击之后重新找到方向、节奏和内在平静。",
    elementConnectionZh: "星星通过水瓶座与风元素相连。这里的风元素不是尖锐分析，而是更高视角、未来愿景、精神距离和重新理解自己的能力。牌面中大量水流也让它同时带有疗愈与情绪净化的感觉。",
    numberConnectionZh: "编号 17，经历冲击后的 7 式信念挑战，转化为长期希望。",
    suitConnectionZh: "星星不属于具体花色，但可以通过风元素连接宝剑系统中的清醒与远见，也可以通过水的图像连接圣杯系统中的疗愈与情绪流动。它是风与水之间很柔和的结合：理解自己，也安抚自己。",
    systemTags: ["大阿尔卡那", "风元素", "星星", "水 / 河流 / 海", "白色"],
    imageReading: ["牌面中的人物赤裸跪在水边，象征卸下防御、回到真实状态。", "她一只脚在水中，一只脚在陆地上，表示情绪与现实之间需要重新取得平衡。", "两只水罐分别把水倒入池中和土地上，象征情绪流动与现实滋养同时发生。", "天空中的大星和七颗小星提供指引，说明希望不是喧闹的，而是安静地照亮方向。"],
    colorReadingZh: "蓝色背景带来平静、疗愈和夜空感。星光的白色与黄色象征指引、希望和清明。水面与天空的冷色让这张牌不像太阳那样外放，而是一种安静、透明、慢慢恢复的光。",
    upright: "感情：关系中有修复、重新信任、温柔沟通或恢复希望的可能。工作：长期方向开始清晰，适合恢复节奏、制定愿景，而不是急着求结果。学习 / 自我成长：经历混乱后重新相信自己，适合疗愈、复盘和建立长期信念。当前建议：慢下来，先恢复能量，再看远方。希望不是马上成功，而是愿意继续走。",
    uprightScenes: "感情：关系中有修复、重新信任、温柔沟通或恢复希望的可能。工作：长期方向开始清晰，适合恢复节奏、制定愿景，而不是急着求结果。学习 / 自我成长：经历混乱后重新相信自己，适合疗愈、复盘和建立长期信念。当前建议：慢下来，先恢复能量，再看远方。希望不是马上成功，而是愿意继续走。",
    reversed: "逆位的星星可能表示暂时失去信心、看不见希望，或者疗愈过程被打断。它也可能提醒你：你仍然在等待外部证明，但真正需要恢复的是你对自己的信任。",
    reversedLogic: "逆位的星星可能表示暂时失去信心、看不见希望，或者疗愈过程被打断。它也可能提醒你：你仍然在等待外部证明，但真正需要恢复的是你对自己的信任。",
    spreadReadingZh: "当前情况：你正在恢复期，问题需要时间和温柔对待。阻碍：你可能不相信事情会好转，或过度依赖外界认可。建议：先照顾能量和节奏，不要强迫自己马上振作。结果：希望会慢慢回来，但它更像长期疗愈，不是瞬间逆转。",
    studyQuestions: ["这张牌里的水流向哪里？", "我现在需要的是答案，还是恢复？", "我还相信什么？", "经历塔之后，我还能怎样重新建立希望？"],
    relatedCards: ["高塔 The Tower", "月亮 The Moon", "太阳 The Sun", "宝剑三 Three of Swords", "节制 Temperance"]
  },
  "月亮 The Moon": {
    zhName: "月亮",
    nameEn: "The Moon",
    systemPathZh: "大阿尔卡那 → 双鱼对应大牌 → 水元素 → 潜意识主题",
    systemPathEn: "Major Arcana → Pisces Correspondence → Water Element → Subconscious Theme",
    coreThemeZh: "月亮代表潜意识、梦境、直觉、恐惧、不确定信息和情绪迷雾。它不是简单的“欺骗”或“坏事”，而是提醒：当前信息还不完全清晰，理性判断可能被情绪、投射、想象或潜意识影响。",
    elementConnectionZh: "月亮不是圣杯牌，但它通过双鱼、水池、夜晚、梦境、直觉和潜意识与水元素强烈连接。水元素在这里不是温柔关系，而是深层情绪、无意识内容和难以言说的感受。",
    numberConnectionZh: "编号 18，1 的出发遇到 8 的力量流动，进入潜意识考验。",
    suitConnectionZh: "月亮不属于具体花色，但可以通过水元素与圣杯系统产生联系。它不像圣杯二那样表现清晰的人际交换，而是表现情绪和潜意识更混沌、更隐秘的一面。",
    systemTags: ["大阿尔卡那", "水元素", "月亮", "水 / 河流 / 海", "动物"],
    imageReading: ["牌面中月亮悬在天空，光线并不像太阳那样清晰，而是让事物变得朦胧。", "狗和狼分别象征被驯化的本能与野性的本能，它们都在回应月亮。", "水池中的小龙虾从水里爬出，象征潜意识深处的原始情绪浮现。", "两座塔之间的小路通向远方，表示必须穿过未知和恐惧，才能进入更深层的理解。"],
    colorReadingZh: "牌面中的蓝色和深色调营造出夜晚、梦境和潜意识的氛围。黄色月光带来一点意识，但这种光并不完全清晰，而是让人半看见、半猜测。水面和天空的冷色强化了情绪流动、直觉和不确定感。",
    upright: "感情：关系中可能存在不确定、猜测、暧昧、投射或未说出口的情绪。工作：信息不完整，环境不透明，不适合只凭表面做重大判断。学习 / 自我成长：适合观察梦境、情绪反应、直觉和潜意识模式。当前建议：不要急着下结论，先分清事实、想象、恐惧和直觉。",
    uprightScenes: "感情：关系中可能存在不确定、猜测、暧昧、投射或未说出口的情绪。工作：信息不完整，环境不透明，不适合只凭表面做重大判断。学习 / 自我成长：适合观察梦境、情绪反应、直觉和潜意识模式。当前建议：不要急着下结论，先分清事实、想象、恐惧和直觉。",
    reversed: "逆位的月亮不一定代表更坏，它可能表示迷雾开始散开、隐藏信息逐渐浮现，也可能表示你仍在逃避面对真实感受。逆位重点是：潜意识内容正在上升，但你是否愿意看清它。",
    reversedLogic: "逆位的月亮不一定代表更坏，它可能表示迷雾开始散开、隐藏信息逐渐浮现，也可能表示你仍在逃避面对真实感受。逆位重点是：潜意识内容正在上升，但你是否愿意看清它。",
    spreadReadingZh: "当前情况：问题中有不确定、隐秘信息或强烈情绪投射。阻碍：恐惧、幻想、误解或信息不透明正在影响判断。建议：先收集更多事实，也要诚实面对自己的直觉和不安。结果：事情不会立刻清晰，但随着时间和观察，隐藏的模式会慢慢显现。",
    studyQuestions: ["我现在看到的是事实，还是自己的想象？", "这张牌里最吸引我的是月亮、水池、动物，还是道路？", "我的恐惧是在保护我，还是在限制我？", "这件事里有什么信息还没有浮出水面？"],
    relatedCards: ["女祭司 The High Priestess", "星星 The Star", "倒吊人 The Hanged Man", "死神 Death", "宝剑八 Eight of Swords", "圣杯七 Seven of Cups"]
  },
  "太阳 The Sun": {
    zhName: "太阳",
    nameEn: "The Sun",
    systemPathZh: "大阿尔卡那 → 太阳主题 → 火元素 → 清晰与生命力",
    systemPathEn: "Major Arcana → Solar Theme → Fire Element → Clarity and Vitality",
    coreThemeZh: "太阳代表清晰、生命力、快乐、显化、自信和坦然表达。它是一张强烈的光之牌，强调事情被照亮、能量恢复、真实感变得简单直接。",
    elementConnectionZh: "太阳不是权杖牌，但它与火元素有强烈连接。火元素在这里不是冲突或爆发，而是生命力、温暖、自信和创造力。它让人从月亮式的不确定走向清楚、直接和有活力的状态。",
    numberConnectionZh: "编号 19，1 的生命力与 9 的成熟汇合成清晰的喜悦。",
    suitConnectionZh: "太阳不属于具体花色，但可以通过火元素与权杖系统相连，也可以通过显化和成果与星币系统产生联系。它更像一种整体生命状态：看见、表达、成长和确认。",
    systemTags: ["大阿尔卡那", "火元素", "太阳", "黄色 / 金色", "红色"],
    imageReading: ["牌面中的太阳高悬天空，光线直接而充足，象征清晰、意识和生命能量。", "孩子骑在白马上，表现出纯真、自由和对生命的信任。", "白马代表纯粹的生命力，红色旗帜象征行动、热情和胜利。", "背景中的向日葵面向太阳，表示成长、显化和能量被充分滋养。"],
    colorReadingZh: "大面积黄色和金色让牌面充满温暖、自信和开放感。红色旗帜带来行动力和生命热情，白马则平衡了火元素的强烈，使它显得纯粹而不是攻击性。整体色彩传达的是“清楚、活着、可以表达”。",
    upright: "感情：关系更清楚、更坦诚，彼此之间有快乐、信任和开放感。工作：成果显现、能量恢复、适合展示自己或推进计划。学习 / 自我成长：自信提升，内在混乱减少，更能看见自己的能力和方向。当前建议：把事情放到光下，直接表达，选择让你更有生命力的方向。",
    uprightScenes: "感情：关系更清楚、更坦诚，彼此之间有快乐、信任和开放感。工作：成果显现、能量恢复、适合展示自己或推进计划。学习 / 自我成长：自信提升，内在混乱减少，更能看见自己的能力和方向。当前建议：把事情放到光下，直接表达，选择让你更有生命力的方向。",
    reversed: "逆位的太阳可能表示快乐被压住、自信不足、能量下降，或明明有好东西却不敢完全接受。它也可能表示过度乐观，忽略了仍需处理的现实细节。",
    reversedLogic: "逆位的太阳可能表示快乐被压住、自信不足、能量下降，或明明有好东西却不敢完全接受。它也可能表示过度乐观，忽略了仍需处理的现实细节。",
    spreadReadingZh: "当前情况：事情正在变清楚，或你需要更直接地看见现实。阻碍：你可能不敢表达自己，或对快乐和成功有不配得感。建议：选择清晰、坦诚和能让你恢复生命力的方式。结果：局势有机会变得明朗，能量也会比之前更开放。",
    studyQuestions: ["这张牌里的光照亮了什么？", "我是否允许自己感到快乐和自信？", "我现在最有生命力的选择是什么？", "如果月亮是模糊，太阳带来的清晰是什么？"],
    relatedCards: ["月亮 The Moon", "星星 The Star", "力量 Strength", "权杖王牌 Ace of Wands", "圣杯十 Ten of Cups"]
  },
  "圣杯二 Two of Cups": {
    zhName: "圣杯二",
    nameEn: "Two of Cups",
    systemPathZh: "小阿尔卡那 → 圣杯牌组 → 数字 2 → 水元素",
    systemPathEn: "Minor Arcana → Cups Suit → Number 2 → Water Element",
    coreThemeZh: "关系、互相回应、情感交换、平等连接。圣杯二不是单纯的“恋爱牌”，它更强调两方之间是否愿意看见彼此、回应彼此，并建立一种相对平衡的情感流动。",
    elementConnectionZh: "水元素代表情绪、关系、直觉与潜意识流动。在圣杯二中，水元素不是孤立的情绪，而是两个人之间发生的情感交换。",
    numberConnectionZh: "数字 2 代表二元、选择、平衡、关系与合作。圣杯二中的“2”表现为两个人面对面，以及两只杯子之间形成的互相回应。",
    suitConnectionZh: "圣杯对应感情、内在体验、人际关系和情绪需求。圣杯二把圣杯牌组的情绪能量具体表现为互相承认、情感开放与关系建立。",
    systemTags: ["小阿尔卡那", "水元素", "圣杯", "数字 2", "蓝色", "白色"],
    imageReading: ["牌面中两个人面对面举杯，显示出情感交换、同意和互相承认。", "两人之间不是一方追逐另一方，而是共同举杯，强调关系中的平等与回应。", "上方带翼狮头带来欲望、生命力和吸引力，双蛇杖式的符号暗示疗愈、协商和两种能量的整合。"],
    colorReadingZh: "牌面中的蓝色和白色让整体氛围更柔和，指向情感开放、信任和清晰。人物服装中的暖色让关系不只是理想化的情绪，也包含吸引、生命力和真实互动。冷暖颜色的平衡也呼应了这张牌的核心：两方之间的情感交换是否平等。",
    upright: "感情：互相喜欢、情感回应、关系建立、愿意沟通。工作：合作顺利、彼此认可、适合建立伙伴关系。学习 / 自我成长：开始理解自己的情感需求，也能更好地回应他人。当前建议：确认这段连接是否是双向的，重点不是你单方面付出多少，而是双方是否都有回应。",
    uprightScenes: "感情：互相喜欢、情感回应、关系建立、愿意沟通。工作：合作顺利、彼此认可、适合建立伙伴关系。学习 / 自我成长：开始理解自己的情感需求，也能更好地回应他人。当前建议：确认这段连接是否是双向的，重点不是你单方面付出多少，而是双方是否都有回应。",
    reversed: "逆位的圣杯二不一定代表关系结束，更可能表示情感流动出现阻塞、单向付出、沟通不平衡或投射过多。它也可能提醒你：你以为的连接，是否真的被对方同等回应。",
    reversedLogic: "逆位的圣杯二不一定代表关系结束，更可能表示情感流动出现阻塞、单向付出、沟通不平衡或投射过多。它也可能提醒你：你以为的连接，是否真的被对方同等回应。",
    spreadReadingZh: "当前情况：关系、合作或情感交换是问题核心。阻碍：双方并不平等，或缺少真实沟通。建议：直接确认彼此需求，不要只靠猜测或投射。结果：如果双方都愿意诚实回应，关系或合作有机会建立。",
    studyQuestions: ["这张牌里的连接是平等的吗？", "双方是否都在举杯，还是只有一方在投入？", "这段关系是在疗愈彼此，还是制造依赖？", "我看到的是真实回应，还是自己的情感投射？"],
    relatedCards: ["恋人 The Lovers", "圣杯王牌 Ace of Cups", "圣杯六 Six of Cups", "节制 Temperance"]
  },
  "宝剑三 Three of Swords": {
    zhName: "宝剑三",
    nameEn: "Three of Swords",
    systemPathZh: "小阿尔卡那 → 宝剑牌组 → 数字 3 → 风元素",
    systemPathEn: "Minor Arcana → Swords Suit → Number 3 → Air Element",
    coreThemeZh: "宝剑三代表痛感、伤心、真相刺破幻想、语言或认知造成的伤害。它不是单纯的“失恋牌”，而是提醒：某种事实、话语、判断或认知已经穿透情绪防线，让人无法继续假装没事。",
    elementConnectionZh: "宝剑属于风元素，风元素代表思维、语言、判断、真相与心理距离。在宝剑三中，风元素不是清晰理性，而是“想法或语言刺入内心”后的痛感。它强调：痛苦不一定来自事件本身，也可能来自你如何理解、命名和反复思考这件事。",
    numberConnectionZh: "数字 3 代表表达与显现；在宝剑里，它把痛苦的真相显现出来。",
    suitConnectionZh: "宝剑属于风元素，所以这张牌常与语言、事实、判断和心理创伤有关。",
    systemTags: ["小阿尔卡那", "风元素", "宝剑", "数字 3", "灰色", "红色"],
    imageReading: ["牌面中一颗红心被三把剑刺穿，直接表现出情感痛感被理性、语言或事实击中。", "背景中的雨云和灰色天空让画面显得沉重，说明情绪正在释放。", "这里没有人物，意味着这张牌重点不是某个人的动作，而是痛感本身已经成为画面中心。", "三把剑从不同方向刺入，暗示伤痛可能来自话语、事实、误解、判断或选择。"],
    colorReadingZh: "红色心脏代表情感、生命力和真实感受；灰色天空代表压抑、沉重和心理阴影；雨水象征情绪释放。红与灰的对比让这张牌显得直接而冷痛：感情是鲜活的，但外部环境和思想压力让它受到穿透。",
    upright: "感情：伤心、失望、误解、分离，或必须面对不舒服的真相。工作：沟通受伤、意见冲突、批评刺耳，或某个事实让计划受挫。学习 / 自我成长：需要面对内心伤口，理解痛感背后的信念和叙事。当前建议：不要急着否认痛苦，也不要让痛苦变成反复自我攻击。先承认发生了什么。",
    uprightScenes: "感情：伤心、失望、误解、分离，或必须面对不舒服的真相。工作：沟通受伤、意见冲突、批评刺耳，或某个事实让计划受挫。学习 / 自我成长：需要面对内心伤口，理解痛感背后的信念和叙事。当前建议：不要急着否认痛苦，也不要让痛苦变成反复自我攻击。先承认发生了什么。",
    reversed: "逆位的宝剑三可能表示伤痛开始愈合，也可能表示你仍在压抑痛苦、不愿面对真实感受。它也可能提醒你：旧伤正在被重新触发，但这次你有机会换一种方式理解它。",
    reversedLogic: "逆位的宝剑三可能表示伤痛开始愈合，也可能表示你仍在压抑痛苦、不愿面对真实感受。它也可能提醒你：旧伤正在被重新触发，但这次你有机会换一种方式理解它。",
    spreadReadingZh: "当前情况：问题核心与痛感、失望、沟通伤害或真相揭露有关。阻碍：你可能被伤痛困住，或者不断用同一种叙事重复伤害自己。建议：允许情绪释放，同时检查哪些想法正在加重痛苦。结果：短期会有不舒服的清醒，但它也可能带来真实的疗愈起点。",
    studyQuestions: ["这三把剑分别可能代表什么？", "我痛的是事实本身，还是我对事实的解释？", "哪句话、哪个判断、哪个真相刺中了我？", "如果雨水代表释放，我现在允许自己释放了吗？"],
    relatedCards: ["宝剑皇后 Queen of Swords", "高塔 The Tower", "星星 The Star", "圣杯五 Five of Cups", "月亮 The Moon"]
  },
  "权杖王牌 Ace of Wands": {
    zhName: "权杖一",
    nameEn: "Ace of Wands",
    systemPathZh: "小阿尔卡那 → 权杖牌组 → Ace / 数字 1 → 火元素",
    systemPathEn: "Minor Arcana → Wands Suit → Ace / Number 1 → Fire Element",
    coreThemeZh: "权杖一代表新的行动冲动、灵感、创造力、生命力和开始做某件事的火花。它不是已经完成的成果，而是“我想开始”“我有冲动”“我被点燃了”的初始能量。",
    elementConnectionZh: "权杖属于火元素。火元素在权杖一中表现为最原始的行动力、热情、欲望和创造冲动。它像一簇刚被点燃的火，还没有形成稳定计划，但已经有了向外生长的力量。",
    numberConnectionZh: "Ace 可以理解为数字 1 的种子状态，代表开始、源头、潜力和第一股能量。权杖一不是长期执行力，而是行动的开端、灵感的出现和机会的萌芽。",
    suitConnectionZh: "权杖牌组关注行动、事业、创造、热情、欲望和生命能量。权杖一是整个权杖系统的起点，代表火元素第一次以具体机会或灵感的形式出现。",
    systemTags: ["小阿尔卡那", "火元素", "权杖", "Ace / 1", "绿色", "黄色 / 金色"],
    imageReading: ["牌面中一只手从云中伸出，握着正在发芽的权杖，表示机会像礼物一样出现，但还需要你接住并行动。", "权杖上的新芽象征生命力和成长可能。", "远处的山和城堡暗示未来仍有挑战和目标。", "此刻最重要的是这股开始的能量，而不是完整计划。"],
    colorReadingZh: "绿色新芽代表成长、生命力和新的可能；权杖本身的棕色连接现实行动，说明灵感需要落地；背景的明亮天空让这张牌带有开放和启动感。整体颜色不像塔那样爆裂，而是更像刚开始燃烧的火苗。",
    upright: "感情：新的吸引、心动、热情升起，关系中有主动靠近的冲动。工作：新项目、新机会、新想法出现，适合启动而不是犹豫。学习 / 自我成长：创造力和行动力恢复，适合尝试新方向。当前建议：先接住灵感，开始行动，再慢慢完善计划。",
    uprightScenes: "感情：新的吸引、心动、热情升起，关系中有主动靠近的冲动。工作：新项目、新机会、新想法出现，适合启动而不是犹豫。学习 / 自我成长：创造力和行动力恢复，适合尝试新方向。当前建议：先接住灵感，开始行动，再慢慢完善计划。",
    reversed: "逆位的权杖一可能表示热情被压住、想开始但缺乏行动，或冲动很多但无法真正落地。它也可能提醒你：不要只靠一时兴奋开始，要确认这股能量是否能持续。",
    reversedLogic: "逆位的权杖一可能表示热情被压住、想开始但缺乏行动，或冲动很多但无法真正落地。它也可能提醒你：不要只靠一时兴奋开始，要确认这股能量是否能持续。",
    spreadReadingZh: "当前情况：新的机会、欲望或行动冲动正在出现。阻碍：热情不足，或想法太多但没有真正开始。建议：用一个小行动点燃后续能量，不要等全部准备好。结果：事情有启动机会，但后续仍需要持续投入。",
    studyQuestions: ["我现在被什么点燃了？", "这根权杖代表一个机会，还是一个冲动？", "我愿意为这个灵感做出第一个行动吗？", "这股火需要怎样被保护和延续？"],
    relatedCards: ["魔术师 The Magician", "太阳 The Sun", "力量 Strength", "权杖骑士 Knight of Wands", "星币王牌 Ace of Pentacles"]
  },
  "星币四 Four of Pentacles": {
    zhName: "星币四",
    nameEn: "Four of Pentacles",
    systemPathZh: "小阿尔卡那 → 星币牌组 → 数字 4 → 土元素",
    systemPathEn: "Minor Arcana → Pentacles Suit → Number 4 → Earth Element",
    coreThemeZh: "星币四代表安全感、占有、控制、资源保护和害怕失去。它不是单纯的“贪婪”，而是说明一个人正在用紧抓资源的方式维持稳定，但这种稳定也可能变成僵硬和封闭。",
    elementConnectionZh: "星币属于土元素。土元素在星币四中表现为物质资源、金钱、身体安全感、边界和现实掌控。这里的土元素不是丰盛流动，而是“把东西抓紧”的防御状态。",
    numberConnectionZh: "数字 4 代表结构、稳定、边界和秩序。星币四中的 4 表现为想要把资源固定住、把安全感建立在可控制的东西上。但当 4 过度时，也会变成僵化和不愿流动。",
    suitConnectionZh: "星币牌组关注金钱、身体、工作、现实条件和长期积累。星币四强调星币系统中的安全需求：我拥有多少、能不能守住、失去后怎么办。",
    systemTags: ["小阿尔卡那", "土元素", "星币", "数字 4", "黄色 / 金色", "黑色"],
    imageReading: ["牌面中的人物坐着，头顶、怀中、脚下都压着星币，说明他把资源紧紧固定在自己身上。", "身体姿态封闭，显示防御和不愿分享。", "背景中的城市象征外部世界和现实生活。", "人物似乎与外界隔开，只专注于守住手里的东西。"],
    colorReadingZh: "黄色和金色星币强调物质价值、安全感和财富意识；人物深色服装让画面显得沉重和保守；背景城市的灰色调让这张牌有一种现实压力感。整体色彩表现的是“有资源，但不一定轻松”。",
    upright: "感情：关系中可能有控制欲、防御感，或害怕失去对方。工作：重视稳定收入和资源管理，适合守成，但不宜过度保守。学习 / 自我成长：需要观察自己的安全感来源，是否过度依赖外部控制。当前建议：保护资源是必要的，但不要把自己也锁起来。",
    uprightScenes: "感情：关系中可能有控制欲、防御感，或害怕失去对方。工作：重视稳定收入和资源管理，适合守成，但不宜过度保守。学习 / 自我成长：需要观察自己的安全感来源，是否过度依赖外部控制。当前建议：保护资源是必要的，但不要把自己也锁起来。",
    reversed: "逆位的星币四可能表示终于愿意放松控制、释放资源，也可能表示因过度害怕失去而变得更紧绷。它提醒你分辨：我是在保护自己，还是在用控制制造新的不安？",
    reversedLogic: "逆位的星币四可能表示终于愿意放松控制、释放资源，也可能表示因过度害怕失去而变得更紧绷。它提醒你分辨：我是在保护自己，还是在用控制制造新的不安？",
    spreadReadingZh: "当前情况：安全感、资源和控制是问题核心。阻碍：过度紧抓让事情无法流动。建议：保留必要边界，同时尝试一点点放松。结果：如果只守不动，稳定会变成停滞；若能调整，资源会重新流动。",
    studyQuestions: ["我现在真正害怕失去什么？", "我抓住的是资源，还是安全感？", "保护和控制之间的界线在哪里？", "我能否让一点资源重新流动？"],
    relatedCards: ["星币十 Ten of Pentacles", "恶魔 The Devil", "皇帝 The Emperor", "星币王牌 Ace of Pentacles", "圣杯十 Ten of Cups"]
  },
  "圣杯十 Ten of Cups": {
    zhName: "圣杯十",
    nameEn: "Ten of Cups",
    systemPathZh: "小阿尔卡那 → 圣杯牌组 → 数字 10 → 水元素",
    systemPathEn: "Minor Arcana → Cups Suit → Number 10 → Water Element",
    coreThemeZh: "圣杯十代表情感圆满、归属、家庭感、共享幸福和关系中的共同愿景。它不是个人一瞬间的快乐，而是情绪连接被扩展成一个可以共同生活的幸福图景。",
    elementConnectionZh: "圣杯属于水元素。水元素在圣杯十中表现为关系的流动、情感满足、支持系统和共享的安全感。这里的水已经从个人感受扩展到家、群体和归属。",
    numberConnectionZh: "数字 10 代表完成、圆满、周期结束和进入新阶段。圣杯十中的 10 表示情绪旅程到达一个理想画面，但也提醒幸福需要被现实持续维护。",
    suitConnectionZh: "圣杯牌组关注情绪、爱、关系和内在满足。圣杯十是圣杯系统的高峰之一，把爱与满足从个人内心带到家庭、社区和共同愿景中。",
    systemTags: ["小阿尔卡那", "水元素", "圣杯", "数字 10", "黄色 / 金色", "绿色"],
    imageReading: ["牌面中彩虹上排列着十只圣杯，象征祝福、圆满和情感丰盛。", "下方人物张开双臂，像是在欢迎这份幸福。", "孩子与远处家园强调归属、家庭和未来延续。", "彩虹提示幸福是一种连接天空与现实的愿景。"],
    colorReadingZh: "彩虹色让这张牌有祝福与希望感；绿色土地连接现实生活和成长；明亮天空让情绪显得开放而清澈。整体色彩表现的是温暖、共享和可以被看见的幸福。",
    upright: "感情：关系稳定、互相支持，有共同生活或长期承诺的可能。工作：团队氛围和谐，目标一致，适合庆祝阶段成果。学习 / 自我成长：更清楚自己想要怎样的归属与情感生活。当前建议：珍惜支持系统，也确认这份幸福是否真实可持续。",
    uprightScenes: "感情：关系稳定、互相支持，有共同生活或长期承诺的可能。工作：团队氛围和谐，目标一致，适合庆祝阶段成果。学习 / 自我成长：更清楚自己想要怎样的归属与情感生活。当前建议：珍惜支持系统，也确认这份幸福是否真实可持续。",
    reversed: "逆位的圣杯十可能表示理想幸福与现实不一致、家庭或关系期待过高，或表面和谐下仍有未表达的情绪。它提醒你重新定义真正适合自己的幸福。",
    reversedLogic: "逆位的圣杯十可能表示理想幸福与现实不一致、家庭或关系期待过高，或表面和谐下仍有未表达的情绪。它提醒你重新定义真正适合自己的幸福。",
    spreadReadingZh: "当前情况：归属、家庭、关系愿景或共同幸福是重点。阻碍：你可能被理想画面困住，忽略真实感受。建议：把幸福定义得更具体、更可生活。结果：若情感流动真实，关系有机会走向更稳定的满足。",
    studyQuestions: ["我心中的幸福画面是谁定义的？", "这份归属是真实的，还是只是理想化？", "哪些关系让我感到被支持？", "我愿意怎样维护长期的情感圆满？"],
    relatedCards: ["圣杯二 Two of Cups", "太阳 The Sun", "星星 The Star", "恋人 The Lovers", "星币四 Four of Pentacles"]
  },
  "宝剑皇后 Queen of Swords": {
    zhName: "宝剑王后",
    nameEn: "Queen of Swords",
    systemPathZh: "小阿尔卡那 → 宝剑牌组 → 宫廷牌 / 王后 → 风元素",
    systemPathEn: "Minor Arcana → Swords Suit → Court Card / Queen → Air Element",
    coreThemeZh: "宝剑王后代表清晰判断、边界、诚实表达、独立思考和从经验中形成的智慧。她不是冷酷无情，而是知道什么时候需要把事实说清楚。",
    elementConnectionZh: "宝剑属于风元素，王后让风元素变成成熟的内在判断力。这里的风不是混乱念头，而是经过经验过滤后的清晰、洞察和语言边界。",
    numberConnectionZh: "宫廷牌不以 1-10 数字推进，而是呈现元素成熟度；王后代表内在掌握、接纳和稳定表达。宝剑王后是风元素在内在层面的成熟。",
    suitConnectionZh: "宝剑牌组关注思想、语言、冲突和真相。宝剑王后把宝剑的锋利转化为准确表达和边界意识：不逃避事实，也不被情绪淹没。",
    systemTags: ["小阿尔卡那", "宫廷牌", "王后", "风元素", "宝剑", "灰色", "白色"],
    imageReading: ["牌面中王后坐在王座上，手中宝剑直立，象征清晰判断和不含糊的表达。", "她伸出的手像邀请对话，也像要求对方诚实面对事实。", "云与风的背景强调思维、沟通和从情绪中抽离出来看清真相。", "她的姿态稳定，说明边界可以冷静而不必攻击。"],
    colorReadingZh: "灰蓝天空带来理性距离和风元素气质；白色与浅色调让判断更清明；宝剑的银色强调真实、语言和切割混乱的能力。整体色彩冷静、清醒、有边界。",
    upright: "感情：需要诚实沟通、清楚边界，不再用猜测维持关系。工作：适合判断信息、制定标准、谈判或做理性决策。学习 / 自我成长：练习把情绪和事实分开，形成自己的判断。当前建议：清楚表达你的立场，但不要把锋利变成伤害。",
    uprightScenes: "感情：需要诚实沟通、清楚边界，不再用猜测维持关系。工作：适合判断信息、制定标准、谈判或做理性决策。学习 / 自我成长：练习把情绪和事实分开，形成自己的判断。当前建议：清楚表达你的立场，但不要把锋利变成伤害。",
    reversed: "逆位的宝剑王后可能表示话语过冷、严苛评判、过度防御，或因为受伤而拒绝柔软。它也可能提醒你：清醒不是关闭心，而是带着边界保持诚实。",
    reversedLogic: "逆位的宝剑王后可能表示话语过冷、严苛评判、过度防御，或因为受伤而拒绝柔软。它也可能提醒你：清醒不是关闭心，而是带着边界保持诚实。",
    spreadReadingZh: "当前情况：沟通、判断、边界或真相是问题核心。阻碍：话语过冷，或你用理性保护自己到无法连接。建议：诚实表达，但保留温度。结果：清楚的边界会带来更成熟的决定。",
    studyQuestions: ["我现在需要说清楚什么？", "我的边界是在保护，还是在隔绝？", "我能否同时诚实和温柔？", "哪些事实需要从情绪里分离出来？"],
    relatedCards: ["宝剑三 Three of Swords", "女祭司 The High Priestess", "魔术师 The Magician", "正义 Justice", "恋人 The Lovers"]
  }
};

const learningAutofillBeforeCount = tarotCards.filter((card) => !cardLearningData[card.name]).length;

const learningElementThemes = {
  "火元素": {
    noun: "行动力、热情、欲望与创造冲动",
    balance: "需要观察能量是否被点燃、过度燃烧，或迟迟无法行动。",
    advice: "把热情落成一个具体动作，同时留意节奏。"
  },
  "水元素": {
    noun: "情绪、关系、直觉与潜意识流动",
    balance: "需要观察感受是否真实流动，还是变成逃避、投射或依赖。",
    advice: "先承认感受，再确认它和现实关系如何连接。"
  },
  "风元素": {
    noun: "思维、语言、判断、选择与真相",
    balance: "需要观察想法是否带来清晰，还是制造距离、焦虑或刺痛。",
    advice: "把事实、解释和情绪分开，再做决定。"
  },
  "土元素": {
    noun: "身体、资源、金钱、结构与现实稳定",
    balance: "需要观察现实条件、长期成本和安全感来源。",
    advice: "用可执行的小步骤把想法落到现实。"
  },
  "四元素元素": {
    noun: "四元素资源的整合",
    balance: "需要观察行动、情绪、思维和现实执行是否协同。",
    advice: "先确认手中已有资源，再选择最该启动的一步。"
  }
};

const learningNumberThemes = {
  "1": "数字 1 / Ace 代表种子、开始、源头和第一股能量。这张牌强调潜力刚出现，还需要被接住并持续养护。",
  "2": "数字 2 代表二元、选择、平衡和关系。这张牌关注两个力量之间如何回应、协商或形成张力。",
  "3": "数字 3 代表显现、表达、成长和外化。这张牌说明某种能量已经从内在状态变成可见的事件。",
  "4": "数字 4 代表结构、稳定、边界和限制。这张牌提醒稳定可以保护人，也可能让能量变得僵硬。",
  "5": "数字 5 代表冲突、变化和不稳定。这张牌常提示旧平衡被打破，需要在摩擦中学习调整。",
  "6": "数字 6 代表调和、修复、交换和重新平衡。这张牌通常指向关系、资源或行动节奏中的调整。",
  "7": "数字 7 代表挑战、信念、策略和内在测试。这张牌要求你看清自己如何面对阻力。",
  "8": "数字 8 代表推进、力量、循环和掌握。这张牌强调能量正在移动，需要找到可持续的控制方式。",
  "9": "数字 9 代表成熟、积累、独处和接近完成。这张牌让你检查已经走到哪里，以及还需要整合什么。",
  "10": "数字 10 代表完成、负担、圆满和周期结束。这张牌既显示结果，也提示旧周期即将转入新阶段。",
  "Page": "侍从 Page 代表学习者、消息、好奇心和元素能量的初学表达。它更像刚开始接触这股能量的人格状态。",
  "Knight": "骑士 Knight 代表行动、追求、推进和元素能量的外放。它显示一个人如何带着这股能量向外移动。",
  "Queen": "王后 Queen 代表内在掌握、承载、感受和成熟接纳。她显示这股元素如何在内心稳定下来。",
  "King": "国王 King 代表领导、外在掌控、责任和成熟表达。他显示这股元素如何被带入现实秩序与决策。"
};

const learningSuitThemes = {
  "权杖": {
    en: "Wands",
    object: "权杖",
    field: "行动、事业、创造、热情和生命能量",
    color: "红色、橙色、黄色和金色让画面带有热度、主动性和创造冲动；木质权杖与绿色新芽则提示火也需要持续生长。",
    love: "关系里更关注吸引、主动靠近和行动意愿。",
    work: "工作上适合看动力、机会、竞争和推进节奏。",
    growth: "自我成长中，它提醒你观察自己是否真的愿意行动。",
    visualDefault: "牌面中的权杖像能量导体，人物与权杖的距离、姿态和方向会显示行动力如何被使用。"
  },
  "圣杯": {
    en: "Cups",
    object: "圣杯",
    field: "情绪、关系、爱、直觉和内在体验",
    color: "蓝色、白色、银色和柔和色调强化情绪、信任、直觉和流动感；若出现阴影色，也提示未说出口的感受。",
    love: "关系里更关注情感回应、亲密感和真实需求。",
    work: "工作上适合看合作氛围、人际支持和情绪劳动。",
    growth: "自我成长中，它提醒你理解感受，而不是只追求结果。",
    visualDefault: "牌面中的杯子像情绪容器，水流、人物距离和杯子的数量会显示情感如何交换或停滞。"
  },
  "宝剑": {
    en: "Swords",
    object: "宝剑",
    field: "思维、语言、冲突、判断和真相",
    color: "灰色、浅蓝、白色和银色让画面带有理性距离、清醒感和心理压力；尖锐的剑光提示语言与事实的力量。",
    love: "关系里更关注沟通、边界、误解和必须说清的事实。",
    work: "工作上适合看决策、冲突、信息和判断标准。",
    growth: "自我成长中，它提醒你辨认哪些想法正在保护或伤害自己。",
    visualDefault: "牌面中的宝剑显示思想和语言的方向，天空、风、云和人物表情会提示心理状态。"
  },
  "星币": {
    en: "Pentacles",
    object: "星币",
    field: "金钱、身体、工作、资源和长期稳定",
    color: "绿色、棕色、金色和黑色让画面连接土地、资源、安全感与现实压力；星币的重量感提示事情需要落地。",
    love: "关系里更关注承诺、现实条件、安全感和长期经营。",
    work: "工作上适合看资源、收入、技能、执行和实际成本。",
    growth: "自我成长中，它提醒你照顾身体、节奏和可持续生活。",
    visualDefault: "牌面中的星币像现实资源，人物如何持有、交换或耕耘它，显示安全感与实际成果的关系。"
  }
};

const minorVisualCues = {
  "权杖": {
    "2": "人物手握世界球与权杖，望向远方，显示计划、野心和选择下一步方向。",
    "3": "人物站在高处看向远航的船只，象征已经出发后的等待、拓展和长期视野。",
    "4": "花环、四根权杖和庆祝人群显示阶段性稳定、归属和共同庆祝。",
    "5": "多人挥舞权杖形成混乱场面，像是竞争、练习或目标尚未统一的能量。",
    "6": "骑马人物头戴桂冠，周围权杖簇拥，表现认可、胜利和被看见。",
    "7": "人物站在高处抵挡下方权杖，说明需要守住立场并面对压力。",
    "8": "八根权杖穿越天空，画面少有人物，强调速度、消息和能量快速移动。",
    "9": "受伤人物仍握着权杖守卫，显示疲惫后的坚持和防御。",
    "10": "人物背负十根权杖前行，说明责任、负担和接近终点前的压力。",
    "Page": "侍从凝视权杖，像刚发现自己的热情，姿态好奇而尚未完全行动。",
    "Knight": "骑士策马举杖，画面充满速度和热度，表现追求、冒险和冲动。",
    "Queen": "王后手持权杖与向日葵，黑猫在旁，显示自信、魅力和本能智慧。",
    "King": "国王坐在火元素装饰的王座上，权杖直立，表现成熟领导和创造掌控。"
  },
  "圣杯": {
    "1": "云中之手托起圣杯，水向外流动，象征情感、爱与直觉的新源头。",
    "3": "三人举杯庆祝，显示友谊、支持系统和情绪被共同分享。",
    "4": "人物坐在树下看似忽略递来的杯子，表现情绪迟钝、倦怠或暂时不想回应。",
    "5": "黑衣人物凝视倒下的杯子，背后仍有两只杯，提示失落之外还有未看见的支持。",
    "6": "孩子与花杯的交换带来回忆、纯真和过去经验中的柔软感。",
    "7": "云中七只杯装着不同幻象，表现选择、诱惑和情绪投射。",
    "8": "人物离开排列好的杯子走向月夜，说明放下已知满足，寻找更深意义。",
    "9": "人物坐在杯墙前，姿态满足，强调个人愿望、享受和情绪成就。",
    "Page": "侍从手中杯里出现鱼，像直觉、消息和想象力突然冒出。",
    "Knight": "骑士缓慢持杯前进，显示温柔追求、邀请和情感表达。",
    "Queen": "王后凝视华丽圣杯，靠近水边，表现深层感受、直觉和情绪承载。",
    "King": "国王坐在海中宝座上，周围水流汹涌但他保持稳定，象征情绪成熟。"
  },
  "宝剑": {
    "1": "云中之手举起宝剑，剑尖穿过皇冠，象征清晰、真相和新的判断力。",
    "2": "蒙眼人物交叉双剑，海面在后，显示回避选择、心理防御和情绪被压住。",
    "4": "卧姿人物像在休息或冥想，三把剑悬挂，一把剑在旁，提示恢复与暂停。",
    "5": "人物收起宝剑，远处有人离开，画面显示胜利背后的代价和关系破裂。",
    "6": "船载人物渡水而行，剑插在船中，表示带着经验离开混乱，进入过渡。",
    "7": "人物抱剑离开营地，回头张望，表现策略、隐瞒或不完全正面的行动。",
    "8": "被束缚人物站在剑阵中，蒙眼与松绑的绳索提示限制多来自心理结构。",
    "9": "人物夜里坐起，九把剑悬在墙上，表现焦虑、反复思考和精神压力。",
    "10": "人物倒地被十把剑刺中，远方天色转亮，说明痛苦终点与新阶段临近。",
    "Page": "侍从持剑警觉站立，风吹动衣袍，显示观察、学习和准备表达。",
    "Knight": "骑士持剑冲锋，云与风快速移动，表现急切、进攻性和思想推进。",
    "King": "国王端坐持剑，姿态稳定，象征理性权威、标准和公正判断。"
  },
  "星币": {
    "1": "云中之手托出星币，花园与道路显示资源机会需要进入现实实践。",
    "2": "人物 juggling 两枚星币，背后海浪起伏，表现资源、时间和节奏的平衡。",
    "3": "工匠与他人讨论建筑，显示协作、技能和现实成果需要共同确认。",
    "5": "贫困人物走过教堂窗外，显示匮乏、排斥感和可能被忽略的支持。",
    "6": "人物分发星币并持天平，强调给予、接受、资源流动和权力差异。",
    "7": "人物靠着工具看向庄稼，显示等待、评估和长期投入后的观察。",
    "8": "工匠专注雕刻星币，表现练习、技能累积和重复劳动。",
    "9": "人物站在葡萄园中，猎鹰在手，显示独立、丰盛和自我掌控的生活品质。",
    "10": "家族、老人、城门与十枚星币构成完整结构，显示传承、资产和长期稳定。",
    "Page": "侍从凝视星币，像认真学习一项现实技能或新资源。",
    "Knight": "骑士停在田野前持星币，显示耐心、责任和稳定执行。",
    "Queen": "王后坐在花园中凝视星币，表现滋养、身体照顾和现实丰盛。",
    "King": "国王坐在富饶王座上，星币稳稳在手，象征资源管理和物质成熟。"
  }
};

const majorMediumThemes = {
  "The Empress": "皇后代表滋养、丰盛、身体、自然和创造力。她让抽象想法进入可感受、可生长的生活层面。",
  "The Emperor": "皇帝代表结构、边界、责任和成熟权威。他提醒混乱需要容器，保护也需要规则。",
  "The Hierophant": "教皇代表传统、学习、信念系统和被传承的知识。他让个人经验连接到更大的文化、伦理或学习框架。",
  "The Chariot": "战车代表方向、意志力和驾驭相反力量。它不是蛮力前进，而是把情绪和目标拉到同一条路上。",
  "Strength": "力量代表温柔的勇气、耐心和与本能合作。它强调真正的掌控不是压制，而是理解和安抚。",
  "The Hermit": "隐士代表独处、内在指引和经验转化为智慧。它邀请你暂时离开噪音，听见更深的答案。",
  "Wheel of Fortune": "命运之轮代表周期变化、机会、转折和不可完全掌控的命运感。它提醒你观察节奏，而不是只抓住单一结果。",
  "Justice": "正义代表真相、公平、选择和因果。它要求你面对事实，并为自己的决定承担后果。",
  "The Hanged Man": "倒吊人代表暂停、换角度、臣服和延迟中的理解。它不是失败，而是旧方法暂时不能继续。",
  "Temperance": "节制代表调和、整合、耐心和疗愈。它让两个不同能量慢慢混合，而不是立刻求结论。",
  "The Devil": "恶魔代表束缚、欲望、执着、阴影和被误认为安全的限制。它让你看见自己如何被某种模式牵住。",
  "Judgement": "审判代表召唤、复盘、觉醒和重新回应生命。它像一次清醒的回声，要求你对过去作出新的理解。",
  "The World": "世界代表完成、整合、成就和旅程闭合。它不是终点后的空白，而是一个周期成熟后进入更大的圆。"
};

const majorVisualCues = {
  "The Empress": "牌面中的皇后坐在丰盛自然之间，麦田、流水和星冠让滋养、身体与创造力变得可见。",
  "The Emperor": "皇帝坐在石质王座上，山脉和红袍强调边界、权威、责任和稳定结构。",
  "The Hierophant": "教皇位于双柱之间，手势、钥匙和信徒显示传统知识、仪式与学习关系。",
  "The Chariot": "战车、两只斯芬克斯和盔甲显示意志需要驾驭相反力量，而不是被情绪拉散。",
  "Strength": "女子温柔触碰狮子，头顶无限符号显示耐心、慈悲与本能力量的合作。",
  "The Hermit": "隐士提灯站在高处，灯光很小但集中，显示独处中获得的指引。",
  "Wheel of Fortune": "轮盘、四角生物和神秘符号显示命运的循环、上升下降与更大秩序。",
  "Justice": "正义手持天平与宝剑，红色帷幕和端坐姿态强调事实、衡量与决定。",
  "The Hanged Man": "倒吊的人呈现平静姿态，头部光环说明暂停中可能出现新的理解。",
  "Temperance": "天使在两杯之间倒水，一脚入水一脚在地，显示情绪与现实的调和。",
  "The Devil": "恶魔、锁链和裸露人物显示束缚、欲望与自愿维持的限制。",
  "Judgement": "天使吹响号角，人物从棺中升起，显示召唤、复盘和醒来的时刻。",
  "The World": "中央舞者被花环环绕，四角生物守护，象征整合、完成和进入更大循环。"
};

function findCardName(nameEn) {
  return tarotCards.find((card) => card.nameEn === nameEn)?.name || nameEn;
}

function findMinorCardName(suitZh, number) {
  return tarotCards.find((card) => card.suitZh === suitZh && card.number === String(number))?.name;
}

function uniqueRelatedCards(cards, currentName) {
  return cards.filter(Boolean).filter((name, index, list) => name !== currentName && list.indexOf(name) === index).slice(0, 6);
}

function buildRelatedCardsForLearning(card) {
  if (card.arcana === "Major") {
    const sameElement = tarotCards.find((item) => item.arcana === "Minor" && item.elementZh === card.elementZh);
    return uniqueRelatedCards([
      findCardName("The Fool"),
      findCardName("The Magician"),
      tarotCards.find((item) => item.arcana === "Major" && Number(item.number) === Number(card.number) - 1)?.name,
      tarotCards.find((item) => item.arcana === "Major" && Number(item.number) === Number(card.number) + 1)?.name,
      sameElement?.name,
      findCardName("The World")
    ], card.name);
  }

  const sameSuit = [Number(card.number) - 1, Number(card.number) + 1]
    .filter((value) => Number.isFinite(value) && value >= 1 && value <= 10)
    .map((value) => findMinorCardName(card.suitZh, value));
  const elementalMajor = {
    "火元素": findCardName("Judgement"),
    "水元素": findCardName("The Hanged Man"),
    "风元素": findCardName("The Fool"),
    "土元素": findCardName("The World")
  }[card.elementZh];
  const sameRankOtherSuits = tarotCards
    .filter((item) => item.arcana === "Minor" && item.number === card.number && item.suitZh !== card.suitZh)
    .map((item) => item.name);
  return uniqueRelatedCards([elementalMajor, ...sameSuit, ...sameRankOtherSuits], card.name);
}

function buildMediumLearningData(card) {
  const elementTheme = learningElementThemes[card.elementZh] || learningElementThemes[card.element] || learningElementThemes["四元素元素"];

  if (card.arcana === "Major") {
    const core = majorMediumThemes[card.nameEn] || `${card.zhName}代表${card.keywordsZh.join("、")}等大阿尔卡那主题。它更像人生阶段中的原型课题，而不是单一事件。`;
    return {
      zhName: card.zhName,
      nameEn: card.nameEn,
      systemPathZh: `大阿尔卡那 → 牌号 ${card.number} → ${card.elementZh || "原型主题"}`,
      systemPathEn: `Major Arcana → Card ${card.number} → ${card.element || "Archetypal Theme"}`,
      coreThemeZh: core,
      elementConnectionZh: `${card.zhName}通过${card.elementZh || "原型系统"}连接${elementTheme.noun}。${elementTheme.balance}`,
      numberConnectionZh: `牌号 ${card.number} 显示这张牌在大阿尔卡那旅程中的位置。它可以被看作一个阶段性课题，提醒你观察自己正处于哪种成长门槛。`,
      suitConnectionZh: `${card.zhName}不属于具体花色，但可以通过元素、图像符号和问题场景连接到小牌系统。解读时可把它看作比日常事件更深一层的主题。`,
      systemTags: ["大阿尔卡那", card.elementZh, `牌号 ${card.number}`, ...card.keywordsZh.slice(0, 2)].filter(Boolean),
      imageReading: [
        majorVisualCues[card.nameEn] || "观察牌面人物的位置、姿态、背景与手中物品，可以看见这张大牌的核心原型如何显现。",
        "大阿尔卡那的图像通常不是单一事件，而是一种心理阶段、人生课题或意识转变。",
        `把画面中最醒目的符号与“${card.keywordsZh.slice(0, 3).join("、")}”连接，可以帮助你避免只背关键词。`
      ],
      colorReadingZh: "牌面中的主色会提示这张牌的能量温度：暖色常加强行动和显化，冷色常指向内在、直觉或心理距离，金色与白色则常提示意识、价值和精神指引。",
      upright: `感情：${card.zhName}提示关系中正在出现${card.keywordsZh[0]}或${card.keywordsZh[1]}的主题。工作：适合观察结构、方向和关键转折。学习 / 自我成长：这是一张提醒你理解人生课题的大牌。当前建议：${elementTheme.advice}`,
      uprightScenes: `感情：观察这张牌如何影响关系模式。工作：看它代表的阶段、压力或机会。学习 / 自我成长：把它当作一个原型课题来复盘。当前建议：${elementTheme.advice}`,
      reversed: `逆位的${card.zhName}不只是“变坏”，更可能表示${card.keywordsZh[0]}被阻塞、内化、延迟或过度表达。它提醒你看见哪里正在失衡。`,
      reversedLogic: `逆位可以读作阻塞、逃避、过度或反向表达。重点不是下坏结论，而是问：这张大牌的课题有没有被诚实面对？`,
      spreadReadingZh: `当前情况：${card.zhName}代表的问题主题已经成为核心。阻碍：它的能量可能被压抑或过度。建议：先看清这张牌代表的深层课题。结果：当你回应这个课题，局面会进入新的理解阶段。`,
      studyQuestions: [
        `这张牌的画面里，哪个符号最先吸引我？`,
        `我现在如何经历“${card.keywordsZh[0]}”这个主题？`,
        "这张大牌是在描述外部事件，还是我的内在阶段？",
        "如果把它放进牌阵位置，它会怎样改变整组牌的重心？"
      ],
      relatedCards: buildRelatedCardsForLearning(card)
    };
  }

  const suitTheme = learningSuitThemes[card.suitZh];
  const numberTheme = learningNumberThemes[card.number] || "宫廷牌关注人物能量、表达方式和成熟度，而不是简单的数字推进。";
  const isCourt = ["Page", "Knight", "Queen", "King"].includes(card.number);
  const rankLabel = isCourt ? card.zhName.replace(card.suitZh, "") : `数字 ${card.number}`;
  const visualCue = minorVisualCues[card.suitZh]?.[card.number] || suitTheme.visualDefault;

  return {
    zhName: card.zhName,
    nameEn: card.nameEn,
    systemPathZh: `小阿尔卡那 → ${card.suitZh}牌组 → ${isCourt ? `宫廷牌 / ${rankLabel}` : rankLabel} → ${card.elementZh}`,
    systemPathEn: `Minor Arcana → ${suitTheme.en} Suit → ${isCourt ? `Court Card / ${card.number}` : `Number ${card.number}`} → ${card.element}`,
    coreThemeZh: `${card.zhName}代表${card.keywordsZh.join("、")}。它把${suitTheme.field}放进一个具体场景，让你观察这股能量如何在日常事件中表现。`,
    elementConnectionZh: `${card.suitZh}属于${card.elementZh}，连接${elementTheme.noun}。在${card.zhName}中，元素不是抽象概念，而是通过人物姿态、物品和画面节奏表现出来。`,
    numberConnectionZh: numberTheme,
    suitConnectionZh: `${card.suitZh}牌组关注${suitTheme.field}。${card.zhName}显示这组能量在“${rankLabel}”阶段的表现，因此解读时要同时看花色和数字 / 宫廷身份。`,
    systemTags: ["小阿尔卡那", card.elementZh, card.suitZh, isCourt ? "宫廷牌" : `数字 ${card.number}`, rankLabel].filter(Boolean),
    imageReading: [
      visualCue,
      suitTheme.visualDefault,
      `观察画面中${suitTheme.object}如何被持有、交换、移动或阻挡，可以看出这张牌的能量是流动、停滞还是失衡。`
    ],
    colorReadingZh: suitTheme.color,
    upright: `感情：${suitTheme.love}工作：${suitTheme.work}学习 / 自我成长：${suitTheme.growth}当前建议：结合“${card.keywordsZh[0]}”与现实处境，选择一个可以执行的小回应。`,
    uprightScenes: `感情：${suitTheme.love} 工作：${suitTheme.work} 学习 / 自我成长：${suitTheme.growth} 当前建议：不要只背关键词，先看牌面动作和位置。`,
    reversed: `逆位的${card.zhName}可能表示${card.keywordsZh[0]}受阻、延迟、内化、过度或失衡。它不一定是否定牌义，而是提醒这股能量需要重新调节。`,
    reversedLogic: `逆位可从阻塞、反向表达、过度使用或不愿面对来理解。问自己：这张牌的元素能量在哪里没有正常流动？`,
    spreadReadingZh: `当前情况：${card.suitZh}主题正在影响问题。阻碍：${card.keywordsZh[0]}或${card.keywordsZh[1]}可能失衡。建议：从牌面动作和花色系统入手，而不是只看好坏。结果：若能调整这股能量，事件会更清楚地进入下一阶段。`,
    studyQuestions: [
      `这张牌里的${suitTheme.object}是被使用、保护、交换，还是阻挡？`,
      `“${rankLabel}”如何改变${card.suitZh}的能量？`,
      `这张牌更像外部事件，还是我的内在状态？`,
      "如果它出现在建议位，我可以采取哪个具体行动？"
    ],
    relatedCards: buildRelatedCardsForLearning(card)
  };
}

tarotCards.forEach((card) => {
  if (!cardLearningData[card.name]) {
    cardLearningData[card.name] = buildMediumLearningData(card);
  }
});

tarotCards.forEach((card) => {
  const [zhName, nameEn] = cardNameParts[card.name] || [card.name, ""];
  const numberMatch = zhName.match(/[一二三四五六七八九十]/);
  const enhanced = cardLearningData[card.name] || {};
  Object.assign(card, {
    zhName: enhanced.zhName || zhName,
    nameEn: enhanced.nameEn || nameEn,
    upright: enhanced.upright || card.upright,
    reversed: enhanced.reversed || card.reversed,
    imageReading: enhanced.imageReading || card.imageReading,
    systemPathZh: enhanced.systemPathZh || `${displayCardGroup(card.arcana)} / ${card.suit} / ${card.element}`,
    systemPathEn: enhanced.systemPathEn || `${card.arcana} / ${card.suit} / ${card.element}`,
    coreThemeZh: enhanced.coreThemeZh || "内容待补充。当前已包含基础牌名、关键词、系统标签和牌面图片。",
    elementConnectionZh: enhanced.elementConnectionZh || "内容待补充。",
    numberConnectionZh: enhanced.numberConnectionZh || (numberMatch ? "内容待补充。" : "内容待补充。"),
    suitConnectionZh: enhanced.suitConnectionZh || "内容待补充。",
    colorReadingZh: enhanced.colorReadingZh || "内容待补充。",
    uprightScenes: enhanced.uprightScenes || "内容待补充。",
    reversedLogic: enhanced.reversedLogic || "内容待补充。",
    spreadReadingZh: enhanced.spreadReadingZh || "内容待补充。",
    studyQuestions: enhanced.studyQuestions || ["内容待补充。"],
    relatedCards: enhanced.relatedCards || [],
    systemTags: enhanced.systemTags || [displayCardGroup(card.arcana), card.element.split(" ")[0], card.suit.split(" ")[0]]
  });
});

const numberSystemItems = Object.fromEntries([
  ["1", "开始 / 种子 / 潜能"],
  ["2", "选择 / 平衡 / 伙伴关系"],
  ["3", "成长 / 合作 / 表达"],
  ["4", "结构 / 稳定 / 限制"],
  ["5", "冲突 / 改变 / 不稳定"],
  ["6", "和谐 / 调整 / 疗愈"],
  ["7", "挑战 / 信念 / 策略"],
  ["8", "移动 / 力量 / 掌握"],
  ["9", "成熟 / 独处 / 接近完成"],
  ["10", "完成 / 负担 / 周期结束"]
].map(([n, meaning]) => [n === "1" ? "Ace / 1" : `数字 ${n}`, {
  en: n === "1" ? "Ace / One" : `Number ${n}`,
  core: meaning,
  system: "数字系统",
  connections: ["小阿尔卡那", "四花色"],
  relatedCards: n === "2" ? ["圣杯二 Two of Cups"] : n === "3" ? ["宝剑三 Three of Swords"] : n === "4" ? ["星币四 Four of Pentacles"] : n === "10" ? ["圣杯十 Ten of Cups"] : [],
  use: "数字说明事件处于哪个发展阶段，再与花色结合成具体牌义。",
  questions: ["这个阶段在开始、调整、冲突还是完成？", "对应花色如何改变数字的表现？"]
}]));

const tarotSystem = {
  arcana: {
    titleZh: "牌组层级",
    titleEn: "Arcana",
    items: {
      "大阿尔卡那": {
        en: "Major Arcana",
        core: "大阿尔卡那描述人生课题、原型力量和关键转折，常常比日常事件更接近灵魂层面的学习。",
        system: "牌组层级",
        connections: ["四元素", "图像符号", "逆位逻辑", "牌阵位置"],
        relatedCards: ["愚者 The Fool", "恋人 The Lovers", "死神 Death", "高塔 The Tower", "星星 The Star", "月亮 The Moon"],
        use: "当大牌出现时，先问：这件事背后在教我什么长期课题？",
        questions: ["这张大牌像什么人生阶段？", "它指向外部事件，还是内在转变？", "它在牌阵位置中承担什么主题？"]
      },
      "小阿尔卡那": {
        en: "Minor Arcana",
        core: "小阿尔卡那把抽象课题落到日常生活，透过花色、数字和场景呈现具体经验。",
        system: "牌组层级",
        connections: ["四花色", "数字系统", "四元素"],
        relatedCards: ["圣杯二 Two of Cups", "宝剑三 Three of Swords", "星币四 Four of Pentacles", "圣杯十 Ten of Cups"],
        use: "先读花色领域，再读数字阶段，最后结合牌面图像。",
        questions: ["这是哪个生活领域？", "数字显示事情处在哪个阶段？", "图像中谁在行动？"]
      },
      "宫廷牌": {
        en: "Court Cards",
        core: "宫廷牌可以代表人物、态度、成熟度或某种元素能量的表达方式。",
        system: "牌组层级",
        connections: ["宫廷牌系统", "四元素", "四花色"],
        relatedCards: ["宝剑皇后 Queen of Swords"],
        use: "判断它更像一个人、一种心态，还是你需要练习的表达方式。",
        questions: ["这张宫廷牌像谁？", "它成熟还是失衡？", "它如何表达所属元素？"]
      }
    }
  },
  elements: {
    titleZh: "四元素",
    titleEn: "Elements",
    items: {
      "火元素": {
        en: "Fire",
        core: "行动、生命力、欲望、创造、爆发、重启。",
        system: "四元素",
        suit: "权杖 Wands",
        majorDirect: "审判 Judgement",
        majorZodiacLabel: "火象大牌",
        majorZodiac: "白羊 → 皇帝 The Emperor；狮子 → 力量 Strength；射手 → 节制 Temperance",
        minor: "权杖一、权杖八、权杖十",
        courts: "权杖侍从、权杖骑士、权杖王后、权杖国王",
        symbols: "太阳、火焰、权杖、红色、狮子、号角、闪电",
        colors: "红色、橙色、金色、黄色",
        use: "关注行动欲望、动机、推进力和能量是否过度燃烧。",
        imbalance: "冲动、急躁、耗竭、控制欲、过度竞争。",
        connections: ["权杖", "红色", "黄色 / 金色", "太阳", "动物", "逆位逻辑"],
        relatedCards: ["权杖王牌 Ace of Wands", "太阳 The Sun", "审判 Judgement", "力量 Strength", "皇帝 The Emperor", "高塔 The Tower"],
        questions: ["我想行动，还是只是焦虑？", "能量正在创造还是烧毁？", "这张牌要求立刻推进吗？"]
      },
      "水元素": {
        en: "Water",
        core: "情绪、关系、直觉、潜意识、梦境、流动。",
        system: "四元素",
        suit: "圣杯 Cups",
        majorDirect: "倒吊人 The Hanged Man",
        majorZodiacLabel: "水象大牌",
        majorZodiac: "巨蟹 → 战车 The Chariot；天蝎 → 死神 Death；双鱼 → 月亮 The Moon",
        minor: "圣杯一、圣杯二、圣杯五、圣杯十",
        courts: "圣杯侍从、圣杯骑士、圣杯王后、圣杯国王",
        symbols: "水池、河流、海、月亮、面纱、杯子、泪水",
        colors: "蓝色、白色、银色、深紫色",
        use: "先从感受、关系、直觉、潜意识和情绪流动入手，而不是只看外部结果。",
        imbalance: "逃避、情绪依赖、幻想、边界不清、过度敏感。",
        connections: ["圣杯", "蓝色", "白色", "紫色", "月亮", "水 / 河流 / 海"],
        relatedCards: ["女祭司 The High Priestess", "月亮 The Moon", "倒吊人 The Hanged Man", "死神 Death", "圣杯二 Two of Cups", "圣杯十 Ten of Cups"],
        questions: ["真实感受是什么？", "这份情绪属于现在，还是来自投射？", "关系中的流动是否双向？"]
      },
      "风元素": {
        en: "Air",
        core: "思维、语言、判断、选择、真相、自由、距离。",
        system: "四元素",
        suit: "宝剑 Swords",
        majorDirect: "愚人 The Fool",
        majorZodiacLabel: "风象大牌",
        majorZodiac: "双子 → 恋人 The Lovers；天秤 → 正义 Justice；水瓶 → 星星 The Star",
        minor: "宝剑二、宝剑三、宝剑八、宝剑王后",
        courts: "宝剑侍从、宝剑骑士、宝剑王后、宝剑国王",
        symbols: "天空、云、剑、鸟、风、山顶、星光",
        colors: "浅蓝、灰色、白色、银色",
        use: "关注想法、判断、沟通、事实、边界和心理距离。",
        imbalance: "过度分析、冷漠、语言伤害、犹豫、精神压力。",
        connections: ["宝剑", "灰色", "白色", "星星", "山", "剑 / 杯 / 权杖 / 星币"],
        relatedCards: ["愚者 The Fool", "恋人 The Lovers", "正义 Justice", "星星 The Star", "宝剑三 Three of Swords", "宝剑皇后 Queen of Swords"],
        questions: ["我知道的是事实还是解释？", "语言在澄清还是刺伤？", "我需要距离还是连接？"]
      },
      "土元素": {
        en: "Earth",
        core: "身体、金钱、现实、安全感、结构、责任、物质成果。",
        system: "四元素",
        suit: "星币 Pentacles",
        majorDirect: "世界 The World",
        majorZodiacLabel: "土象大牌",
        majorZodiac: "金牛 → 教皇 The Hierophant；处女 → 隐士 The Hermit；摩羯 → 恶魔 The Devil",
        minor: "星币一、星币四、星币十",
        courts: "星币侍从、星币骑士、星币王后、星币国王",
        symbols: "山、土地、花园、金币、城堡、身体、动物",
        colors: "绿色、棕色、金色、黑色",
        use: "关注现实条件、资源、身体感受、长期稳定和实际成本。",
        imbalance: "固执、匮乏感、过度控制、物质焦虑、停滞。",
        connections: ["星币", "绿色", "黄色 / 金色", "黑色", "山", "塔 / 城堡", "动物"],
        relatedCards: ["世界 The World", "隐士 The Hermit", "教皇 The Hierophant", "恶魔 The Devil", "星币四 Four of Pentacles", "星币十 Ten of Pentacles"],
        questions: ["现实资源够吗？", "身体如何回应？", "稳定是支持还是停滞？"]
      }
    }
  },
  suits: {
    titleZh: "四花色",
    titleEn: "Suits",
    items: {
      "权杖": { en: "Wands", core: "行动、创造、热情、事业推动。", system: "四花色", connections: ["火元素", "数字系统"], relatedCards: ["权杖王牌 Ace of Wands"], use: "把权杖看成火元素在日常生活中的行动方式。", questions: ["我想推动什么？", "行动是否过度？"] },
      "圣杯": { en: "Cups", core: "情绪、关系、直觉、爱与内在体验。", system: "四花色", connections: ["水元素", "数字系统"], relatedCards: ["圣杯二 Two of Cups", "圣杯十 Ten of Cups"], use: "先读情感流动，再看关系是否互相回应。", questions: ["我真正感受到什么？", "这份情绪是否流动？"] },
      "宝剑": { en: "Swords", core: "思维、冲突、判断、沟通与真相。", system: "四花色", connections: ["风元素", "逆位逻辑"], relatedCards: ["宝剑三 Three of Swords", "宝剑皇后 Queen of Swords"], use: "关注事实、语言、判断和心理距离。", questions: ["什么是真相？", "我如何表达？"] },
      "星币": { en: "Pentacles", core: "金钱、身体、工作、安全与现实成果。", system: "四花色", connections: ["土元素", "色彩系统"], relatedCards: ["星币四 Four of Pentacles"], use: "回到资源、身体、时间和实际成本。", questions: ["现实条件是什么？", "资源是否被卡住？"] }
    }
  },
  numbers: {
    titleZh: "数字系统",
    titleEn: "Numbers",
    items: numberSystemItems
  },
  courtCards: {
    titleZh: "宫廷牌系统",
    titleEn: "Court Cards",
    items: {
      "侍从": { en: "Page", core: "学习、好奇、初阶表达。", system: "宫廷牌系统", connections: ["四元素"], relatedCards: [], use: "看作刚开始学习某种元素语言。", questions: ["我正在学习什么？"] },
      "骑士": { en: "Knight", core: "推进、追求、运动中的元素。", system: "宫廷牌系统", connections: ["四元素"], relatedCards: [], use: "观察能量推进是否过快或过慢。", questions: ["行动方向清楚吗？"] },
      "王后": { en: "Queen", core: "内在成熟、接纳、稳定表达。", system: "宫廷牌系统", connections: ["四元素"], relatedCards: ["宝剑皇后 Queen of Swords"], use: "看作元素的内在掌握方式。", questions: ["我如何承载这股能量？"] },
      "国王": { en: "King", core: "外在掌控、领导、成熟输出。", system: "宫廷牌系统", connections: ["四元素"], relatedCards: [], use: "看作元素在外部世界中的管理方式。", questions: ["我如何负责地表达？"] }
    }
  },
  colors: {
    titleZh: "色彩系统",
    titleEn: "Colors",
    items: {
      "黑色": { en: "Black", core: "未知、阴影、保护、结束。", system: "色彩系统", connections: ["逆位逻辑"], relatedCards: ["死神 Death", "高塔 The Tower"], use: "观察画面是否在提示边界、结束或未明信息。", questions: ["什么尚未被看见？"] },
      "白色": { en: "White", core: "纯净、清晰、精神性、开始。", system: "色彩系统", connections: ["图像符号"], relatedCards: ["愚者 The Fool", "星星 The Star"], use: "看它是在表达纯粹动机还是新的空间。", questions: ["动机是否清澈？"] },
      "红色": { en: "Red", core: "欲望、生命力、冲突、行动。", system: "色彩系统", connections: ["火元素"], relatedCards: ["魔术师 The Magician", "高塔 The Tower"], use: "判断行动力是创造还是过热。", questions: ["哪里有强烈驱动力？"] },
      "蓝色": { en: "Blue", core: "情绪、直觉、平静、潜意识。", system: "色彩系统", connections: ["水元素"], relatedCards: ["女祭司 The High Priestess", "月亮 The Moon"], use: "把蓝色看作情绪场和内在感受。", questions: ["情绪正在说什么？"] },
      "黄色 / 金色": { en: "Yellow / Gold", core: "意识、自信、价值、丰盛和太阳能量。", system: "色彩系统", connections: ["太阳"], relatedCards: ["太阳 The Sun", "圣杯十 Ten of Cups"], use: "观察光线是否带来清晰和可见性。", questions: ["什么被照亮？"] },
      "绿色": { en: "Green", core: "成长、疗愈、身体和现实生活。", system: "色彩系统", connections: ["土元素"], relatedCards: ["皇后 The Empress", "星币四 Four of Pentacles"], use: "回到身体、自然和修复过程。", questions: ["什么需要滋养？"] },
      "紫色": { en: "Purple", core: "神秘、灵性、转化。", system: "色彩系统", connections: ["水元素", "图像符号"], relatedCards: ["月亮 The Moon"], use: "观察是否有潜意识或灵性主题。", questions: ["什么正在转化？"] },
      "灰色": { en: "Gray", core: "中间状态、压力、雾感、尚未明朗。", system: "色彩系统", connections: ["风元素"], relatedCards: ["宝剑三 Three of Swords"], use: "灰色常提示信息或情绪处在过渡地带。", questions: ["哪里还不够清楚？"] }
    }
  },
  imageSymbols: {
    titleZh: "图像符号",
    titleEn: "Image Symbols",
    items: {
      "水 / 河流 / 海": { en: "Water / River / Sea", core: "情绪流动、潜意识、关系和直觉。", system: "图像符号", connections: ["水元素", "圣杯"], relatedCards: ["月亮 The Moon", "星星 The Star", "圣杯二 Two of Cups"], use: "观察水是平静、流动、阻塞还是深不可测。", questions: ["情绪流向哪里？"] },
      "山": { en: "Mountain", core: "目标、距离、挑战、稳定。", system: "图像符号", connections: ["土元素", "风元素"], relatedCards: ["愚者 The Fool", "隐士 The Hermit"], use: "山常提示远方目标或需要攀登的课题。", questions: ["目标远在哪里？"] },
      "塔 / 城堡": { en: "Tower / Castle", core: "结构、安全、隔离、旧秩序。", system: "图像符号", connections: ["土元素", "高塔 The Tower"], relatedCards: ["高塔 The Tower", "月亮 The Moon"], use: "判断建筑是在保护，还是变成困住人的结构。", questions: ["什么结构需要更新？"] },
      "太阳": { en: "Sun", core: "清晰、生命力、可见性。", system: "图像符号", connections: ["火元素", "黄色 / 金色"], relatedCards: ["太阳 The Sun"], use: "看太阳照亮了什么，也看是否过曝。", questions: ["真相是否变清楚？"] },
      "月亮": { en: "Moon", core: "潜意识、周期、梦境、不确定。", system: "图像符号", connections: ["水元素", "蓝色"], relatedCards: ["月亮 The Moon", "女祭司 The High Priestess"], use: "月亮要求慢一点，不要急着下结论。", questions: ["我在投射什么？"] },
      "星星": { en: "Stars", core: "希望、方向、疗愈和远方指引。", system: "图像符号", connections: ["风元素"], relatedCards: ["星星 The Star"], use: "星星常提示长期方向，而不是立刻结果。", questions: ["什么给我方向？"] },
      "动物": { en: "Animals", core: "本能、陪伴、欲望和自然力量。", system: "图像符号", connections: ["四元素"], relatedCards: ["愚者 The Fool", "力量 Strength"], use: "观察动物是在保护、提醒、攻击还是陪伴。", questions: ["本能在提醒什么？"] },
      "道路": { en: "Road", core: "旅程、选择、过程和未知。", system: "图像符号", connections: ["牌阵位置"], relatedCards: ["愚者 The Fool", "月亮 The Moon"], use: "道路提示事情仍在发展中。", questions: ["下一步在哪里？"] },
      "皇冠": { en: "Crown", core: "权威、意识、身份与掌控。", system: "图像符号", connections: ["大阿尔卡那"], relatedCards: ["高塔 The Tower"], use: "皇冠掉落常表示旧身份或旧权威失效。", questions: ["哪个身份正在改变？"] },
      "剑 / 杯 / 权杖 / 星币": { en: "Sword / Cup / Wand / Pentacle", core: "四花色工具，也是四元素在图像中的具体物。", system: "图像符号", connections: ["四花色", "四元素"], relatedCards: ["魔术师 The Magician"], use: "先辨认工具，再判断它如何被使用。", questions: ["这张牌最醒目的工具是什么？"] }
    }
  },
  reversals: {
    titleZh: "逆位逻辑",
    titleEn: "Reversals",
    items: Object.fromEntries(["阻塞", "内化", "延迟", "过度", "失衡", "反向表达"].map((name) => [name, {
      en: name === "阻塞" ? "Blockage" : name === "内化" ? "Internalized" : name === "延迟" ? "Delay" : name === "过度" ? "Excess" : name === "失衡" ? "Imbalance" : "Opposite Expression",
      core: `逆位可以读作${name}，不是简单的坏。`,
      system: "逆位逻辑",
      connections: ["四元素", "牌阵位置"],
      relatedCards: ["圣杯二 Two of Cups", "宝剑三 Three of Swords", "高塔 The Tower"],
      use: "先判断能量是被卡住、向内、延迟、过度还是失衡，再结合牌位。",
      questions: ["能量在哪里不流动？", "这是内在过程还是外部事件？"]
    }]))
  },
  spreadPositions: {
    titleZh: "牌阵位置",
    titleEn: "Spread Positions",
    items: Object.fromEntries(["当前情况", "阻碍", "建议", "结果", "过去 / 现在 / 未来", "自己 / 对方 / 关系", "选择 A / 选择 B / 隐藏因素"].map((name) => [name, {
      en: "Spread Position",
      core: `${name}会改变同一张牌的解释角度。`,
      system: "牌阵位置",
      connections: ["牌阵", "逆位逻辑"],
      relatedCards: [],
      use: "先读牌位给出的任务，再把牌义放进去，不要脱离问题结构。",
      questions: ["这张牌在这里负责回答什么？", "它是描述现状、阻碍、建议还是趋势？"]
    }]))
  }
};

const allSystemEntries = Object.values(tarotSystem).flatMap((group) =>
  Object.entries(group.items).map(([key, value]) => ({ key, ...value, groupZh: group.titleZh, groupEn: group.titleEn }))
);

function findSystemEntry(key) {
  const aliases = {
    火: "火元素",
    水: "水元素",
    风: "风元素",
    土: "土元素",
    "数字 1": "Ace / 1",
    黄色: "黄色 / 金色",
    金色: "黄色 / 金色"
  };
  const normalizedKey = aliases[key] || key;
  return allSystemEntries.find((entry) => entry.key === normalizedKey || entry.en === normalizedKey);
}

function renderBilingualCardName(card, level = "h3") {
  const tag = level;
  return `
    <${tag} class="card-name-block">
      <span class="card-name-zh">${escapeHtml(card.zhName || card.name)}</span>
      ${card.nameEn ? `<span class="card-name-en">${escapeHtml(card.nameEn)}</span>` : ""}
    </${tag}>
  `;
}

function renderSystemTag(key) {
  const entry = findSystemEntry(key);
  const labelZh = entry?.key || key;
  const labelEn = entry?.en || "";
  return `
    <button class="system-tag" type="button" data-system-key="${escapeHtml(labelZh)}">
      <span>${escapeHtml(labelZh)}</span>
      ${labelEn ? `<small>${escapeHtml(labelEn)}</small>` : ""}
    </button>
  `;
}

function renderRelatedCardButton(name) {
  const card = getCardByName(name);
  const zh = card?.zhName || name;
  const en = card?.nameEn || "";
  return `
    <button class="related-card-button" type="button" data-related-card="${escapeHtml(name)}">
      <span>${escapeHtml(zh)}</span>
      ${en ? `<small>${escapeHtml(en)}</small>` : ""}
    </button>
  `;
}

function renderSystemEntryDetail(entry) {
  if (!entry) return `<p>内容待补充。这个学习节点已经预留，后续可以继续连接元素、图像、牌阵和相关牌。</p>`;
  const fields = [
    ["核心", entry.core],
    ["系统位置", `${entry.groupZh || entry.system}${entry.groupEn ? ` / ${entry.groupEn}` : ""}`],
    ["对应花色", entry.suit],
    ["直接元素大牌", entry.majorDirect],
    [entry.majorZodiacLabel || "星座对应大牌", entry.majorZodiac || entry.majorSigns],
    ["小牌连接", entry.minor],
    ["宫廷牌连接", entry.courts],
    ["图像符号", entry.symbols],
    ["色彩连接", entry.colors],
    ["在牌阵中如何读", entry.use],
    ["失衡状态", entry.imbalance]
  ].filter(([, value]) => value);

  return `
    <div class="system-detail-head">
      <p class="panel-label">${escapeHtml(entry.system || entry.groupZh || "学习系统")}</p>
      <h3>
        <span>${escapeHtml(entry.key)}</span>
        ${entry.en ? `<small>${escapeHtml(entry.en)}</small>` : ""}
      </h3>
    </div>
    <div class="system-detail-grid">
      ${fields.map(([title, value]) => `
        <section>
          <strong>${escapeHtml(title)}</strong>
          <p>${escapeHtml(value)}</p>
        </section>
      `).join("")}
    </div>
    ${entry.connections?.length ? `
      <div class="system-link-group">
        <strong>可继续点击学习</strong>
        <div class="tag-row">${entry.connections.map(renderSystemTag).join("")}</div>
      </div>
    ` : ""}
    ${entry.relatedCards?.length ? `
      <div class="system-link-group">
        <strong>相关牌</strong>
        <div class="related-card-grid">${entry.relatedCards.map(renderRelatedCardButton).join("")}</div>
      </div>
    ` : ""}
    ${entry.questions?.length ? `
      <div class="system-link-group">
        <strong>练习问题</strong>
        <ul>${entry.questions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}</ul>
      </div>
    ` : ""}
  `;
}

function showSystemDetail(key) {
  const detail = byId("system-detail");
  if (!detail) return;
  const entry = findSystemEntry(key);
  detail.innerHTML = renderSystemEntryDetail(entry);
  bindSystemInteractions(detail);
}

function bindSystemInteractions(scope = document) {
  scope.querySelectorAll("[data-system-key]").forEach((button) => {
    button.addEventListener("click", () => {
      showSystemDetail(button.dataset.systemKey);
      byId("system-detail")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });

  scope.querySelectorAll("[data-related-card]").forEach((button) => {
    button.addEventListener("click", () => openCardModal(button.dataset.relatedCard));
  });
}

const knowledgeItems = [
  ["大阿尔卡那", "人生课题、原型、重要转折。大阿尔卡那常常指向一件事背后的灵魂课程。"],
  ["小阿尔卡那", "日常事件、情绪、行动、现实层面的变化。小阿尔卡那描述课程如何出现在普通生活里。"],
  ["四元素", "火、水、风、土是理解花色、情绪氛围和问题类型的元素语法。"],
  ["花色", "权杖行动，圣杯感受，宝剑思考，星币建造。花色是进入一张牌的第一扇门。"],
  ["数字 1-10", "小牌数字系统描述从种子、成长、压力到完成与周期结束的发展过程。"],
  ["宫廷牌", "侍从、骑士、王后、国王可以代表人物、态度、成熟阶段，或能量运作的方式。"],
  ["逆位", "逆位不是简单的坏，而是阻塞、内化、延迟、过度或失衡。阅读时可以问：什么被卡住了，什么转向了内在？"],
  ["牌阵", "牌阵帮助把抽到的牌放进具体问题结构中。牌位会给每张牌一个具体任务。"]
];

const elements = [
  {
    name: "火 Fire",
    suit: "权杖 Wands",
    symbol: "△",
    words: "行动、渴望、创造力、野心",
    detail: "火元素呈现动力、勇气、欲望、竞争与创造力。学习提示：问问什么想要行动、开始、冒险，或燃烧得太过。"
  },
  {
    name: "水 Water",
    suit: "圣杯 Cups",
    symbol: "▽",
    words: "情绪、爱、直觉、关系",
    detail: "水元素呈现依恋、记忆、共情、梦境，以及事件下方的情感真相。学习提示：问问什么正在被感受、联结、理想化或回避。"
  },
  {
    name: "风 Air",
    suit: "宝剑 Swords",
    symbol: "△",
    words: "想法、冲突、真相、沟通",
    detail: "风元素呈现头脑、语言、策略、冲突与清晰。学习提示：问问当前叙事是什么，它是否准确、有帮助，还是过于锋利。"
  },
  {
    name: "土 Earth",
    suit: "星币 Pentacles",
    symbol: "▽",
    words: "金钱、身体、工作、稳定",
    detail: "土元素呈现物质生活：身体、劳动、习惯、金钱、技能和时间。学习提示：问问现实世界中有什么需要照料。"
  }
];

const numberMeanings = [
  ["1", "开始 / 种子 / 潜能"],
  ["2", "选择 / 平衡 / 伙伴关系"],
  ["3", "成长 / 合作 / 表达"],
  ["4", "结构 / 稳定 / 限制"],
  ["5", "冲突 / 改变 / 不稳定"],
  ["6", "和谐 / 调整 / 疗愈"],
  ["7", "挑战 / 信念 / 策略"],
  ["8", "移动 / 力量 / 掌握"],
  ["9", "成熟 / 独处 / 接近完成"],
  ["10", "完成 / 负担 / 周期结束"]
];

const spreads = [
  {
    name: "单张每日牌",
    question: "适合每日聚焦、状态检查和简单指引。",
    positions: ["今日课题"]
  },
  {
    name: "过去 / 现在 / 未来",
    question: "适合把一个情况看成正在移动的时间线。",
    positions: ["过去影响", "当前能量", "可能未来"]
  },
  {
    name: "选择 A / 选择 B",
    question: "适合比较两条路径，同时保留自己的主动权。",
    positions: ["选项 A 的能量", "选项 B 的能量", "隐藏因素", "建议"]
  },
  {
    name: "关系牌阵",
    question: "适合观察关系、期待、情感动态与修复。",
    positions: ["你", "对方", "关系联结", "挑战", "下一步"]
  },
  {
    name: "事业牌阵",
    question: "适合工作方向、技能成长与现实决策。",
    positions: ["当前位置", "优势", "阻碍", "机会", "行动", "结果"]
  }
];

const lensQuestionTypes = ["感情", "事业", "学习", "自我", "决策", "开放问题"];

const lensSpreads = [
  {
    name: "单张牌",
    positions: ["指引"],
    note: "适合为一个简单问题或每日反思提供聚焦答案。"
  },
  {
    name: "过去 / 现在 / 未来",
    positions: ["过去", "现在", "未来"],
    note: "用时间线理解事情如何发展。"
  },
  {
    name: "选择 A / B",
    positions: ["选择 A", "选择 B", "隐藏因素", "建议"],
    note: "用于比较两条可能路径的牌阵。"
  },
  {
    name: "关系",
    positions: ["你", "对方", "联结", "挑战", "下一步"],
    note: "用于观察关系模式、期待与修复方向。"
  },
  {
    name: "事业牌阵",
    positions: ["当前工作状态", "优势", "阻碍", "机会", "行动", "结果"],
    note: "用于工作方向与下一步行动的实用牌阵。"
  }
];

const colors = [
  ["黑色", "#08070a", "未知、阴影、保护、结束"],
  ["白色", "#f6efe2", "纯净、清晰、精神、开始"],
  ["红色", "#a33245", "渴望、生命力、冲突、行动"],
  ["蓝色", "#315f9f", "直觉、情绪、平静、潜意识"],
  ["黄色", "#d8bd4f", "意识、自信、清晰、太阳能量"],
  ["绿色", "#4f8a5d", "成长、疗愈、物质生活"],
  ["紫色", "#71438f", "神秘、灵性、转化"],
  ["金色", "#d8af5f", "价值、成功、神圣、丰盛"]
];

let quizQuestions = [
  {
    question: "哪个花色对应水元素？",
    options: ["圣杯 Cups", "宝剑 Swords", "权杖 Wands", "星币 Pentacles"],
    answer: "圣杯 Cups"
  },
  {
    question: "宝剑对应哪个元素？",
    options: ["风 Air", "水 Water", "土 Earth", "火 Fire"],
    answer: "风 Air"
  },
  {
    question: "数字 5 通常暗示什么？",
    options: ["冲突、改变、不稳定", "完成与收尾", "纯粹和谐", "隐藏的直觉"],
    answer: "冲突、改变、不稳定"
  },
  {
    question: "大阿尔卡那通常代表什么？",
    options: ["人生课题、原型、重要转折", "只代表金钱问题", "只代表天气和时间", "只代表宫廷人物"],
    answer: "人生课题、原型、重要转折"
  },
  {
    question: "逆位除了“坏”以外，还可能表示什么？",
    options: ["阻塞、内化、延迟、过度或失衡", "只代表灾难", "只代表相反含义", "应该忽略这张牌"],
    answer: "阻塞、内化、延迟、过度或失衡"
  }
];

function uniqueOptions(correct, pool, size = 4) {
  const options = [correct];
  const shuffled = [...new Set(pool.filter((item) => item && item !== correct))].sort(() => Math.random() - 0.5);
  for (const item of shuffled) {
    if (options.length >= size) break;
    options.push(item);
  }
  return options.sort(() => Math.random() - 0.5);
}

function getSafeText(value, fallback = "待补充", maxLength = 56) {
  const raw = Array.isArray(value) ? value.filter(Boolean).join("、") : value;
  const text = String(raw ?? "").replace(/\s+/g, " ").trim();
  const safe = text && !["undefined", "null"].includes(text.toLowerCase()) ? text : fallback;
  return safe.length > maxLength ? safe.slice(0, maxLength) : safe;
}

function getCardKeywords(card) {
  return [...new Set([...(card?.keywordsZh || []), ...(card?.keywords || [])].filter(Boolean))];
}

function getCardKeywordOption(card) {
  return getSafeText(getCardKeywords(card).slice(0, 4), "核心主题、能量变化、学习重点", 32);
}

function getCardUprightMeaning(card) {
  return normalizeQuizOptionText(card?.upright || card?.uprightScenes || card?.coreThemeZh || getCardKeywords(card), { mode: "upright", fallback: "保持开放，理解当前主题并采取行动" });
}

function getCardReversedMeaning(card) {
  return normalizeQuizOptionText(card?.reversed || card?.reversedLogic || card?.coreThemeZh || getCardKeywords(card), { mode: "reversed", fallback: "可能提醒能量受阻、内化或失衡" });
}

function getCardDisplayName(card) {
  return `${getSafeText(card?.zhName, "未知牌", 24)} / ${getSafeText(card?.nameEn || card?.name, "Unknown Card", 32)}`;
}

const genericQuizDistractors = [
  "强调先观察当下状态，再做出清醒选择。",
  "提醒你调整节奏，避免只凭惯性行动。",
  "提示某种能量正在失衡，需要重新校准。",
  "更适合从现实条件、内在感受和行动后果一起判断。",
  "重点在于看见隐藏模式，而不是立刻下结论。",
  "提醒你把注意力放回具体需求和真实边界。"
];

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getAllCardNameTokens() {
  return tarotCards
    .flatMap((card) => [card.zhName, card.nameEn, card.name, card.cardNameZh, card.cardNameEn])
    .filter(Boolean)
    .sort((a, b) => String(b).length - String(a).length);
}

function stripQuizOptionPrefix(text) {
  return String(text || "")
    .replace(/^(感情|工作|学习\s*\/\s*自我成长|学习|当前建议|建议|结果|阻碍|当前情况)[：:]\s*/g, "")
    .replace(/^(先关注|它可能提醒你|这张牌提示|这更像是在提醒你|代表|可能表示|通常意味着|通常更强调)[：:，,\s]*/g, "")
    .replace(/^(可能提醒你|可能暗示|可能说明|更可能提示|更可能提醒)[：:，,\s]*/g, "");
}

function splitMeaningParts(text) {
  return String(text || "")
    .replace(/(感情|工作|学习\s*\/\s*自我成长|学习|当前建议|建议|结果|阻碍|当前情况)[：:]/g, "。$1：")
    .split(/[。！？；;]/)
    .map((part) => stripQuizOptionPrefix(part).trim())
    .filter(Boolean);
}

function compactMeaningText(text, fallback = "关注核心主题并做出清醒回应") {
  const parts = splitMeaningParts(text)
    .flatMap((part) => part.split(/[，,]/))
    .map((part) => stripQuizOptionPrefix(part).trim())
    .filter((part) => part && part.length >= 3);
  const useful = parts.filter((part) => !/这是一张|牌面|大阿尔卡那|小阿尔卡那/.test(part));
  const selected = (useful.length ? useful : parts).slice(0, 2);
  const joined = selected.join("，");
  if (!joined) return fallback;
  if (joined.length <= 50) return joined;
  const shorter = selected.map((part) => part.split(/[、]/).slice(0, 3).join("、")).join("，");
  return shorter.length <= 50 ? shorter : fallback;
}

function normalizeQuizOptionText(text, options = {}) {
  const { fallback = "关注核心主题并做出清醒回应", mode = "meaning" } = options;
  const raw = getSafeText(text, fallback, 240);
  let compact = compactMeaningText(raw, fallback)
    .replace(/^不只是“变坏”，更?/g, "")
    .replace(/^更可能/g, "可能")
    .replace(/^代表/g, "")
    .replace(/^你需要代表/g, "你需要")
    .replace(/^可能提醒可能表示/g, "可能提醒")
    .replace(/^可能提醒更可能表示/g, "可能提醒")
    .replace(/^可能提醒不一定/g, "可能提醒情况不一定")
    .replace(/^可能提醒不只是“变坏”，?/g, "可能提醒")
    .replace(/^需要/g, "需要")
    .replace(/、、+/g, "、")
    .trim();
  compact = stripQuizOptionPrefix(compact);
  compact = compact.replace(/^代表/g, "").replace(/^你需要代表/g, "你需要").replace(/、、+/g, "、").trim();
  if (mode === "reversed" && !/^可能|需要|提醒|暗示/.test(compact)) {
    compact = `可能提醒${compact}`;
  }
  if (mode === "scenario" && !/^你/.test(compact)) {
    compact = `你需要${compact}`;
  }
  compact = compact.replace(/\s+/g, " ").replace(/[。；;]+$/g, "").trim();
  compact = compact
    .replace(/^可能提醒更可能表示/g, "可能提醒")
    .replace(/^可能提醒可能表示/g, "可能提醒")
    .replace(/^可能提醒不只是“变坏”，?/g, "可能提醒")
    .trim();
  if (compact.length > 50) {
    const parts = compact.split(/[，,、]/).map((part) => part.trim()).filter(Boolean);
    let shortened = "";
    for (const part of parts) {
      const next = shortened ? `${shortened}、${part}` : part;
      if (next.length > 50) break;
      shortened = next;
    }
    compact = shortened || fallback;
  }
  return compact && compact.length >= 6 && compact.length <= 50 ? compact : fallback;
}

function sanitizeQuizOptionText(text, card = null) {
  let cleaned = normalizeQuizOptionText(text, { fallback: "关注核心主题并做出清醒回应" });
  getAllCardNameTokens().forEach((name) => {
    cleaned = cleaned.replace(new RegExp(escapeRegExp(name), "gi"), "");
  });
  if (card) {
    [card.zhName, card.nameEn, card.name].filter(Boolean).forEach((name) => {
      cleaned = cleaned.replace(new RegExp(escapeRegExp(name), "gi"), "");
    });
  }
  cleaned = cleaned
    .replace(/(?:正位|逆位)的?\s*/g, "")
    .replace(/这张牌是\s*/g, "")
    .replace(/^[：:，,、\s]+/, "")
    .replace(/\s+/g, " ")
    .replace(/([。！？；])\1+/g, "$1")
    .trim();
  cleaned = normalizeQuizOptionText(cleaned, { fallback: "关注核心主题并做出清醒回应" });
  if (!cleaned || cleaned.length < 6 || ["。", "，", "、"].includes(cleaned)) {
    return "关注这组含义背后的核心能量。";
  }
  return cleaned;
}

function buildQuizOptions(correct, pools, fallbackPool = [], config = {}) {
  const { allowCardNames = false, card = null } = config;
  const normalize = (item) => allowCardNames
    ? getSafeText(item, "待补充", 58)
    : sanitizeQuizOptionText(item, card);
  const answer = normalize(correct);
  const distractors = pools
    .flat()
    .concat(fallbackPool)
    .concat(allowCardNames ? [] : genericQuizDistractors)
    .map(normalize)
    .filter((item) => item && item !== answer);
  return uniqueOptions(answer, distractors, 4);
}

function generateQuizQuestions() {
  const cards = [...tarotCards].sort(() => Math.random() - 0.5);
  const q = [];
  const c1 = cards[0], c2 = cards[1], c3 = cards[2], c4 = cards[3], c5 = cards.find((card) => card.keywordsZh?.length) || cards[4];
  q.push({ question: `${c1.zhName} 的英文名是？`, options: uniqueOptions(c1.nameEn, tarotCards.map((card) => card.nameEn)), answer: c1.nameEn });
  q.push({ question: `${c2.nameEn} 的中文名是？`, options: uniqueOptions(c2.zhName, tarotCards.map((card) => card.zhName)), answer: c2.zhName });
  q.push({ question: `${c3.zhName} 对应哪个元素？`, options: uniqueOptions(c3.elementZh || c3.element, ["火元素", "水元素", "风元素", "土元素", "四元素"]), answer: c3.elementZh || c3.element });
  q.push({ question: `${c4.zhName} 属于哪个花色 / 系统？`, options: uniqueOptions(c4.suitZh || "大阿尔卡那", ["权杖", "圣杯", "宝剑", "星币", "大阿尔卡那"]), answer: c4.suitZh || "大阿尔卡那" });
  q.push({ question: `关键词“${(c5.keywordsZh || c5.keywords)[0]}”可能对应哪张牌？`, options: uniqueOptions(c5.zhName, tarotCards.map((card) => card.zhName)), answer: c5.zhName });
  return q;
}

let favorites = new Set(JSON.parse(localStorage.getItem("arcanaFavorites") || "[]"));
let journalEntries = JSON.parse(localStorage.getItem("arcanaJournal") || "[]");
let activeFilter = "All";
let activeSpread = null;
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let currentDailyCard = null;
let lensState = {
  imageData: "",
  questionType: "开放问题",
  spreadName: "单张牌",
  detectedCards: [],
  interpretation: null
};

function byId(id) {
  return document.getElementById(id);
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[character]);
}

function makeId() {
  return globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : String(Date.now() + Math.random());
}

function displayCardGroup(value) {
  if (value === "Major") return "大阿尔卡那";
  if (value === "Minor") return "小阿尔卡那";
  return value;
}

function displayOrientation(value) {
  return value === "reversed" ? "逆位" : "正位";
}

function renderCardImage(card, variant = "thumb") {
  const label = escapeHtml(card.imageAlt || `${card.name} 塔罗牌图`);
  const zh = escapeHtml(card.zhName || card.name || "牌图待补");
  const en = escapeHtml(card.nameEn || "");
  const cardName = escapeHtml(card.name || "");
  const imageUrl = card.remoteImage || card.image || "";
  const rawImage = escapeHtml(imageUrl);
  const imageSource = /^https?:\/\//.test(imageUrl) ? "remote" : imageUrl ? "local" : "none";
  const isWikimediaImage = imageUrl.includes("commons.wikimedia.org/wiki/Special:FilePath/");
  const timeout = variant === "thumb" ? (isWikimediaImage ? 15000 : 8000) : 12000;
  const loading = variant === "thumb" ? "lazy" : "eager";
  const fallbackTags = [
    card.suitZh || card.arcanaZh || displayCardGroup(card.arcana),
    card.elementZh || card.element
  ].filter(Boolean);
  const fallback = `
    <div class="placeholder-text image-fallback-name">
      <div class="card-name-zh">${zh}</div>
      ${en ? `<div class="card-name-en">${en}</div>` : ""}
      ${fallbackTags.length ? `<em>${fallbackTags.map((tag) => `<b>${escapeHtml(tag)}</b>`).join("")}</em>` : ""}
    </div>
  `;
  if (!imageUrl) {
    return `<figure class="card-image tarot-image-frame ${variant} image-placeholder image-missing">${fallback}</figure>`;
  }
  return `
    <figure class="card-image tarot-image-frame ${variant}">
      <img src="${rawImage}" alt="${label}" loading="${loading}" decoding="async" data-card-zh="${zh}" data-card-name="${cardName}" data-image-source="${imageSource}" data-image-timeout="${timeout}" data-allow-late-swap="true">
      ${fallback}
    </figure>
  `;
}

function showCardImagePlaceholder(img, reason = "error") {
  const wrapper = img.closest(".card-image");
  if (!wrapper) return;
  if (window.DEBUG_IMAGES) console.warn("Tarot image fallback:", reason, img.dataset.cardZh, img.dataset.cardName, img.src);
  img.style.display = "";
  img.style.opacity = "0";
  img.style.pointerEvents = "none";
  img.style.position = "absolute";
  img.style.inset = "0";
  img.dataset.fallbackReason = reason;
  wrapper.classList.add("image-placeholder", "image-missing");
}

function markCardImageLoaded(img, lateSwap = false) {
  const wrapper = img.closest(".card-image");
  img.dataset.imageSettled = "loaded";
  if (lateSwap) img.dataset.lateSwap = "true";
  delete img.dataset.fallbackReason;
  img.style.display = "";
  img.style.opacity = "";
  img.style.pointerEvents = "";
  img.style.position = "";
  img.style.inset = "";
  if (wrapper) wrapper.classList.remove("image-placeholder", "image-missing");
}

function hydrateCardImages(root = document) {
  root.querySelectorAll(".card-image img").forEach((img) => {
    if (img.dataset.imageWatched === "true") return;
    img.dataset.imageWatched = "true";

    const timeout = Number(img.dataset.imageTimeout || 3500);
    const timer = window.setTimeout(() => {
      if (img.dataset.imageSettled === "loaded" || img.dataset.imageSettled === "error") return;
      img.dataset.imageSettled = "timeout";
      showCardImagePlaceholder(img, "timeout");
    }, timeout);

    img.addEventListener("load", () => {
      if (img.dataset.imageSettled === "loaded") return;
      window.clearTimeout(timer);
      markCardImageLoaded(img, ["timeout", "error"].includes(img.dataset.imageSettled) && img.dataset.allowLateSwap === "true");
    });

    img.addEventListener("error", () => {
      if (img.dataset.imageSettled === "loaded" || img.dataset.imageSettled === "error") return;
      window.clearTimeout(timer);
      img.dataset.imageSettled = "error";
      showCardImagePlaceholder(img, "error");
    });

    if (img.complete) {
      window.setTimeout(() => {
        if (img.dataset.imageSettled === "loaded" || img.dataset.imageSettled === "error") return;
        window.clearTimeout(timer);
        if (img.naturalWidth > 0 && img.naturalHeight > 0) {
          markCardImageLoaded(img, img.dataset.imageSettled === "timeout" && img.dataset.allowLateSwap === "true");
        } else {
          img.dataset.imageSettled = "error";
          showCardImagePlaceholder(img, "complete-without-size");
        }
      }, 0);
    }
  });
}

function debugCardImages() {
  const images = [...document.querySelectorAll(".card-image img")];
  const remoteImages = images.filter((img) => img.dataset.imageSource === "remote");
  const dataSummary = {
    totalCards: tarotCards.length,
    withImage: tarotCards.filter((card) => Boolean(card.image)).length,
    emptyImage: tarotCards.filter((card) => !card.image).length,
    first10: tarotCards.slice(0, 10).map((card) => ({ id: card.id, zhName: card.zhName, name: card.name, image: card.image })),
    minorFirst10: tarotCards.filter((card) => card.arcana === "Minor").slice(0, 10).map((card) => ({ id: card.id, zhName: card.zhName, name: card.name, image: card.image }))
  };
  const domSummary = {
    imgCount: images.length,
    first10: images.slice(0, 10).map((img) => ({
      src: img.src,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      display: getComputedStyle(img).display,
      opacity: getComputedStyle(img).opacity,
      objectFit: getComputedStyle(img).objectFit,
      wrapperHeight: img.closest(".card-image")?.getBoundingClientRect().height || 0,
      placeholder: img.closest(".card-image")?.classList.contains("image-placeholder") || false
    })),
    loaded: images.filter((img) => img.complete && img.naturalWidth > 0 && img.naturalHeight > 0).length,
    failed: images.filter((img) => img.complete && (img.naturalWidth === 0 || img.naturalHeight === 0)).length,
    placeholders: document.querySelectorAll(".card-image.image-placeholder, .card-image.image-missing").length,
    remotePending: remoteImages.filter((img) => !img.dataset.imageSettled).length,
    remoteSuccess: remoteImages.filter((img) => img.dataset.imageSettled === "loaded").length,
    timeoutFallback: remoteImages.filter((img) => img.dataset.imageSettled === "timeout").length,
    remoteError: remoteImages.filter((img) => img.dataset.imageSettled === "error").length,
    lateSwapSuccess: remoteImages.filter((img) => img.dataset.lateSwap === "true").length,
    wands: remoteImages
      .filter((img) => img.src.includes("Wands"))
      .map((img) => ({
        name: `${img.dataset.cardZh || ""} ${img.dataset.cardName || ""}`.trim(),
        status: img.dataset.imageSettled || "pending",
        lateSwap: img.dataset.lateSwap === "true",
        fallbackReason: img.dataset.fallbackReason || "",
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        placeholder: img.closest(".card-image")?.classList.contains("image-placeholder") || false
      })),
    fallbackCount: document.querySelectorAll(".card-image.image-placeholder, .card-image.image-missing").length
  };
  const summary = { dataSummary, domSummary };
  if (window.DEBUG_IMAGES) console.table(domSummary.first10);
  if (window.DEBUG_IMAGES) console.log("Tarot image debug:", summary);
  return summary;
}

window.debugCardImages = debugCardImages;

function renderVisualReadingList(card) {
  return (card.imageReading || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function getCardByName(name) {
  const normalized = String(name || "").trim();
  return tarotCards.find((card) =>
    card.name === normalized ||
    card.nameEn === normalized ||
    card.zhName === normalized ||
    `${card.zhName} ${card.nameEn}` === normalized ||
    normalized.endsWith(card.nameEn)
  );
}

function isDetailedCard(card) {
  return Boolean(card && cardLearningData[card.name]);
}

function getCardSystemLine(card) {
  return [card.arcanaZh || displayCardGroup(card.arcana), card.suitZh, card.elementZh || card.element, card.number ? `#${card.number}` : ""].filter(Boolean).join(" · ");
}

function getStudyStats() {
  const detailed = tarotCards.filter(isDetailedCard);
  const suitCount = (suitZh) => detailed.filter((card) => card.suitZh === suitZh).length;
  return {
    total: tarotCards.length,
    detailed: detailed.length,
    pending: tarotCards.length - detailed.length,
    major: detailed.filter((card) => card.arcana === "Major").length,
    minor: detailed.filter((card) => card.arcana === "Minor").length,
    suits: {
      权杖: suitCount("权杖"),
      圣杯: suitCount("圣杯"),
      宝剑: suitCount("宝剑"),
      星币: suitCount("星币")
    }
  };
}

function saveFavorites() {
  localStorage.setItem("arcanaFavorites", JSON.stringify([...favorites]));
}

function getVisitedStatus() {
  return JSON.parse(localStorage.getItem("tarotVisited") || "{}");
}

function markCardVisited(cardId) {
  if (!cardId) return;
  if (!localStorage.getItem("tarotVisited")) initLearningStatus();

  const visited = getVisitedStatus();
  visited[cardId] = true;
  localStorage.setItem("tarotVisited", JSON.stringify(visited));
}

function getVisitedStats() {
  const visited = getVisitedStatus();
  const visitedCount = tarotCards.filter((card) => visited[card.id] === true).length;
  const total = tarotCards.length;
  const percent = total ? Math.round((visitedCount / total) * 100) : 0;
  return { visitedCount, total, percent };
}

function getDefaultCardLearningState(cardId) {
  return {
    cardId,
    status: "new",
    masteryLevel: 0,
    firstLearnedAt: null,
    lastReviewedAt: null,
    nextReviewAt: null,
    testHistory: [],
    correctStreak: 0,
    wrongCount: 0,
    reviewCount: 0,
    updatedAt: null
  };
}

function getLearningState() {
  try {
    const stored = JSON.parse(localStorage.getItem("tarotLearningState") || "{}");
    return stored && typeof stored === "object" ? stored : {};
  } catch (error) {
    console.warn("Unable to read tarotLearningState.", error);
    return {};
  }
}

function saveLearningState(state) {
  try {
    localStorage.setItem("tarotLearningState", JSON.stringify(state));
  } catch (error) {
    console.warn("Unable to save tarotLearningState.", error);
  }
}

function getCardLearningState(cardId) {
  const existing = getLearningState()[cardId] || {};
  const merged = { ...getDefaultCardLearningState(cardId), ...existing, cardId };
  merged.masteryLevel = Math.min(5, Math.max(0, Number(merged.masteryLevel || 0)));
  merged.testHistory = Array.isArray(merged.testHistory) ? merged.testHistory : [];
  merged.correctStreak = Number(merged.correctStreak || 0);
  merged.wrongCount = Number(merged.wrongCount || 0);
  merged.reviewCount = Number(merged.reviewCount || 0);
  return merged;
}

function updateCardLearningState(cardId, patch = {}) {
  if (!cardId) return null;
  const state = getLearningState();
  const updated = {
    ...getDefaultCardLearningState(cardId),
    ...(state[cardId] || {}),
    ...patch,
    cardId,
    updatedAt: new Date().toISOString()
  };
  updated.masteryLevel = Math.min(5, Math.max(0, Number(updated.masteryLevel || 0)));
  updated.testHistory = Array.isArray(updated.testHistory) ? updated.testHistory : [];
  state[cardId] = updated;
  saveLearningState(state);
  renderStudyProgress();
  return updated;
}

function resetLearningState() {
  localStorage.removeItem("tarotLearningState");
  renderStudyProgress();
}

function getLearningStatusLabel(status) {
  return {
    new: "未开始",
    learning: "学习中",
    reviewing: "待复习",
    mastered: "已掌握",
    weak: "需加强"
  }[status] || "未开始";
}

function formatReviewDate(value) {
  if (!value) return "暂无";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "暂无" : date.toISOString().slice(0, 10);
}

function isReviewDue(value) {
  if (!value) return false;
  const due = new Date(value);
  if (Number.isNaN(due.getTime())) return false;
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  return due <= today;
}

function getReviewIntervalDays(masteryLevel) {
  const level = Math.min(5, Math.max(1, Number(masteryLevel || 1)));
  return { 1: 1, 2: 3, 3: 7, 4: 14, 5: 30 }[level];
}

function calculateNextReviewDate(masteryLevel) {
  const date = new Date();
  date.setDate(date.getDate() + getReviewIntervalDays(masteryLevel));
  return date.toISOString();
}

function getDueReviewCards() {
  return tarotCards
    .map((card) => ({ card, state: getCardLearningState(card.id) }))
    .filter(({ state }) => ["reviewing", "weak"].includes(state.status) && isReviewDue(state.nextReviewAt))
    .sort((a, b) => {
      if (a.state.status !== b.state.status) return a.state.status === "weak" ? -1 : 1;
      const aDate = new Date(a.state.nextReviewAt).getTime();
      const bDate = new Date(b.state.nextReviewAt).getTime();
      if (aDate !== bDate) return aDate - bDate;
      return a.state.masteryLevel - b.state.masteryLevel;
    })
    .map(({ card }) => card);
}

const questionTypeLabels = {
  name: "牌名识别",
  keyword: "关键词匹配",
  upright: "正位含义",
  reversed: "逆位含义",
  scenario: "情境理解",
  visual: "图像象征",
  system: "元素/牌组理解",
  contrast: "易混淆辨析"
};

function getQuestionResults() {
  return [...document.querySelectorAll("#modal-card-quiz .card-quiz-question")].map((question) => {
    const questionType = question.dataset.questionType || "scenario";
    const selectedAnswer = question.dataset.selected || "未作答";
    const correctAnswer = question.dataset.answer || "待补充";
    return {
      questionType,
      questionLabel: question.dataset.questionLabel || questionTypeLabels[questionType] || "综合理解",
      questionText: question.dataset.questionText || question.querySelector("legend")?.textContent?.replace(/^\d+\.\s*/, "") || "待补充",
      selectedAnswer,
      correctAnswer,
      isCorrect: selectedAnswer === correctAnswer
    };
  });
}

function getLatestWrongResult(state) {
  const history = [...(state.testHistory || [])].reverse();
  for (const record of history) {
    const wrong = (record.questionResults || []).filter((result) => result && result.isCorrect === false);
    if (wrong.length) return { record, result: wrong[0] };
  }
  return null;
}

function getWeaknessStats() {
  const stats = Object.fromEntries(Object.entries(questionTypeLabels).map(([type, label]) => [type, { type, label, count: 0 }]));
  Object.values(getLearningState()).forEach((state) => {
    (state.testHistory || []).forEach((record) => {
      (record.questionResults || []).forEach((result) => {
        if (!result || result.isCorrect !== false) return;
        const type = result.questionType || "scenario";
        if (!stats[type]) stats[type] = { type, label: result.questionLabel || "综合理解", count: 0 };
        stats[type].count += 1;
      });
    });
  });
  return Object.values(stats);
}

function getWeakCards() {
  return tarotCards
    .map((card) => {
      const state = getCardLearningState(card.id);
      const latestWrong = getLatestWrongResult(state);
      return {
        card,
        state,
        latestWrong,
        hasRecentWrong: Boolean(latestWrong)
      };
    })
    .filter(({ state, hasRecentWrong }) => state.status === "weak" || state.wrongCount > 0 || hasRecentWrong)
    .sort((a, b) => {
      if (a.state.status !== b.state.status) {
        if (a.state.status === "weak") return -1;
        if (b.state.status === "weak") return 1;
      }
      if (b.state.wrongCount !== a.state.wrongCount) return b.state.wrongCount - a.state.wrongCount;
      const aTime = new Date(a.latestWrong?.record?.createdAt || a.state.updatedAt || 0).getTime();
      const bTime = new Date(b.latestWrong?.record?.createdAt || b.state.updatedAt || 0).getTime();
      if (bTime !== aTime) return bTime - aTime;
      return a.state.masteryLevel - b.state.masteryLevel;
    });
}

function renderCardLearningStatus(card) {
  const state = getCardLearningState(card.id);
  const needsPractice = state.status === "weak" || state.wrongCount > 0;
  let action = "";
  if (state.status === "new") {
    action = `<button class="primary-btn" type="button" data-start-learning="${escapeHtml(card.id)}">开始学习</button>`;
  } else if (state.status === "learning") {
    action = `<button class="primary-btn" type="button" data-start-card-quiz="${escapeHtml(card.id)}">进入小测</button>`;
  } else if (state.status === "weak") {
    action = `<div class="learning-actions">
      <button class="secondary-btn" type="button" data-relearn-card="${escapeHtml(card.id)}">重新学习</button>
      <button class="primary-btn" type="button" data-start-card-quiz="${escapeHtml(card.id)}">重新小测</button>
    </div>`;
  } else if (state.status === "reviewing") {
    action = isReviewDue(state.nextReviewAt)
      ? `<button class="primary-btn" type="button" data-start-review-quiz="${escapeHtml(card.id)}">开始复习</button>`
      : `<p class="learning-status-note">你已通过初次小测，请在下次复习日期回来复习。</p>`;
  } else if (state.status === "mastered") {
    action = `<p class="learning-status-note">这张牌已掌握。</p>`;
  }
  if (needsPractice && state.status !== "weak") {
    action += `<div class="learning-actions">
      <button class="secondary-btn" type="button" data-relearn-card="${escapeHtml(card.id)}">重新学习</button>
      <button class="primary-btn" type="button" data-start-card-quiz="${escapeHtml(card.id)}">重新小测</button>
    </div>`;
  }
  return `
    <div class="learning-status-grid">
      <div>
        <span>学习状态</span>
        <strong>${getLearningStatusLabel(state.status)}</strong>
      </div>
      <div>
        <span>掌握等级</span>
        <strong>${state.masteryLevel}/5</strong>
      </div>
      <div>
        <span>下次复习</span>
        <strong>${formatReviewDate(state.nextReviewAt)}</strong>
      </div>
    </div>
    ${needsPractice ? `<p class="learning-warning">这张牌需要加强，建议重新学习后再小测。</p>` : ""}
    ${action}
  `;
}

function refreshCardLearningStatus(card) {
  const target = byId("modal-learning-status");
  if (target && card) target.innerHTML = renderCardLearningStatus(card);
}

function optionText(value, fallback = "待补充") {
  return getSafeText(value, fallback, 58);
}

function cardMeaningOption(card, type = "upright") {
  if (!card) return "待补充";
  if (type === "reversed") return optionText(card.reversed || card.reversedLogic || card.coreThemeZh);
  return optionText(card.upright || card.uprightScenes || card.coreThemeZh || card.imageReading?.[0]);
}

function cardSituationOption(card) {
  const keywords = getCardKeywords(card).slice(0, 4).join("、");
  return normalizeQuizOptionText(`你可能正在经历${keywords}相关的状态`, {
    mode: "scenario",
    fallback: "你需要观察当前状态，再做出清醒选择"
  });
}

function tomorrowIsoString() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date.toISOString();
}

function generateCardQuiz(card) {
  const otherCards = tarotCards.filter((item) => item.id !== card.id);
  const keyword = getCardKeywordOption(card);
  const otherKeywordOptions = otherCards.map(getCardKeywordOption);
  const nameAnswer = getCardDisplayName(card);
  return [
    {
      type: "name",
      label: questionTypeLabels.name,
      question: "这张牌是？",
      answer: nameAnswer,
      options: buildQuizOptions(nameAnswer, [otherCards.map(getCardDisplayName)], [], { allowCardNames: true })
    },
    {
      type: "keyword",
      label: questionTypeLabels.keyword,
      question: "以下哪个关键词最符合这张牌？",
      answer: keyword,
      options: buildQuizOptions(keyword, [otherKeywordOptions], [], { card })
    },
    {
      type: "upright",
      label: questionTypeLabels.upright,
      question: "当这张牌正位出现时，它通常更强调什么？",
      answer: sanitizeQuizOptionText(getCardUprightMeaning(card), card),
      options: buildQuizOptions(getCardUprightMeaning(card), [otherCards.map(getCardUprightMeaning)], [], { card })
    },
    {
      type: "reversed",
      label: questionTypeLabels.reversed,
      question: "当这张牌逆位出现时，它更可能提醒什么？",
      answer: sanitizeQuizOptionText(getCardReversedMeaning(card), card),
      options: buildQuizOptions(getCardReversedMeaning(card), [otherCards.map(getCardReversedMeaning)], [], { card })
    },
    {
      type: "scenario",
      label: questionTypeLabels.scenario,
      question: "如果问题是“我最近的状态如何？”，这张牌更可能提示什么？",
      answer: sanitizeQuizOptionText(cardSituationOption(card), card),
      options: buildQuizOptions(cardSituationOption(card), [otherCards.map(cardSituationOption)], [], { card })
    }
  ];
}

function renderCardQuiz(card) {
  const questions = generateCardQuiz(card);
  byId("modal-card-quiz").innerHTML = `
    <h3>基础小测</h3>
    <p class="learning-status-note">共 5 题。完成后会更新这张牌的学习状态。</p>
    ${questions.map((item, index) => `
      <fieldset class="card-quiz-question" data-question-index="${index}" data-question-type="${escapeHtml(item.type)}" data-question-label="${escapeHtml(item.label)}" data-question-text="${escapeHtml(item.question)}" data-answer="${escapeHtml(item.answer)}">
        <legend>${index + 1}. ${escapeHtml(item.question)}</legend>
        <div class="quiz-options">
          ${item.options.map((option) => `<button class="quiz-option" type="button" data-card-quiz-option="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("")}
        </div>
      </fieldset>
    `).join("")}
    <button class="primary-btn" type="button" data-submit-card-quiz="${escapeHtml(card.id)}">提交小测</button>
    <p id="card-quiz-feedback" class="learning-status-note"></p>
  `;
}

function generateReviewQuiz(card) {
  const initial = generateCardQuiz(card);
  return [initial[1], {
    type: "reversed",
    label: "正逆位理解",
    question: "这张牌的正逆位理解，哪一项更合理？",
    answer: sanitizeQuizOptionText(getCardReversedMeaning(card), card),
    options: buildQuizOptions(
      getCardReversedMeaning(card),
      [tarotCards.filter((item) => item.id !== card.id).map(getCardReversedMeaning)],
      tarotCards.map(getCardUprightMeaning),
      { card }
    )
  }, initial[4]];
}

function renderReviewQuiz(card) {
  const questions = generateReviewQuiz(card);
  byId("modal-card-quiz").innerHTML = `
    <h3>今日复习小测</h3>
    <p class="learning-status-note">共 3 题。通过后会更新掌握等级和下次复习日期。</p>
    ${questions.map((item, index) => `
      <fieldset class="card-quiz-question" data-question-index="${index}" data-question-type="${escapeHtml(item.type)}" data-question-label="${escapeHtml(item.label)}" data-question-text="${escapeHtml(item.question)}" data-answer="${escapeHtml(item.answer)}">
        <legend>${index + 1}. ${escapeHtml(item.question)}</legend>
        <div class="quiz-options">
          ${item.options.map((option) => `<button class="quiz-option" type="button" data-card-quiz-option="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("")}
        </div>
      </fieldset>
    `).join("")}
    <button class="primary-btn" type="button" data-submit-review-quiz="${escapeHtml(card.id)}">提交复习</button>
    <p id="card-quiz-feedback" class="learning-status-note"></p>
  `;
}

function submitCardQuiz(card) {
  const questions = [...document.querySelectorAll("#modal-card-quiz .card-quiz-question")];
  const total = questions.length;
  const score = questions.filter((question) => question.dataset.selected === question.dataset.answer).length;
  const questionResults = getQuestionResults();
  const current = getCardLearningState(card.id);
  const now = new Date().toISOString();
  const history = [...current.testHistory, { type: "initial", score, total, passed: score >= 4, createdAt: now, questionResults }];
  const basePatch = {
    firstLearnedAt: current.firstLearnedAt || now,
    testHistory: history
  };
  let message = "建议重新学习后再测一次。";
  let patch = {
    ...basePatch,
    status: "learning",
    masteryLevel: 0,
    wrongCount: current.wrongCount + 1,
    correctStreak: 0
  };

  if (score >= 4) {
    message = "小测通过，已进入待复习。";
    patch = {
      ...basePatch,
      status: "reviewing",
      masteryLevel: 1,
      lastReviewedAt: now,
      nextReviewAt: tomorrowIsoString(),
      reviewCount: current.reviewCount + 1,
      correctStreak: current.correctStreak + 1
    };
  } else if (score === 3) {
    message = "接近通过，但仍需加强。";
    patch = {
      ...basePatch,
      status: "weak",
      masteryLevel: 0,
      lastReviewedAt: now,
      nextReviewAt: tomorrowIsoString(),
      reviewCount: current.reviewCount + 1,
      wrongCount: current.wrongCount + 1,
      correctStreak: 0
    };
  }

  updateCardLearningState(card.id, patch);
  refreshCardLearningStatus(card);
  renderDailyReviewPanel();
  renderWeaknessPanel();
  byId("modal-card-quiz").innerHTML = `<h3>基础小测结果</h3><p>得分：${score}/${total}</p><p>${message}</p>`;
}

function submitReviewQuiz(card) {
  const questions = [...document.querySelectorAll("#modal-card-quiz .card-quiz-question")];
  const total = questions.length;
  const score = questions.filter((question) => question.dataset.selected === question.dataset.answer).length;
  const questionResults = getQuestionResults();
  const current = getCardLearningState(card.id);
  const now = new Date().toISOString();
  const passed = score >= 2;
  const nextLevel = passed
    ? Math.min(current.masteryLevel + 1, 5)
    : Math.max(current.masteryLevel - 1, 0);
  const history = [...current.testHistory, { type: "review", score, total, passed, createdAt: now, questionResults }];
  const patch = passed ? {
    status: nextLevel >= 5 ? "mastered" : "reviewing",
    masteryLevel: nextLevel,
    lastReviewedAt: now,
    nextReviewAt: calculateNextReviewDate(nextLevel),
    reviewCount: current.reviewCount + 1,
    correctStreak: current.correctStreak + 1,
    testHistory: history
  } : {
    status: "weak",
    masteryLevel: nextLevel,
    lastReviewedAt: now,
    nextReviewAt: tomorrowIsoString(),
    reviewCount: current.reviewCount + 1,
    wrongCount: current.wrongCount + 1,
    correctStreak: 0,
    testHistory: history
  };
  const message = passed
    ? (nextLevel >= 5 ? "复习通过，已掌握这张牌。" : "复习通过，掌握等级提升。")
    : "复习未通过，已标记为需加强。";

  updateCardLearningState(card.id, patch);
  refreshCardLearningStatus(card);
  renderDailyReviewPanel();
  renderWeaknessPanel();
  const remaining = getDueReviewCards();
  byId("modal-card-quiz").innerHTML = `
    <h3>复习结果</h3>
    <p>得分：${score}/${total}</p>
    <p>${message}</p>
    ${remaining.length
      ? `<button class="primary-btn" type="button" data-start-next-review>继续复习下一张</button>`
      : `<p class="learning-status-note">今日复习完成。</p>`}
  `;
}

Object.assign(window, {
  tarotCards,
  getDefaultCardLearningState,
  getLearningState,
  saveLearningState,
  getCardLearningState,
  updateCardLearningState,
  resetLearningState,
  getReviewIntervalDays,
  calculateNextReviewDate,
  getDueReviewCards,
  getWeaknessStats,
  getWeakCards
});

function renderWeaknessPanel() {
  const panel = byId("weakness-panel");
  if (!panel) return;
  const weakCards = getWeakCards();
  const weaknessStats = getWeaknessStats().filter((item) => item.count > 0).sort((a, b) => b.count - a.count);
  const recentWrongItems = weakCards
    .filter((item) => item.latestWrong)
    .slice(0, 5);

  if (!weakCards.length && !recentWrongItems.length) {
    panel.innerHTML = `
      <div class="weakness-head">
        <strong>薄弱牌与错题</strong>
        <span>需加强牌卡：0 张</span>
      </div>
      <p class="learning-status-note">目前还没有错题记录，完成小测后这里会自动更新。</p>
    `;
    return;
  }

  panel.innerHTML = `
    <div class="weakness-head">
      <strong>薄弱牌与错题</strong>
      <span>需加强牌卡：${weakCards.length} 张</span>
    </div>
    <p class="learning-status-note">最薄弱维度：${escapeHtml(weaknessStats[0]?.label || "暂无")}</p>
    <div class="weakness-list">
      ${recentWrongItems.length ? recentWrongItems.map(({ card, latestWrong }) => {
        const result = latestWrong.result;
        return `
          <article class="weakness-item">
            <div>
              <strong>${escapeHtml(card.zhName)}</strong>
              <span>${escapeHtml(card.nameEn)}</span>
            </div>
            <p>${escapeHtml(result.questionLabel)} · 你的选择：${escapeHtml(result.selectedAnswer)} · 正确答案：${escapeHtml(result.correctAnswer)}</p>
            <small>${formatReviewDate(latestWrong.record.createdAt)}</small>
            <button class="secondary-btn" type="button" data-dashboard-relearn="${escapeHtml(card.id)}">重新学习</button>
            <button class="primary-btn" type="button" data-dashboard-requiz="${escapeHtml(card.id)}">重新小测</button>
          </article>
        `;
      }).join("") : `<p class="learning-status-note">暂无具体错题记录，但有牌卡被标记为需加强。</p>`}
    </div>
  `;
}

function getUserStudyStats() {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  const stats = {
    total: tarotCards.length,
    mastered: 0,
    studied: 0,
    learning: 0,
    dueReview: 0,
    weak: 0,
    groups: {
      major: { label: "大阿尔卡那", total: tarotCards.filter((card) => card.arcana === "Major").length, mastered: 0 },
      minor: { label: "小阿尔卡那", total: tarotCards.filter((card) => card.arcana === "Minor").length, mastered: 0 },
      wands: { label: "权杖", total: tarotCards.filter((card) => card.suitZh === "权杖").length, mastered: 0 },
      cups: { label: "圣杯", total: tarotCards.filter((card) => card.suitZh === "圣杯").length, mastered: 0 },
      swords: { label: "宝剑", total: tarotCards.filter((card) => card.suitZh === "宝剑").length, mastered: 0 },
      pentacles: { label: "星币", total: tarotCards.filter((card) => card.suitZh === "星币").length, mastered: 0 }
    }
  };

  tarotCards.forEach((card) => {
    const state = getCardLearningState(card.id);
    const isMastered = state.status === "mastered";
    if (isMastered) stats.mastered += 1;
    if (state.status !== "new") stats.studied += 1;
    if (state.status === "learning") stats.learning += 1;
    if (state.status === "weak") stats.weak += 1;
    if (state.nextReviewAt && ["reviewing", "weak"].includes(state.status) && new Date(state.nextReviewAt) <= today) {
      stats.dueReview += 1;
    }
    if (isMastered) {
      if (card.arcana === "Major") stats.groups.major.mastered += 1;
      if (card.arcana === "Minor") stats.groups.minor.mastered += 1;
      if (card.suitZh === "权杖") stats.groups.wands.mastered += 1;
      if (card.suitZh === "圣杯") stats.groups.cups.mastered += 1;
      if (card.suitZh === "宝剑") stats.groups.swords.mastered += 1;
      if (card.suitZh === "星币") stats.groups.pentacles.mastered += 1;
    }
  });

  stats.percent = stats.total ? Math.round((stats.mastered / stats.total) * 100) : 0;
  return stats;
}

function renderStudyProgress() {
  const stats = getUserStudyStats();
  const row = (name, value, total) => {
    const percent = total ? Math.round((value / total) * 100) : 0;
    const valueText = typeof total === "number" ? `${value}/${total}` : String(value);
    return `
      <div class="progress-row">
        <span class="progress-name">${name}</span>
        <div class="progress-track" aria-label="${name}：${valueText}">
          <span style="width: ${percent}%"></span>
        </div>
        <strong>${valueText}</strong>
      </div>
    `;
  };
  byId("progress-list").innerHTML = [
    row("已掌握牌卡", stats.mastered, stats.total),
    row("已学习牌卡", stats.studied, stats.total),
    row("学习中", stats.learning),
    row("今日应复习", stats.dueReview),
    row("薄弱牌", stats.weak),
    row(stats.groups.major.label, stats.groups.major.mastered, stats.groups.major.total),
    row(stats.groups.minor.label, stats.groups.minor.mastered, stats.groups.minor.total),
    row(stats.groups.wands.label, stats.groups.wands.mastered, stats.groups.wands.total),
    row(stats.groups.cups.label, stats.groups.cups.mastered, stats.groups.cups.total),
    row(stats.groups.swords.label, stats.groups.swords.mastered, stats.groups.swords.total),
    row(stats.groups.pentacles.label, stats.groups.pentacles.mastered, stats.groups.pentacles.total)
  ].join("");
  updateStudyProgress();
  renderDailyReviewPanel();
}

function updateStudyProgress() {
  const stats = getUserStudyStats();
  const title = document.querySelector(".progress-card h2");
  if (title) title.textContent = `${stats.percent}%`;
  byId("progress-summary").textContent = `已掌握 ${stats.mastered}/${stats.total} · 已学习 ${stats.studied}/${stats.total} · 今日应复习 ${stats.dueReview}`;
  renderDailyReviewPanel();
  renderWeaknessPanel();
}

function renderDailyReviewPanel() {
  const panel = byId("daily-review-panel");
  if (!panel) return;
  const dueCards = getDueReviewCards();
  panel.innerHTML = `
    <div>
      <strong>今日复习</strong>
      <p>今日应复习：${dueCards.length} 张</p>
    </div>
    ${dueCards.length
      ? `<button class="primary-btn" type="button" id="start-daily-review">开始今日复习</button>`
      : `<p class="learning-status-note">今天没有到期复习任务。</p>`}
  `;
}

function startNextDueReview() {
  const card = getDueReviewCards()[0];
  if (!card) {
    byId("modal-card-quiz").innerHTML = `<h3>今日复习完成</h3><p>今天没有到期复习任务。</p>`;
    return;
  }
  openCardModal(card.name);
  renderReviewQuiz(card);
}

function drawDailyCard() {
  const card = randomItem(tarotCards);
  currentDailyCard = card;
  byId("daily-card-name").innerHTML = `<span class="card-name-zh">${escapeHtml(card.zhName)}</span><span class="card-name-en">${escapeHtml(card.nameEn)}</span>`;
  byId("daily-card-keywords").textContent = (card.keywordsZh || card.keywords || []).join("、");
  byId("daily-card-meaning").textContent = isDetailedCard(card)
    ? card.coreThemeZh
    : `${getCardSystemLine(card)}。完整解析待补充。`;
}

function renderKnowledgeMap() {
  byId("knowledge-grid").innerHTML = Object.values(tarotSystem).map((group) => `
    <article class="map-card">
      <button type="button" aria-expanded="false" class="map-card-toggle">
        <p class="panel-label">${escapeHtml(group.titleEn)}</p>
        <h3>${escapeHtml(group.titleZh)}</h3>
        <p>点击展开学习节点 ✧</p>
      </button>
      <div class="expand-content">
        <div class="system-item-grid">
          ${Object.entries(group.items).map(([key, entry]) => `
            <button class="system-item-button" type="button" data-system-key="${escapeHtml(key)}">
              <span>${escapeHtml(key)}</span>
              ${entry.en ? `<small>${escapeHtml(entry.en)}</small>` : ""}
            </button>
          `).join("")}
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".map-card-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".map-card");
      const isOpen = card.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
  bindSystemInteractions(byId("knowledge-grid"));
  showSystemDetail("水元素");
}

function cardMatchesFilter(card) {
  if (activeFilter === "All") return true;
  if (activeFilter === "Major") return card.arcana === "Major";
  if (activeFilter === "Minor") return card.arcana === "Minor";
  if (["Wands", "Cups", "Swords", "Pentacles"].includes(activeFilter)) return card.suit.includes(activeFilter);
  const elementFilters = { Fire: "火 Fire", Water: "水 Water", Air: "风 Air", Earth: "土 Earth" };
  return card.element === elementFilters[activeFilter];
}

function cardMatchesSearch(card, search) {
  if (!search) return true;
  const haystack = [
    card.id,
    card.name,
    card.zhName,
    card.nameEn,
    card.arcana,
    card.arcanaZh,
    card.suit,
    card.suitZh,
    card.element,
    card.elementZh,
    card.number,
    ...card.keywords,
    ...(card.keywordsZh || []),
    ...(card.keywordsEn || []),
    card.upright,
    card.reversed
  ].join(" ").toLowerCase();
  return haystack.includes(search);
}

function renderCards() {
  const search = byId("card-search").value.trim().toLowerCase();
  const cards = tarotCards.filter((card) => cardMatchesFilter(card) && cardMatchesSearch(card, search));

  byId("cards-grid").innerHTML = cards.length ? cards.map((card) => `
    <article class="tarot-card">
      ${renderCardImage(card, "thumb")}
      <div class="tarot-card-top">
        <div>
          <p class="panel-label">${displayCardGroup(card.arcana)} · ${card.suit}</p>
          ${renderBilingualCardName(card)}
        </div>
        <button class="favorite-btn ${favorites.has(card.name) ? "active" : ""}" type="button" data-favorite="${card.name}" aria-label="收藏或取消收藏 ${card.name}">
          ★
        </button>
      </div>
      <p class="keyword-line">${card.keywords.join(", ")}</p>
      <p class="tarot-basic-tags">${getCardSystemLine(card).split(" · ").map(escapeHtml).join(" · ")}</p>
      <p class="tarot-meta">${card.imageReading?.[0] || card.upright}</p>
      <div class="tarot-card-actions">
        <button class="secondary-btn" type="button" data-open-card="${card.name}">详情</button>
      </div>
    </article>
  `).join("") : `<p class="detail-panel">暂时没有符合条件的牌。</p>`;
  hydrateCardImages(byId("cards-grid"));

  document.querySelectorAll("[data-favorite]").forEach((button) => {
    button.addEventListener("click", () => toggleFavorite(button.dataset.favorite));
  });

  document.querySelectorAll("[data-open-card]").forEach((button) => {
    button.addEventListener("click", () => openCardModal(button.dataset.openCard));
  });
}

function toggleFavorite(name) {
  if (favorites.has(name)) {
    favorites.delete(name);
  } else {
    favorites.add(name);
  }
  saveFavorites();
  renderCards();
}

function textOrPending(value) {
  const text = String(value || "").trim();
  return text || "待补充";
}

function splitLearningSections(text, labels) {
  const source = textOrPending(text);
  if (source === "待补充") return labels.map((label) => ({ label: label.title, text: "待补充" }));

  const matches = [];
  labels.forEach((label) => {
    const names = [label.title, ...(label.aliases || [])];
    let best = null;
    names.forEach((name) => {
      const index = source.indexOf(`${name}：`);
      const asciiIndex = source.indexOf(`${name}:`);
      const found = index >= 0 ? index : asciiIndex;
      if (found >= 0) {
        const candidate = { label: label.title, start: found, markerLength: name.length + 1 };
        if (!best || candidate.start < best.start || (candidate.start === best.start && candidate.markerLength > best.markerLength)) {
          best = candidate;
        }
      }
    });
    if (best) matches.push(best);
  });

  if (!matches.length) {
    return labels.map((label, index) => ({ label: label.title, text: index === 0 ? source : "待补充" }));
  }

  matches.sort((a, b) => a.start - b.start);
  return labels.map((label) => {
    const match = matches.find((item) => item.label === label.title);
    if (!match) return { label: label.title, text: "待补充" };
    const next = matches.find((item) => item.start > match.start);
    return {
      label: label.title,
      text: textOrPending(source.slice(match.start + match.markerLength, next ? next.start : source.length).trim())
    };
  });
}

function renderLearningSectionList(sections) {
  return sections.map((section) => `
    <div class="learning-section-item">
      <strong>${escapeHtml(section.label)}</strong>
      <p>${escapeHtml(section.text)}</p>
    </div>
  `).join("");
}

function getUprightSections(card) {
  return splitLearningSections(card.uprightScenes || card.upright, [
    { title: "感情" },
    { title: "工作" },
    { title: "学习", aliases: ["学习 / 自我成长"] },
    { title: "建议", aliases: ["当前建议"] }
  ]);
}

function getReversedSections(card) {
  const text = textOrPending(card.reversedLogic || card.reversed);
  if (text === "待补充") {
    return ["阻塞", "内化", "延迟", "过度", "失衡"].map((label) => ({ label, text: "待补充" }));
  }
  return [
    { label: "阻塞", text },
    { label: "内化", text: `这张牌的能量可能转向内在，表现为不愿表达、难以承认，或只能在心里反复处理。` },
    { label: "延迟", text: `相关主题可能尚未成熟，需要更多时间、信息或现实条件支持。` },
    { label: "过度", text: `牌义中的核心能量可能被使用过头，变成压力、执着或单一反应。` },
    { label: "失衡", text: `重点是观察哪里失去比例，而不是简单把逆位读成坏结果。` }
  ];
}

function getSpreadSections(card) {
  return splitLearningSections(card.spreadReadingZh, [
    { title: "当前情况" },
    { title: "阻碍" },
    { title: "建议" },
    { title: "结果" }
  ]);
}

function openCardModal(name) {
  const card = getCardByName(name);
  if (!card) {
    byId("modal-subtitle").textContent = "内容待补充";
    byId("modal-title").innerHTML = `<span class="card-name-zh">${escapeHtml(name || "未知牌")}</span>`;
    byId("modal-keywords").innerHTML = `<span class="plain-tag">待补充</span>`;
    byId("modal-system-path").innerHTML = `<strong>系统路径</strong><span class="system-path-zh">内容待补充</span>`;
    byId("modal-learning-status").innerHTML = "";
    byId("modal-card-quiz").innerHTML = "";
    byId("modal-image").innerHTML = renderCardImage({ name, image: "", imageAlt: `${name} 牌图待补` }, "large");
    byId("modal-overview").innerHTML = `<h3>核心主题</h3><p>待补充</p>`;
    byId("modal-visual-reading").innerHTML = `<li>内容待补充。</li>`;
    byId("modal-color-reading").textContent = "待补充";
    byId("modal-upright").innerHTML = renderLearningSectionList(getUprightSections({ upright: "" }));
    byId("modal-reversed").innerHTML = renderLearningSectionList(getReversedSections({ reversed: "" }));
    byId("modal-spread-reading").innerHTML = renderLearningSectionList(getSpreadSections({ spreadReadingZh: "" }));
    byId("modal-study-questions").innerHTML = `<li>待补充</li>`;
    byId("modal-related").innerHTML = `<h3>相关牌</h3><p>内容待补充。</p>`;
    byId("card-modal").classList.add("open");
    byId("card-modal").setAttribute("aria-hidden", "false");
    hydrateCardImages(byId("card-modal"));
    return;
  }

  markCardVisited(card.id);
  byId("modal-subtitle").textContent = `${displayCardGroup(card.arcana)} · ${card.suit}`;
  byId("modal-title").innerHTML = `
    <span class="card-name-zh">${escapeHtml(card.zhName || card.name)}</span>
    ${card.nameEn ? `<span class="card-name-en">${escapeHtml(card.nameEn)}</span>` : ""}
  `;
  byId("modal-keywords").innerHTML = card.keywords.map((keyword) => `<span class="plain-tag">${escapeHtml(keyword)}</span>`).join("");
  byId("modal-system-path").innerHTML = `
    <strong>系统路径</strong>
    <span class="system-path-zh">${escapeHtml(card.systemPathZh)}</span>
    <small class="system-path-en">${escapeHtml(card.systemPathEn)}</small>
    <div class="tag-row">${(card.systemTags || []).map(renderSystemTag).join("")}</div>
  `;
  refreshCardLearningStatus(card);
  byId("modal-card-quiz").innerHTML = "";
  byId("modal-image").innerHTML = renderCardImage(card, "large");
  byId("modal-overview").innerHTML = `
    <h3>核心主题</h3>
    <p>${escapeHtml(textOrPending(card.coreThemeZh))}</p>
    <div class="learning-mini-grid">
      <div><strong>元素连接</strong><p>${escapeHtml(textOrPending(card.elementConnectionZh))}</p></div>
      <div><strong>数字 / 宫廷连接</strong><p>${escapeHtml(textOrPending(card.numberConnectionZh))}</p></div>
      <div><strong>花色连接</strong><p>${escapeHtml(textOrPending(card.suitConnectionZh))}</p></div>
    </div>
  `;
  byId("modal-visual-reading").innerHTML = renderVisualReadingList(card);
  byId("modal-color-reading").textContent = textOrPending(card.colorReadingZh);
  byId("modal-upright").innerHTML = renderLearningSectionList(getUprightSections(card));
  byId("modal-reversed").innerHTML = renderLearningSectionList(getReversedSections(card));
  byId("modal-spread-reading").innerHTML = renderLearningSectionList(getSpreadSections(card));
  byId("modal-study-questions").innerHTML = (card.studyQuestions || ["待补充"]).map((question) => `<li>${escapeHtml(question)}</li>`).join("");
  byId("modal-related").innerHTML = `
    <h3>相关牌</h3>
    <div class="related-card-grid">${(card.relatedCards || []).map(renderRelatedCardButton).join("") || "<p>可继续从相同元素、花色或图像符号扩展。</p>"}</div>
  `;
  bindSystemInteractions(byId("card-modal"));
  byId("card-modal").classList.add("open");
  byId("card-modal").setAttribute("aria-hidden", "false");
  hydrateCardImages(byId("card-modal"));
}

function closeCardModal() {
  byId("card-modal").classList.remove("open");
  byId("card-modal").setAttribute("aria-hidden", "true");
  updateStudyProgress();
}

function renderElements() {
  byId("elements-grid").innerHTML = elements.map((element, index) => `
    <button class="element-card" type="button" data-element-index="${index}">
      <span class="element-symbol">${element.symbol}</span>
      <h3>${element.name} / ${element.suit}</h3>
      <p>${element.words}</p>
    </button>
  `).join("");

  document.querySelectorAll("[data-element-index]").forEach((button) => {
    button.addEventListener("click", () => showElementDetail(Number(button.dataset.elementIndex)));
  });
  showElementDetail(0);
}

function showElementDetail(index) {
  const element = elements[index];
  const entry = findSystemEntry(element.name.split(" ")[0] + "元素");
  byId("element-detail").innerHTML = `
    <p class="panel-label">${element.name} · ${element.suit}</p>
    <h3>${element.words}</h3>
    <p>${element.detail}</p>
    ${entry ? `<div class="inline-system-detail">${renderSystemEntryDetail(entry)}</div>` : ""}
  `;
  bindSystemInteractions(byId("element-detail"));
}

function renderNumbers() {
  byId("number-buttons").innerHTML = numberMeanings.map(([number]) => `
    <button class="number-btn" type="button" data-number="${number}">${number}</button>
  `).join("");

  document.querySelectorAll("[data-number]").forEach((button) => {
    button.addEventListener("click", () => showNumberDetail(button.dataset.number));
  });
  showNumberDetail("1");
}

function showNumberDetail(number) {
  document.querySelectorAll(".number-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.number === number);
  });

  const meaning = numberMeanings.find(([value]) => value === number)[1];
  const entry = findSystemEntry(number === "1" ? "Ace / 1" : `数字 ${number}`);
  byId("number-detail").innerHTML = `
    <p class="panel-label">数字 ${number}</p>
    <h3>${meaning}</h3>
    <div class="suit-list">
      <div><strong>权杖 Wands</strong><p>这个数字如何表现为动力、创造、野心或行动。</p></div>
      <div><strong>圣杯 Cups</strong><p>这个数字如何表现为情绪、联结、直觉或渴望。</p></div>
      <div><strong>宝剑 Swords</strong><p>这个数字如何表现为想法、真相、冲突或沟通。</p></div>
      <div><strong>星币 Pentacles</strong><p>这个数字如何表现为金钱、身体、工作、习惯或稳定。</p></div>
    </div>
    ${entry ? `<div class="inline-system-detail">${renderSystemEntryDetail(entry)}</div>` : ""}
  `;
  bindSystemInteractions(byId("number-detail"));
}

function renderSpreads() {
  byId("spreads-grid").innerHTML = spreads.map((spread, index) => `
    <article class="spread-card">
      <button type="button" data-toggle-spread="${index}" aria-expanded="false">
        <p class="panel-label">${spread.positions.length} 张牌</p>
        <h3>${spread.name}</h3>
        <p>${spread.question}</p>
      </button>
      <div class="expand-content">
        <div>
          <ol>${spread.positions.map((position) => `<li>${position}</li>`).join("")}</ol>
        </div>
      </div>
      <button class="primary-btn" type="button" data-try-spread="${index}">试试这个牌阵</button>
    </article>
  `).join("");

  document.querySelectorAll("[data-toggle-spread]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".spread-card");
      const isOpen = card.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  document.querySelectorAll("[data-try-spread]").forEach((button) => {
    button.addEventListener("click", () => createSpread(Number(button.dataset.trySpread)));
  });
}

function createSpread(index) {
  activeSpread = spreads[index];
  byId("active-spread-title").textContent = activeSpread.name;
  byId("random-fill-btn").disabled = false;
  byId("spread-slots").innerHTML = activeSpread.positions.map((position, slotIndex) => `
    <div class="spread-slot" data-slot="${slotIndex}">
      <strong>${position}</strong>
      <span>空白牌位</span>
    </div>
  `).join("");
}

function randomFillSpread() {
  if (!activeSpread) return;
  document.querySelectorAll(".spread-slot").forEach((slot) => {
    const card = randomItem(tarotCards);
    slot.querySelector("span").textContent = card.name;
  });
}

function renderColors() {
  byId("color-grid").innerHTML = colors.map(([name, value, meaning], index) => `
    <button class="color-swatch" type="button" data-color-index="${index}">
      <span class="color-dot" style="background: ${value}"></span>
      <strong>${name}</strong>
    </button>
  `).join("");

  document.querySelectorAll("[data-color-index]").forEach((button) => {
    button.addEventListener("click", () => showColorDetail(Number(button.dataset.colorIndex)));
  });
  showColorDetail(0);
}

function showColorDetail(index) {
  const [name, value, meaning] = colors[index];
  const entry = findSystemEntry(name === "黄色" || name === "金色" ? "黄色 / 金色" : name);
  byId("color-detail").innerHTML = `
    <p class="panel-label">已选择颜色</p>
    <h3><span class="color-dot" style="display:inline-block;width:24px;height:24px;margin:0 10px -5px 0;background:${value}"></span>${name}</h3>
    <p>${meaning}</p>
    ${entry ? `<div class="inline-system-detail">${renderSystemEntryDetail(entry)}</div>` : ""}
  `;
  bindSystemInteractions(byId("color-detail"));
}

function renderQuiz() {
  quizAnswered = false;
  const content = byId("quiz-content");

  if (quizIndex >= quizQuestions.length) {
    content.innerHTML = `
      <p class="panel-label">已完成</p>
      <h3>你的得分：${quizScore} / ${quizQuestions.length}</h3>
      <p>${quizScore === quizQuestions.length ? "很好，你的元素基础很扎实。" : "可以回到知识地图复习一下，然后再试一次。"}</p>
    `;
    byId("quiz-feedback").textContent = "";
    return;
  }

  const current = quizQuestions[quizIndex];
  content.innerHTML = `
    <p class="panel-label">第 ${quizIndex + 1} 题 / 共 ${quizQuestions.length} 题</p>
    <h3>${current.question}</h3>
    <div class="quiz-options">
      ${current.options.map((option) => `<button class="quiz-option" type="button" data-answer="${option}">${option}</button>`).join("")}
    </div>
  `;
  byId("quiz-feedback").textContent = "";

  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => answerQuiz(button));
  });
}

function answerQuiz(button) {
  if (quizAnswered) return;
  quizAnswered = true;
  const current = quizQuestions[quizIndex];
  const isCorrect = button.dataset.answer === current.answer;
  if (isCorrect) quizScore += 1;

  document.querySelectorAll("[data-answer]").forEach((optionButton) => {
    optionButton.disabled = true;
    if (optionButton.dataset.answer === current.answer) optionButton.classList.add("correct");
  });
  if (!isCorrect) button.classList.add("wrong");

  byId("quiz-feedback").textContent = isCorrect ? "答对了。" : `还差一点。正确答案：${current.answer}。`;
  window.setTimeout(() => {
    quizIndex += 1;
    renderQuiz();
  }, 900);
}

function restartQuiz() {
  quizIndex = 0;
  quizScore = 0;
  quizQuestions = generateQuizQuestions();
  renderQuiz();
}

function getSelectedLensSpread() {
  return lensSpreads.find((spread) => spread.name === lensState.spreadName) || lensSpreads[0];
}

function initTarotLens() {
  renderTarotCardDatalist();
  renderLensQuestionTypes();
  renderLensSpreads();
  renderDetectedCards();
  renderLensInterpretation();
  byId("lens-upload").addEventListener("change", handleLensImageUpload);
  byId("analyze-reading-btn").addEventListener("click", analyzeLensReading);
  byId("reset-reading-btn").addEventListener("click", resetLensReading);
  byId("save-reading-btn").addEventListener("click", saveLensReadingToJournal);
}

function renderTarotCardDatalist() {
  const options = tarotCards.map((card) => `<option value="${escapeHtml(card.name)}">${escapeHtml(card.zhName)} / ${escapeHtml(card.nameEn)} / ${escapeHtml(getCardSystemLine(card))} / ${escapeHtml([...(card.keywordsZh || []), ...(card.keywordsEn || [])].join(" "))}</option>`).join("");
  const existing = document.getElementById("tarot-card-options");
  if (existing) {
    existing.innerHTML = options;
    return;
  }
  document.body.insertAdjacentHTML("beforeend", `<datalist id="tarot-card-options">${options}</datalist>`);
}

function renderLensQuestionTypes() {
  byId("lens-type-chips").innerHTML = lensQuestionTypes.map((type) => `
    <button class="chip-btn ${type === lensState.questionType ? "active" : ""}" type="button" data-lens-type="${type}">${type}</button>
  `).join("");

  document.querySelectorAll("[data-lens-type]").forEach((button) => {
    button.addEventListener("click", () => {
      lensState.questionType = button.dataset.lensType;
      renderLensQuestionTypes();
    });
  });
}

function renderLensSpreads() {
  byId("lens-spread-cards").innerHTML = lensSpreads.map((spread) => `
    <button class="lens-spread-option ${spread.name === lensState.spreadName ? "active" : ""}" type="button" data-lens-spread="${spread.name}">
      <strong>${spread.name}</strong>
      <small>${spread.positions.length} 张牌</small>
    </button>
  `).join("");

  document.querySelectorAll("[data-lens-spread]").forEach((button) => {
    button.addEventListener("click", () => {
      lensState.spreadName = button.dataset.lensSpread;
      lensState.detectedCards = [];
      lensState.interpretation = null;
      renderLensSpreads();
      renderDetectedCards();
      renderLensInterpretation();
      byId("save-reading-btn").disabled = true;
    });
  });

  const selectedSpread = getSelectedLensSpread();
  byId("lens-spread-detail").innerHTML = `
    <strong>${selectedSpread.name}</strong>
    <p>${selectedSpread.note}</p>
    <p>${selectedSpread.positions.join(" · ")}</p>
  `;
}

function handleLensImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    lensState.imageData = reader.result;
    byId("lens-preview").src = lensState.imageData;
    document.querySelector(".upload-card").classList.add("has-image");
    setLensMessage("图片已添加。请写下问题并选择牌阵。");
  });
  reader.readAsDataURL(file);
}

function setLensMessage(message) {
  byId("lens-message").textContent = message;
}

function setLensLoading(isLoading) {
  byId("lens-loading").hidden = !isLoading;
  byId("analyze-reading-btn").disabled = isLoading;
}

function analyzeLensReading() {
  const question = byId("lens-question").value.trim();
  if (!lensState.imageData) {
    setLensMessage("请先上传或拍摄一张塔罗牌阵照片。");
    return;
  }
  if (!question) {
    setLensMessage("开始解读前，请先写下你的问题。");
    return;
  }

  const loadingLines = [
    "正在读取图片...",
    "正在识别牌面...",
    "正在把符号与你的问题连接起来..."
  ];
  let loadingIndex = 0;
  setLensMessage("");
  setLensLoading(true);
  byId("lens-loading-text").textContent = loadingLines[loadingIndex];
  const loadingTimer = window.setInterval(() => {
    loadingIndex = (loadingIndex + 1) % loadingLines.length;
    byId("lens-loading-text").textContent = loadingLines[loadingIndex];
  }, 330);

  window.setTimeout(() => {
    window.clearInterval(loadingTimer);
    lensState.detectedCards = generateDetectedCards();
    lensState.interpretation = generateLensInterpretation(question);
    setLensLoading(false);
    setLensMessage("模拟解读完成。你可以检查识别结果，并手动修正不准确的牌。");
    renderDetectedCards();
    renderLensInterpretation();
    byId("save-reading-btn").disabled = false;
  }, 1050);
}

function generateDetectedCards() {
  const selectedSpread = getSelectedLensSpread();
  return selectedSpread.positions.map((position) => {
    const card = randomItem(tarotCards);
    const orientation = Math.random() > 0.28 ? "upright" : "reversed";
    return {
      id: makeId(),
      position,
      cardName: card.name,
      orientation,
      confidence: Math.floor(82 + Math.random() * 16)
    };
  });
}

function renderDetectedCards() {
  const container = byId("detected-cards");
  if (!lensState.detectedCards.length) {
    container.innerHTML = `<p class="mini-detail">上传照片并点击“开始解读”后，这里会生成模拟识别到的牌。</p>`;
    return;
  }

  container.innerHTML = lensState.detectedCards.map((item) => `
    <article class="detected-card">
      ${renderCardImage(getCardByName(item.cardName) || { name: item.cardName }, "mini")}
      <header>
        <div>
          <p class="panel-label">${escapeHtml(item.position)}</p>
          ${renderBilingualCardName(getCardByName(item.cardName) || { name: item.cardName }, "h4")}
          <small>${displayOrientation(item.orientation)} · 可信度 ${item.confidence}% · ${escapeHtml(getCardSystemLine(getCardByName(item.cardName) || {}))}</small>
        </div>
        <button class="edit-card-btn" type="button" data-edit-card="${item.id}">编辑</button>
      </header>
      <form class="edit-reading-form" data-edit-form="${item.id}" hidden>
        <input class="card-picker-input" list="tarot-card-options" aria-label="搜索牌名" value="${escapeHtml(item.cardName)}">
        <select aria-label="正逆位">
          <option value="upright" ${item.orientation === "upright" ? "selected" : ""}>正位</option>
          <option value="reversed" ${item.orientation === "reversed" ? "selected" : ""}>逆位</option>
        </select>
        <button class="secondary-btn" type="submit">应用</button>
      </form>
    </article>
  `).join("");
  hydrateCardImages(container);

  renderTarotCardDatalist();

  document.querySelectorAll("[data-edit-card]").forEach((button) => {
    button.addEventListener("click", () => {
      const form = document.querySelector(`[data-edit-form="${button.dataset.editCard}"]`);
      form.hidden = !form.hidden;
    });
  });

  document.querySelectorAll("[data-edit-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      updateDetectedCard(form.dataset.editForm, form);
    });
  });
}

function updateDetectedCard(id, form) {
  const input = form.querySelector(".card-picker-input");
  const selects = form.querySelectorAll("select");
  const selectedCard = getCardByName(input.value) || tarotCards[0];
  lensState.detectedCards = lensState.detectedCards.map((item) => {
    if (item.id !== id) return item;
    return {
      ...item,
      cardName: selectedCard.name,
      orientation: selects[0].value,
      confidence: 100
    };
  });
  const question = byId("lens-question").value.trim();
  if (question) {
    lensState.interpretation = generateLensInterpretation(question);
  }
  renderDetectedCards();
  renderLensInterpretation();
}

function generateLensInterpretation(question) {
  const firstCard = getCardByName(lensState.detectedCards[0]?.cardName) || tarotCards[0];
  const keywordBlend = lensState.detectedCards
    .map((item) => getCardByName(item.cardName)?.keywords[0])
    .filter(Boolean)
    .slice(0, 4)
    .join(", ");
  const spread = getSelectedLensSpread();
  const elementBlend = [...new Set(lensState.detectedCards
    .map((item) => getCardByName(item.cardName)?.element?.split(" ")[0])
    .filter(Boolean))].join("、");

  return {
    core: `关于“${question}”，这个「${spread.name}」牌阵显示，当前局面受到「${keywordBlend || firstCard.keywords.join("、")}」这些主题影响。牌面提醒你先放慢速度，观察重复出现的模式，不必太早强迫自己得出结论。`,
    emotional: `因为这是一个「${lensState.questionType}」类型的问题，可以特别留意这组牌的元素分布：${elementBlend || firstCard.element}。元素会提示问题更偏向行动、情绪、想法还是现实资源。`,
    practical: `把每个牌位当成一份清单。先从最有共鸣的一张牌开始，选择一个可以落地的小行动：澄清信息、设定边界、收集资料、休息，或迈出下一步。`,
    cardByCard: lensState.detectedCards.map((item) => {
      const card = getCardByName(item.cardName);
      const visual = card?.imageReading?.[0] || "可以从人物、颜色、物品、背景和方向开始观察这张牌。";
      const system = card ? `${card.zhName} / ${card.nameEn} 属于 ${card.systemPathZh}` : item.cardName;
      const basic = card ? `关键词：${(card.keywordsZh || card.keywords || []).join("、")}。${getCardSystemLine(card)}。` : "";
      const pending = card && !isDetailedCard(card) ? "该牌完整学习详情待补充。" : "";
      return `${item.position}｜${system}（${displayOrientation(item.orientation)}）：${basic}${visual} ${pending}`;
    }),
    learning: `在塔罗学习中，不建议只背关键词。一张牌可以从元素、数字、花色、颜色和图像符号来理解：先看人物在做什么、面向哪里、手里有什么，再把它和牌阵位置连接起来。`
  };
}

function renderLensInterpretation() {
  const target = byId("lens-interpretation");
  if (!lensState.interpretation) {
    target.innerHTML = `<p class="mini-detail">分析完成后，这里会显示模拟 AI 解读。</p>`;
    return;
  }

  const blocks = [
    ["核心信息", lensState.interpretation.core],
    ["牌组系统线索", lensState.interpretation.emotional],
    ["逐张牌图像解读", (lensState.interpretation.cardByCard || []).join("\n")],
    ["实际建议", lensState.interpretation.practical],
    ["学习笔记", lensState.interpretation.learning]
  ];
  target.innerHTML = blocks.map(([title, text]) => `
    <section class="reading-block">
      <h4>${title}</h4>
      ${String(text).split("\n").map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
    </section>
  `).join("");
}

function saveLensReadingToJournal() {
  if (!lensState.interpretation || !lensState.detectedCards.length) return;
  const question = byId("lens-question").value.trim();
  const entry = {
    id: makeId(),
    type: "ai-reading",
    date: new Date().toISOString().slice(0, 10),
    question,
    questionType: lensState.questionType,
    spread: lensState.spreadName,
    imageData: lensState.imageData,
    detectedCards: lensState.detectedCards,
    interpretation: lensState.interpretation
  };
  journalEntries.unshift(entry);
  saveJournalEntries();
  renderJournal();
  setLensMessage("已保存到日志。");
  location.hash = "journal";
}

function resetLensReading() {
  lensState = {
    imageData: "",
    questionType: "开放问题",
    spreadName: "单张牌",
    detectedCards: [],
    interpretation: null
  };
  byId("lens-upload").value = "";
  byId("lens-preview").removeAttribute("src");
  byId("lens-question").value = "";
  document.querySelector(".upload-card").classList.remove("has-image");
  byId("save-reading-btn").disabled = true;
  setLensLoading(false);
  setLensMessage("");
  renderLensQuestionTypes();
  renderLensSpreads();
  renderDetectedCards();
  renderLensInterpretation();
}

function saveJournalEntries() {
  localStorage.setItem("arcanaJournal", JSON.stringify(journalEntries));
}

function renderJournal() {
  byId("entry-count").textContent = journalEntries.length;
  byId("journal-list").innerHTML = journalEntries.length ? journalEntries.map(renderJournalEntry).join("") : `<p class="detail-panel">还没有保存任何日志。</p>`;

  document.querySelectorAll("[data-delete-entry]").forEach((button) => {
    button.addEventListener("click", () => deleteJournalEntry(button.dataset.deleteEntry));
  });
  bindSystemInteractions(byId("journal-list"));
}

function renderJournalEntry(entry) {
  if (entry.type === "ai-reading") {
    const interpretation = entry.interpretation || {};
    const detectedCards = entry.detectedCards || [];
    return `
      <article class="journal-entry">
        <header>
          <div>
            <p class="panel-label">${escapeHtml(entry.date)} · AI 解读 · ${escapeHtml(entry.questionType)}</p>
            <h3>${escapeHtml(entry.spread)}</h3>
          </div>
          <button class="delete-entry" type="button" data-delete-entry="${escapeHtml(entry.id)}">删除</button>
        </header>
        <p><strong>问题：</strong>${escapeHtml(entry.question)}</p>
        ${entry.imageData ? `<img class="journal-ai-image" src="${entry.imageData}" alt="已保存的塔罗牌阵预览">` : ""}
        <div class="journal-card-list">
          ${detectedCards.map((card) => `<button type="button" data-related-card="${escapeHtml(card.cardName)}">${escapeHtml(card.position)}：${escapeHtml(card.cardName)}（${displayOrientation(card.orientation)}）</button>`).join("")}
        </div>
        <p><strong>核心信息：</strong>${escapeHtml(interpretation.core)}</p>
        <p><strong>实际建议：</strong>${escapeHtml(interpretation.practical)}</p>
      </article>
    `;
  }

  return `
    <article class="journal-entry">
      <header>
        <div>
          <p class="panel-label">${escapeHtml(entry.date)}</p>
          <h3><button class="journal-card-link" type="button" data-related-card="${escapeHtml(entry.card)}">${escapeHtml(entry.card)}</button></h3>
        </div>
        <button class="delete-entry" type="button" data-delete-entry="${escapeHtml(entry.id)}">删除</button>
      </header>
      <p><strong>问题：</strong>${escapeHtml(entry.question)}</p>
      <p>${escapeHtml(entry.interpretation)}</p>
    </article>
  `;
}

function addJournalEntry(event) {
  event.preventDefault();
  const entry = {
    id: makeId(),
    type: "manual",
    date: byId("entry-date").value,
    question: byId("entry-question").value.trim(),
    card: byId("entry-card").value.trim(),
    interpretation: byId("entry-interpretation").value.trim()
  };
  journalEntries.unshift(entry);
  saveJournalEntries();
  renderJournal();
  event.target.reset();
  setDefaultDate();
}

function deleteJournalEntry(id) {
  journalEntries = journalEntries.filter((entry) => entry.id !== id);
  saveJournalEntries();
  renderJournal();
}

function setDefaultDate() {
  byId("entry-date").valueAsDate = new Date();
}

function initLearningStatus() {
  if (localStorage.getItem("tarotVisited")) return;

  const initialVisited = Object.fromEntries(tarotCards.map((card) => [card.id, false]));
  localStorage.setItem("tarotVisited", JSON.stringify(initialVisited));
}

function initFilters() {
  byId("card-search").addEventListener("input", renderCards);
  byId("card-filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((filterButton) => {
      filterButton.classList.toggle("active", filterButton === button);
    });
    renderCards();
  });
}

function init() {
  initLearningStatus();
  quizQuestions = generateQuizQuestions();
  renderStudyProgress();
  updateStudyProgress();
  drawDailyCard();
  renderKnowledgeMap();
  renderCards();
  renderElements();
  renderNumbers();
  renderSpreads();
  renderColors();
  renderQuiz();
  initTarotLens();
  renderJournal();
  setDefaultDate();
  initFilters();

  byId("draw-card-btn").addEventListener("click", drawDailyCard);
  byId("daily-card-detail").addEventListener("click", () => {
    if (currentDailyCard) openCardModal(currentDailyCard.name);
  });
  byId("random-fill-btn").addEventListener("click", randomFillSpread);
  byId("restart-quiz-btn").addEventListener("click", restartQuiz);
  byId("journal-form").addEventListener("submit", addJournalEntry);
  byId("card-modal").addEventListener("click", (event) => {
    const startLearningButton = event.target.closest("[data-start-learning]");
    const startQuizButton = event.target.closest("[data-start-card-quiz]");
    const startReviewButton = event.target.closest("[data-start-review-quiz]");
    const relearnButton = event.target.closest("[data-relearn-card]");
    const optionButton = event.target.closest("[data-card-quiz-option]");
    const submitQuizButton = event.target.closest("[data-submit-card-quiz]");
    const submitReviewButton = event.target.closest("[data-submit-review-quiz]");
    const nextReviewButton = event.target.closest("[data-start-next-review]");

    if (startLearningButton) {
      const card = tarotCards.find((item) => item.id === startLearningButton.dataset.startLearning);
      if (!card) return;
      const current = getCardLearningState(card.id);
      updateCardLearningState(card.id, {
        status: "learning",
        firstLearnedAt: current.firstLearnedAt || new Date().toISOString()
      });
      refreshCardLearningStatus(card);
      return;
    }

    if (relearnButton) {
      const card = tarotCards.find((item) => item.id === relearnButton.dataset.relearnCard);
      if (!card) return;
      updateCardLearningState(card.id, { status: "learning" });
      refreshCardLearningStatus(card);
      byId("modal-card-quiz").innerHTML = "";
      return;
    }

    if (startQuizButton) {
      const card = tarotCards.find((item) => item.id === startQuizButton.dataset.startCardQuiz);
      if (card) renderCardQuiz(card);
      return;
    }

    if (startReviewButton) {
      const card = tarotCards.find((item) => item.id === startReviewButton.dataset.startReviewQuiz);
      if (card) renderReviewQuiz(card);
      return;
    }

    if (optionButton) {
      const question = optionButton.closest(".card-quiz-question");
      if (!question) return;
      question.dataset.selected = optionButton.dataset.cardQuizOption;
      question.querySelectorAll("[data-card-quiz-option]").forEach((button) => {
        button.classList.toggle("selected", button === optionButton);
      });
      return;
    }

    if (submitQuizButton) {
      const card = tarotCards.find((item) => item.id === submitQuizButton.dataset.submitCardQuiz);
      if (card) submitCardQuiz(card);
      return;
    }

    if (submitReviewButton) {
      const card = tarotCards.find((item) => item.id === submitReviewButton.dataset.submitReviewQuiz);
      if (card) submitReviewQuiz(card);
      return;
    }

    if (nextReviewButton) {
      startNextDueReview();
    }
  });
  byId("daily-review-panel").addEventListener("click", (event) => {
    if (event.target.closest("#start-daily-review")) startNextDueReview();
  });
  byId("weakness-panel").addEventListener("click", (event) => {
    const relearnButton = event.target.closest("[data-dashboard-relearn]");
    const requizButton = event.target.closest("[data-dashboard-requiz]");
    if (relearnButton) {
      const card = tarotCards.find((item) => item.id === relearnButton.dataset.dashboardRelearn);
      if (!card) return;
      updateCardLearningState(card.id, { status: "learning" });
      openCardModal(card.name);
      return;
    }
    if (requizButton) {
      const card = tarotCards.find((item) => item.id === requizButton.dataset.dashboardRequiz);
      if (!card) return;
      openCardModal(card.name);
      renderCardQuiz(card);
    }
  });
  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeCardModal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeCardModal();
  });
}

document.addEventListener("DOMContentLoaded", init);
