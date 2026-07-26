/* ==========================================================================
   APP — state, routing, rendering, flashcards, part quizzes, final exams,
   persistence. Vanilla JS, no build step, no framework.
   ========================================================================== */

const STORAGE_KEY = "envphys_progress_v2";

/* ---------- Course catalog ----------
   Only one course is live right now (Environmental Physiology, wired up
   to the STATIONS data from data.js). More courses get added here later —
   each just needs its own id/stations array; the picker and progress
   system already key everything off course id, so nothing else about
   this file has to change to add course #2. */

const COURSES = [
  {
    id: "envphys",
    code: "D/PIO 313",
    title: "Environmental Physiology",
    tagline: "Twelve stations on how the environment shapes the body, and how the body shapes it back.",
    icon: "topic.foundations",
    available: true,
    stations: STATIONS,
  },
  {
    id: "sportnutrition",
    code: "TBD",
    title: "Sport Nutrition",
    tagline: "Twelve stations on fueling, supplementing, and recovering for athletic performance.",
    icon: "course.dumbbell",
    available: true,
    stations: SN_STATIONS,
  },
  {
    id: "coming-soon",
    code: null,
    title: "More courses",
    tagline: "New courses land here as they're built.",
    icon: null,
    available: false,
    stations: [],
  },
];

function resolveIcon(dottedPath){
  const [ns, key] = dottedPath.split(".");
  return ICONS[ns][key];
}
function courseIdForStation(stationId){
  const c = COURSES.find(c => c.stations.some(s => s.id === stationId));
  return c ? c.id : COURSES[0].id;
}

function getCourse(id){ return COURSES.find(c => c.id === id); }

/* ---------- State ---------- */

function defaultState(){
  return {
    xp: 0,
    completed: {},      // stationId -> { passed, score, total } — FINAL EXAM result, gates next station
    partsCleared: {},   // stationId -> { partId: true, ... }
  };
}

let state = loadState();

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    const merged = Object.assign(defaultState(), parsed);
    merged.completed = parsed.completed || {};
    merged.partsCleared = parsed.partsCleared || {};
    return merged;
  }catch(e){
    return defaultState();
  }
}

function saveState(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch(e){ /* storage unavailable — app still works, just won't persist */ }
}

function xpLevel(xp){ return Math.floor(xp / 100) + 1; }
function xpIntoLevel(xp){ return xp % 100; }

function isStationUnlocked(stations, index){
  if(index === 0) return true;
  const prev = stations[index - 1];
  return !!(state.completed[prev.id] && state.completed[prev.id].passed);
}
function isStationDone(id){
  return !!(state.completed[id] && state.completed[id].passed);
}

function isPartCleared(stationId, partId){
  return !!(state.partsCleared[stationId] && state.partsCleared[stationId][partId]);
}
function isPartUnlocked(station, index){
  if(index === 0) return true;
  return isPartCleared(station.id, station.parts[index - 1].id);
}
function markPartCleared(stationId, partId){
  if(!state.partsCleared[stationId]) state.partsCleared[stationId] = {};
  const already = !!state.partsCleared[stationId][partId];
  state.partsCleared[stationId][partId] = true;
  saveState();
  return !already;
}
function allPartsCleared(station){
  return station.parts.every(p => isPartCleared(station.id, p.id));
}
function firstUnclearedPart(station){
  for(let i = 0; i < station.parts.length; i++){
    if(!isPartCleared(station.id, station.parts[i].id)) return i;
  }
  return -1; // all cleared
}

/* ---------- Routing ---------- */
// route shapes:
//  { view: 'map' }
//  { view: 'station-path', stationId }
//  { view: 'flashcards', stationId, partIndex }
//  { view: 'part-quiz', stationId, partIndex }
//  { view: 'final-exam', stationId }

let route = { view: "courses" };

function navigate(next){
  route = next;
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  render();
}

function getStation(id){
  for(const c of COURSES){
    const s = c.stations.find(s => s.id === id);
    if(s) return s;
  }
  return null;
}

/* ---------- Root render ---------- */

const appEl = document.getElementById("app");

function render(){
  appEl.innerHTML = "";
  appEl.appendChild(renderTopbar());
  const main = document.createElement("main");

  if(route.view === "courses"){
    main.appendChild(renderCoursesView());
  } else if(route.view === "map"){
    main.appendChild(renderMapView(route.courseId));
  } else if(route.view === "station-path"){
    main.appendChild(renderStationPathView(getStation(route.stationId)));
  } else if(route.view === "flashcards"){
    main.appendChild(renderFlashcardsView(getStation(route.stationId), route.partIndex));
  } else if(route.view === "part-quiz"){
    main.appendChild(renderPartQuizView(getStation(route.stationId), route.partIndex));
  } else if(route.view === "final-exam"){
    main.appendChild(renderFinalExamView(getStation(route.stationId)));
  }

  appEl.appendChild(main);
  appEl.appendChild(renderFooter());
}

/* ---------- Topbar (unchanged) ---------- */

