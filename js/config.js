// Nastavení landing page – vyplň a nahraj znovu. Nic jiného měnit nemusíš.
window.MAZAN_CONFIG = {
  // Formspree (formspree.io): založ formulář na svůj e-mail, sem dej jeho ID, např. "xyzabcd"
  // (z adresy https://formspree.io/f/xyzabcd). Přihlášky se ukládají v seznamu na Formspree
  // a každá ti přijde e-mailem. Prázdné = formulář zatím nic neodešle.
  formspreeId: "",

  // Ko-fi (ko-fi.com): veřejná stránka s dary, např. "https://ko-fi.com/mazanage".
  // Vyplněné = všechna tlačítka 1–10 € vedou sem (částku si dárce potvrdí na Ko-fi, platba kartou nebo PayPal).
  kofiUrl: "https://ko-fi.com/mazanage",

  // Stripe Payment Links (dashboard.stripe.com → Payment Links): jeden odkaz na každou částku – použije se, jen když kofiUrl je prázdné.
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
  // Videa na stránce vedle sebe (první je zvýrazněné). id = z odkazu youtube.com/watch?v=ID
  youtubeVideos: [
    { id: "whwG_QtT3Us", title: "Mazan Age – Gameplay" },
    { id: "bqLalaf1pqg", title: "The Slingshot, My Favorite Weapon" },
    { id: "VP8e5ZHvwtY", title: "Stone Hammer in Action" },
    { id: "24kVKnj2VQ4", title: "Throwing Knife in Action" },
    { id: "c7xduXPx8fo", title: "Spiked Mace in Action" },
    { id: "zvij9iD7czI", title: "Slingshot in Action" },
    { id: "zSqDDBCIBRw", title: "Stone Axe in Action" },
    { id: "a1cL5bdpW78", title: "Bone in Action" },
    { id: "d8cW6qL9z1c", title: "Spiked Club in Action" },
  ],

  // Žebříček hráčů (PHP skript na hostingu – nahraj složku web/api/ na mazanage.cz/api/).
  leaderboardApi: "https://mazanage.cz/api/zebricek.php",
  // Počítadlo spuštění dema (cíl 1 000 000) – stejný hosting, demo samo zapíše spuštění.
  demoCounterApi: "https://mazanage.cz/api/pocitadlo.php",

  // Vydání hry – odpočet na stránce.
  releaseDate: "2026-12-31T23:59:59+01:00",
};
