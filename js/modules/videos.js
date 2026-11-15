// Mazan Age – landing page. Modul je načtený z js/main.js.
// Videa z YouTube jako reels (seznam v js/config.js → youtubeVideos).
import { CFG, t } from "./core.js";
import { carousel } from "./carousel.js";

export function init() {
  // Karty na výšku 9:16; videa jsou na šířku – ukazuje se střed obrazu (náhled i přehrávač).
  // Přehrávač (youtube-nocookie) se načte až po kliknutí – rychlé a bez cookies předem.
  const yt = CFG.youtubeChannel || "https://www.youtube.com/@mazanage";
  document.getElementById("yt-top").href = yt;
  document.getElementById("yt-channel").href = yt;
  document.getElementById("yt-sub").href = yt + "?sub_confirmation=1";
  const vids = document.getElementById("videos");
  const reelCtl = carousel(vids, document.getElementById("reels-prev"), document.getElementById("reels-next"), 28);
  let playingCard = null;
  const titles = t("video_titles");
  (CFG.youtubeVideos || []).forEach((v0) => {
    const v = { id: v0.id, title: (titles && titles[v0.id]) || v0.title };   // název videa v jazyce verze
    const card = document.createElement("figure");
    card.className = "reel";
    const scr = document.createElement("button");
    scr.type = "button";
    scr.className = "reel__screen";
    scr.setAttribute("aria-label", t("play") + ": " + v.title);
    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = "";
    img.draggable = false;
    img.src = "https://i.ytimg.com/vi/" + encodeURIComponent(v.id) + "/maxresdefault.jpg";
    img.onerror = () => { img.onerror = null; img.src = "https://i.ytimg.com/vi/" + encodeURIComponent(v.id) + "/hqdefault.jpg"; };
    const play = document.createElement("span");
    play.className = "reel__play";
    const cap = document.createElement("figcaption");
    const link = document.createElement("a");
    link.href = "https://www.youtube.com/watch?v=" + encodeURIComponent(v.id);
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = v.title;
    link.draggable = false;
    cap.appendChild(link);
    scr.append(img, play);
    card.append(scr, cap);
    scr.addEventListener("click", () => {
      if (reelCtl.dragMoved) return;
      if (playingCard && playingCard !== card) stopReel(playingCard);
      const f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(v.id) + "?autoplay=1&rel=0&playsinline=1";
      f.title = v.title;
      f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      f.allowFullscreen = true;
      const box = document.createElement("div");
      box.className = "reel__screen reel__screen--live";
      box.appendChild(f);
      card.classList.add("is-playing");
      card._screen = scr;
      scr.replaceWith(box);
      playingCard = card;
      reelCtl.pause = true;
    });
    vids.appendChild(card);
  });
  function stopReel(card) {
    const f = card.querySelector(".reel__screen--live");
    if (f && card._screen) f.replaceWith(card._screen);
    card.classList.remove("is-playing");
    if (playingCard === card) playingCard = null;
  }
}
