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
