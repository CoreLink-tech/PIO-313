/* ==========================================================================
   APP — state, routing, rendering, quiz engine, persistence.
   Everything here is vanilla JS, no build step, no framework.
   ========================================================================== */

const STORAGE_KEY = "envphys_progress_v1";

/* ---------- State ---------- */

function defaultState(){
  return {
    xp: 0,
    completed: {},     // { stationId: { score, total, passed:true } }
    currentQuizStation: null,
  };
}

let state = loadState();

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  }catch(e){
    return defaultState();
  }
}

function saveState(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch(e){ /* storage unavailable — app still works, just won't persist */ }
}

function xpLevel(xp){
  // 100 xp per level, simple linear curve
  return Math.floor(xp / 100) + 1;
}
function xpIntoLevel(xp){ return xp % 100; }

function isStationUnlocked(index){
  if(index === 0) return true;
  const prev = STATIONS[index - 1];
  return !!(state.completed[prev.id] && state.completed[prev.id].passed);
}

function isStationDone(id){
  return !!(state.completed[id] && state.completed[id].passed);
}

/* ---------- Routing ---------- */
// route shape: { view: 'map' | 'lesson' | 'quiz', stationId }

let route = { view: "map" };

function navigate(next){
  route = next;
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  render();
}

/* ---------- Root render ---------- */

const appEl = document.getElementById("app");

function render(){
  appEl.innerHTML = "";
  appEl.appendChild(renderTopbar());
  const main = document.createElement("main");

  if(route.view === "map"){
    main.appendChild(renderMapView());
  } else if(route.view === "lesson"){
    main.appendChild(renderLessonView(getStation(route.stationId)));
  } else if(route.view === "quiz"){
    main.appendChild(renderQuizView(getStation(route.stationId)));
  }

  appEl.appendChild(main);
  appEl.appendChild(renderFooter());
}

function getStation(id){
  return STATIONS.find(s => s.id === id);
}

/* ---------- Topbar ---------- */

function renderTopbar(){
  const bar = el("div", "topbar");

  const brand = el("div", "topbar__brand");
  brand.innerHTML = `
    <span class="icon topbar__brand-mark">${ICONS.leaf}</span>
    <span class="topbar__brand-text">Environmental Physiology Trail
      <small>D/PIO 313 &middot; Field Guide</small>
    </span>`;
  brand.style.cursor = "pointer";
  brand.addEventListener("click", () => navigate({ view: "map" }));

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
  f.innerHTML = `<span class="icon">${ICONS.leaf}</span> Powered by ZenLink Tech`;
  return f;
}

/* ---------- Reset flow ---------- */

