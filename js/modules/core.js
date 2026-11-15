// Mazan Age – landing page. Modul je načtený z js/main.js.
import { T } from "./texts.js";

export const CFG = window.MAZAN_CONFIG || {};      // js/config.js (Formspree, Stripe, YouTube, datum vydání)
export const SPR = window.MAZAN_SPRITES || {};     // js/sprites.js (animační pásy)
export const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Každá jazyková verze webu (mazanage.cz / .com / .ru) má svůj texts.js – sestaví ho navrh/web_build.py
// z web/lang/<jazyk>.json. Žádné přepínání jazyka, texty v HTML jsou už přeložené.
export const t = (key) => (T[key] !== undefined ? T[key] : key);
export { T };

// Co se má vykreslit po načtení (bestiář, zbraně, podpora, odpočet…)
const langHooks = [];
export const onLang = (fn) => { langHooks.push(fn); };

export function initPage() {
  langHooks.forEach((fn) => fn());
  splitTitles();
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
