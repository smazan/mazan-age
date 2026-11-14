// Mazan Age – landing page. Modul je načtený z js/main.js.
// Bestiář – karty příšer se sprity.
import { t, T, makeSprite, onLang } from "./core.js";

export function init() {
  const BEASTS = [["raptor", 0.75], ["golem", 0.72], ["ptero", 0.66], ["boar", 1.1], ["mammoth", 0.66], ["turtle", 1.05], ["snake", 0.9], ["tomas", 0.8], ["piranha", 1.1], ["spider", 1.2]];
  function buildBestiary() {
    const grid = document.getElementById("bestiary");
    grid.textContent = "";
    BEASTS.forEach(([id, sc]) => {
      const [name, line] = t("beasts")[id] || T.en.beasts[id];
      const card = document.createElement("div");
      card.className = "beast reveal is-in";
      const stage = document.createElement("div");
      stage.className = "beast__stage";
      stage.appendChild(makeSprite(id, sc));
      const b = document.createElement("b");
      b.textContent = name;
      const span = document.createElement("span");
      span.textContent = line;
      card.append(stage, b, span);
      grid.appendChild(card);
    });
  }
  onLang(buildBestiary);
}
