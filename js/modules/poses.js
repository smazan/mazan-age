// Mazan Age – landing page. Modul je načtený z js/main.js.
// „Pick your hero“: vedle kluka a holky řada animovaných póz ze hry a občas zbraň.
import { t, makeSprite, onLang } from "./core.js";

const POSES = {
  boy: ["walk", "run", ["weapon", "01_dreveny_kyj"], "jump", "attack", "crouch", ["weapon", "09_kamenne_kladivo"], "hit", "dance", "death"],
  girl: ["walk", "run", "jump", ["weapon", "06_kamenne_kopi"], "attack", "dance", "crouch", ["weapon", "08_bumerang"], "hit", "death"],
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
