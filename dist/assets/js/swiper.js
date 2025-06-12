const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: updateBulletStyles,
    slideChange: updateBulletStyles,
  },
});

function updateBulletStyles() {
  const bullets = document.querySelectorAll(".swiper-pagination-bullet");

  bullets.forEach((bullet) => {
    bullet.style.backgroundColor = "#fef3c7"; // Tailwind orange-200
    bullet.style.width = "12px";
    bullet.style.height = "12px";
    bullet.style.margin = "0 6px";
    bullet.style.borderRadius = "9999px";
    bullet.style.transition = "all 0.3s ease";
  });

  const active = document.querySelector(".swiper-pagination-bullet-active");
  if (active) {
    active.style.backgroundColor = "#f97316"; // Tailwind orange-500
    active.style.width = "13px";
    active.style.height = "13px";
  }
}
