// Mazan Age – landing page. Modul je načtený z js/main.js.
// Bestiář – karty aktuálních nepřátel (obrázky z DATA/Web/nepratele, ořez bez zapečeného textu).
import { t, onLang } from "./core.js";

export function init() {
  const BEASTS = ["boar", "snake", "mammoth", "turtle", "spider", "ptero", "raptor", "tomas"];
  const SOON = ["ankylo", "mole", "bat", "golem", "crab", "plant", "centipede", "dragonfly", "piranha", "aurochs", "croc", "sabertooth"];
  function buildBestiary() {
    fill("bestiary", BEASTS, "beasts");
    fill("bestiary-soon", SOON, "upcoming");   // připravovaní: šedě, barevně při najetí
  }
  function fill(gridId, ids, key) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.textContent = "";
    ids.forEach((id) => {
      const [name, line] = t(key)[id] || [id, ""];
      const card = document.createElement("div");
      card.className = "beast reveal is-in";
      const img = document.createElement("img");
      img.className = "beast__art";
      img.src = "assets/foe_" + id + ".webp";
      img.alt = name;
      img.loading = "lazy";
      img.width = 247;
      img.height = 289;
      const b = document.createElement("b");
      b.textContent = name;
      const span = document.createElement("span");
      span.textContent = line;
      card.append(img, b, span);
      grid.appendChild(card);
    });
  }
  onLang(buildBestiary);
}
