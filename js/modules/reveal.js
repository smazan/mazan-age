// Mazan Age – landing page. Modul je načtený z js/main.js.
// Odhalování sekcí při rolování a zpevnění horní lišty.


export function init() {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
  }), { threshold: 0.15 });
  document.querySelectorAll(".reveal, .title").forEach((el) => io.observe(el));
  const bar = document.querySelector(".topbar");
  const onScroll = () => bar.classList.toggle("is-solid", window.scrollY > 80);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