function confirmReset(){
  const overlay = el("div", "modal-overlay");
  const modal = el("div", "badge-modal confirm-modal");
  modal.innerHTML = `
    <h3>Reset all progress?</h3>
    <p>This clears your XP, level, and completed stations. This cannot be undone.</p>
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
    navigate({ view: "map" });
  });
}

/* ==========================================================================
   MAP VIEW
   ========================================================================== */

function renderMapView(){
  const wrap = el("div");

  const hero = el("div", "map-hero");
  hero.innerHTML = `
    <span class="icon">${ICONS.map}</span>
    <h1>The Environmental Physiology Trail</h1>
    <p>Twelve stations, one winding path. Read the full lesson at each stop, then clear its challenge to unlock the next. Earn XP, level up, and collect a badge per station.</p>
  `;
  wrap.appendChild(hero);

  wrap.appendChild(renderTrail());
  wrap.appendChild(renderBadgeShelf());

  return wrap;
}

// Hand-authored winding path coordinates (percent-based, on a 0..1000 x 0..N canvas)
const TRAIL_POINTS = [
  {x: 12, y: 6},
  {x: 32, y: 15},
  {x: 15, y: 25},
  {x: 38, y: 33},
  {x: 62, y: 28},
  {x: 82, y: 38},
  {x: 60, y: 47},
  {x: 35, y: 54},
  {x: 18, y: 63},
  {x: 42, y: 71},
  {x: 68, y: 68},
  {x: 85, y: 78},
];

function renderTrail(){
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

  const lastUnlockedIndex = STATIONS.reduce((acc, s, i) => isStationUnlocked(i) ? i : acc, 0);

  const pathBg = document.createElementNS(svgNS, "path");
  pathBg.setAttribute("d", d);
  pathBg.classList.add("trail-path");
  svg.appendChild(pathBg);

  wrap.appendChild(svg);

  const container = el("div");
  container.style.position = "relative";
  container.style.marginTop = `-${svgHeight * 0.001}px`;
  container.style.height = "0";
  wrap.style.position = "relative";

  // Position nodes absolutely over the svg using the same percent coords
  const nodesLayer = el("div", "trail-nodes-layer");
  nodesLayer.style.position = "absolute";
  nodesLayer.style.left = "26px";
  nodesLayer.style.right = "26px";
  nodesLayer.style.top = "20px";
  nodesLayer.style.height = `${svgHeight * 0.36}px`;

  TRAIL_POINTS.forEach((p, i) => {
    const station = STATIONS[i];
    if(!station) return;
    const unlocked = isStationUnlocked(i);
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
      navigate({ view: "lesson", stationId: station.id });
    });

    const num = el("div", "station-node__num", `STATION ${station.order}`);
    const label = el("div", "station-node__label", station.title);

    node.appendChild(btn);
    node.appendChild(num);
    node.appendChild(label);
    nodesLayer.appendChild(node);
  });

  wrap.appendChild(nodesLayer);
  wrap.style.minHeight = (svgHeight * 0.4) + "px";

  return wrap;
}

function renderBadgeShelf(){
  const wrap = el("div", "badge-shelf");
  wrap.innerHTML = `<h2><span class="icon">${ICONS.trophy}</span>Badge Collection</h2>`;
  const grid = el("div", "badge-grid");
  STATIONS.forEach(s => {
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
   LESSON VIEW
   ========================================================================== */

function renderLessonView(station){
  const wrap = el("div", "lesson-page");

  const topbar = el("div", "lesson-topbar");
  const back = el("button", "back-btn");
  back.innerHTML = `<span class="icon">${ICONS.arrowLeft}</span>Trail map`;
  back.addEventListener("click", () => navigate({ view: "map" }));
  topbar.appendChild(back);
  topbar.appendChild(el("div", "lesson-topbar__title", `STATION ${station.order} · LESSON`));
  wrap.appendChild(topbar);

  const hero = el("div", "lesson-hero");
  hero.innerHTML = `
    <span class="icon lesson-hero__icon">${ICONS.topic[station.icon]}</span>
    <h1>${station.title}</h1>
    <p class="tagline">${station.tagline}</p>
  `;
  wrap.appendChild(hero);

  const body = el("div", "lesson-body");

  // Intro
  const introSec = el("div", "lesson-section");
  introSec.innerHTML = `<h2><span class="icon">${ICONS.book}</span> Introduction</h2>`;
  station.lesson.intro.forEach(p => introSec.appendChild(el("p", null, p)));
  body.appendChild(introSec);

  // Core sections
  station.lesson.sections.forEach(sec => {
    const s = el("div", "lesson-section");
    s.appendChild(el("h2", null, sec.heading));
    sec.body.forEach(p => s.appendChild(el("p", null, p)));
    body.appendChild(s);
  });

  // Examples
  if(station.lesson.examples && station.lesson.examples.length){
    const s = el("div", "lesson-section");
    s.appendChild(el("h2", null, "Real-world examples"));
    const grid = el("div", "example-grid");
    station.lesson.examples.forEach(ex => {
      const card = el("div", "example-card");
      card.innerHTML = `<h3>${ex.title}</h3><p>${ex.text}</p>`;
      grid.appendChild(card);
    });
    s.appendChild(grid);
    body.appendChild(s);
  }

  // Why it matters
  const why = el("div", "why-box");
  why.innerHTML = `<h2>Why this matters</h2>`;
  station.lesson.whyMatters.forEach(p => why.appendChild(el("p", null, p)));
  body.appendChild(why);

  // Glossary
  const gloss = el("div", "lesson-section");
  gloss.appendChild(el("h2", null, "Key terms recap"));
  const dl = el("dl", "glossary-list");
  station.lesson.glossary.forEach(g => {
    const item = el("div", "glossary-item");
    item.innerHTML = `<dt>${g.term}</dt><dd>${g.def}</dd>`;
    dl.appendChild(item);
  });
  gloss.appendChild(dl);
  body.appendChild(gloss);

  // Start challenge
  const startBtn = el("button", "start-challenge");
  startBtn.innerHTML = `Start Challenge <span class="icon">${ICONS.arrowRight}</span>`;
  startBtn.addEventListener("click", () => navigate({ view: "quiz", stationId: station.id }));
  body.appendChild(startBtn);

  wrap.appendChild(body);
  return wrap;
}

/* ==========================================================================
   QUIZ VIEW / ENGINE
   ========================================================================== */

// Per-session quiz runtime state, keyed by station id
const quizRuntime = {};

function freshQuizRuntime(station){
  return {
    qIndex: 0,
    answered: false,
    wasCorrect: false,
    correctCount: 0,
    pointsEarned: 0,
    totalPoints: station.quiz.questions.length,
    finished: false,
  };
}

function renderQuizView(station){
  if(!quizRuntime[station.id] || quizRuntime[station.id].finished === "restart"){
    quizRuntime[station.id] = freshQuizRuntime(station);
  }
  const rt = quizRuntime[station.id];

  const wrap = el("div", "quiz-page");

  const topbar = el("div", "lesson-topbar");
  const back = el("button", "back-btn");
  back.innerHTML = `<span class="icon">${ICONS.arrowLeft}</span>Lesson`;
  back.addEventListener("click", () => navigate({ view: "lesson", stationId: station.id }));
  topbar.appendChild(back);
  topbar.appendChild(el("div", "lesson-topbar__title", `STATION ${station.order} · CHALLENGE`));
  wrap.appendChild(topbar);

  const track = el("div", "quiz-progress-track");
  const fill = el("div", "quiz-progress-fill");
  const total = station.quiz.questions.length;
  const progressPct = rt.finished ? 100 : Math.round((rt.qIndex / total) * 100);
  fill.style.width = progressPct + "%";
  track.appendChild(fill);
  wrap.appendChild(track);

  const quizWrap = el("div", "quiz-wrap");

  if(rt.finished){
    quizWrap.appendChild(renderQuizResults(station, rt));
  } else {
    quizWrap.appendChild(renderQuizQuestion(station, rt));
  }

  wrap.appendChild(quizWrap);
  return wrap;
}

function renderQuizQuestion(station, rt){
  const q = station.quiz.questions[rt.qIndex];
  const container = el("div");

  const meta = el("div", "quiz-meta");
  meta.innerHTML = `
    <span class="quiz-meta__count">Question ${rt.qIndex + 1} of ${station.quiz.questions.length}</span>
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
      btn.addEventListener("click", () => handleMcqAnswer(station, rt, i, card, list));
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
      handleShortAnswer(station, rt, textarea.value, card, submitBtn, textarea);
    });
    card.appendChild(submitBtn);
  }

  container.appendChild(card);
  return container;
}

