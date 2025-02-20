setTimeout(function () {
  window.scrollTo(0, 1);
}, 200);

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 400 });

// ---------------- PROJECT BOX ----------------
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* -- ABOUT SKILLS & FORM BOX -- */

sr.reveal(".about-info", {
  origin: "left",
  distance: "80px",
  delay: 100,
  duration: 2000,
  reset: true,
});
sr.reveal(".skills-box", {
  origin: "right",
  distance: "80px",
  delay: 100,
  duration: 2000,
  reset: true,
});

sr.reveal(".row", { delay: 300 });
srRight.reveal(".contact-info", {});

// sr.reveal(".skills-box", { delay: 100 });
sr.reveal(".form-control", { delay: 100 });
