/* ==========================================================================
   ICONS — hand-built SVG line art. Every icon here is original markup,
   stroke-based, currentColor, consistent 1.75 stroke weight on a 24
   viewBox for UI icons and 48 viewBox for topic icons. No emoji, no
   icon-font, no external asset — everything is inline so the site works
   completely offline once downloaded.
   ========================================================================== */

const ICONS = {

  /* ---------- UI icons (24x24) ---------- */

  lock: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="11" width="14" height="9" rx="1.5" stroke="currentColor" stroke-width="1.75"/>
    <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
    <circle cx="12" cy="15" r="1.4" fill="currentColor"/>
    <path d="M12 16.4V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  check: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.75"/>
    <path d="M7.5 12.3l3 3 6-6.4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  bolt: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2 4.5 13.5H11L10 22l9-12.5h-6.5L13 2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </svg>`,

  arrowRight: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12h15M13 5.5 19.5 12 13 18.5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12H5M11 5.5 4.5 12 11 18.5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  close: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>
  </svg>`,

  book: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5.2c2-.9 5-.9 8 .6 3-1.5 6-1.5 8-.6v14c-2-.9-5-.9-8 .6-3-1.5-6-1.5-8-.6V5.2Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
    <path d="M12 5.8V19.4" stroke="currentColor" stroke-width="1.7"/>
  </svg>`,

  quiz: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.75"/>
    <path d="M9.3 9.5a2.7 2.7 0 1 1 3.8 2.5c-.9.5-1.1 1-1.1 1.9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
    <circle cx="12" cy="17" r="1" fill="currentColor"/>
  </svg>`,

  refresh: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5.5v4.5h-4.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19 10a7.5 7.5 0 1 0-1.7 7.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
  </svg>`,

  map: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M9 4v14M15 6v14" stroke="currentColor" stroke-width="1.6"/>
  </svg>`,

  pin: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21s7-6.8 7-12a7 7 0 0 0-14 0c0 5.2 7 12 7 12Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
    <circle cx="12" cy="9" r="2.4" stroke="currentColor" stroke-width="1.5"/>
  </svg>`,

  x_wrong: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.75"/>
    <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>
  </svg>`,

  leaf: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 19c-1-6.5 2.5-13 14-14 1 10.5-5.5 14.5-14 14Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M6 18c3-4 6-7 12-12.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>`,

  trophy: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M7 5.5H4.5a1 1 0 0 0-1 1.3C4 9 5.4 10 7 10.2M17 5.5h2.5a1 1 0 0 1 1 1.3C20 9 18.6 10 17 10.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12 14v3M9 20.5h6M10 20.5v-2.7c0-.7.5-1 1.2-1h1.6c.7 0 1.2.3 1.2 1v2.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  cards: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6.5" y="3.5" width="12" height="15" rx="1.6" transform="rotate(-6 6.5 3.5)" stroke="currentColor" stroke-width="1.5" opacity=".55"/>
    <rect x="5" y="5.5" width="14" height="15" rx="1.6" stroke="currentColor" stroke-width="1.75"/>
    <path d="M8.5 10h7M8.5 13.5h4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>`,

  graduation: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M6.5 11.6v4c0 1.4 2.5 2.9 5.5 2.9s5.5-1.5 5.5-2.9v-4" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M21.5 9.5V16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`,

  /* ---------- Badge frame (48x48) — wraps a topic glyph ---------- */

  badgeFrame: (innerPathSVG, locked) => `
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="badge-svg${locked ? ' is-locked' : ''}">
    <path d="M32 3 58 17v30L32 61 6 47V17Z" class="badge-shell" stroke="currentColor" stroke-width="2"/>
    <path d="M32 8 53 19.5v25L32 56 11 44.5v-25Z" class="badge-inner" stroke="currentColor" stroke-width="1.2" opacity="0.55"/>
    <g transform="translate(16,16)">${innerPathSVG}</g>
  </svg>`,

  /* ---------- Topic glyphs (32x32 viewBox, used inside badgeFrame / station nodes) ---------- */

  topic: {
    // 1 Foundations — split globe: sun over hot half, peak over cold half
    foundations: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="1.8"/>
      <path d="M4 16h24" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="10.5" cy="10.5" r="2.4" stroke="currentColor" stroke-width="1.4"/>
      <path d="M10.5 6v1.4M10.5 13.6V15M6 10.5h1.4M13.6 10.5H15M7.5 7.5l1 1M12.5 7.5l-1 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M18.5 21.5 22 14l3.5 7.5h-7Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    </svg>`,

    // 2 Environmental Health & Cycles — droplet with circular cycle arrow
    cycles: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 6c4 5 7 9 7 12.5A7 7 0 0 1 9 18.5C9 15 12 11 16 6Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M22 22a9 9 0 0 0 3-6.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M25.6 13.8 25 16l-2.3-.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    // 3 Housing, Vector Control & Pollution — house with drifting smoke
    housing: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 16 16 7l10 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.5 14v11h15V14" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
      <path d="M13 25v-6h6v6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M21 10V7h3v4.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
      <path d="M23 5.5c1 .8 1.6 1.6.6 2.6" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
    </svg>`,

    // 4 Environmental Epidemiology — magnifier over a leaf/data point
    epidemiology: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13.5" cy="13.5" r="8" stroke="currentColor" stroke-width="1.8"/>
      <path d="M19.3 19.3 26 26" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>
      <path d="M10 15c0-3.5 2-6 5-7 .5 3.5-1 6-5 7Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
    </svg>`,

    // 5 Medical Research Ethics — balance scale over a cross
    ethics: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 5v20M10 25h12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      <path d="M6 10h9M17 10h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M6 10 3 16a3.4 3.4 0 0 0 6 0Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M26 10l-3 6a3.4 3.4 0 0 0 6 0Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M14.5 15.5h3M16 14v3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
    </svg>`,

    // 6 EDCs — hormone-receptor lock/key
    edc: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="5.5" stroke="currentColor" stroke-width="1.7"/>
      <path d="M16 16 26 26" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      <path d="M22 22l2.3-2.3M25 25l2-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="12" cy="12" r="1.6" fill="currentColor"/>
    </svg>`,

    // 7 Waste Management — recycling triangle
    waste: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 5.5 24 19H8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M12.5 13 9.5 18M19.5 13l3 5M13 22h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 24.5l2-1.7-1-2.3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    // 8 Routine Exposure & Biomonitoring — lung with test-tube
    biomonitoring: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 6v9" stroke="currentColor" stroke-width="1.6"/>
      <path d="M16 15c-1-4-4-3-5 0-1 3-4 4-4 8a3.5 3.5 0 0 0 7-.5v-4M16 15c1-4 4-3 5 0 1 3 4 4 4 8a3.5 3.5 0 0 1-7-.5v-4" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <rect x="22" y="4" width="4.2" height="10" rx="1.5" transform="rotate(18 22 4)" stroke="currentColor" stroke-width="1.3"/>
    </svg>`,

    // 9 Occupational Health — heart with hard hat
    occupational: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 25c-6-4-10-8-10-13a5.5 5.5 0 0 1 10-3.2A5.5 5.5 0 0 1 26 12c0 5-4 9-10 13Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M9 8.5a7 3 0 0 1 14 0" stroke="currentColor" stroke-width="1.4"/>
      <path d="M8 8.5h16v2.3H8Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
    </svg>`,

    // 10 Ergonomics — figure seated at a curved support line (gear behind)
    ergonomics: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="7.5" r="2.6" stroke="currentColor" stroke-width="1.5"/>
      <path d="M15 10.5v6l-4 3M15 16.5l4.5 2M11 19.5l-1.5 5.5M19.5 18.5l2 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23 8.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" stroke="currentColor" stroke-width="1.1" opacity=".7"/>
      <path d="M23 6.3V8M23 14v1.7M20.3 13l1.5-.9M24.2 10.9l1.5-.9M20.3 10l1.5.9M24.2 12.1l1.5.9" stroke="currentColor" stroke-width="1" opacity=".7" stroke-linecap="round"/>
    </svg>`,

    // 11 Disaster Management — warning triangle over cracked ground
    disaster: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 5 28 25H4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
      <path d="M16 12v6M16 21v.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      <path d="M4 25l4-3 3 2 3-3 4 2.5" stroke="currentColor" stroke-width="1.1" opacity=".6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    // 12 Protective Devices — shield with helmet notch
    protective: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4 26 8v8c0 7-4.5 11-10 13-5.5-2-10-6-10-13V8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
      <path d="M11 14a5 4.2 0 0 1 10 0" stroke="currentColor" stroke-width="1.4"/>
      <path d="M10.3 14h11.4v2.4H10.3Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
    </svg>`,
  }
};
