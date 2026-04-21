const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // Dot follows mouse instantly
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';

  // Ring follows with smooth lag
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';

  requestAnimationFrame(animateCursor);
}

animateCursor();

/* 2. NAVBAR — scroll border effect */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

/* 3. HAMBURGER MENU (mobile) */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

/*  4. SCROLL REVEAL */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

/* 5. ANIMATED STAT COUNTERS */
function animateCount(spanEl, target) {
  const duration = 1600; // ms

  const step = (timestamp) => {
    if (!step.startTime) step.startTime = timestamp;
    const elapsed  = timestamp - step.startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out quartic
    const eased    = 1 - Math.pow(1 - progress, 4);

    spanEl.textContent = Math.round(eased * target);

    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

const statCards = document.querySelectorAll('.stat-card');

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        const numEl  = entry.target.querySelector('[data-target]');
        const target = parseInt(numEl.dataset.target, 10);
        const spanEl = numEl.querySelector('span');

        animateCount(spanEl, target);
        statObserver.unobserve(entry.target); // run once
      }
    });
  },
  { threshold: 0.5 }
);

statCards.forEach((card) => statObserver.observe(card));

/* 6. TOOL BAR ANIMATION */
const toolSection = document.getElementById('tools');

const toolObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.tool-bar');
        bars.forEach((bar) => {
          bar.style.width = bar.dataset.width + '%';
        });
        toolObserver.unobserve(entry.target); // run once
      }
    });
  },
  { threshold: 0.3 }
);

if (toolSection) {
  toolObserver.observe(toolSection);
}
