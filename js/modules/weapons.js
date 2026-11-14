// Mazan Age – landing page. Modul je načtený z js/main.js.
// Karusel „Choose your weapon“ – vlastnosti podle hry (godot/data/boy_animations.json → weapon_stats).
import { t, T, toast, onLang } from "./core.js";
import { carousel } from "./carousel.js";

export function init() {
  // Vlastnosti podle hry (godot/data/boy_animations.json → weapon_stats).
  const WEAPONS = [
    ["01_dreveny_kyj", "melee", 1, 1.0, 1.0],
    ["02_ostnaty_dreveny_kyj", "melee", 2, 0.9, 1.0],
    ["03_kostena_palice", "throw", 1, 1.2, 0],
    ["04_kamenna_sekera", "throw", 2, 1.0, 0],
    ["05_dvojita_sekera", "throw", 2, 0.9, 0],
    ["06_kamenne_kopi", "melee", 1, 1.1, 1.8],
    ["07_ohniva_pochoden", "melee", 1, 1.0, 1.0],
    ["08_bumerang", "boomerang", 1, 1.0, 0],
    ["09_kamenne_kladivo", "throw", 3, 0.8, 0],
    ["10_prak", "shoot", 1, 1.25, 0],
    ["11_kostena_dyka", "throw", 1, 1.6, 0],
    ["12_ostnaty_palcat", "melee", 3, 0.8, 1.2],
  ];
  const wTrack = document.getElementById("weapons");
  carousel(wTrack, document.getElementById("weapons-prev"), document.getElementById("weapons-next"), 34);
  let picked = "";
  function buildWeapons() {
    wTrack.textContent = "";
    WEAPONS.forEach(([id, type, dmg, spd, reach]) => {
      const [name, line] = t("weapons")[id] || T.en.weapons[id];
      const range = type === "melee" ? Math.min(0.2 + reach * 0.25, 0.7) : type === "shoot" ? 1 : type === "boomerang" ? 0.85 : 0.8;
      const card = document.createElement("button");
      card.type = "button";
      card.className = "wcard" + (picked === id ? " is-picked" : "");
      const slot = document.createElement("div");
      slot.className = "wcard__slot";
      const img = document.createElement("img");
      img.src = "assets/weapons/" + id + ".webp";
      img.alt = "";
      img.loading = "lazy";
      img.draggable = false;
      slot.appendChild(img);
      const badge = document.createElement("span");
      badge.className = "wcard__badge wcard__badge--" + type;
      badge.textContent = t("wtype_" + type);
      const b = document.createElement("b");
      b.textContent = name;
      const p = document.createElement("span");
      p.className = "wcard__line";
      p.textContent = line;
      const stats = document.createElement("div");
      stats.className = "wcard__stats";
      [["w_power", dmg / 3], ["w_speed", spd / 1.6], ["w_range", range]].forEach(([k, v]) => {
        const row = document.createElement("div");
        const lab = document.createElement("small");
        lab.textContent = t(k);
        const bar = document.createElement("i");
        bar.style.setProperty("--v", Math.max(0.12, Math.min(1, v)).toFixed(2));
        row.append(lab, bar);
        stats.appendChild(row);
      });
      card.append(badge, slot, b, p, stats);
      card.addEventListener("click", () => {
        picked = id;
        wTrack.querySelectorAll(".wcard").forEach((c) => c.classList.remove("is-picked"));
        card.classList.add("is-picked");
        toast(t("w_picked").replace("{w}", name));
      });
      wTrack.appendChild(card);
    });
  }
  onLang(buildWeapons);
}
