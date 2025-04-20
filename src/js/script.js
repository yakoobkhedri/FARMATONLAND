// menu

let overlay = document.getElementById('overlay');
let mobileMenu = document.querySelector('.mobileMenu');

overlay.addEventListener('click', function () {
  overlay.classList.remove('active');
  mobileMenu.classList.remove('active');
})

// cloud

setTimeout(function() {
  document.querySelectorAll('img.cloud').forEach(img => {
      img.classList.remove('active');
  });
  document.querySelector('main').classList.remove('active');
}, 1500); // 

// accordion
let accordionBtn = Array.from(document.getElementsByClassName('accordionBtn'));

accordionBtn.forEach((item)=>{
  item.addEventListener('click' , function () {
    item.nextElementSibling.classList.toggle('active');
  })
})
// swiper
var costumer = new Swiper(".costumer", {
  slidesPerView: 6,
  spaceBetween: 8,
  breakpoints: {
    1200: {
      spaceBetween: 80,
    },
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
});

var roadmap = new Swiper(".roadmap", {
  slidesPerView: 4,
  spaceBetween: 22,
  breakpoints: {
    768: {
      spaceBetween: 40,
      slidesPerView: 1,
    },
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next', // دکمه بعدی
    prevEl: '.swiper-button-prev', // دکمه قبلی
  },
});