function renderTopbar(){
  const bar = el("div", "topbar");

  const brand = el("div", "topbar__brand");
  brand.innerHTML = `
    <span class="icon topbar__brand-mark">${ICONS.leaf}</span>
    <span class="topbar__brand-text">300 Level Exam Prep
      <small>Gamified Course Trails</small>
    </span>`;
  brand.style.cursor = "pointer";
  brand.addEventListener("click", () => navigate({ view: "courses" }));

  const stats = el("div", "topbar__stats");
  const level = xpLevel(state.xp);
  const into = xpIntoLevel(state.xp);
  stats.innerHTML = `
    <span class="stat-pill level"><span class="icon">${ICONS.trophy}</span>Lvl ${level}</span>
    <span class="stat-pill"><span class="icon">${ICONS.bolt}</span>${state.xp} XP <span style="opacity:.55">(${into}/100)</span></span>
  `;
  const resetBtn = el("button", "reset-btn");
  resetBtn.innerHTML = `<span class="icon">${ICONS.refresh}</span>Reset`;
  resetBtn.addEventListener("click", confirmReset);
  stats.appendChild(resetBtn);

  bar.appendChild(brand);
  bar.appendChild(stats);
  return bar;
}

function renderFooter(){
  const f = el("div", "footer");
  f.innerHTML = `
    <div class="footer__brand"><span class="icon">${ICONS.leaf}</span> Powered by ZenLink Tech</div>
    <div class="footer__credits">
      With appreciation to the lecturers, course coordinators, and academic leaders of the 300 Level Physiology class.<br>
      Course notes are sourced from PDFs shared in the Exam Prep group.
    </div>
  `;
  return f;
}

/* ---------- Reset flow (unchanged) ---------- */

function confirmReset(){
  const overlay = el("div", "modal-overlay");
  const modal = el("div", "badge-modal confirm-modal");
  modal.innerHTML = `
    <h3>Reset all progress?</h3>
    <p>This clears your XP, level, and completed stations/parts. This cannot be undone.</p>
    <div class="confirm-actions">
      <button class="btn-secondary" id="cancelReset">Cancel</button>
      <button class="btn-danger" id="confirmReset">Reset</button>
    </div>
  `;
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (e) => { if(e.target === overlay) overlay.remove(); });
  modal.querySelector("#cancelReset").addEventListener("click", () => overlay.remove());
  modal.querySelector("#confirmReset").addEventListener("click", () => {
    state = defaultState();
    saveState();
    overlay.remove();
    navigate({ view: "courses" });
  });
}

/* ==========================================================================
   MAP VIEW (unchanged trail — station click now goes to station-path)
   ========================================================================== */

/* ==========================================================================
   COURSES VIEW — pick a course; only Environmental Physiology is live
   ========================================================================== */

function renderCoursesView(){
  const wrap = el("div");

  const hero = el("div", "map-hero");
  hero.innerHTML = `
    <span class="icon">${ICONS.book}</span>
    <h1>Choose a Course</h1>
    <p>Pick a course to start, or pick up where you left off. Progress is saved per course.</p>
  `;
  wrap.appendChild(hero);

  const grid = el("div", "course-grid");

  COURSES.forEach(course => {
    if(!course.available){
      const card = el("div", "course-card course-card--locked");
      card.innerHTML = `
        <div class="course-card__icon"><span class="icon">${ICONS.lock}</span></div>
        <div class="course-card__title">${course.title}</div>
        <div class="course-card__tagline">${course.tagline}</div>
      `;
      grid.appendChild(card);
      return;
    }

    const total = course.stations.length;
    const done = course.stations.filter(s => isStationDone(s.id)).length;

    const card = el("div", "course-card");
    card.innerHTML = `
      <div class="course-card__icon"><span class="icon">${resolveIcon(course.icon)}</span></div>
      <div class="course-card__code">${course.code}</div>
      <div class="course-card__title">${course.title}</div>
      <div class="course-card__tagline">${course.tagline}</div>
      <div class="course-card__progress">
        <div class="course-card__progress-track"><div class="course-card__progress-fill" style="width:${total ? Math.round((done/total)*100) : 0}%"></div></div>
        <span>${done} / ${total} stations complete</span>
      </div>
    `;
    const btn = el("button", "btn-primary course-card__btn");
    btn.innerHTML = `${done > 0 ? "Continue" : "Start course"} <span class="icon">${ICONS.arrowRight}</span>`;
    btn.addEventListener("click", () => navigate({ view: "map", courseId: course.id }));
    card.appendChild(btn);
    card.addEventListener("click", (e) => { if(e.target !== btn && !btn.contains(e.target)) navigate({ view: "map", courseId: course.id }); });
    grid.appendChild(card);
  });

  wrap.appendChild(grid);
  return wrap;
}

