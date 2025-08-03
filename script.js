// Auto slider with dot update
const images = ["1.png", "2.png"];
let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");
const dots = document.querySelectorAll(".dot");

function updateSlider() {
  sliderImage.src = images[currentIndex];
  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
}
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}, 3000);

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});
document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});

// Swiper init
new Swiper('.swiper', {
  slidesPerView: 1.2,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  touchRatio: 1.5,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Manual scroll slider
const slider = document.getElementById("slider");
const dotsManual = document.querySelectorAll(".slider-wrapper .dot");

function scrollToSlide(index) {
  const slideWidth = slider.children[index].offsetWidth + 20;
  slider.scrollTo({ left: index * slideWidth, behavior: "smooth" });
  dotsManual.forEach(dot => dot.classList.remove("active"));
  if (dotsManual[index]) dotsManual[index].classList.add("active");
}

slider.addEventListener("scroll", () => {
  const slideWidth = slider.children[0].offsetWidth + 20;
  const index = Math.round(slider.scrollLeft / slideWidth);
  dotsManual.forEach(dot => dot.classList.remove("active"));
  if (dotsManual[index]) dotsManual[index].classList.add("active");
});
 const toggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.getElementById("mobileMenu");

    toggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
    });

 function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
 }    


 const vehiclesBtn = document.getElementById('vehiclesBtn');
const vehiclesMenu = document.getElementById('vehiclesMenu');

vehiclesBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent jumping to #
  vehiclesMenu.classList.toggle('active');
});

// Optional: Close when clicking outside
document.addEventListener("DOMContentLoaded", () => {
  const navItems = [
    { id: "vehiclesBtn", menu: "vehiclesMenu" },
    { id: "energyBtn", menu: "energyMenu" },
    { id: "chargingBtn", menu: "chargingMenu" },
    { id: "discoverBtn", menu: "discoverMenu" }
  ];

  navItems.forEach(({ id, menu }) => {
    const btn = document.getElementById(id);
    const dropdown = document.getElementById(menu);

    btn.addEventListener("mouseover", () => {
      hideAllDropdowns();
      dropdown.style.display = "flex";
    });

    dropdown.addEventListener("mouseleave", () => {
      dropdown.style.display = "none";
    });
  });

  function hideAllDropdowns() {
    document.querySelectorAll(".nav-dropdown").forEach(dropdown => {
      dropdown.style.display = "none";
    });
  }

  document.body.addEventListener("click", (e) => {
    if (!e.target.closest(".navbar") && !e.target.closest(".nav-dropdown")) {
      hideAllDropdowns();
    }
  });
});
