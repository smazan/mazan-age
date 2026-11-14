// Nastavení landing page – vyplň a nahraj znovu. Nic jiného měnit nemusíš.
window.MAZAN_CONFIG = {
  // Formspree (formspree.io): založ formulář na svůj e-mail, sem dej jeho ID, např. "xyzabcd"
  // (z adresy https://formspree.io/f/xyzabcd). Přihlášky se ukládají v seznamu na Formspree
  // a každá ti přijde e-mailem. Prázdné = formulář zatím nic neodešle.
  formspreeId: "",

  // Stripe Payment Links (dashboard.stripe.com → Payment Links): jeden odkaz na každou částku.
  // Prázdný odkaz = tlačítko se ukáže jako „brzy“.
  stripeLinks: {
    1: "",
    2: "",
    3: "",
    5: "",
    10: "",
  },

  // YouTube: kanál a ID videa k přehrání na stránce (z odkazu youtube.com/watch?v=ID nebo youtu.be/ID).
  // Prázdné ID = místo přehrávače se ukáže náhled s tlačítkem na kanál.
  youtubeChannel: "https://www.youtube.com/@mazanage",
  youtubeVideoId: "",

  // Vydání hry – odpočet na stránce.
  releaseDate: "2026-12-31T23:59:59+01:00",
};
