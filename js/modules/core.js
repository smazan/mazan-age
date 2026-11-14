// Mazan Age – landing page. Modul je načtený z js/main.js.
import { T } from "./texts.js";

export const CFG = window.MAZAN_CONFIG || {};      // js/config.js (Formspree, Stripe, YouTube, datum vydání)
export const SPR = window.MAZAN_SPRITES || {};     // js/sprites.js (animační pásy)
export const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// localStorage jen na pohodlí (jazyk) – v soukromém okně může chybět
export const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* bez úložiště */ } },
};

let lang = store.get("mazan-lang") || "en";   // primární jazyk angličtina, CZ jen přepínačem
export const getLang = () => lang;
export const t = (key) => (T[lang] && T[lang][key]) || T.en[key] || key;
export { T };

// Co se má překreslit při změně jazyka (bestiář, zbraně, podpora, odpočet…)
const langHooks = [];
export const onLang = (fn) => { langHooks.push(fn); };

export function applyLang() {
  document.documentElement.lang = lang === "cz" ? "cs" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  document.getElementById("lang").textContent = lang === "cz" ? "EN" : "CZ";
  document.getElementById("form-lang").value = lang;
  langHooks.forEach((fn) => fn());
  splitTitles();
}

export function initLangButton() {
  document.getElementById("lang").addEventListener("click", () => {
    lang = lang === "cz" ? "en" : "cz";
    store.set("mazan-lang", lang);
    applyLang();
  });
}

// Nadpisy: každé písmeno zvlášť, při zobrazení naskáčou jedno po druhém.
export function splitTitles() {
  document.querySelectorAll(".title").forEach((h) => {
    const text = h.textContent;
    h.setAttribute("aria-label", text);
    h.textContent = "";
    // písmena seskupená do slov – zalomí se jen mezi slovy, ne uprostřed slova
    let i = 0;
    text.split(" ").forEach((word, w) => {
      if (w > 0) { h.appendChild(document.createTextNode(" ")); i++; }
      const wordEl = document.createElement("span");
      wordEl.className = "word";
      wordEl.setAttribute("aria-hidden", "true");
      [...word].forEach((c) => {
        const span = document.createElement("span");
        span.className = "ch";
        span.textContent = c;
        span.style.setProperty("--i", i++);
        wordEl.appendChild(span);
      });
      h.appendChild(wordEl);
    });
    if (h.classList.contains("is-in")) { h.classList.remove("is-in"); void h.offsetWidth; h.classList.add("is-in"); }
  });
}

let toastT = 0;
export function toast(text) {
  const el = document.getElementById("toast");
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => el.classList.remove("show"), 2600);
}

export function makeSprite(id, scale, el) {
  const s = SPR[id];
  el = el || document.createElement("div");
  if (!s) return el;
  el.classList.add("sprite");
  el.style.setProperty("--img", `url(${new URL("assets/sprites/" + id + ".webp", document.baseURI).href})`);   // absolutně – relativní url() v proměnné se bere vůči css/
  el.style.setProperty("--w", s.w);
  el.style.setProperty("--h", s.h);
  el.style.setProperty("--n", s.n);
  el.style.setProperty("--fps", s.fps);
  el.style.setProperty("--s", scale);
  el.dataset.sprite = id;
  return el;
}