function renderMapView(courseId){
  const course = getCourse(courseId) || COURSES[0];
  const wrap = el("div");
  const backLink = el("button", "back-to-courses");
  backLink.innerHTML = `<span class="icon">${ICONS.arrowLeft}</span>All courses`;
  backLink.addEventListener("click", () => navigate({ view: "courses" }));
  wrap.appendChild(backLink);

  const hero = el("div", "map-hero");
  hero.innerHTML = `
    <span class="icon">${ICONS.map}</span>
    <h1>The ${course.title} Trail</h1>
    <p>Twelve stations, one winding path. Each station is broken into short study parts, flashcards then a quick quiz, before a final exam unlocks the next station.</p>
  `;
  wrap.appendChild(hero);
  wrap.appendChild(renderTrail(course.stations));
  wrap.appendChild(renderBadgeShelf(course.stations));
  return wrap;
}

const TRAIL_POINTS = [
  {x: 12, y: 6}, {x: 32, y: 15}, {x: 15, y: 25}, {x: 38, y: 33},
  {x: 62, y: 28}, {x: 82, y: 38}, {x: 60, y: 47}, {x: 35, y: 54},
  {x: 18, y: 63}, {x: 42, y: 71}, {x: 68, y: 68}, {x: 85, y: 78},
];

function renderTrail(stations){
  const wrap = el("div", "map-wrap");
  const rowHeight = 92;
  const svgHeight = TRAIL_POINTS.length * rowHeight * 0.62;

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.classList.add("trail-svg");
  svg.setAttribute("viewBox", `0 0 1000 ${svgHeight}`);
  svg.setAttribute("preserveAspectRatio", "none");

  const scaleY = svgHeight * (100/78);
  const pts = TRAIL_POINTS.map(p => ({ x: p.x * 10, y: (p.y / 100) * scaleY }));
  const mid = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

  let d = `M ${pts[0].x} ${pts[0].y}`;
  if(pts.length > 1){
    const m0 = mid(pts[0], pts[1]);
    d += ` L ${m0.x} ${m0.y}`;
    for(let i = 1; i < pts.length - 1; i++){
      const m = mid(pts[i], pts[i+1]);
      d += ` Q ${pts[i].x} ${pts[i].y} ${m.x} ${m.y}`;
    }
    const last = pts[pts.length - 1];
    const secondLast = pts[pts.length - 2];
    d += ` Q ${secondLast.x} ${secondLast.y} ${last.x} ${last.y}`;
  }

  const pathBg = document.createElementNS(svgNS, "path");
  pathBg.setAttribute("d", d);
  pathBg.classList.add("trail-path");
  svg.appendChild(pathBg);
  wrap.appendChild(svg);

  const nodesLayer = el("div", "trail-nodes-layer");
  nodesLayer.style.position = "absolute";
  nodesLayer.style.left = "26px";
  nodesLayer.style.right = "26px";
  nodesLayer.style.top = "20px";
  nodesLayer.style.height = `${svgHeight * 0.36}px`;

  TRAIL_POINTS.forEach((p, i) => {
    const station = stations[i];
    if(!station) return;
    const unlocked = isStationUnlocked(stations, i);
    const done = isStationDone(station.id);
    const isCurrent = unlocked && !done;

    const node = el("div", "station-node " + (done ? "done" : unlocked ? "unlocked" : "locked") + (isCurrent ? " current" : ""));
    node.style.left = p.x + "%";
    node.style.top = p.y + "%";

    const btn = el("button", "station-node__btn");
    btn.setAttribute("aria-label", station.title);
    btn.disabled = !unlocked;
    btn.innerHTML = `<span class="icon">${unlocked ? ICONS.topic[station.icon] : ICONS.lock}</span>` +
      (done ? `<span class="station-node__done-badge icon">${ICONS.check}</span>` : "");
    btn.addEventListener("click", () => {
      if(!unlocked) return;
      navigate({ view: "station-path", stationId: station.id });
    });

    node.appendChild(btn);
    node.appendChild(el("div", "station-node__num", `STATION ${station.order}`));
    node.appendChild(el("div", "station-node__label", station.title));
    nodesLayer.appendChild(node);
  });

  wrap.appendChild(nodesLayer);
  wrap.style.minHeight = (svgHeight * 0.4) + "px";
  return wrap;
}

function renderBadgeShelf(stations){
  const wrap = el("div", "badge-shelf");
  wrap.innerHTML = `<h2><span class="icon">${ICONS.trophy}</span>Badge Collection</h2>`;
  const grid = el("div", "badge-grid");
  stations.forEach(s => {
    const done = isStationDone(s.id);
    const slot = el("div", "badge-slot");
    slot.innerHTML = `${ICONS.badgeFrame(ICONS.topic[s.icon], !done)}
      <span class="badge-slot__label">${done ? s.title : "Locked"}</span>`;
    grid.appendChild(slot);
  });
  wrap.appendChild(grid);
  return wrap;
}

/* ==========================================================================
   STATION PATH VIEW — the per-station part checklist
   ========================================================================== */

