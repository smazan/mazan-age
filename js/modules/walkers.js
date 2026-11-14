// Mazan Age – landing page. Modul je načtený z js/main.js.
// Postavička jednou přejde přes spodek sekce, když dojede do obrazu.
import { SPR, reduced, makeSprite } from "./core.js";

export function init() {
  // Když sekce dojede do obrazu, dole přes ni jednou přejde jedna postavička: střídavě zleva doprava
  // a zprava doleva, v každé sekci jiný druh.
  // [sprite, měřítko, rychlost px/s] – každá postava jde svým tempem (had se plazí, raptor sprintuje)
  const WALKERS = [["boy_run", 0.5, 230], ["raptor", 0.5, 330], ["girl_run", 0.5, 240], ["boar", 0.7, 280],
    ["golem", 0.45, 75], ["turtle", 0.7, 55], ["mammoth", 0.5, 110], ["tomas", 0.5, 150], ["snake", 0.6, 45]];
  if (!reduced) {
    const walkIO = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      walkIO.unobserve(e.target);
      const i = Number(e.target.dataset.walk);
      const [id, sc, speed] = WALKERS[i % WALKERS.length];
      const ltr = i % 2 === 0;
      const wrap = document.createElement("div");
      wrap.className = "walker";
      const sp = makeSprite(id, sc);
      if (!ltr) sp.classList.add("flip");
      wrap.appendChild(sp);
      e.target.appendChild(wrap);
      const w = SPR[id].w * sc;
      const W = e.target.clientWidth;
      const from = ltr ? -w - 20 : W + 20;
      const to = ltr ? W + 20 : -w - 20;
      wrap.animate([{ transform: `translateX(${from}px)` }, { transform: `translateX(${to}px)` }],
        { duration: Math.abs(to - from) / speed * 1000, easing: "linear" }).onfinish = () => wrap.remove();
    }), { threshold: 0.6 });
    document.querySelectorAll("section:not(.hero), .footer").forEach((sec, i) => {
      sec.dataset.walk = i;
      walkIO.observe(sec);
    });
  }
}
