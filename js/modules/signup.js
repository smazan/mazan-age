// Mazan Age – landing page. Modul je načtený z js/main.js.
// Přihlášení e-mailu přes Formspree (ID v js/config.js) – ukládá seznam a posílá upozornění.
import { CFG, t } from "./core.js";

export function init() {
  const form = document.getElementById("signup-form");
  const msg = document.getElementById("form-msg");
  const say = (text, cls) => { msg.textContent = text; msg.className = "form-msg " + (cls || ""); };
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return say(t("msg_email"), "err");
    if (!document.getElementById("consent").checked) return say(t("msg_consent"), "err");
    if (!CFG.formspreeId) return say(t("msg_soon"), "err");
    const btn = form.querySelector("button");
    btn.disabled = true;
    try {
      const res = await fetch("https://formspree.io/f/" + encodeURIComponent(CFG.formspreeId), {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      say(t("msg_ok"), "ok");
    } catch (err) {
      say(t("msg_err"), "err");
    } finally {
      btn.disabled = false;
    }
  });
}
