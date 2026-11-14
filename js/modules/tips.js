// Mazan Age – landing page. Modul je načtený z js/main.js.
// Podpora 1–10 € přes Stripe Payment Links (odkazy v js/config.js). Boxů s podporou může být víc (.tips).
import { CFG, t, onLang } from "./core.js";

const AMOUNTS = [1, 2, 3, 5, 10];

function buildTips() {
  document.querySelectorAll(".tips").forEach((box) => {
    const note = box.parentElement.querySelector(".tips__note");
    box.textContent = "";
    AMOUNTS.forEach((a) => {
      const link = (CFG.stripeLinks || {})[a] || "";
      const btn = document.createElement("a");
      btn.className = "tip";
      btn.setAttribute("aria-label", a + " € – " + t("tip_" + a));
      btn.title = t("tip_" + a);
      const off = document.createElement("img");
      off.src = "assets/tip_" + a + ".webp";
      off.alt = "";
      off.width = 130;
      off.height = 131;
      const on = document.createElement("img");
      on.src = "assets/tip_" + a + "_on.webp";
      on.alt = "";
      on.className = "tip__on";
      on.width = 130;
      on.height = 131;
      btn.append(off, on);
      if (link) {
        btn.href = link;
        btn.target = "_blank";
        btn.rel = "noopener";
      } else {
        btn.href = "#" + box.closest("section").id;
        btn.classList.add("is-off");
        btn.setAttribute("aria-disabled", "true");
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          if (note) note.textContent = t("tip_soon");
        });
      }
      box.appendChild(btn);
    });
  });
}

export function init() {
  onLang(buildTips);
}