function handleMcqAnswer(station, rt, chosenIndex, card, list){
  if(rt.answered) return;
  rt.answered = true;
  const q = station.quiz.questions[rt.qIndex];
  const correct = chosenIndex === q.answerIndex;
  rt.wasCorrect = correct;

  Array.from(list.children).forEach((btn, i) => {
    btn.disabled = true;
    if(i === q.answerIndex) btn.classList.add("correct");
    else if(i === chosenIndex && !correct) btn.classList.add("wrong");
  });

  if(correct){
    rt.correctCount++;
    rt.pointsEarned++;
    awardXP(8);
  }

  appendFeedback(card, correct, q.explanation);
  appendNextButton(card, station, rt);
}

function gradeShortAnswer(userText, keywords){
  const t = (userText || "").toLowerCase();
  if(t.trim().length < 2) return false;
  return keywords.some(kw => t.includes(kw.toLowerCase()));
}

function handleShortAnswer(station, rt, text, card, submitBtn, textarea){
  if(rt.answered) return;
  rt.answered = true;
  const q = station.quiz.questions[rt.qIndex];
  const correct = gradeShortAnswer(text, q.keywords);
  rt.wasCorrect = correct;

  submitBtn.disabled = true;
  textarea.disabled = true;

  if(correct){
    rt.correctCount++;
    rt.pointsEarned++;
    awardXP(8);
  }

  appendFeedback(card, correct, q.explanation, !correct);
  appendNextButton(card, station, rt);
}

