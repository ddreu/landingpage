///animations

gsap.registerPlugin(ScrollTrigger);

// Example animation
gsap.from(".animate-fade-up", {
  scrollTrigger: {
    trigger: ".animate-fade-up",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

//hero
window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".hero-fade", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
  });

  gsap.from(".hero-image", {
    opacity: 0,
    x: 60,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
  });
});

// Fade in heading text
gsap.from(".next-fade", {
  scrollTrigger: {
    trigger: "#next-section",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power2.out",
});

// Animate brand icons and names with stagger
gsap.from(".next-icon", {
  scrollTrigger: {
    trigger: "#next-section",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.2,
});

gsap.registerPlugin(ScrollTrigger);

// Animate text block
gsap.from(".text-block", {
  scrollTrigger: {
    trigger: ".text-block",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
});

// Animate image block
gsap.from(".image-block", {
  scrollTrigger: {
    trigger: ".image-block",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  x: 60,
  duration: 1,
  ease: "power2.out",
  delay: 0.2,
});

gsap.registerPlugin(ScrollTrigger);

// Animate title
gsap.from(".features-title", {
  scrollTrigger: {
    trigger: "#features",
    start: "top 85%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power2.out",
});

// Animate subtitle
gsap.from(".features-subtext", {
  scrollTrigger: {
    trigger: "#features",
    start: "top 85%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.2,
});

// Animate feature items
gsap.from(".feature-item", {
  scrollTrigger: {
    trigger: ".feature-item",
    start: "top 90%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
});

gsap.registerPlugin(ScrollTrigger);

// Animate left text block
gsap.from(".reveal-text", {
  scrollTrigger: {
    trigger: ".reveal-text",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  x: -50,
  duration: 1,
  ease: "power2.out",
});

// Animate image from right
gsap.from(".reveal-image", {
  scrollTrigger: {
    trigger: ".reveal-image",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  x: 50,
  duration: 1,
  ease: "power2.out",
  delay: 0.2,
});

// Optional: Button pop-in
gsap.from(".reveal-button", {
  scrollTrigger: {
    trigger: ".reveal-text",
    start: "top 80%",
  },
  opacity: 0,
  scale: 0.95,
  duration: 0.6,
  delay: 0.4,
  ease: "back.out(1.7)",
});

//
gsap.registerPlugin(ScrollTrigger);

// Section title (delayed slightly)
gsap.from(".pricing-title", {
  scrollTrigger: {
    trigger: ".pricing-title",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power2.out",
  delay: 0.2,
});

// Pricing cards (start later and stagger)
gsap.from(".pricing-card", {
  scrollTrigger: {
    trigger: ".pricing-card",
    start: "top 90%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  delay: 0.3,
  stagger: 0.25,
});

// Features overview (starts after cards)
gsap.from(".pricing-features", {
  scrollTrigger: {
    trigger: ".pricing-features",
    start: "top 90%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  delay: 0.4,
});

// Final CTA (slight delay for impact)
gsap.from(".pricing-cta", {
  scrollTrigger: {
    trigger: ".pricing-cta",
    start: "top 85%",
  },
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  ease: "back.out(1.7)",
  delay: 0.5,
});

gsap.registerPlugin(ScrollTrigger);

// Animate FAQ title block
gsap.from(".faq-title", {
  scrollTrigger: {
    trigger: ".faq-title",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power2.out",
  delay: 0.2,
});

// Animate each FAQ item with stagger
gsap.from(".faq-item", {
  scrollTrigger: {
    trigger: ".faq-item",
    start: "top 90%",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.3,
  stagger: 0.15,
});

// Animate final CTA block
gsap.from(".faq-cta", {
  scrollTrigger: {
    trigger: ".faq-cta",
    start: "top 90%",
  },
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  delay: 0.4,
  ease: "back.out(1.7)",
});

//
gsap.registerPlugin(ScrollTrigger);

// Animate blog title
gsap.from(".blog-title", {
  scrollTrigger: {
    trigger: ".blog-title",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.2,
  ease: "power2.out",
});

// Animate each blog card
gsap.from(".blog-card", {
  scrollTrigger: {
    trigger: ".blog-card",
    start: "top 90%",
  },
  opacity: 0,
  y: 30,
  duration: 0.9,
  ease: "power2.out",
  delay: 0.3,
  stagger: 0.2,
});

// Animate CTA button
gsap.from(".blog-cta", {
  scrollTrigger: {
    trigger: ".blog-cta",
    start: "top 90%",
  },
  opacity: 0,
  y: 20,
  scale: 0.95,
  duration: 0.8,
  delay: 0.4,
  ease: "back.out(1.7)",
});

gsap.registerPlugin(ScrollTrigger);

// Contact section title
gsap.from(".contact-title", {
  scrollTrigger: {
    trigger: ".contact-title",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power2.out",
  delay: 0.2,
});

// Contact input fields
gsap.from(".contact-input", {
  scrollTrigger: {
    trigger: ".contact-input",
    start: "top 90%",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.3,
  stagger: 0.15,
});

// Submit button
gsap.from(".contact-button", {
  scrollTrigger: {
    trigger: ".contact-button",
    start: "top 90%",
  },
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  delay: 0.4,
  ease: "back.out(1.7)",
});
// download app

// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".download-text", {
//   scrollTrigger: {
//     trigger: "#download-app",
//     start: "top 80%",
//     toggleActions: "play none none reverse",
//   },
//   opacity: 0,
//   x: -50,
//   duration: 1,
//   ease: "power2.out",
// });

// gsap.from(".download-image", {
//   scrollTrigger: {
//     trigger: "#download-app",
//     start: "top 80%",
//     toggleActions: "play none none reverse",
//   },
//   opacity: 0,
//   x: 50,
//   duration: 1,
//   ease: "power2.out",
//   delay: 0.2,
// });

// wave bg
