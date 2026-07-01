/* =========================================================
   SAFE BOOTSTRAP (PREVENTS ALL RUNTIME FAILURES)
========================================================= */

function domReady(fn) {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", fn);
    } else {
        fn();
    }
}
domReady(() => {
/* =========================================================
   INFLUNEX — SCRIPT.JS (PART 1)
   Core Interaction Engine
========================================================= */


/* =========================
   GSAP SETUP
========================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================
   LOADER ANIMATION
========================= */

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    const loaderLogo = document.querySelector(".loader-logo");

    const tl = gsap.timeline();

    tl.to(loaderLogo, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power2.out"
    });

    tl.to(loader, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
            loader.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    tl.from(".hero-title", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out"
    }, "-=0.3");

    tl.from(".hero p", {
        opacity: 0,
        y: 30,
        duration: 0.8
    }, "-=0.6");

    tl.from(".hero-buttons", {
        opacity: 0,
        y: 20,
        duration: 0.6
    }, "-=0.5");
});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* =========================
   MOBILE MENU TOGGLE
========================= */

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

menuBtn?.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

// close menu on link click
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});


/* =========================
   CUSTOM CURSOR
========================= */

const cursorDot = document.querySelector(".cursor-dot");
const cursorGlow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    gsap.to(cursorDot, {
        x: x,
        y: y,
        duration: 0.1
    });

    gsap.to(cursorGlow, {
        x: x,
        y: y,
        duration: 0.25
    });
});


/* =========================
   SMOOTH HOVER EFFECTS (BUTTONS)
========================= */

const buttons = document.querySelectorAll("button, .primary-btn, .secondary-btn, .nav-btn");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
            scale: 1.05,
            duration: 0.2
        });
    });

    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
            scale: 1,
            duration: 0.2
        });
    });
});
/* =========================================================
   INFLUNEX — SCRIPT.JS (PART 2)
   ScrollTrigger + Section Animations
========================================================= */


/* =========================
   GLOBAL SMOOTH SECTION REVEALS
========================= */

gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});


/* =========================
   SECTION HEADERS ANIMATION
========================= */

gsap.utils.toArray(".section-header").forEach((header) => {
    gsap.from(header.children, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
            trigger: header,
            start: "top 85%"
        }
    });
});


/* =========================
   HERO PARALLAX EFFECT
========================= */

gsap.to(".hero-bg", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});


/* =========================
   ABOUT SECTION REVEAL
========================= */

gsap.from(".about-content", {
    opacity: 0,
    x: -80,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about",
        start: "top 75%"
    }
});

gsap.from(".mission-card", {
    opacity: 0,
    x: 80,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about",
        start: "top 75%"
    }
});

gsap.from(".highlight-card", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".highlight-grid",
        start: "top 80%"
    }
});


/* =========================
   SERVICES STAGGER ANIMATION
========================= */

gsap.from(".service-card", {
    opacity: 0,
    y: 60,
    scale: 0.95,
    stagger: 0.15,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%"
    }
});


/* =========================
   WHY CHOOSE US CARDS
========================= */

gsap.from(".feature-card", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".why-grid",
        start: "top 80%"
    }
});


/* =========================
   PORTFOLIO REVEAL + ZOOM
========================= */

gsap.from(".portfolio-card", {
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".portfolio-grid",
        start: "top 80%"
    }
});


/* =========================
   PROCESS TIMELINE ANIMATION
========================= */

gsap.from(".process-step", {
    opacity: 0,
    x: -60,
    stagger: 0.2,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".process-grid",
        start: "top 80%"
    }
});


/* =========================
   TESTIMONIALS ANIMATION
========================= */

gsap.from(".testimonial-card", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".testimonial-grid",
        start: "top 80%"
    }
});


/* =========================
   FAQ ACCORDION LOGIC
========================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // close all
        faqItems.forEach(i => i.classList.remove("active"));

        // toggle current
        if (!isActive) {
            item.classList.add("active");
        }
    });
});
/* =========================================================
   INFLUNEX — SCRIPT.JS (PART 3)
   Smooth Scroll + Magnetic UX + Advanced Interactions
========================================================= */


/* =========================
   LENIS SMOOTH SCROLL
========================= */

