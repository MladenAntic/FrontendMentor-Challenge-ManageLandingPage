const dots = document.querySelectorAll(".dot");

$(".testimonials-wrapper").owlCarousel({
  autoplay: true,
  slideSpeed: 1000,
  items: 3,
  loop: true,
  nav: false,
  navText: false,
  margin: 30,
  dots: false,
  responsive: {
    280: {
      items: 1,
    },
    767: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

let index;

function changeTestimonial() {
  switch (index) {
    case 1:
      dots[0].style.background = "var(--bright-red)";

      dots[1].style.background = "none";
      dots[2].style.background = "none";
      dots[3].style.background = "none";
      break;
    case 2:
      dots[1].style.background = "var(--bright-red)";

      dots[0].style.background = "none";
      dots[2].style.background = "none";
      dots[3].style.background = "none";
      break;
    case 3:
      dots[2].style.background = "var(--bright-red)";

      dots[0].style.background = "none";
      dots[1].style.background = "none";
      dots[3].style.background = "none";
      break;
    case 4:
      dots[3].style.background = "var(--bright-red)";

      dots[0].style.background = "none";
      dots[1].style.background = "none";
      dots[2].style.background = "none";
      break;
  }
}

function automate() {
  index = 1;
  changeTestimonial();

  setTimeout(() => {
    index = 2;
    changeTestimonial();
  }, 5000);

  setTimeout(() => {
    index = 3;
    changeTestimonial();
  }, 10000);

  setTimeout(() => {
    index = 4;
    changeTestimonial();
  }, 15000);
}

automate();

setInterval(() => {
  automate();
}, 20000);