function renderStationPathView(station){
  const wrap = el("div", "station-path-page");

  const topbar = el("div", "lesson-topbar");
  const back = el("button", "back-btn");
  back.innerHTML = `<span class="icon">${ICONS.arrowLeft}</span>Trail map`;
  back.addEventListener("click", () => navigate({ view: "map", courseId: courseIdForStation(station.id) }));
  topbar.appendChild(back);
  topbar.appendChild(el("div", "lesson-topbar__title", `STATION ${station.order}`));
  wrap.appendChild(topbar);

  const hero = el("div", "lesson-hero");
  hero.innerHTML = `
    <span class="icon lesson-hero__icon">${ICONS.topic[station.icon]}</span>
    <h1>${station.title}</h1>
    <p class="tagline">${station.tagline}</p>
  `;
  wrap.appendChild(hero);

  const body = el("div", "station-path-body");

  const clearedCount = station.parts.filter(p => isPartCleared(station.id, p.id)).length;
  const allDone = allPartsCleared(station);
  const firstUncleared = firstUnclearedPart(station);

  // Continue / progress banner
  const banner = el("div", "path-progress-banner");
  banner.innerHTML = `
    <div class="path-progress-banner__text">
      <strong>${clearedCount} of ${station.parts.length}</strong> parts cleared
      ${isStationDone(station.id) ? ' &middot; Final exam passed' : ''}
    </div>
  `;
  const continueBtn = el("button", "btn-primary");
  if(allDone){
    continueBtn.innerHTML = `<span class="icon">${ICONS.graduation}</span>${isStationDone(station.id) ? "Retake final exam" : "Take final exam"}`;
    continueBtn.addEventListener("click", () => navigate({ view: "final-exam", stationId: station.id }));
  } else {
    const target = firstUncleared === -1 ? 0 : firstUncleared;
    continueBtn.innerHTML = `<span class="icon">${ICONS.arrowRight}</span>${clearedCount === 0 ? "Start" : "Continue"}`;
    continueBtn.addEventListener("click", () => navigate({ view: "flashcards", stationId: station.id, partIndex: target }));
  }
  banner.appendChild(continueBtn);
  body.appendChild(banner);

  // Parts checklist
  const list = el("div", "part-list");
  station.parts.forEach((part, i) => {
    const unlocked = isPartUnlocked(station, i);
    const done = isPartCleared(station.id, part.id);
    const row = el("div", "part-row " + (done ? "done" : unlocked ? "unlocked" : "locked"));

    const iconEl = el("div", "part-row__icon");
    iconEl.innerHTML = `<span class="icon">${done ? ICONS.check : unlocked ? ICONS.cards : ICONS.lock}</span>`;
    row.appendChild(iconEl);

    const text = el("div", "part-row__text");
    text.innerHTML = `<div class="part-row__num">Part ${i + 1}</div><div class="part-row__title">${part.title}</div>`;
    row.appendChild(text);

    if(unlocked){
      const btn = el("button", "part-row__btn");
      btn.innerHTML = `${done ? "Review" : "Study"} <span class="icon">${ICONS.arrowRight}</span>`;
      btn.addEventListener("click", () => navigate({ view: "flashcards", stationId: station.id, partIndex: i }));
      row.appendChild(btn);
    }

    list.appendChild(row);
  });

  // Final exam row
  const examRow = el("div", "part-row exam-row " + (allDone ? (isStationDone(station.id) ? "done" : "unlocked") : "locked"));
  const examIcon = el("div", "part-row__icon");
  examIcon.innerHTML = `<span class="icon">${isStationDone(station.id) ? ICONS.check : allDone ? ICONS.graduation : ICONS.lock}</span>`;
  examRow.appendChild(examIcon);
  const examText = el("div", "part-row__text");
  examText.innerHTML = `<div class="part-row__num">Final Exam</div><div class="part-row__title">Objective + theory questions on the whole station</div>`;
  examRow.appendChild(examText);
  if(allDone){
    const btn = el("button", "part-row__btn");
    btn.innerHTML = `${isStationDone(station.id) ? "Retake" : "Begin"} <span class="icon">${ICONS.arrowRight}</span>`;
    btn.addEventListener("click", () => navigate({ view: "final-exam", stationId: station.id }));
    examRow.appendChild(btn);
  }
  list.appendChild(examRow);

  body.appendChild(list);
  wrap.appendChild(body);
  return wrap;
}

/* ==========================================================================
   FLASHCARDS VIEW
   ========================================================================== */

const flashRuntime = {}; // key: stationId:partIndex -> { cardIndex, flipped }

function renderFlashcardsView(station, partIndex){
  const part = station.parts[partIndex];
  const key = station.id + ":" + partIndex;
  if(!flashRuntime[key]) flashRuntime[key] = { cardIndex: 0, flipped: false };
  const rt = flashRuntime[key];

  const wrap = el("div", "flashcards-page");

  const topbar = el("div", "lesson-topbar");
  const back = el("button", "back-btn");
  back.innerHTML = `<span class="icon">${ICONS.arrowLeft}</span>${station.title}`;
  back.addEventListener("click", () => navigate({ view: "station-path", stationId: station.id }));
  topbar.appendChild(back);
  topbar.appendChild(el("div", "lesson-topbar__title", `PART ${partIndex + 1} · STUDY`));
  wrap.appendChild(topbar);

  const container = el("div", "flashcards-wrap");
  container.appendChild(el("h1", "flashcards-title", part.title));

  const total = part.cards.length;
  const card = part.cards[rt.cardIndex];

  const counter = el("div", "flashcard-counter", `Card ${rt.cardIndex + 1} of ${total}`);
  container.appendChild(counter);

  const dots = el("div", "flashcard-dots");
  part.cards.forEach((c, i) => {
    dots.appendChild(el("span", "flashcard-dot" + (i === rt.cardIndex ? " active" : i < rt.cardIndex ? " seen" : "")));
  });
  container.appendChild(dots);

  const cardEl = el("div", "flashcard" + (rt.flipped ? " flipped" : ""));
  cardEl.innerHTML = `
    <div class="flashcard__inner">
      <div class="flashcard__face flashcard__front">
        <span class="icon flashcard__icon">${ICONS.cards}</span>
        <div class="flashcard__front-text">${card.front}</div>
        <div class="flashcard__hint">Tap to reveal</div>
      </div>
      <div class="flashcard__face flashcard__back">
        <div class="flashcard__back-text">${card.back}</div>
      </div>
    </div>
  `;
  cardEl.addEventListener("click", () => {
    rt.flipped = !rt.flipped;
    render();
  });
  container.appendChild(cardEl);

  const nav = el("div", "flashcard-nav");
  const prevBtn = el("button", "btn-secondary");
  prevBtn.innerHTML = `<span class="icon">${ICONS.arrowLeft}</span>Prev`;
  prevBtn.disabled = rt.cardIndex === 0;
  prevBtn.addEventListener("click", () => {
    if(rt.cardIndex > 0){ rt.cardIndex--; rt.flipped = false; render(); }
  });
  nav.appendChild(prevBtn);

  if(rt.cardIndex < total - 1){
    const nextBtn = el("button", "btn-primary");
    nextBtn.innerHTML = `Next <span class="icon">${ICONS.arrowRight}</span>`;
    nextBtn.addEventListener("click", () => { rt.cardIndex++; rt.flipped = false; render(); });
    nav.appendChild(nextBtn);
  } else {
    const quizBtn = el("button", "start-challenge flashcard-quiz-btn");
    quizBtn.innerHTML = `Start Part Quiz <span class="icon">${ICONS.quiz}</span>`;
    quizBtn.addEventListener("click", () => navigate({ view: "part-quiz", stationId: station.id, partIndex }));
    nav.appendChild(quizBtn);
  }
  container.appendChild(nav);

  wrap.appendChild(container);
  return wrap;
}

/* ==========================================================================
   PART QUIZ ENGINE (shared rendering helpers reused by final exam too)
   ========================================================================== */

const partQuizRuntime = {}; // key: stationId:partIndex

function freshRuntime(totalPoints){
  return { qIndex: 0, answered: false, correctCount: 0, pointsEarned: 0, totalPoints, finished: false };
}

function renderPartQuizView(station, partIndex){
  const part = station.parts[partIndex];
  const key = station.id + ":" + partIndex;
  if(!partQuizRuntime[key] || partQuizRuntime[key].finished === "restart"){
    partQuizRuntime[key] = freshRuntime(part.quiz.questions.length);
  }
  const rt = partQuizRuntime[key];

  const wrap = el("div", "quiz-page");
  const topbar = el("div", "lesson-topbar");
  const back = el("button", "back-btn");
  back.innerHTML = `<span class="icon">${ICONS.arrowLeft}</span>Flashcards`;
  back.addEventListener("click", () => navigate({ view: "flashcards", stationId: station.id, partIndex }));
  topbar.appendChild(back);
  topbar.appendChild(el("div", "lesson-topbar__title", `PART ${partIndex + 1} · QUIZ`));
  wrap.appendChild(topbar);

  const track = el("div", "quiz-progress-track");
  const fill = el("div", "quiz-progress-fill");
  fill.style.width = (rt.finished ? 100 : Math.round((rt.qIndex / part.quiz.questions.length) * 100)) + "%";
  track.appendChild(fill);
  wrap.appendChild(track);

  const quizWrap = el("div", "quiz-wrap");

  if(rt.finished){
    quizWrap.appendChild(renderPartQuizResults(station, partIndex, rt));
  } else {
    quizWrap.appendChild(renderQuestionCard(
      part.quiz.questions[rt.qIndex],
      rt,
      rt.qIndex + 1,
      part.quiz.questions.length,
      (correct) => { if(correct){ rt.correctCount++; rt.pointsEarned++; awardXP(5); } },
      () => finishPartQuiz(station, partIndex, rt)
    ));
  }
  wrap.appendChild(quizWrap);
  return wrap;
}

function finishPartQuiz(station, partIndex, rt){
  rt.finished = true;
  const part = station.parts[partIndex];
  const fraction = rt.pointsEarned / rt.totalPoints;
  const passed = fraction >= PART_PASS_THRESHOLD;
  let firstClear = false;
  if(passed) firstClear = markPartCleared(station.id, part.id);
  render();
  if(passed && firstClear) awardXP(10);
}

