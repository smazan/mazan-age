// Mazan Age – landing page. Modul je načtený z js/main.js.
// Odpočet do vydání (CFG.releaseDate).
import { CFG, t, onLang } from "./core.js";

export function init() {
  const release = new Date(CFG.releaseDate || "2026-12-31T23:59:59+01:00").getTime();
  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    let ms = release - Date.now();
    if (ms <= 0) {
      document.querySelector(".countdown__label").textContent = t("out_now");
      ms = 0;
    }
    const s = Math.floor(ms / 1000);
    document.getElementById("cd-d").textContent = pad(Math.floor(s / 86400));
    document.getElementById("cd-h").textContent = pad(Math.floor(s / 3600) % 24);
    document.getElementById("cd-m").textContent = pad(Math.floor(s / 60) % 60);
    document.getElementById("cd-s").textContent = pad(s % 60);
  }
  setInterval(tick, 1000);
  onLang(tick);
}
