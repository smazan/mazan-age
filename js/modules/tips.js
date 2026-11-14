// Mazan Age – landing page. Modul je načtený z js/main.js.
// Podpora 1–10 € přes Stripe Payment Links (odkazy v js/config.js).
import { CFG, t, onLang } from "./core.js";

export function init() {
  const AMOUNTS = [1, 2, 3, 5, 10];
  function buildTips() {
    const box = document.getElementById("tips");
    box.textContent = "";
    AMOUNTS.forEach((a) => {
      const link = (CFG.stripeLinks || {})[a] || "";
      const btn = document.createElement("a");
      btn.className = "stone-btn tip" + (a >= 5 ? " stone-btn--gold" : "") + (a === 10 ? " tip--big" : "");
      btn.textContent = a + " €";
      const small = document.createElement("small");
      small.textContent = t("tip_" + a);
      btn.appendChild(small);
      if (link) {
        btn.href = link;
        btn.target = "_blank";
        btn.rel = "noopener";
      } else {
        btn.href = "#support";
        btn.classList.add("is-off");
        btn.setAttribute("aria-disabled", "true");
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(".tips__note").textContent = t("tip_soon");
        });
      }
      box.appendChild(btn);
    });
  }
  onLang(buildTips);
}
