// Mazan Age – landing page. Modul je načtený z js/main.js.
// „Pick your hero“: vedle kluka a holky mřížka animovaných póz ze hry (každá na kolečku).
import { t, makeSprite, onLang } from "./core.js";

const POSES = {
  boy: ["walk", "run", "jump", "attack", "crouch", "hit", "dance", "death"],
  girl: ["walk", "run", "jump", "attack", "dance", "crouch", "hit", "death"],
};

function build() {
  document.querySelectorAll(".poses").forEach((row) => {
    const hero = row.dataset.hero;
    row.textContent = "";
    POSES[hero].forEach((p, i) => {
      const card = document.createElement("figure");
      card.className = "pose";
      card.style.setProperty("--i", i);
      const stage = document.createElement("div");
      stage.className = "pose__stage";
      let label;
      if (Array.isArray(p)) {
        card.classList.add("pose--weapon");
        const img = document.createElement("img");
        img.src = "assets/weapons/" + p[1] + ".webp";
        img.alt = "";
        img.loading = "lazy";
        stage.appendChild(img);
        label = (t("weapons")[p[1]] || [""])[0];
      } else {
        stage.appendChild(makeSprite(hero + "_" + p, 0.72));
        label = t("pose_" + p);
      }
      const cap = document.createElement("figcaption");
      cap.textContent = label;
      card.append(stage, cap);
      row.appendChild(card);
    });
  });
}

export function init() {
  onLang(build);
}
