(() => {
  "use strict";
  const CFG = window.MAZAN_CONFIG || {};
  const SPR = window.MAZAN_SPRITES || {};
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ------------------------------------------------------------------ texty EN / CZ
  const T = {
    en: {
      nav_video: "Gameplay", score: "SCORE",
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
      nav_video: "Video", score: "SKÓRE",
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

  // ------------------------------------------------------------------ běžící pás
  // Hrdinové běží na místě, země ujíždí; příšery jedou zprava a hrdinové je přeskakují.
  const runway = document.getElementById("runway");
  const RUN_FOES = [["raptor", 0.62], ["boar", 0.85], ["golem", 0.55], ["turtle", 0.85], ["mammoth", 0.55], ["snake", 0.75], ["tomas", 0.6]];
  const heroes = [];
  function addHero(id, xPct) {
    const wrap = document.createElement("div");
    wrap.className = "runner";
    wrap.appendChild(makeSprite(id, 0.72));
    runway.appendChild(wrap);
    heroes.push({ el: wrap, xPct, jump: 0, w: SPR[id].w * 0.72, auto: true, hitCd: 0 });
  }
  addHero("girl_run", 0.14);
  addHero("boy_run", 0.28);
  const foes = [];
  let spawnIn = 0.8;
  let foeIdx = 0;
  let ptero = null;
  function spawnFoe(W) {
    const [id, sc] = RUN_FOES[foeIdx++ % RUN_FOES.length];
    const wrap = document.createElement("div");
    wrap.className = "runner";
    const sp = makeSprite(id, sc);
    sp.classList.add("flip");
    wrap.appendChild(sp);
    runway.appendChild(wrap);
    foes.push({ el: wrap, x: W + 40, w: SPR[id].w * sc, speed: 210 + Math.random() * 60 });
  }
  function spawnPtero(W) {
    const wrap = document.createElement("div");
    wrap.className = "runner";
    const sp = makeSprite("ptero", 0.5);
    sp.classList.add("flip");
    wrap.appendChild(sp);
    runway.appendChild(wrap);
    ptero = { el: wrap, x: W + 60, y: 120 };
  }
  let jumps = 0;
  let playing = false;
  function playerJump() {
    const boy = heroes[1];
    if (!playing) {
      playing = true;
      boy.auto = false;
      foes.forEach((f) => { f.done = true; });   // počítá se až od teď
      document.querySelector(".runway__hint").style.display = "none";
    }
    if (boy.jump <= 0) boy.jump = 0.62;
    jumpsShown = () => `${t("jumped")}: ${jumps}`;
    updateJumps();
  }
  const runBox = document.getElementById("runway-box");
  runBox.addEventListener("pointerdown", playerJump);
  let runVisible = false;
  new IntersectionObserver((en) => { runVisible = en[0].isIntersecting; }, { threshold: 0.5 }).observe(runBox);
  window.addEventListener("keydown", (e) => {
    const tag = document.activeElement ? document.activeElement.tagName : "";
    if ((e.code === "Space" || e.code === "ArrowUp") && runVisible && !["INPUT", "TEXTAREA", "BUTTON", "A", "SELECT"].includes(tag)) {
      e.preventDefault();
      playerJump();
    }
  });
  let last = performance.now();
  let pteroIn = 5;
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const W = runway.clientWidth;
    spawnIn -= dt;
    if (spawnIn <= 0) {
      spawnFoe(W);
      spawnIn = 1.6 + Math.random() * 1.4;
    }
    pteroIn -= dt;
    if (!ptero && pteroIn <= 0) spawnPtero(W);
    for (let i = foes.length - 1; i >= 0; i--) {
      const f = foes[i];
      f.x -= f.speed * dt;
      f.el.style.transform = `translateX(${f.x}px)`;
      if (f.x < -f.w - 40) {
        f.el.remove();
        foes.splice(i, 1);
      }
    }
    heroes.forEach((h) => {
      const hx = W * h.xPct;
      // skok, když se blíží příšera
      const near = foes.some((f) => f.x > hx - 10 && f.x < hx + h.w + 60);
      if (h.auto && near && h.jump <= 0) h.jump = 0.62;
      let y = 0;
      if (h.jump > 0) {
        h.jump -= dt;
        const p = 1 - Math.max(h.jump, 0) / 0.62;
        y = -Math.sin(p * Math.PI) * 120;
      }
      h.el.style.transform = `translate(${hx}px, ${y}px)`;
      if (!h.auto) {   // hráč: náraz a počítání přeskočených
        h.hitCd -= dt;
        foes.forEach((f) => {
          const overlap = f.x < hx + h.w * 0.7 && f.x + f.w * 0.7 > hx + h.w * 0.3;
          if (overlap && y > -45 && h.hitCd <= 0 && !f.hit) {
            f.hit = true;
            h.hitCd = 0.8;
            h.el.classList.remove("hit"); void h.el.offsetWidth; h.el.classList.add("hit");
            toast(t("ouch"));
          }
          if (!f.done && f.x + f.w < hx) {
            f.done = true;
            if (!f.hit) { jumps++; addScore(50); updateJumps(); }
          }
        });
      }
    });
    if (ptero) {
      ptero.x -= 150 * dt;
      ptero.y = 20 + Math.sin(now / 500) * 14;
      ptero.el.style.transform = `translate(${ptero.x}px, ${-120 - ptero.y}px)`;
      if (ptero.x < -150) {
        ptero.el.remove();
        ptero = null;
        pteroIn = 6 + Math.random() * 5;
      }
    }
    requestAnimationFrame(frame);
  }
  if (!reduced) {
    requestAnimationFrame(frame);
  } else {
    heroes.forEach((h) => { h.el.style.transform = `translateX(${runway.clientWidth * h.xPct}px)`; });
  }

  // ------------------------------------------------------------------ průvod v patičce
  const parade = document.getElementById("footer-parade");
  [["boy_run", 0.45], ["girl_run", 0.45], ["boar", 0.55], ["raptor", 0.4], ["turtle", 0.55], ["golem", 0.38]].forEach(([id, sc], i) => {
    const wrap = document.createElement("div");
    wrap.className = "runner";
    wrap.style.bottom = "8px";
    wrap.appendChild(makeSprite(id, sc));
    if (!reduced) wrap.animate([{ transform: "translateX(-200px)" }, { transform: "translateX(calc(100vw + 200px))" }],
      { duration: 16000, delay: -i * 2200, iterations: Infinity });
    else wrap.style.left = 20 + i * 150 + "px";
    parade.appendChild(wrap);
  });

  // ------------------------------------------------------------------ YouTube – videa vedle sebe
  // Náhled z YouTube, přehrávač (youtube-nocookie) se načte až po kliknutí – rychlé a bez cookies předem.
  const yt = CFG.youtubeChannel || "https://www.youtube.com/@mazanage";
  document.getElementById("yt-top").href = yt;
  document.getElementById("yt-channel").href = yt;
  document.getElementById("yt-sub").href = yt + "?sub_confirmation=1";
  // Reels: karty na výšku 9:16 v karuselu přes celou šířku. Videa jsou na šířku – ukazuje se střed obrazu
  // (náhled i přehrávač jsou oříznuté). Přehrávač (youtube-nocookie) se načte až po kliknutí.
  const vids = document.getElementById("videos");
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
      if (dragMoved) return;
      if (playingCard && playingCard !== card) stopReel(playingCard);
      const f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(v.id) + "?autoplay=1&rel=0&playsinline=1";
      f.title = v.title;
      f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      f.allowFullscreen = true;
      const box = document.createElement("div");
      box.className = "reel__screen reel__screen--live";   // video na šířku zvětšené na výšku karty – střed obrazu
      box.appendChild(f);
      card.classList.add("is-playing");
      card._screen = scr;
      scr.replaceWith(box);
      playingCard = card;
      pauseAuto = true;
    });
    vids.appendChild(card);
  });
  function stopReel(card) {
    const f = card.querySelector(".reel__screen--live");
    if (f && card._screen) f.replaceWith(card._screen);
    card.classList.remove("is-playing");
    if (playingCard === card) playingCard = null;
  }
  // šipky, tažení myší, pomalé samo-posouvání (stojí při najetí, tažení a přehrávání)
  const step = () => (vids.querySelector(".reel") || {}).offsetWidth + 18 || 300;
  let holdUntil = 0;   // po šipce chvíli bez samo-posouvání (jinak by přerušilo plynulý posun)
  const jump = (dir) => {
    holdUntil = performance.now() + 4000;
    let to = vids.scrollLeft + dir * step() * 2;
    if (to > vids.scrollWidth - vids.clientWidth + 4) to = 0;
    if (to < -4) to = vids.scrollWidth;
    vids.scrollTo({ left: to, behavior: "smooth" });
  };
  document.getElementById("reels-prev").addEventListener("click", () => jump(-1));
  document.getElementById("reels-next").addEventListener("click", () => jump(1));
  let pauseAuto = false;
  let hoverReels = false;
  let dragX = null;
  let dragStart = 0;
  let dragMoved = false;
  vids.addEventListener("mouseenter", () => { hoverReels = true; });
  vids.addEventListener("mouseleave", () => { hoverReels = false; dragX = null; vids.classList.remove("is-drag"); });
  vids.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;   // dotyk posouvá prohlížeč sám
    dragX = e.clientX;
    dragStart = vids.scrollLeft;
    dragMoved = false;
  });
  window.addEventListener("pointermove", (e) => {
    if (dragX === null) return;
    const dx = e.clientX - dragX;
    if (Math.abs(dx) > 6) { dragMoved = true; vids.classList.add("is-drag"); }
    if (dragMoved) vids.scrollLeft = dragStart - dx;
  });
  window.addEventListener("pointerup", () => {
    if (dragX === null) return;
    dragX = null;
    vids.classList.remove("is-drag");
    setTimeout(() => { dragMoved = false; }, 0);
  });
  vids.addEventListener("touchstart", () => { pauseAuto = true; }, { passive: true });
  let autoAcc = 0;
  let lastReel = performance.now();
  function reelTick(now) {
    const dt = Math.min(0.05, (now - lastReel) / 1000);
    lastReel = now;
    if (!reduced && !pauseAuto && !hoverReels && dragX === null && now > holdUntil) {
      autoAcc += 28 * dt;   // px/s
      if (autoAcc >= 1) {
        const px = Math.floor(autoAcc);
        autoAcc -= px;
        if (vids.scrollLeft + vids.clientWidth >= vids.scrollWidth - 2) vids.scrollLeft = 0;
        else vids.scrollLeft += px;
      }
    }
    requestAnimationFrame(reelTick);
  }
  requestAnimationFrame(reelTick);

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