// Make sure Lenis script is included in HTML CDN
const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


/* Sync Lenis with GSAP ScrollTrigger */
lenis.on("scroll", ScrollTrigger.update);


/* =========================
   MAGNETIC BUTTON SYSTEM
========================= */

const magneticElements = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .nav-btn, .service-card, .feature-card"
);

magneticElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(el, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.4,
            ease: "power2.out"
        });
    });

    el.addEventListener("mouseleave", () => {
        gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.4)"
        });
    });
});


/* =========================
   NAVBAR ADVANCED BEHAVIOR
========================= */

let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // hide on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 100) {
        gsap.to(".navbar", {
            y: -100,
            duration: 0.4,
            ease: "power2.out"
        });
    } else {
        gsap.to(".navbar", {
            y: 0,
            duration: 0.4,
            ease: "power2.out"
        });
    }

    lastScroll = currentScroll;
});


/* =========================
   PORTFOLIO HOVER LIFT EFFECT
========================= */

const portfolioCards = document.querySelectorAll(".portfolio-card");

portfolioCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card.querySelector("img"), {
            scale: 1.15,
            duration: 0.6,
            ease: "power3.out"
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card.querySelector("img"), {
            scale: 1,
            duration: 0.6,
            ease: "power3.out"
        });
    });
});


/* =========================
   TEXT REVEAL (SIMPLIFIED SPLIT EFFECT)
========================= */

const textElements = document.querySelectorAll(".hero-title, .section-title");

textElements.forEach((el) => {
    const text = el.textContent;
    el.innerHTML = "";

    text.split(" ").forEach((word) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(20px)";
        el.appendChild(span);
    });

    gsap.to(el.children, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: el,
            start: "top 85%"
        }
    });
});


/* =========================
   CUSTOM CURSOR ENHANCEMENT (HOVER STATES)
========================= */

document.querySelectorAll("a, button, .service-card, .portfolio-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
        gsap.to(".cursor-dot", {
            scale: 1.5,
            background: "#D4AF37",
            duration: 0.2
        });

        gsap.to(".cursor-glow", {
            scale: 2,
            opacity: 0.3,
            duration: 0.2
        });
    });

    el.addEventListener("mouseleave", () => {
        gsap.to(".cursor-dot", {
            scale: 1,
            background: "#D4AF37",
            duration: 0.2
        });

        gsap.to(".cursor-glow", {
            scale: 1,
            opacity: 1,
            duration: 0.2
        });
    });
});
/* =========================================================
   INFLUNEX — SCRIPT.JS (PART 4)
   Final Polish + Cinematic Experience Layer
========================================================= */


/* =========================
   PAGE LOAD — CINEMATIC INTRO SEQUENCE
========================= */

window.addEventListener("load", () => {
    const heroTl = gsap.timeline({ delay: 0.2 });

    heroTl.from(".navbar", {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power3.out"
    });

    heroTl.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.6
    }, "-=0.4");

    heroTl.from(".hero-stats .stat-card", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.3");
});


/* =========================
   SCROLL-BASED VELOCITY EFFECT
========================= */

let lastScrollY = window.scrollY;
let scrollVelocity = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    scrollVelocity = currentScroll - lastScrollY;
    lastScrollY = currentScroll;

    // subtle global parallax shift based on velocity
    gsap.to(".hero-content", {
        y: scrollVelocity * -0.3,
        duration: 0.4,
        ease: "power2.out"
    });
});


/* =========================
   SECTION FOCUS STATE (DEPTH CONTROL)
========================= */

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            gsap.to(section, {
                filter: "brightness(1.05)",
                duration: 0.4
            });
        },
        onLeave: () => {
            gsap.to(section, {
                filter: "brightness(1)",
                duration: 0.4
            });
        },
        onEnterBack: () => {
            gsap.to(section, {
                filter: "brightness(1.05)",
                duration: 0.4
            });
        }
    });
});


/* =========================
   PARALLAX LAYER SYSTEM (GLOBAL DEPTH)
========================= */

