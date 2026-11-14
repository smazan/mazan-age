// Mazan Age – landing page. Modul je načtený z js/main.js.
// Karusel přes celou šířku (videa, zbraně).
import { reduced } from "./core.js";

// Šipky, tažení myší, na dotyku prstem; pomalé samo-posouvání – stojí při najetí myší, tažení,
// 4 s po šipce a když ctl.pause = true (např. přehrává se video).
export function carousel(track, prevBtn, nextBtn, speed) {
  const ctl = { pause: false, dragMoved: false };
  let hover = false;
  let dragX = null;
  let dragStart = 0;
  let holdUntil = 0;
  const step = () => ((track.firstElementChild || {}).offsetWidth || 280) + 18;
  const jump = (dir) => {
    holdUntil = performance.now() + 4000;
    let to = track.scrollLeft + dir * step() * 2;
    if (to > track.scrollWidth - track.clientWidth + 4) to = 0;
    if (to < -4) to = track.scrollWidth;
    track.scrollTo({ left: to, behavior: "smooth" });
  };
  prevBtn.addEventListener("click", () => jump(-1));
  nextBtn.addEventListener("click", () => jump(1));
  track.addEventListener("mouseenter", () => { hover = true; });
  track.addEventListener("mouseleave", () => { hover = false; dragX = null; track.classList.remove("is-drag"); });
  track.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;   // dotyk posouvá prohlížeč sám
    dragX = e.clientX;
    dragStart = track.scrollLeft;
    ctl.dragMoved = false;
  });
  window.addEventListener("pointermove", (e) => {
    if (dragX === null) return;
    const dx = e.clientX - dragX;
    if (Math.abs(dx) > 6) { ctl.dragMoved = true; track.classList.add("is-drag"); }
    if (ctl.dragMoved) track.scrollLeft = dragStart - dx;
  });
  window.addEventListener("pointerup", () => {
    if (dragX === null) return;
    dragX = null;
    track.classList.remove("is-drag");
    setTimeout(() => { ctl.dragMoved = false; }, 0);
  });
  track.addEventListener("touchstart", () => { ctl.pause = true; }, { passive: true });
  let acc = 0;
  let last = performance.now();
  function tickC(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (!reduced && !ctl.pause && !hover && dragX === null && now > holdUntil) {
      acc += speed * dt;
      if (acc >= 1) {
        const px = Math.floor(acc);
        acc -= px;
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) track.scrollLeft = 0;
        else track.scrollLeft += px;
      }
    }
    requestAnimationFrame(tickC);
  }
  requestAnimationFrame(tickC);
  return ctl;
}
