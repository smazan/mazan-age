// Mazan Age – landing page. Modul je načtený z js/main.js.
// Statické sprity v HTML (data-sprite) a jejich střídání po najetí (data-hover).
import { makeSprite } from "./core.js";

export function init() {
  document.querySelectorAll(".sprite[data-sprite]").forEach((el) => {
    const base = el.dataset.sprite;
    makeSprite(base, parseFloat(el.dataset.scale || getComputedStyle(el).getPropertyValue("--s")) || 1, el);
    const alt = el.dataset.hover;
    if (alt) {
      const holder = el.closest(".pedestal") || el;
      const scale = parseFloat(getComputedStyle(el).getPropertyValue("--s")) || 1;
      const on = () => makeSprite(alt, scale, el);
      const off = () => makeSprite(base, scale, el);
      holder.addEventListener("mouseenter", on);
      holder.addEventListener("mouseleave", off);
      holder.addEventListener("click", () => (el.dataset.sprite === alt ? off() : on()));
    }
  });
}
