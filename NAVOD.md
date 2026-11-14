# Landing page Mazan Age – návod

Stránka je čistě statická (HTML, CSS, JS), běží kdekoli. Grafika se generuje z hry:
`python navrh/priprav_web.py` (sprity do `web/assets/sprites/`, metadata pak zkopírovat do `web/js/sprites.js`).

Náhled na počítači: `python -m http.server 8765 --directory web` a otevřít http://localhost:8765

Všechno nastavení je v **`web/js/config.js`**.

## 1. E-maily (Formspree)
1. Na https://formspree.io se zaregistruj svým e-mailem.
2. **New form** → název „Mazan Age“ → jako cílový e-mail nech svůj.
3. Zkopíruj ID formuláře (z adresy `https://formspree.io/f/XXXXXXX` je to `XXXXXXX`).
4. Vlož do `config.js` → `formspreeId: "XXXXXXX"`.

Každá registrace se uloží v seznamu na Formspree (Submissions, export do CSV) a přijde ti e-mailem.
Zdarma je 50 registrací měsíčně; při větším zájmu stačí placený tarif nebo export do Mailchimpu/Brevo.
V nastavení formuláře zapni **reCAPTCHA / spam filtr**.

## 2. Příspěvky (Stripe Payment Links)
1. https://dashboard.stripe.com → **Payment Links** → **New**.
2. Produkt „Podpora vývoje Mazan Age“, cena **1 €**, jednorázově → vytvořit → zkopírovat odkaz.
3. Totéž pro **2, 3, 5 a 10 €**.
4. Odkazy vlož do `config.js` → `stripeLinks: { 1: "https://buy.stripe.com/…", … }`.

Tlačítka bez odkazu se na stránce ukážou šedá s textem „brzy“.

## 3. Zveřejnění (GitHub Pages)
Web běží na **https://smazan.github.io/mazan-age/** z veřejného repozitáře `smazan/mazan-age`
(repo hry `smazan/mazanage` je soukromé a zůstává). Po každé úpravě `web/` (např. vyplnění `config.js`):

```bash
sh navrh/publikuj_web.sh "popis zmeny"
```

Za 1–2 minuty je změna venku. Vlastní doménu lze nastavit v repozitáři mazan-age → Settings → Pages.
