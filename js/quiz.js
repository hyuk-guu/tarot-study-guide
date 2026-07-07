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

function getRawSafeText(value, fallback = "待补充") {
  const raw = Array.isArray(value) ? value.filter(Boolean).join("、") : value;
  const text = String(raw ?? "")
    .replace(/\.{3,}|…/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text && !["undefined", "null"].includes(text.toLowerCase()) ? text : fallback;
}

function getCardKeywords(card) {
  return [...new Set([...(card?.keywordsZh || []), ...(card?.keywords || [])].filter(Boolean))];
}

function getCardKeywordOption(card) {
  return normalizeQuizOptionText(getCardKeywords(card).slice(0, 4), {
    mode: "keyword",
    fallback: "核心主题、能量变化、学习重点"
  });
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
    .replace(/^(先关注|它可能提醒你|这张牌提示|这更像是在提醒你|这张牌更可能提示|代表|可能表示|通常意味着|通常更强调)[：:，,\s]*/g, "")
    .replace(/^(可能提醒你|可能暗示|可能说明|更可能提示|更可能提醒)[：:，,\s]*/g, "");
}

function splitMeaningParts(text) {
  return String(text || "")
    .replace(/\.{3,}|…/g, "")
    .replace(/(感情|工作|学习\s*\/\s*自我成长|学习|当前建议|建议|结果|阻碍|当前情况)[：:]/g, "。$1：")
    .split(/[。！？；;]/)
    .map((part) => stripQuizOptionPrefix(part).trim())
    .filter(Boolean);
}

function cleanQuizFragment(text) {
  return stripQuizOptionPrefix(text)
    .replace(/^(你|自己)?正在/g, "正在")
    .replace(/^(可以|适合|需要)?先/g, (match) => match === "先" ? "" : match)
    .replace(/^不只是“?变坏”?，?/g, "")
    .replace(/^不是单纯的?[^，,。；;]*[，,]/g, "")
    .replace(/^更像是/g, "")
    .replace(/^通常/g, "")
    .replace(/^\s*[：:，,、。；;]\s*/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function compactMeaningText(text, fallback = "关注核心主题并做出清醒回应", mode = "meaning") {
  const parts = splitMeaningParts(text)
    .flatMap((part) => part.split(/[，,]/))
    .flatMap((part) => part.split(/\s+或\s+|\s+和\s+|\s+与\s+/))
    .map(cleanQuizFragment)
    .filter((part) => part && part.length >= 3);
  const banned = /这是一张|牌面|大阿尔卡那|小阿尔卡那|图像中|画面中|英文路径|中文系统路径/;
  const useful = parts.filter((part) => !banned.test(part));
  const candidates = useful.length ? useful : parts;
  if (!candidates.length) return fallback;

  const targetMin = mode === "keyword" ? 8 : 12;
  const targetMax = mode === "keyword" ? 28 : 36;
  let selected = [];
  for (const part of candidates) {
    const next = [...selected, part].join("、");
    if (next.length > targetMax && selected.length) break;
    selected.push(part);
    if (next.length >= targetMin) break;
  }
  let joined = selected.join("、");
  if (!joined || joined.length < 6) joined = candidates[0] || fallback;
  if (joined.length > 50) {
    const short = candidates.find((part) => part.length >= 6 && part.length <= 36);
    joined = short || fallback;
  }
  return joined.length <= 50 ? joined : fallback;
}

function normalizeQuizOptionText(text, options = {}) {
  const { fallback = "关注核心主题并做出清醒回应", mode = "meaning" } = options;
  const raw = getRawSafeText(text, fallback);
  let compact = compactMeaningText(raw, fallback, mode)
    .replace(/\.{3,}|…/g, "")
    .replace(/^不只是“变坏”，更?/g, "")
    .replace(/^更可能/g, "可能")
    .replace(/^代表/g, "")
    .replace(/^你需要代表/g, "你需要")
    .replace(/^可能提醒可能表示/g, "可能提醒")
    .replace(/^可能提醒更可能表示/g, "可能提醒")
    .replace(/^可能提醒不一定/g, "可能提醒情况不一定")
    .replace(/^可能提醒不只是“变坏”，?/g, "可能提醒")
    .replace(/^需要需要/g, "需要")
    .replace(/、、+/g, "、")
    .trim();
  compact = cleanQuizFragment(compact);
  if (mode === "keyword") {
    compact = compact
      .split(/[，,、]/)
      .map(cleanQuizFragment)
      .filter(Boolean)
      .slice(0, 4)
      .join("、");
  }
  if (mode === "reversed" && !/^(可能|需要|提醒|暗示)/.test(compact)) {
    compact = `可能提醒${compact}`;
  }
  if (mode === "scenario" && !/^你/.test(compact)) {
    compact = `你需要${compact}`;
  }
  compact = compact
    .replace(/\s+/g, " ")
    .replace(/[。；;]+$/g, "")
    .replace(/\.{3,}|…/g, "")
    .replace(/^可能提醒更可能表示/g, "可能提醒")
    .replace(/^可能提醒可能表示/g, "可能提醒")
    .replace(/^可能提醒不只是“变坏”，?/g, "可能提醒")
    .trim();
  if (compact.length > 50) {
    compact = compactMeaningText(compact, fallback, mode);
  }
  return compact && compact.length >= 6 && compact.length <= 50 ? compact : fallback;
}

function sanitizeQuizOptionText(text, card = null, options = {}) {
  const { mode = "meaning", fallback = "关注核心主题并做出清醒回应" } = options;
  let cleaned = normalizeQuizOptionText(text, { mode, fallback });
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
  cleaned = normalizeQuizOptionText(cleaned, { mode, fallback });
  if (!cleaned || cleaned.length < 6 || ["。", "，", "、"].includes(cleaned)) {
    return fallback;
  }
  return cleaned;
}

function buildQuizOptions(correct, pools, fallbackPool = [], config = {}) {
  const { allowCardNames = false, card = null, mode = "meaning", fallback = "关注核心主题并做出清醒回应" } = config;
  const normalize = (item) => allowCardNames
    ? getSafeText(item, "待补充", 58)
    : sanitizeQuizOptionText(item, card, { mode, fallback });
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