function renderPartQuizResults(station, partIndex, rt){
  const part = station.parts[partIndex];
  const fraction = rt.pointsEarned / rt.totalPoints;
  const passed = fraction >= PART_PASS_THRESHOLD;
  const pct = Math.round(fraction * 100);

  const card = el("div", "quiz-card results-card " + (passed ? "pass" : "fail"));
  card.innerHTML = `
    <span class="icon">${passed ? ICONS.check : ICONS.refresh}</span>
    <h2>${passed ? "Part cleared" : "Not quite there yet"}</h2>
    <div class="results-score">${pct}%</div>
    <p>${rt.pointsEarned} of ${rt.totalPoints} correct &middot; ${passed ? "You've unlocked the next part." : `You need ${Math.round(PART_PASS_THRESHOLD*100)}% to clear this part. Review the flashcards and try again.`}</p>
    <div class="results-actions" id="resultsActions"></div>
  `;
  const actions = card.querySelector("#resultsActions");

  const retryBtn = el("button", "btn-secondary");
  retryBtn.innerHTML = `<span class="icon">${ICONS.refresh}</span>Retry quiz`;
  retryBtn.addEventListener("click", () => {
    partQuizRuntime[station.id + ":" + partIndex] = freshRuntime(part.quiz.questions.length);
    render();
  });
  actions.appendChild(retryBtn);

  const cardsBtn = el("button", "btn-secondary");
  cardsBtn.innerHTML = `<span class="icon">${ICONS.cards}</span>Review flashcards`;
  cardsBtn.addEventListener("click", () => navigate({ view: "flashcards", stationId: station.id, partIndex }));
  actions.appendChild(cardsBtn);

  const nextIndex = partIndex + 1;
  const hasNext = nextIndex < station.parts.length;
  const pathBtn = el("button", "btn-primary");
  if(passed && hasNext){
    pathBtn.innerHTML = `Next part <span class="icon">${ICONS.arrowRight}</span>`;
    pathBtn.addEventListener("click", () => navigate({ view: "flashcards", stationId: station.id, partIndex: nextIndex }));
  } else if(passed && !hasNext){
    pathBtn.innerHTML = `<span class="icon">${ICONS.graduation}</span>Final exam`;
    pathBtn.addEventListener("click", () => navigate({ view: "final-exam", stationId: station.id }));
  } else {
    pathBtn.innerHTML = `Station path <span class="icon">${ICONS.arrowRight}</span>`;
    pathBtn.addEventListener("click", () => navigate({ view: "station-path", stationId: station.id }));
  }
  actions.appendChild(pathBtn);

  return card;
}

/* ---------- Shared question-card renderer (mcq + short) used by part quizzes AND final exam MCQ phase ---------- */

function renderQuestionCard(q, rt, num, total, onAnswer, onDone){
  const container = el("div");
  const meta = el("div", "quiz-meta");
  meta.innerHTML = `
    <span class="quiz-meta__count">Question ${num} of ${total}</span>
    <span class="quiz-meta__type">${q.type === "mcq" ? "Multiple choice" : "Short answer"}</span>
  `;
  container.appendChild(meta);

  const card = el("div", "quiz-card");
  card.appendChild(el("div", "quiz-question", q.prompt));

  if(q.type === "mcq"){
    const list = el("div", "option-list");
    q.options.forEach((opt, i) => {
      const btn = el("button", "option-btn");
      btn.innerHTML = `<span class="option-btn__bullet">${String.fromCharCode(65+i)}</span><span>${opt}</span>`;
      btn.addEventListener("click", () => {
        if(rt.answered) return;
        rt.answered = true;
        const correct = i === q.answerIndex;
        Array.from(list.children).forEach((b, bi) => {
          b.disabled = true;
          if(bi === q.answerIndex) b.classList.add("correct");
          else if(bi === i && !correct) b.classList.add("wrong");
        });
        onAnswer(correct);
        appendFeedback(card, correct, q.explanation);
        appendAdvanceButton(card, rt, total, onDone);
      });
      list.appendChild(btn);
    });
    card.appendChild(list);
  } else {
    const textarea = document.createElement("textarea");
    textarea.className = "short-answer-input";
    textarea.placeholder = "Type your answer here…";
    card.appendChild(textarea);
    const submitBtn = el("button", "submit-answer-btn", "Submit answer");
    submitBtn.addEventListener("click", () => {
      if(rt.answered) return;
      rt.answered = true;
      const correct = gradeShortAnswer(textarea.value, q.keywords);
      submitBtn.disabled = true;
      textarea.disabled = true;
      onAnswer(correct);
      appendFeedback(card, correct, q.explanation);
      appendAdvanceButton(card, rt, total, onDone);
    });
    card.appendChild(submitBtn);
  }

  container.appendChild(card);
  return container;
}

function appendAdvanceButton(card, rt, total, onDone){
  const nav = el("div", "quiz-nav");
  const isLast = rt.qIndex >= total - 1;
  const btn = el("button", "next-btn");
  btn.innerHTML = `${isLast ? "See results" : "Next question"} <span class="icon">${ICONS.arrowRight}</span>`;
  btn.addEventListener("click", () => {
    if(isLast){ onDone(); }
    else { rt.qIndex++; rt.answered = false; render(); }
  });
  nav.appendChild(btn);
  card.appendChild(nav);
}

