// Mazan Age – landing page. Modul je načtený z js/main.js.
// Mince a diamanty schované po stránce, SCORE v liště.
import { t, toast } from "./core.js";

let score = 0;

export function init() {
  const LOOT = [
    ["story", 3, 12, "coin"], ["story", 95, 8, "diamond"], ["heroes", 8, 40, "coin"], ["heroes", 90, 30, "coin"],
    ["monsters", 4, 6, "diamond"], ["monsters", 96, 92, "coin"], ["features", 50, 6, "coin"], ["features", 3, 90, "coin"],
    ["signup", 92, 20, "diamond"], ["support", 6, 70, "coin"], ["gameplay", 94, 10, "coin"], ["footer", 50, 70, "diamond"],
  ];
  let found = 0;
  const scoreEl = document.getElementById("score");
  const hud = document.getElementById("hud");
  function addScore(n) {
    score += n;
    scoreEl.textContent = String(score).padStart(6, "0");
    hud.classList.remove("bump"); void hud.offsetWidth; hud.classList.add("bump");
  }
  LOOT.forEach(([sel, x, y, kind]) => {
    const host = document.querySelector("." + sel);
    if (!host) return;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "loot";
    b.setAttribute("aria-label", kind);
    b.style.left = `calc(${x}% - ${x * 0.44}px)`;   // i u pravého okraje celá uvnitř (šířka 44 px)
    b.style.top = y + "%";
    b.style.animationDelay = (Math.random() * -2) + "s";
    const img = document.createElement("img");
    img.src = kind === "diamond" ? "assets/diamond.webp" : "assets/coin_gold.webp";
    img.alt = "";
    b.appendChild(img);
    b.addEventListener("click", () => {
      const pts = kind === "diamond" ? 500 : 100;
      addScore(pts);
      found++;
      const pop = document.createElement("span");
      pop.className = "pop";
      pop.textContent = "+" + pts;
      pop.style.left = b.style.left;
      pop.style.top = b.style.top;
      host.appendChild(pop);
      setTimeout(() => pop.remove(), 900);
      b.classList.add("got");
      setTimeout(() => b.remove(), 450);
      toast(found === LOOT.length ? t("loot_all") : `${t("loot_got")} ${found}/${LOOT.length}`);
    });
    host.appendChild(b);
  });
  hud.addEventListener("click", () => toast(t("loot_hint")));
  setTimeout(() => { if (found === 0) toast(t("loot_hint")); }, 9000);
}
