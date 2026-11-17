// Mazan Age – landing page. Vstupní modul: načte části stránky a vykreslí je (texty jsou v js/modules/texts.js dané jazykové verze).
// Nastavení (Formspree, Stripe, YouTube, datum vydání) je v js/config.js, sprity v js/sprites.js.
import { initPage } from "./modules/core.js";
import * as hover from "./modules/sprites-hover.js";
import * as bestiary from "./modules/bestiary.js";
import * as tips from "./modules/tips.js";
import * as countdown from "./modules/countdown.js";
import * as signup from "./modules/signup.js";
import * as videos from "./modules/videos.js";
import * as weapons from "./modules/weapons.js";
import * as walkers from "./modules/walkers.js";
import * as poses from "./modules/poses.js";
import * as ending from "./modules/ending.js";
import * as reveal from "./modules/reveal.js";
import * as board from "./modules/board.js";

[hover, bestiary, tips, countdown, signup, videos, weapons, walkers, poses, ending, reveal, board].forEach((m) => m.init());
initPage();
