// Mazan Age – landing page. Modul je načtený z js/main.js.
// Konec stránky jako game over – Play again vrátí nahoru.
import { t, toast, reduced } from "./core.js";

export function init() {
  document.getElementById("play-again").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    toast(t("again_toast"));
  });
}
