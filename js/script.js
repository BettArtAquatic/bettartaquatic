// ==== Scroll Reveal Animation ====
const revealElements = document.querySelectorAll(
  "section, .produk-item, .artikel-item, .testi-item"
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("reveal-show");
    } else {
      el.classList.remove("reveal-show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ==== Navbar Shrink on Scroll ====
const navbar = document.querySelector(".navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("shrink", window.scrollY > 50);
  });
}

// ==== Hamburger Menu Slide ====
const openBtn = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
const closeBtn = document.getElementById("closeBtn");

if (openBtn && closeBtn && mobileNav) {
  openBtn.addEventListener("click", () => {
    mobileNav.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("show");
  });
}

// ==== Artikel Slider Auto Scroll ====
const artikelSlider = document.querySelector(".artikel-slider");
if (artikelSlider) {
  let scrollX = 0;
  setInterval(() => {
    scrollX += 1;
    if (scrollX >= artikelSlider.scrollWidth / 2) {
      scrollX = 0;
    }
    artikelSlider.scrollTo({ left: scrollX });
  }, 30);
}

// ==== Tim Slider Auto Scroll ====
const timSlider = document.querySelector(".tim-slider");
if (timSlider) {
  let scrollT = 0;
  setInterval(() => {
    scrollT += 1;
    if (scrollT >= timSlider.scrollWidth / 2) {
      scrollT = 0;
    }
    timSlider.scrollTo({ left: scrollT });
  }, 30);
}
