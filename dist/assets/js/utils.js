const toggle = document.getElementById("themeToggle");
const html = document.documentElement;
const themeIcon = document.getElementById("themeIcon");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  html.classList.remove("dark");
  toggle.checked = false;
  themeIcon.textContent = "light_mode";
} else {
  // Default to dark if not explicitly light
  html.classList.add("dark");
  toggle.checked = true;
  themeIcon.textContent = "dark_mode";
}

// Toggle theme and save preference
toggle.addEventListener("change", () => {
  const isDark = toggle.checked;
  if (isDark) {
    html.classList.add("dark");
    themeIcon.textContent = "dark_mode";
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    themeIcon.textContent = "light_mode";
    localStorage.setItem("theme", "light");
  }
});

// scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
});

// scroll down button

window.addEventListener("scroll", () => {
  const scrollBtn = document.getElementById("scroll-down-btn");
  const hideAt = 200;

  if (window.scrollY > hideAt) {
    scrollBtn.classList.add("opacity-0", "pointer-events-none");
  } else {
    scrollBtn.classList.remove("opacity-0", "pointer-events-none");
  }
});

//bg animation
VANTA.TRUNK({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
});

//responsive menu

// Toggle mobile nav visibility
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});
