// Google Tag Manager se souhlasem s cookies – jen verze, která má v web/lang/<jazyk>.json klíč "gtm" (zatím CZ).
// GTM se načte AŽ po kliknutí na „Přijmout“ (do té doby se Googlu nic neposílá). Volba je v localStorage,
// v patičce „Nastavení cookies“ lištu znovu otevře; odvolání souhlasu smaže cookies _ga a stránku obnoví.
// Samostatný soubor kvůli CSP (žádné inline skripty); ID kontejneru je v atributu data-gtm.
(function () {
  var id = document.currentScript && document.currentScript.getAttribute("data-gtm");
  var bar = document.getElementById("cookie-bar");
  if (!id || !bar) return;
  var KEY = "mazanage-cookies";
  var loaded = false;

  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) { /* bez úložiště se lišta ukáže znovu */ } }

  function load() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", {
      analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied"
    });
    window.gtag("js", new Date());
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(id);
    document.head.appendChild(s);
  }

  function dropGaCookies() {
    var host = location.hostname;
    var domains = ["", host, "." + host, "." + host.split(".").slice(-2).join(".")];
    document.cookie.split(";").forEach(function (c) {
      var name = c.split("=")[0].trim();
      if (name === "_ga" || name.indexOf("_ga_") === 0 || name === "_gid") {
        domains.forEach(function (d) {
          document.cookie = name + "=; Max-Age=0; path=/" + (d ? "; domain=" + d : "");
        });
      }
    });
  }

  function show() { bar.hidden = false; }
  function hide() { bar.hidden = true; }

  document.getElementById("cookie-yes").addEventListener("click", function () {
    save("yes"); hide(); load();
  });
  document.getElementById("cookie-no").addEventListener("click", function () {
    var wasLoaded = loaded;
    save("no"); hide(); dropGaCookies();
    if (wasLoaded) location.reload();   // běžící GTM nejde vypnout jinak
  });
  var link = document.getElementById("cookie-settings");
  if (link) link.addEventListener("click", function (e) { e.preventDefault(); show(); });

  var choice = read();
  if (choice === "yes") load();
  else if (choice !== "no") show();
})();