gsap.utils.toArray("[data-parallax]").forEach((el) => {
    const speed = el.dataset.parallax || 0.2;

    gsap.to(el, {
        y: () => -ScrollTrigger.maxScroll(window) * speed,
        ease: "none",
        scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});


/* =========================
   BUTTON PRESS FEEL (HAPTIC SIMULATION)
========================= */

document.querySelectorAll("button, .primary-btn, .secondary-btn").forEach((btn) => {
    btn.addEventListener("mousedown", () => {
        gsap.to(btn, {
            scale: 0.96,
            duration: 0.1
        });
    });

    btn.addEventListener("mouseup", () => {
        gsap.to(btn, {
            scale: 1,
            duration: 0.2,
            ease: "elastic.out(1, 0.4)"
        });
    });

    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
            scale: 1,
            duration: 0.2
        });
    });
});


/* =========================
   SCROLL SNAP FEEL (SOFT GUIDED EXPERIENCE)
========================= */

let snapSections = gsap.utils.toArray("section");

snapSections.forEach((section, i) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        onEnter: () => {
            gsap.to(window, {
                scrollTo: section,
                duration: 0.6,
                ease: "power2.out"
            });
        }
    });
});


/* =========================
   CURSOR FINAL POLISH LAYER
========================= */

let cursorTimeout;

document.addEventListener("mousemove", () => {
    gsap.to(".cursor-glow", {
        opacity: 1,
        duration: 0.2
    });

    clearTimeout(cursorTimeout);

    cursorTimeout = setTimeout(() => {
        gsap.to(".cursor-glow", {
            opacity: 0.6,
            duration: 1
        });
    }, 1000);
});


/* =========================
   PERFORMANCE CLEANUP (GSAP OPTIMIZATION)
========================= */

window.addEventListener("beforeunload", () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
/* =========================================================
   ELITE HERO INTRO — PRODUCT LAUNCH STYLE
========================================================= */

window.addEventListener("load", () => {

    const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
    });

    tl.set(".hero-title span, .hero p, .hero-buttons, .hero-stats .stat-card", {
        willChange: "transform, opacity"
    });

    tl.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.6
    });

    tl.from(".hero-title span", {
        opacity: 0,
        y: 60,
        stagger: 0.03,
        duration: 0.8
    }, "-=0.2");

    tl.from(".hero p", {
        opacity: 0,
        y: 30,
        duration: 0.6
    }, "-=0.4");

    tl.from(".hero-buttons", {
        opacity: 0,
        scale: 0.95,
        duration: 0.6
    }, "-=0.3");

    tl.from(".hero-stats .stat-card", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.7
    }, "-=0.4");
});
/* =========================================================
   ELITE TEXT REVEAL (LETTER-BASED SYSTEM)
========================================================= */

function splitToLetters(selector) {
    document.querySelectorAll(selector).forEach((el) => {
        const text = el.textContent;
        el.innerHTML = "";

        const letters = text.split("");

        letters.forEach((char) => {
            const span = document.createElement("span");

            span.textContent = char === " " ? "\u00A0" : char;
            span.style.display = "inline-block";
            span.style.opacity = "0";
            span.style.transform = "translateY(20px)";
            span.style.willChange = "transform, opacity";

            el.appendChild(span);
        });
    });
}

splitToLetters(".hero-title, .section-title");

gsap.utils.toArray(".hero-title, .section-title").forEach((el) => {
    gsap.to(el.children, {
        opacity: 1,
        y: 0,
        stagger: 0.02,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
            trigger: el,
            start: "top 85%"
        }
    });
});
/* =========================================================
   ELITE SCROLL SYNC FIX
========================================================= */

lenis.on("scroll", (e) => {
    ScrollTrigger.update();

    // optional subtle scroll velocity tracking
    document.documentElement.style.setProperty(
        "--scroll-velocity",
        Math.abs(e.velocity || 0)
    );
});

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
/* =========================================================
   ELITE MICRO POLISH SYSTEM
========================================================= */

// Prevent layout jank on animations
gsap.set("img, .service-card, .portfolio-card", {
    transformOrigin: "center center",
    willChange: "transform"
});

// smooth hover lift consistency
document.querySelectorAll(".service-card, .feature-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            y: -8,
            duration: 0.4,
            ease: "power2.out"
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.4)"
        });
    });
});
});