function gradeShortAnswer(userText, keywords){
  const t = (userText || "").toLowerCase();
  if(t.trim().length < 2) return false;
  return keywords.some(kw => t.includes(kw.toLowerCase()));
}

function gradeTheory(userText, keywordGroups, minGroups){
  const t = (userText || "").toLowerCase();
  if(t.trim().length < 15) return false;
  let matched = 0;
  keywordGroups.forEach(group => {
    if(group.some(kw => t.includes(kw.toLowerCase()))) matched++;
  });
  return matched >= minGroups;
}

function appendFeedback(card, correct, explanation){
  const box = el("div", "feedback-box " + (correct ? "right" : "wrong"));
  box.innerHTML = `
    <span class="icon">${correct ? ICONS.check : ICONS.x_wrong}</span>
    <div>
      <div class="feedback-box__title">${correct ? "Correct" : "Not quite"}</div>
      <p>${explanation}</p>
    </div>
  `;
  card.appendChild(box);
}

/* ==========================================================================
   FINAL EXAM VIEW — MCQ phase, then theory phase, combined pass/fail
   ========================================================================== */

const examRuntime = {}; // key: stationId

function freshExamRuntime(station){
  const mcqTotal = station.finalExam.mcq.length;
  const theoryTotal = station.finalExam.theory.length;
  return {
    phase: "mcq",           // 'mcq' | 'theory' | 'done'
    qIndex: 0,
    answered: false,
    mcqEarned: 0, mcqTotal,
    theoryEarned: 0, theoryTotal,
  };
}

function renderFinalExamView(station){
  if(!examRuntime[station.id] || examRuntime[station.id].phase === "restart"){
    examRuntime[station.id] = freshExamRuntime(station);
  }
  const rt = examRuntime[station.id];

  const wrap = el("div", "quiz-page");
  const topbar = el("div", "lesson-topbar");
  const back = el("button", "back-btn");
  back.innerHTML = `<span class="icon">${ICONS.arrowLeft}</span>${station.title}`;
  back.addEventListener("click", () => navigate({ view: "station-path", stationId: station.id }));
  topbar.appendChild(back);
  topbar.appendChild(el("div", "lesson-topbar__title", `FINAL EXAM · ${rt.phase === "theory" ? "THEORY" : rt.phase === "done" ? "RESULTS" : "OBJECTIVE"}`));
  wrap.appendChild(topbar);

  const totalQs = rt.mcqTotal + rt.theoryTotal;
  const doneQs = rt.phase === "mcq" ? rt.qIndex : rt.phase === "theory" ? rt.mcqTotal + rt.qIndex : totalQs;
  const track = el("div", "quiz-progress-track");
  const fill = el("div", "quiz-progress-fill");
  fill.style.width = Math.round((doneQs / totalQs) * 100) + "%";
  track.appendChild(fill);
  wrap.appendChild(track);

  const quizWrap = el("div", "quiz-wrap");

  if(rt.phase === "mcq"){
    quizWrap.appendChild(renderExamMcqQuestion(station, rt));
  } else if(rt.phase === "theory"){
    quizWrap.appendChild(renderExamTheoryQuestion(station, rt));
  } else {
    quizWrap.appendChild(renderExamResults(station, rt));
  }

  wrap.appendChild(quizWrap);
  return wrap;
}

function renderExamMcqQuestion(station, rt){
  const q = station.finalExam.mcq[rt.qIndex];
  return renderQuestionCard(
    q,
    rt,
    rt.qIndex + 1,
    rt.mcqTotal,
    (correct) => { if(correct){ rt.mcqEarned++; awardXP(6); } },
    () => {
      if(rt.theoryTotal > 0){ rt.phase = "theory"; rt.qIndex = 0; rt.answered = false; }
      else { rt.phase = "done"; finalizeExam(station, rt); }
      render();
    }
  );
}

function renderExamTheoryQuestion(station, rt){
  const q = station.finalExam.theory[rt.qIndex];
  const container = el("div");
  const meta = el("div", "quiz-meta");
  meta.innerHTML = `<span class="quiz-meta__count">Theory ${rt.qIndex + 1} of ${rt.theoryTotal}</span><span class="quiz-meta__type">Written answer</span>`;
  container.appendChild(meta);

  const card = el("div", "quiz-card");
  card.appendChild(el("div", "quiz-question", q.prompt));
  card.appendChild(el("p", "theory-hint", "Write a short paragraph covering the key points you'd expect in an exam answer."));

  const textarea = document.createElement("textarea");
  textarea.className = "short-answer-input theory-input";
  textarea.placeholder = "Type your answer here…";
  card.appendChild(textarea);

  const submitBtn = el("button", "submit-answer-btn", "Submit answer");
  submitBtn.addEventListener("click", () => {
    if(rt.answered) return;
    rt.answered = true;
    const correct = gradeTheory(textarea.value, q.keywordGroups, q.minGroups);
    submitBtn.disabled = true;
    textarea.disabled = true;
    if(correct){ rt.theoryEarned++; awardXP(15); }
    appendFeedback(card, correct, q.explanation);

    const nav = el("div", "quiz-nav");
    const isLast = rt.qIndex >= rt.theoryTotal - 1;
    const nextBtn = el("button", "next-btn");
    nextBtn.innerHTML = `${isLast ? "See results" : "Next question"} <span class="icon">${ICONS.arrowRight}</span>`;
    nextBtn.addEventListener("click", () => {
      if(isLast){ rt.phase = "done"; finalizeExam(station, rt); }
      else { rt.qIndex++; rt.answered = false; }
      render();
    });
    nav.appendChild(nextBtn);
    card.appendChild(nav);
  });
  card.appendChild(submitBtn);

  container.appendChild(card);
  return container;
}

