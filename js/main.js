"use strict";

const filterButtons = document.querySelectorAll(".year-filters button");
const publications = document.querySelectorAll(".publication-card");
const filterStatus = document.getElementById("filter-status");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const year = button.dataset.year;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    let count = 0;
    publications.forEach((publication) => {
      publication.hidden = year !== "all" && publication.dataset.year !== year;
      if (!publication.hidden) count += 1;
    });
    filterStatus.textContent =
      year === "all"
        ? `Showing all ${count} publications.`
        : `Showing ${count} publication${count === 1 ? "" : "s"} from ${year}.`;
    scheduleNavigationUpdate();
  });
});

const navigationLinks = [...document.querySelectorAll(".section-nav a")];
const sections = navigationLinks.map((link) =>
  document.querySelector(link.hash),
);
let scrollPending = false;

function updateNavigation() {
  const threshold = window.innerWidth <= 600 ? 110 : 90;
  let activeSection = sections[0];
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= threshold)
      activeSection = section;
  });
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 5
  ) {
    activeSection = sections[sections.length - 1];
  }
  navigationLinks.forEach((link) => {
    const active = link.hash === `#${activeSection.id}`;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollPending = false;
}

function scheduleNavigationUpdate() {
  if (!scrollPending) {
    scrollPending = true;
    window.requestAnimationFrame(updateNavigation);
  }
}

window.addEventListener("scroll", scheduleNavigationUpdate, { passive: true });
window.addEventListener("resize", scheduleNavigationUpdate);
window.addEventListener("load", updateNavigation);
document.querySelectorAll(".publication-visual img").forEach((image) => {
  image.addEventListener("load", scheduleNavigationUpdate);
});
document.getElementById("copyright-year").textContent =
  new Date().getFullYear();
updateNavigation();

const translations = {
  "News & Events": "新闻与动态", "About Me": "\u5173\u4e8e\u6211", "News": "\u65b0\u95fb", "Publications": "\u8bba\u6587\u53d1\u8868", "Experience": "\u7ecf\u5386", "Awards": "\u8363\u8a89", "Academic service": "\u5b66\u672f\u670d\u52a1", "Academic Service": "\u5b66\u672f\u670d\u52a1", "Filter by year": "\u6309\u5e74\u4efd\u7b5b\u9009", "All": "\u5168\u90e8", "Conference & Journal Reviewer": "\u4f1a\u8bae\u4e0e\u671f\u520a\u5ba1\u7a3f\u4eba", "Computer Vision Research": "\u8ba1\u7b97\u673a\u89c6\u89c9\u7814\u7a76"
};
const textTranslations = {
  "I am currently a Ph.D. student at": "\u6211\u76ee\u524d\u662f",
  "My research focuses on": "\u6211\u7684\u7814\u7a76\u65b9\u5411\u5305\u62ec",
  "Previously, I worked on fuzzy systems and interpretable modeling": "\u6211\u66fe\u4ece\u4e8b\u6a21\u7cca\u7cfb\u7edf\u4e0e\u53ef\u89e3\u91ca\u5efa\u6a21\u7814\u7a76",
  "Our work on real nighttime image enhancement was published in IEEE T-ITS.": "\u6211\u4eec\u7684\u771f\u5b9e\u591c\u95f4\u56fe\u50cf\u589e\u5f3a\u5de5\u4f5c\u53d1\u8868\u4e8e IEEE T-ITS\u3002",
  "Our image dehazing work was accepted by AAAI 2025.": "\u6211\u4eec\u7684\u56fe\u50cf\u53bb\u96fe\u5de5\u4f5c\u88ab AAAI 2025 \录\u7528\u3002",
  "MambaLLIE was presented at NeurIPS 2024.": "MambaLLIE \在 NeurIPS 2024 \发\u8868\u3002",
  "Driving-Video Dehazing was presented at CVPR 2024.": "Driving-Video Dehazing \在 CVPR 2024 \发\u8868\u3002",
  "Ph.D. Student": "\u535a\u58eb\u7814\u7a76\u751f", "Current": "\u5728\u8bfb", "Advisor: Prof. Jun Li": "\u5bfc\u5e08\uff1aJun Li \教\u6388", "Night Enhancement": "\u591c\u95f4\u56fe\u50cf\u589e\u5f3a", "MixASNet": "MixASNet", "Paper": "\u8bba\u6587", "Project": "\u9879\u76ee", "Code": "\u4ee3\u7801"
};
const languageToggle = document.getElementById("lang-toggle");
let chinese = false;
function applyLanguage() {
  document.documentElement.lang = chinese ? "zh-CN" : "en";
  const about = document.querySelector(".about-copy");
  if (about) { if (!about.dataset.enHtml) about.dataset.enHtml = about.innerHTML; about.innerHTML = chinese ? "<p>\u6211\u76ee\u524d\u662f\u5357\u4eac\u7406\u5de5\u5927\u5b66 PCALab \u7684\u535a\u58eb\u7814\u7a76\u751f\uff0c\u5bfc\u5e08\u662f Jun Li \u6559\u6388\u30022021 \u5e74\uff0c\u6211\u83b7\u5f97\u6e56\u5dde\u5e08\u8303\u5927\u5b66\u8ba1\u7b97\u673a\u79d1\u5b66\u7855\u58eb\u5b66\u4f4d\uff0c\u5bfc\u5e08\u662f \u848b\u4e91\u826f \u6559\u6388\u3002</p><p>\u6211\u7684\u7814\u7a76\u65b9\u5411\u5305\u62ec\u4f4e\u5c42\u6b21\u89c6\u89c9\u3001\u56fe\u50cf\u4e0e\u89c6\u9891\u589e\u5f3a\uff0c\u4ee5\u53ca\u9762\u5411\u771f\u5b9e\u573a\u666f\u7684\u4e09\u7ef4\u91cd\u5efa\u3002</p><p>\u6211\u66fe\u4ece\u4e8b\u6a21\u7cca\u7cfb\u7edf\u548c\u53ef\u89e3\u91ca\u5efa\u6a21\u5728\u766b\u75eb\u8111\u7535\u8bc6\u522b\u4e2d\u7684\u5e94\u7528\u7814\u7a76\u3002</p>" : about.dataset.enHtml; }
  const paperTitles = ["\u65e5\u95f4\u6df7\u5408\u7684\u975e\u5bf9\u9f50\u5b66\u4e60\u7528\u4e8e\u771f\u5b9e\u591c\u95f4\u56fe\u50cf\u589e\u5f3a", "\u4f7f\u7528 YCbCr \u8272\u5f69\u7a7a\u95f4\u7684\u5f15\u5bfc\u5f0f\u771f\u5b9e\u56fe\u50cf\u53bb\u96fe", "MambaLLIE\uff1a\u5168\u5c40\u81f3\u5c40\u90e8\u72b6\u6001\u7a7a\u95f4\u7684\u9690\u5f0f Retinex \u4f4e\u5149\u589e\u5f3a", "\u5229\u7528\u975e\u5bf9\u9f50\u6b63\u5219\u5316\u8fdb\u884c\u9a7e\u9a76\u89c6\u9891\u53bb\u96fe\u4ee5\u8f85\u52a9\u5b89\u5168", "\u878d\u5408\u8f6f\u6807\u7b7e\u4fe1\u606f\u548c\u77e5\u8bc6\u8499\u7279\u7684 CNN \u57fa\u4e8e Born-Again TSK \u6a21\u7cca\u5206\u7c7b\u5668"];
  document.querySelectorAll(".publication-info h3").forEach((el, i) => { if (!el.dataset.en) el.dataset.en = el.textContent; el.textContent = chinese ? (el.dataset.zh || paperTitles[i - 5] || el.dataset.en) : el.dataset.en; });
  document.querySelectorAll(".welcome-note[data-zh]").forEach((el) => { if (!el.dataset.en) el.dataset.en = el.textContent; el.textContent = chinese ? el.dataset.zh : el.dataset.en; });
  document.querySelectorAll(".news-list [data-zh]").forEach((el) => {
    if (!el.dataset.en) el.dataset.en = el.textContent;
    el.textContent = chinese ? el.dataset.zh : el.dataset.en;
  });

  document.querySelectorAll(".top-nav a,.section-nav a span:first-child,.section-heading h2,.intro-section h2,.publication-toolbar p,.year-filters button,.detail-card h3,.detail-card p").forEach((el) => {
    if (!el.dataset.en) el.dataset.en = el.textContent.trim();
    const en = el.dataset.en;
    el.textContent = chinese ? (translations[en] || en) : en;
  });
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let node; while ((node = walker.nextNode())) { if (!node.parentElement.closest("script,style")) { if (!node.__enText) node.__enText = node.nodeValue; const original = node.__enText; node.nodeValue = chinese ? (textTranslations[original.trim()] || original) : original; } }
  languageToggle.textContent = chinese ? "EN" : "\u4e2d\u6587";
  languageToggle.setAttribute("aria-pressed", String(chinese));
}
if (languageToggle) languageToggle.addEventListener("click", () => { chinese = !chinese; applyLanguage(); });

applyLanguage();
