// Mazan Age – landing page. Modul je načtený z js/main.js.
// Žebříček 50 nejlepších hráčů – čte JSON z PHP skriptu na hostingu (CFG.leaderboardApi, web/api/zebricek.php).
import { CFG, t } from "./core.js";

function row(i, r) {
  const li = document.createElement("li");
  li.className = "board__row" + (i < 3 ? " board__row--top" : "");
  const cells = [["board__rank", i + 1 + "."], ["board__nick", r.nick], ["board__score", Number(r.score).toLocaleString()], ["board__pct", (r.pct | 0) + " %"]];
  cells.forEach(([cls, text]) => {
    const s = document.createElement("span");
    s.className = cls;
    s.textContent = text;   // přezdívky jen jako text (žádné HTML)
    li.appendChild(s);
  });
  return li;
}

// Počítadlo spuštění dema pod tlačítkem „Spustit demo“ (cíl milion).
function demoCounter() {
  const box = document.getElementById("demo-count");
  const api = CFG.demoCounterApi || "";
  if (!box || !api) return;
  fetch(api, { cache: "no-store" })
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((d) => {
      const n = Number(d.count) || 0;
      const goal = Number(d.goal) || 1000000;
      document.getElementById("demo-bar").style.width = Math.max(0.5, Math.min(100, (n / goal) * 100)) + "%";
      document.getElementById("demo-count-text").textContent = t("demo_count").replace("{n}", n.toLocaleString()).replace("{goal}", goal.toLocaleString());
      box.hidden = false;
    })
    .catch(() => {});   // bez počítadla se nic neukáže
}

export function init() {
  demoCounter();
  const list = document.getElementById("board-list");
  const msg = document.getElementById("board-msg");
  if (!list || !msg) return;
  const api = CFG.leaderboardApi || "";
  if (!api) {
    msg.textContent = t("board_offline");
    return;
  }
  msg.textContent = t("board_loading");
  fetch(api, { cache: "no-store" })
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((data) => {
      const top = Array.isArray(data.top) ? data.top.slice(0, 50) : [];
      list.textContent = "";
      top.forEach((r, i) => list.appendChild(row(i, r)));
      msg.textContent = top.length ? "" : t("board_empty");
    })
    .catch(() => {
      msg.textContent = t("board_offline");
    });
}