function finalizeExam(station, rt){
  const earned = rt.mcqEarned + rt.theoryEarned;
  const total = rt.mcqTotal + rt.theoryTotal;
  const fraction = total > 0 ? earned / total : 0;
  const passed = fraction >= PASS_THRESHOLD;
  const alreadyPassed = isStationDone(station.id);

  state.completed[station.id] = {
    score: earned,
    total: total,
    passed: passed || alreadyPassed,
  };
  saveState();

  if(passed && !alreadyPassed){
    awardXP(40);
    setTimeout(() => showBadgeUnlock(station), 250);
  }
}

function renderExamResults(station, rt){
  const earned = rt.mcqEarned + rt.theoryEarned;
  const total = rt.mcqTotal + rt.theoryTotal;
  const fraction = total > 0 ? earned / total : 0;
  const passed = fraction >= PASS_THRESHOLD;
  const pct = Math.round(fraction * 100);

  const card = el("div", "quiz-card results-card " + (passed ? "pass" : "fail"));
  card.innerHTML = `
    <span class="icon">${passed ? ICONS.trophy : ICONS.refresh}</span>
    <h2>${passed ? "Station complete" : "Not quite there yet"}</h2>
    <div class="results-score">${pct}%</div>
    <p>${earned} of ${total} correct (${rt.mcqEarned}/${rt.mcqTotal} objective, ${rt.theoryEarned}/${rt.theoryTotal} theory) &middot; ${passed ? "You've cleared the exam and unlocked the next station." : `You need ${Math.round(PASS_THRESHOLD*100)}% to pass. Review the parts and try again.`}</p>
    <div class="results-actions" id="resultsActions"></div>
  `;
  const actions = card.querySelector("#resultsActions");

  const retryBtn = el("button", "btn-secondary");
  retryBtn.innerHTML = `<span class="icon">${ICONS.refresh}</span>Retake exam`;
  retryBtn.addEventListener("click", () => {
    examRuntime[station.id] = freshExamRuntime(station);
    render();
  });
  actions.appendChild(retryBtn);

  const pathBtn = el("button", "btn-secondary");
  pathBtn.innerHTML = `<span class="icon">${ICONS.cards}</span>Station path`;
  pathBtn.addEventListener("click", () => navigate({ view: "station-path", stationId: station.id }));
  actions.appendChild(pathBtn);

  const mapBtn = el("button", "btn-primary");
  mapBtn.innerHTML = `<span class="icon">${ICONS.map}</span>Back to trail`;
  mapBtn.addEventListener("click", () => navigate({ view: "map", courseId: courseIdForStation(station.id) }));
  actions.appendChild(mapBtn);

  return card;
}

/* ---------- Badge unlock modal (unchanged) ---------- */

function showBadgeUnlock(station){
  const overlay = el("div", "modal-overlay");
  const modal = el("div", "badge-modal");
  modal.innerHTML = `
    ${ICONS.badgeFrame(ICONS.topic[station.icon], false)}
    <h3>Badge earned</h3>
    <p>${station.title}</p>
    <button class="close-modal">Continue</button>
  `;
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  modal.querySelector(".close-modal").addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if(e.target === overlay) close(); });
}

/* ---------- XP toast (unchanged) ---------- */

let xpToastTimer = null;
function awardXP(amount){
  state.xp += amount;
  saveState();
  const existing = document.querySelector(".xp-toast");
  const toast = existing || el("div", "xp-toast");
  toast.innerHTML = `<span class="icon">${ICONS.bolt}</span>+${amount} XP`;
  if(!existing) document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  clearTimeout(xpToastTimer);
  xpToastTimer = setTimeout(() => toast.classList.remove("show"), 1400);

  const pill = document.querySelector(".stat-pill:not(.level)");
  if(pill) pill.innerHTML = `<span class="icon">${ICONS.bolt}</span>${state.xp} XP <span style="opacity:.55">(${xpIntoLevel(state.xp)}/100)</span>`;
  const levelPill = document.querySelector(".stat-pill.level");
  if(levelPill) levelPill.innerHTML = `<span class="icon">${ICONS.trophy}</span>Lvl ${xpLevel(state.xp)}`;
}

/* ---------- tiny DOM helper ---------- */

function el(tag, className, text){
  const e = document.createElement(tag);
  if(className) e.className = className;
  if(text !== undefined && text !== null) e.textContent = text;
  return e;
}

/* ---------- boot ---------- */

document.addEventListener("DOMContentLoaded", () => {
  render();
});
