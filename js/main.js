(() => {
  "use strict";
  const CFG = window.MAZAN_CONFIG || {};
  const SPR = window.MAZAN_SPRITES || {};
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ------------------------------------------------------------------ texty EN / CZ
  const T = {
    en: {
      nav_video: "Gameplay", score: "SCORE", nav_weapons: "Weapons", weapons_title: "Choose your weapon",
      wtype_melee: "Melee", wtype_throw: "Throw", wtype_shoot: "Shoot", wtype_boomerang: "Returns",
      w_power: "Power", w_speed: "Speed", w_range: "Range", w_picked: "{w} – great choice!",
      weapons: {
        "01_dreveny_kyj": ["Wooden Club", "The classic. Simple and reliable."],
        "02_ostnaty_dreveny_kyj": ["Spiked Club", "Double damage, a little slower."],
        "03_kostena_palice": ["Bone Club", "Quick and light – throw it!"],
        "04_kamenna_sekera": ["Stone Axe", "Spins through the air."],
        "05_dvojita_sekera": ["Double Axe", "Cuts through a whole line of enemies."],
        "06_kamenne_kopi": ["Stone Spear", "Longest reach in the valley."],
        "07_ohniva_pochoden": ["Fire Torch", "Sets enemies on fire."],
        "08_bumerang": ["Boomerang", "Flies out and comes back."],
        "09_kamenne_kladivo": ["Stone Hammer", "Heavy throw, huge hit."],
        "10_prak": ["Slingshot", "Shoots stones from afar."],
        "11_kostena_dyka": ["Bone Dagger", "Fastest throws of all."],
        "12_ostnaty_palcat": ["Spiked Mace", "Wide crushing blow."],
      },
      runway_hint: "Tap here or press Space to jump!", jumped: "Jumped over", ouch: "Ouch! Jump earlier!",
      video_title: "See it in action", video_label: "Watch the gameplay on YouTube", subscribe: "Subscribe", channel: "All videos on YouTube", play: "Play video",
      loot_hint: "Psst… there are coins hidden all over this page. Click them!",
      loot_got: "Treasure", loot_all: "You found every treasure! You're a true platformer fan.",
      nav_story: "Story", nav_monsters: "Monsters", nav_signup: "Get notified", nav_support: "Support",
      hero_tag: "A prehistoric platformer, hand-made by a lifelong platformer fan.",
      release: "Coming by the end of 2026", days: "days", hours: "hours", minutes: "min", seconds: "sec", out_now: "Out now!",
      cta_notify: "Notify me", cta_support: "Support the game",
      story_title: "How it all started",
      ch1_t: "A kid with a gamepad",
      ch1_p: "I grew up on platformers. Jumping over pits, collecting coins, hunting for secret rooms and beating “just one more level” long past bedtime.",
      ch2_t: "The love never left",
      ch2_p: "Years later I still had that itch. So instead of waiting for the platformer I wanted to play, I started building it myself – evening after evening, level after level.",
      ch3_t: "Welcome to Mazan Age",
      ch3_p: "A prehistoric valley of waterfalls, rope bridges and hidden caves – full of grumpy dinosaurs, angry boars and one very stubborn stone golem.",
      ch4_t: "And now I need you",
      ch4_p: "The game is coming by the end of 2026. Leave your email to play it first – and if you like what you see, a small one-time tip helps me finish it.",
      heroes_title: "Pick your hero", boy: "Boy", boy_p: "Wild hair, big club, zero fear.",
      girl: "Girl", girl_p: "Quick, brave and always one jump ahead.",
      hover_hint: "Hover over a hero (or tap) to see them move.",
      monsters_title: "Who's waiting for you",
      features_title: "What's inside",
      f1_t: "12 stone-age weapons", f1_p: "Clubs, axes, spears, a boomerang, a slingshot and even a flaming torch.",
      f2_t: "Secret caves", f2_p: "Ten hidden caves packed with coins, diamonds and food. Step in and press up.",
      f3_t: "Coins, diamonds & secrets", f3_p: "Smash suspicious rocks, climb to the highest floors and find every treasure.",
      signup_title: "Be the first to play",
      signup_p: "Drop your email and you'll get a message the moment Mazan Age is out. No spam – only game news.",
      email_label: "Your email", signup_btn: "Notify me",
      consent: "I agree to be emailed about Mazan Age. I can ask to be removed at any time.",
      msg_ok: "You're on the list! See you in the Stone Age.", msg_err: "Something went wrong. Please try again in a moment.",
      msg_email: "Please enter a valid email.", msg_consent: "Please tick the box to agree.",
      msg_soon: "Sign-up opens very soon – please come back in a few days.",
      support_title: "Support the development",
      support_p: "Mazan Age is made by one person in their free time. A one-time tip of any size helps pay for art, music and the time to finish the game. Thank you!",
      support_note: "Secure one-time payment via Stripe. No account needed.",
      tip_1: "a mammoth snack", tip_2: "a bag of coins", tip_3: "a new weapon", tip_5: "a secret cave", tip_10: "a whole level",
      tip_soon: "Payments open very soon – thank you for your patience!",
      footer: "Made with love for platformers.",
      beasts: {
        raptor: ["Raptor", "Fast, hungry and very curious."],
        golem: ["Stone Golem", "Slow. Heavy. Holds a grudge."],
        ptero: ["Pterodactyl", "Drops rocks from above. Look up!"],
        boar: ["Wild Boar", "Never alone – boars come in threes."],
        mammoth: ["Mammoth", "Big, fluffy and not friendly at all."],
        turtle: ["Spiky Turtle", "Tough shell – it takes two hits."],
        snake: ["Snake", "Hides in the grass and waits."],
        tomas: ["Rival Caveman", "Thinks his club is bigger than yours."],
        piranha: ["Piranha", "Whatever you do, don't fall in."],
        spider: ["Spider", "Drops from the trees when you least expect it."],
      },
    },
    cz: {
      nav_video: "Video", score: "SKÓRE", nav_weapons: "Zbraně", weapons_title: "Vyber si zbraň",
      wtype_melee: "Zblízka", wtype_throw: "Vrhací", wtype_shoot: "Střelná", wtype_boomerang: "Vrací se",
      w_power: "Síla", w_speed: "Rychlost", w_range: "Dosah", w_picked: "{w} – skvělá volba!",
      weapons: {
        "01_dreveny_kyj": ["Dřevěný kyj", "Klasika. Jednoduchý a spolehlivý."],
        "02_ostnaty_dreveny_kyj": ["Ostnatý kyj", "Dvojnásobná rána, o kousek pomalejší."],
        "03_kostena_palice": ["Kostěná palice", "Rychlá a lehká – hoď ji!"],
        "04_kamenna_sekera": ["Kamenná sekera", "Točí se vzduchem."],
        "05_dvojita_sekera": ["Dvojitá sekera", "Prosekne celou řadu nepřátel."],
        "06_kamenne_kopi": ["Kamenné kopí", "Nejdelší dosah v údolí."],
        "07_ohniva_pochoden": ["Ohnivá pochodeň", "Zapálí nepřátele."],
        "08_bumerang": ["Bumerang", "Odletí a vrátí se."],
        "09_kamenne_kladivo": ["Kamenné kladivo", "Těžký hod, obrovská rána."],
        "10_prak": ["Prak", "Střílí kameny zdálky."],
        "11_kostena_dyka": ["Kostěná dýka", "Nejrychlejší hody ze všech."],
        "12_ostnaty_palcat": ["Ostnatý palcát", "Široká drtivá rána."],
      },
      runway_hint: "Ťukni sem nebo zmáčkni mezerník a skákej!", jumped: "Přeskočeno", ouch: "Au! Skoč dřív!",
      video_title: "Podívej se, jak to hraje", video_label: "Gameplay na YouTube", subscribe: "Odebírat", channel: "Všechna videa na YouTube", play: "Přehrát video",
      loot_hint: "Pst… po celé stránce jsou schované mince. Klikej na ně!",
      loot_got: "Poklad", loot_all: "Našel jsi všechny poklady! Jsi pravý fanoušek plošinovek.",
      nav_story: "Příběh", nav_monsters: "Příšery", nav_signup: "Dej mi vědět", nav_support: "Podpořit",
      hero_tag: "Pravěká plošinovka, kterou ručně vyrobil celoživotní fanoušek plošinovek.",
      release: "Vychází do konce roku 2026", days: "dní", hours: "hodin", minutes: "min", seconds: "s", out_now: "Právě vyšlo!",
      cta_notify: "Dej mi vědět", cta_support: "Podpořit hru",
      story_title: "Jak to celé začalo",
      ch1_t: "Kluk s ovladačem",
      ch1_p: "Vyrostl jsem na plošinovkách. Přeskakování propastí, sbírání mincí, hledání tajných místností a „ještě jeden level“ dlouho po večerce.",
      ch2_t: "Láska nevyprchala",
      ch2_p: "O roky později mě to pořád táhlo. Tak jsem místo čekání na plošinovku, kterou bych si chtěl zahrát, začal stavět vlastní – večer po večeru, level po levelu.",
      ch3_t: "Vítej v Mazan Age",
      ch3_p: "Pravěké údolí plné vodopádů, lanových mostů a skrytých jeskyní – a v něm nevrlí dinosauři, naštvaní divočáci a jeden hodně tvrdohlavý kamenný golem.",
      ch4_t: "A teď potřebuju tebe",
      ch4_p: "Hra vyjde do konce roku 2026. Nech mi e-mail a zahraješ si ji mezi prvními – a jestli se ti líbí, malý jednorázový příspěvek mi pomůže ji dokončit.",
      heroes_title: "Vyber si hrdinu", boy: "Kluk", boy_p: "Divoké vlasy, velký kyj, žádný strach.",
      girl: "Holka", girl_p: "Rychlá, odvážná a vždycky o skok napřed.",
      hover_hint: "Najeď na hrdinu (nebo ťukni) a uvidíš, jak se hýbe.",
      monsters_title: "Kdo na tebe čeká",
      features_title: "Co ve hře najdeš",
      f1_t: "12 pravěkých zbraní", f1_p: "Kyje, sekery, oštěpy, bumerang, prak a dokonce hořící pochodeň.",
      f2_t: "Tajné jeskyně", f2_p: "Deset skrytých jeskyní plných mincí, diamantů a jídla. Stoupni si k ústí a zmáčkni šipku nahoru.",
      f3_t: "Mince, diamanty a tajemství", f3_p: "Rozbíjej podezřelé kameny, vyšplhej do nejvyšších pater a najdi všechny poklady.",
      signup_title: "Zahraj si mezi prvními",
      signup_p: "Nech mi e-mail a ve chvíli, kdy Mazan Age vyjde, ti přijde zpráva. Žádný spam – jen novinky o hře.",
      email_label: "Tvůj e-mail", signup_btn: "Dej mi vědět",
      consent: "Souhlasím se zasíláním e-mailů o hře Mazan Age. O vymazání můžu kdykoli požádat.",
      msg_ok: "Jsi na seznamu! Uvidíme se v době kamenné.", msg_err: "Něco se pokazilo. Zkus to prosím za chvíli znovu.",
      msg_email: "Zadej prosím platný e-mail.", msg_consent: "Zaškrtni prosím souhlas.",
      msg_soon: "Přihlašování se otevře už brzy – zkus to prosím za pár dní.",
      support_title: "Podpoř vývoj",
      support_p: "Mazan Age dělá jeden člověk ve volném čase. Jednorázový příspěvek jakékoli výše pomůže zaplatit grafiku, hudbu a čas na dokončení hry. Děkuju!",
      support_note: "Bezpečná jednorázová platba přes Stripe. Bez registrace.",
      tip_1: "svačina pro mamuta", tip_2: "měšec mincí", tip_3: "nová zbraň", tip_5: "tajná jeskyně", tip_10: "celý level",
      tip_soon: "Platby se otevřou už brzy – díky za trpělivost!",
      footer: "Vyrobeno s láskou k plošinovkám.",
      beasts: {
        raptor: ["Raptor", "Rychlý, hladový a hodně zvědavý."],
        golem: ["Kamenný golem", "Pomalý. Těžký. Nezapomíná."],
        ptero: ["Ptakoještěr", "Shazuje kameny. Dívej se nahoru!"],
        boar: ["Divočák", "Nikdy sám – divočáci chodí po třech."],
        mammoth: ["Mamut", "Velký, chlupatý a vůbec ne přátelský."],
        turtle: ["Ostnatá želva", "Tvrdý krunýř – potřebuje dvě rány."],
        snake: ["Had", "Číhá v trávě a čeká."],
        tomas: ["Soupeř z kmene", "Myslí si, že má větší kyj než ty."],
        piranha: ["Piraňa", "Hlavně nespadni do vody."],
        spider: ["Pavouk", "Spadne ze stromu, když to nejmíň čekáš."],
      },
    },
  };

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* bez úložiště */ } },
  };
  let lang = store.get("mazan-lang") || "en";   // primární jazyk angličtina, CZ jen přepínačem
  const t = (key) => (T[lang] && T[lang][key]) || T.en[key] || key;
  let score = 0;
  let jumpsShown = null;
  function updateJumps() {
    const el = document.getElementById("jumps");
    if (el && jumpsShown) el.textContent = jumpsShown();
  }

  function applyLang() {
    document.documentElement.lang = lang === "cz" ? "cs" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.getElementById("lang").textContent = lang === "cz" ? "EN" : "CZ";
    document.getElementById("form-lang").value = lang;
    buildBestiary();
    buildTips();
    if (typeof buildWeapons === "function") buildWeapons();
    splitTitles();
    tick();
    updateJumps();
  }

  // Nadpisy: každé písmeno zvlášť, při zobrazení naskáčou jedno po druhém.
  function splitTitles() {
    document.querySelectorAll(".title").forEach((h) => {
      const text = h.textContent;
      h.setAttribute("aria-label", text);
      h.textContent = "";
      [...text].forEach((c, i) => {
        const span = document.createElement("span");
        span.setAttribute("aria-hidden", "true");
        if (c === " ") { span.className = "sp"; } else { span.className = "ch"; span.textContent = c; }
        span.style.setProperty("--i", i);
        h.appendChild(span);
      });
      if (h.classList.contains("is-in")) { h.classList.remove("is-in"); void h.offsetWidth; h.classList.add("is-in"); }
    });
  }

  // ------------------------------------------------------------------ toast
  let toastT = 0;
  function toast(text) {
    const el = document.getElementById("toast");
    el.textContent = text;
    el.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => el.classList.remove("show"), 2600);
  }
  document.getElementById("lang").addEventListener("click", () => {
    lang = lang === "cz" ? "en" : "cz";
    store.set("mazan-lang", lang);
    applyLang();
  });

  // ------------------------------------------------------------------ sprity
  function makeSprite(id, scale, el) {
    const s = SPR[id];
    el = el || document.createElement("div");
    if (!s) return el;
    el.classList.add("sprite");
    el.style.setProperty("--img", `url(${new URL("assets/sprites/" + id + ".webp", document.baseURI).href})`);   // absolutně – relativní url() v proměnné se bere vůči css/
    el.style.setProperty("--w", s.w);
    el.style.setProperty("--h", s.h);
    el.style.setProperty("--n", s.n);
    el.style.setProperty("--fps", s.fps);
    el.style.setProperty("--s", scale);
    el.dataset.sprite = id;
    return el;
  }
  document.querySelectorAll(".sprite[data-sprite]").forEach((el) => {
    const base = el.dataset.sprite;
    makeSprite(base, parseFloat(el.dataset.scale || getComputedStyle(el).getPropertyValue("--s")) || 1, el);
    const alt = el.dataset.hover;
    if (alt) {
      const holder = el.closest(".pedestal") || el;
      const scale = parseFloat(getComputedStyle(el).getPropertyValue("--s")) || 1;
      const on = () => makeSprite(alt, scale, el);
      const off = () => makeSprite(base, scale, el);
      holder.addEventListener("mouseenter", on);
      holder.addEventListener("mouseleave", off);
      holder.addEventListener("click", () => (el.dataset.sprite === alt ? off() : on()));
    }
  });

  // ------------------------------------------------------------------ bestiář
  const BEASTS = [["raptor", 0.75], ["golem", 0.72], ["ptero", 0.66], ["boar", 1.1], ["mammoth", 0.66], ["turtle", 1.05], ["snake", 0.9], ["tomas", 0.8], ["piranha", 1.1], ["spider", 1.2]];
  function buildBestiary() {
    const grid = document.getElementById("bestiary");
    grid.textContent = "";
    BEASTS.forEach(([id, sc]) => {
      const [name, line] = t("beasts")[id] || T.en.beasts[id];
      const card = document.createElement("div");
      card.className = "beast reveal is-in";
      const stage = document.createElement("div");
      stage.className = "beast__stage";
      stage.appendChild(makeSprite(id, sc));
      const b = document.createElement("b");
      b.textContent = name;
      const span = document.createElement("span");
      span.textContent = line;
      card.append(stage, b, span);
      grid.appendChild(card);
    });
  }

  // ------------------------------------------------------------------ podpora (Stripe)
  const AMOUNTS = [1, 2, 3, 5, 10];
  function buildTips() {
    const box = document.getElementById("tips");
    box.textContent = "";
    AMOUNTS.forEach((a) => {
      const link = (CFG.stripeLinks || {})[a] || "";
      const btn = document.createElement("a");
      btn.className = "stone-btn tip" + (a >= 5 ? " stone-btn--gold" : "") + (a === 10 ? " tip--big" : "");
      btn.textContent = a + " €";
      const small = document.createElement("small");
      small.textContent = t("tip_" + a);
      btn.appendChild(small);
      if (link) {
        btn.href = link;
        btn.target = "_blank";
        btn.rel = "noopener";
      } else {
        btn.href = "#support";
        btn.classList.add("is-off");
        btn.setAttribute("aria-disabled", "true");
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(".tips__note").textContent = t("tip_soon");
        });
      }
      box.appendChild(btn);
    });
  }

  // ------------------------------------------------------------------ odpočet
  const release = new Date(CFG.releaseDate || "2026-12-31T23:59:59+01:00").getTime();
  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    let ms = release - Date.now();
    if (ms <= 0) {
      document.querySelector(".countdown__label").textContent = t("out_now");
      ms = 0;
    }
    const s = Math.floor(ms / 1000);
    document.getElementById("cd-d").textContent = pad(Math.floor(s / 86400));
    document.getElementById("cd-h").textContent = pad(Math.floor(s / 3600) % 24);
    document.getElementById("cd-m").textContent = pad(Math.floor(s / 60) % 60);
    document.getElementById("cd-s").textContent = pad(s % 60);
  }
  setInterval(tick, 1000);

  // ------------------------------------------------------------------ e-mail (Formspree)
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

  // ------------------------------------------------------------------ karusel (videa, zbraně)
  // Šipky, tažení myší, na dotyku prstem; pomalé samo-posouvání – stojí při najetí myší, tažení,
  // 4 s po šipce a když ctl.pause = true (např. přehrává se video).
  function carousel(track, prevBtn, nextBtn, speed) {
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

  // ------------------------------------------------------------------ YouTube – reels
  // Karty na výšku 9:16; videa jsou na šířku – ukazuje se střed obrazu (náhled i přehrávač).
  // Přehrávač (youtube-nocookie) se načte až po kliknutí – rychlé a bez cookies předem.
  const yt = CFG.youtubeChannel || "https://www.youtube.com/@mazanage";
  document.getElementById("yt-top").href = yt;
  document.getElementById("yt-channel").href = yt;
  document.getElementById("yt-sub").href = yt + "?sub_confirmation=1";
  const vids = document.getElementById("videos");
  const reelCtl = carousel(vids, document.getElementById("reels-prev"), document.getElementById("reels-next"), 28);
  let playingCard = null;
  (CFG.youtubeVideos || []).forEach((v) => {
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

  // ------------------------------------------------------------------ zbraně – karusel „Choose your weapon“
  // Vlastnosti podle hry (godot/data/boy_animations.json → weapon_stats).
  const WEAPONS = [
    ["01_dreveny_kyj", "melee", 1, 1.0, 1.0],
    ["02_ostnaty_dreveny_kyj", "melee", 2, 0.9, 1.0],
    ["03_kostena_palice", "throw", 1, 1.2, 0],
    ["04_kamenna_sekera", "throw", 2, 1.0, 0],
    ["05_dvojita_sekera", "throw", 2, 0.9, 0],
    ["06_kamenne_kopi", "melee", 1, 1.1, 1.8],
    ["07_ohniva_pochoden", "melee", 1, 1.0, 1.0],
    ["08_bumerang", "boomerang", 1, 1.0, 0],
    ["09_kamenne_kladivo", "throw", 3, 0.8, 0],
    ["10_prak", "shoot", 1, 1.25, 0],
    ["11_kostena_dyka", "throw", 1, 1.6, 0],
    ["12_ostnaty_palcat", "melee", 3, 0.8, 1.2],
  ];
  const wTrack = document.getElementById("weapons");
  carousel(wTrack, document.getElementById("weapons-prev"), document.getElementById("weapons-next"), 34);
  let picked = "";
  function buildWeapons() {
    wTrack.textContent = "";
    WEAPONS.forEach(([id, type, dmg, spd, reach]) => {
      const [name, line] = t("weapons")[id] || T.en.weapons[id];
      const range = type === "melee" ? Math.min(0.2 + reach * 0.25, 0.7) : type === "shoot" ? 1 : type === "boomerang" ? 0.85 : 0.8;
      const card = document.createElement("button");
      card.type = "button";
      card.className = "wcard" + (picked === id ? " is-picked" : "");
      const slot = document.createElement("div");
      slot.className = "wcard__slot";
      const img = document.createElement("img");
      img.src = "assets/weapons/" + id + ".webp";
      img.alt = "";
      img.loading = "lazy";
      img.draggable = false;
      slot.appendChild(img);
      const badge = document.createElement("span");
      badge.className = "wcard__badge wcard__badge--" + type;
      badge.textContent = t("wtype_" + type);
      const b = document.createElement("b");
      b.textContent = name;
      const p = document.createElement("span");
      p.className = "wcard__line";
      p.textContent = line;
      const stats = document.createElement("div");
      stats.className = "wcard__stats";
      [["w_power", dmg / 3], ["w_speed", spd / 1.6], ["w_range", range]].forEach(([k, v]) => {
        const row = document.createElement("div");
        const lab = document.createElement("small");
        lab.textContent = t(k);
        const bar = document.createElement("i");
        bar.style.setProperty("--v", Math.max(0.12, Math.min(1, v)).toFixed(2));
        row.append(lab, bar);
        stats.appendChild(row);
      });
      card.append(badge, slot, b, p, stats);
      card.addEventListener("click", () => {
        picked = id;
        wTrack.querySelectorAll(".wcard").forEach((c) => c.classList.remove("is-picked"));
        card.classList.add("is-picked");
        toast(t("w_picked").replace("{w}", name));
      });
      wTrack.appendChild(card);
    });
  }

  // ------------------------------------------------------------------ postavička na konci sekce
  // Když sekce dojede do obrazu, dole přes ni jednou přejde jedna postavička: střídavě zleva doprava
  // a zprava doleva, v každé sekci jiný druh.
  const WALKERS = [["boy_run", 0.5, 7], ["raptor", 0.5, 6], ["girl_run", 0.5, 7], ["boar", 0.7, 5],
    ["golem", 0.45, 9], ["turtle", 0.7, 9], ["mammoth", 0.5, 10], ["tomas", 0.5, 8], ["snake", 0.6, 10]];
  if (!reduced) {
    const walkIO = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      walkIO.unobserve(e.target);
      const i = Number(e.target.dataset.walk);
      const [id, sc, secs] = WALKERS[i % WALKERS.length];
      const ltr = i % 2 === 0;
      const wrap = document.createElement("div");
      wrap.className = "walker";
      const sp = makeSprite(id, sc);
      if (!ltr) sp.classList.add("flip");
      wrap.appendChild(sp);
      e.target.appendChild(wrap);
      const w = SPR[id].w * sc;
      const W = e.target.clientWidth;
      const from = ltr ? -w - 20 : W + 20;
      const to = ltr ? W + 20 : -w - 20;
      wrap.animate([{ transform: `translateX(${from}px)` }, { transform: `translateX(${to}px)` }],
        { duration: secs * 1000, easing: "linear" }).onfinish = () => wrap.remove();
    }), { threshold: 0.6 });
    document.querySelectorAll("section:not(.hero), .footer").forEach((sec, i) => {
      sec.dataset.walk = i;
      walkIO.observe(sec);
    });
  }

  // ------------------------------------------------------------------ poklady schované po stránce
  const LOOT = [
    ["story", 3, 12, "coin"], ["story", 95, 8, "diamond"], ["heroes", 8, 40, "coin"], ["heroes", 90, 30, "coin"],
    ["monsters", 4, 6, "diamond"], ["monsters", 96, 92, "coin"], ["features", 50, 6, "coin"], ["features", 3, 90, "coin"],
    ["signup", 92, 20, "diamond"], ["support", 6, 70, "coin"], ["gameplay", 94, 10, "coin"], ["footer", 50, 70, "diamond"],
  ];
  let found = 0;
  const scoreEl = document.getElementById("score");
  const hud = document.getElementById("hud");
  function addScore(n) {
    score += n;
    scoreEl.textContent = String(score).padStart(6, "0");
    hud.classList.remove("bump"); void hud.offsetWidth; hud.classList.add("bump");
  }
  LOOT.forEach(([sel, x, y, kind]) => {
    const host = document.querySelector("." + sel);
    if (!host) return;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "loot";
    b.setAttribute("aria-label", kind);
    b.style.left = `calc(${x}% - ${x * 0.44}px)`;   // i u pravého okraje celá uvnitř (šířka 44 px)
    b.style.top = y + "%";
    b.style.animationDelay = (Math.random() * -2) + "s";
    const img = document.createElement("img");
    img.src = kind === "diamond" ? "assets/diamond.webp" : "assets/coin_gold.webp";
    img.alt = "";
    b.appendChild(img);
    b.addEventListener("click", () => {
      const pts = kind === "diamond" ? 500 : 100;
      addScore(pts);
      found++;
      const pop = document.createElement("span");
      pop.className = "pop";
      pop.textContent = "+" + pts;
      pop.style.left = b.style.left;
      pop.style.top = b.style.top;
      host.appendChild(pop);
      setTimeout(() => pop.remove(), 900);
      b.classList.add("got");
      setTimeout(() => b.remove(), 450);
      toast(found === LOOT.length ? t("loot_all") : `${t("loot_got")} ${found}/${LOOT.length}`);
    });
    host.appendChild(b);
  });
  hud.addEventListener("click", () => toast(t("loot_hint")));
  setTimeout(() => { if (found === 0) toast(t("loot_hint")); }, 9000);

  // ------------------------------------------------------------------ odhalování při rolování, lišta
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
  }), { threshold: 0.15 });
  document.querySelectorAll(".reveal, .title").forEach((el) => io.observe(el));
  const bar = document.querySelector(".topbar");
  const onScroll = () => bar.classList.toggle("is-solid", window.scrollY > 80);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  applyLang();
})();
