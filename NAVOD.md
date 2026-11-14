# Landing page Mazan Age – návod

Web: **https://smazan.github.io/mazan-age/** (veřejné repo `smazan/mazan-age`, GitHub Pages).
Primární jazyk angličtina, čeština přepínačem CZ/EN.

## Struktura
```
web/
  index.html            obsah stránky (texty mají data-i18n = klíč v js/modules/texts.js)
  robots.txt, sitemap.xml, llms.txt   SEO a GEO (pro vyhledávače a AI asistenty)
  NAVOD.md              tento návod
  scss/                 ZDROJ stylů – upravuj tady
    main.scss           pořadí partials
    _variables.scss     barvy, fonty, pozadí, body zlomu ($bp-mobile, $bp-tablet)
    _base, _buttons, _topbar, _hud, _hero, _titles, _sections, _carousel, _weapons,
    _panels, _loot, _walkers, _ending, _sprite, _animations, _responsive
  css/style.css         ZKOMPILOVANÉ styly (needitovat ručně)
  js/
    config.js           NASTAVENÍ: Formspree, Stripe, YouTube videa, datum vydání
    sprites.js          rozměry animačních pásů (z navrh/priprav_web.py)
    main.js             vstupní modul – načte moduly níže
    modules/
      core.js           jazyk, překlad t(), toast, sprity
      texts.js          všechny texty EN / CZ
      countdown, signup, tips, videos, weapons, bestiary, carousel,
      loot, walkers, ending, reveal, sprites-hover
  assets/               obrázky (webp/jpg), sprites/, weapons/
```

## Úpravy
- **Styly:** uprav `web/scss/...`, pak zkompiluj: `sh navrh/web_css.sh` (Node; sass stáhne npx).
- **Texty:** `web/js/modules/texts.js` (EN i CZ).
- **Videa:** `web/js/config.js` → `youtubeVideos` (id z odkazu youtube.com/watch?v=ID).
- **Náhled:** `python -m http.server 8765 --directory web` → http://localhost:8765 (moduly nejdou z file://).
- **Zveřejnění:** `sh navrh/publikuj_web.sh "popis změny"` → za 1–2 min na webu.

## Zabezpečení
- Content-Security-Policy v `<head>` (GitHub Pages neumí vlastní hlavičky): skripty jen z webu, styly a fonty Google,
  obrázky z webu a YouTube, přehrávač jen youtube-nocookie, odeslání formuláře jen na Formspree.
- Žádné inline skripty ani styly, odkazy ven s `rel="noopener"`, referrer `strict-origin-when-cross-origin`.
- Formulář: kontrola e-mailu, souhlas, skryté pole proti robotům (`_gotcha`). Na Formspree zapni i reCAPTCHA.
- V repozitáři nejsou žádná tajemství – ID Formspree a odkazy Stripe jsou veřejné z principu.
- Při přidání nové služby (např. jiný přehrávač) je potřeba ji doplnit do CSP, jinak ji prohlížeč zablokuje.

## SEO a GEO
- Title, description, canonical, Open Graph a Twitter karta (`assets/og-image.jpg` 1200×630).
- Strukturovaná data JSON-LD: VideoGame (s trailerem), FAQPage, WebSite.
- `robots.txt` + `sitemap.xml`; `llms.txt` = shrnutí faktů o hře pro AI vyhledávače.
- Po zveřejnění: přidej web do Google Search Console (ověření přes HTML soubor nebo meta tag) a odešli sitemap.

## E-maily (Formspree)
1. https://formspree.io → zaregistruj se svým e-mailem → **New form** „Mazan Age“.
2. Zkopíruj ID formuláře (z `https://formspree.io/f/XXXXXXX` je to `XXXXXXX`) → `config.js` → `formspreeId`.
3. V nastavení formuláře zapni spam filtr / reCAPTCHA. Registrace uvidíš v Submissions (export CSV) a přijdou e-mailem.
   Zdarma 50 registrací měsíčně.

## Dary 1–10 € (Stripe Payment Links)
1. **Účet:** https://dashboard.stripe.com/register – e-mail, heslo, země Česko. Pro výběr peněz Stripe chce
   doplnit údaje o podnikání: jako fyzická osoba „Individual / sole proprietor“ (živnost – IČO), web =
   adresa landing page, popis „digital goods / donations for game development“, bankovní účet pro výplaty.
   Bez živnosti se v ČR dary přijímat dají, ale Stripe účet typu „Individual“ obvykle vyžaduje IČO – ověř si to
   u svého účetního (daň z příjmu z darů/příjmů).
2. **Produkt:** Payment Links → **+ New** → „Product“ → název „Support Mazan Age development“, cena **1 EUR**,
   jednorázově (One time). V nastavení odkazu: po zaplacení „Show confirmation page“ nebo přesměrování zpět na
   web. Zkopíruj odkaz `https://buy.stripe.com/...`.
3. Totéž pro **2, 3, 5 a 10 EUR** (nebo jeden odkaz s „Let customers choose what to pay“ a minimální částkou).
4. Odkazy vlož do `web/js/config.js` → `stripeLinks: { 1: "...", 2: "...", 3: "...", 5: "...", 10: "..." }`
   a zveřejni (`sh navrh/publikuj_web.sh "Stripe odkazy"`). Šedá tlačítka se změní na aktivní.
5. Nejdřív vyzkoušej v **testovacím režimu** Stripe (Test mode, testovací karta 4242 4242 4242 4242),
   pak přepni na Live a vytvoř ostré odkazy.

Jednodušší alternativa bez Stripe účtu s ověřováním: **Ko-fi** (ko-fi.com) nebo **Buy Me a Coffee** – stačí účet
a PayPal/Stripe napojení; na web se pak dá jedno tlačítko s odkazem místo pěti.