function appendFeedback(card, correct, explanation, lenientNote){
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

function appendNextButton(card, station, rt){
  const nav = el("div", "quiz-nav");
  const isLast = rt.qIndex >= station.quiz.questions.length - 1;
  const btn = el("button", "next-btn");
  btn.innerHTML = `${isLast ? "See results" : "Next question"} <span class="icon">${ICONS.arrowRight}</span>`;
  btn.addEventListener("click", () => {
    if(isLast){
      finishQuiz(station, rt);
    } else {
      rt.qIndex++;
      rt.answered = false;
      render();
    }
  });
  nav.appendChild(btn);
  card.appendChild(nav);
}

function finishQuiz(station, rt){
  rt.finished = true;
  const fraction = rt.pointsEarned / rt.totalPoints;
  const passed = fraction >= PASS_THRESHOLD;

  const alreadyPassed = isStationDone(station.id);
  state.completed[station.id] = {
    score: rt.pointsEarned,
    total: rt.totalPoints,
    passed: passed || (state.completed[station.id] && state.completed[station.id].passed) || false,
  };
  saveState();

  render();

  if(passed && !alreadyPassed){
    awardXP(30);
    setTimeout(() => showBadgeUnlock(station), 250);
  }
}

function renderQuizResults(station, rt){
  const fraction = rt.pointsEarned / rt.totalPoints;
  const passed = fraction >= PASS_THRESHOLD;
  const pct = Math.round(fraction * 100);

  const card = el("div", "quiz-card results-card " + (passed ? "pass" : "fail"));
  card.innerHTML = `
    <span class="icon">${passed ? ICONS.trophy : ICONS.refresh}</span>
    <h2>${passed ? "Station cleared" : "Not quite there yet"}</h2>
    <div class="results-score">${pct}%</div>
    <p>${rt.pointsEarned} of ${rt.totalPoints} correct &middot; ${passed ? `You've cleared the ${Math.round(PASS_THRESHOLD*100)}% threshold and unlocked the next station.` : `You need ${Math.round(PASS_THRESHOLD*100)}% to unlock the next station. Review the lesson and try again.`}</p>
    <div class="results-actions" id="resultsActions"></div>
  `;

  const actions = card.querySelector("#resultsActions");

  const retryBtn = el("button", "btn-secondary");
  retryBtn.innerHTML = `<span class="icon">${ICONS.refresh}</span>Retry challenge`;
  retryBtn.addEventListener("click", () => {
    quizRuntime[station.id] = freshQuizRuntime(station);
    render();
  });
  actions.appendChild(retryBtn);

  const lessonBtn = el("button", "btn-secondary");
  lessonBtn.innerHTML = `<span class="icon">${ICONS.book}</span>Review lesson`;
  lessonBtn.addEventListener("click", () => navigate({ view: "lesson", stationId: station.id }));
  actions.appendChild(lessonBtn);

  const mapBtn = el("button", "btn-primary");
  mapBtn.innerHTML = `<span class="icon">${ICONS.map}</span>Back to trail`;
  mapBtn.addEventListener("click", () => navigate({ view: "map" }));
  actions.appendChild(mapBtn);

  return card;
}

/* ---------- Badge unlock modal ---------- */

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

/* ---------- XP toast ---------- */

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

  // live-update the topbar XP pill without a full re-render (avoids losing quiz state)
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
