import { changeTogglerStyle } from "./menutoggler";
import { startFunction } from "./navbarscroll";
import { countdownTable } from "./countdown";
import { viewAllSpeakers } from "./viewspeakers";
import Swiper from 'swiper/bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// Customize Bootstrap JS //


// Swiper Init and Customize

 // init Swiper:
 var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    breakpoints: {
        // when window width is >= 576px
        576: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
        },
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });







