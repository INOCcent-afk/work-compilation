// !!!!!!!!!!!!!!!!!!!! JAVASCRIPT FOR NAVBAR!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! JAVASCRIPT FOR NAVBAR!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! JAVASCRIPT FOR NAVBAR!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! JAVASCRIPT FOR NAVBAR!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!! JAVASCRIPT FOR NAVBAR!!!!!!!!!!!!!!!!!!!!

const telBtn = document.querySelector(".tel");
const contactPopOut = document.querySelector(".contact-us-popout");
const navigation = document.querySelector(".navigation");
const contactCloseBtn = document.querySelector(".contact-us-closeBtn");
const menu = document.querySelector(".menu");
const menuPopOut = document.querySelector(".menu-popout");
const menuCloseBtn = document.querySelector(".menu-closeBtn");

const applicationDropdown = document.querySelector(".application-mobile-links");
const applicationDropdownLinks = document.querySelectorAll(
  ".application-mobile-links li"
);
const productsDropdown = document.querySelector(".products-mobile-links");
const productsDropdownLinks = document.querySelectorAll(
  ".products-mobile-links li"
);
const aboutDropdown = document.querySelector(".about-mobile-links");
const aboutDropdownLinks = document.querySelectorAll(".about-mobile-links li");
const desktopContactBtn = document.querySelector(".desktop-nav-contact-us");

telBtn.addEventListener("click", () => {
  contactPopOut.style.right = "0px";
  contactPopOut.style.display = "flex";
  navigation.style.transform = "translateX(-280px)";
  navigation.style.pointerEvents = "none";
  navigation.classList.remove("contactPopOutClassMobile");
  document.body.style.maxHeight = "1000px";
});

menu.addEventListener("click", () => {
  menuPopOut.style.right = "0";
  menuPopOut.style.display = "flex";
  navigation.style.transform = "translateX(-280px)";
  navigation.style.pointerEvents = "none";
  navigation.classList.remove("contactPopOutClassMobile");
});
menuCloseBtn.addEventListener("click", () => {
  menuPopOut.style.right = "-280px";
  menuPopOut.style.display = "none";
  navigation.classList.add("contactPopOutClassMobile");
  navigation.style.pointerEvents = "all";
});

contactCloseBtn.addEventListener("click", () => {
  if (window.innerWidth >= 1200) {
    contactPopOut.classList.remove("contactPopOutClass");
    navigation.classList.remove("navigationDeskClass");
    navigation.style.pointerEvents = "all";
    contactPopOut.style.display = "none";
  } else {
    contactPopOut.style.right = "-280px";
    contactPopOut.style.display = "none";
    navigation.classList.add("contactPopOutClassMobile");
    navigation.style.pointerEvents = "all";
  }
});

applicationDropdown.addEventListener("click", () => {
  applicationDropdown.classList.toggle("applicationHideDropdown");
  applicationDropdownLinks.forEach((link) => {
    link.classList.toggle("dropdownsBorderLi");
  });
});
productsDropdown.addEventListener("click", () => {
  productsDropdown.classList.toggle("productsHideDropdown");
  productsDropdownLinks.forEach((link) => {
    link.classList.toggle("dropdownsBorderLi");
  });
});
aboutDropdown.addEventListener("click", () => {
  aboutDropdown.classList.toggle("aboutHideDropdown");
  aboutDropdownLinks.forEach((link) => {
    link.classList.toggle("dropdownsBorderLi");
  });
});

desktopContactBtn.addEventListener("click", () => {
  contactPopOut.classList.add("contactPopOutClass");
  contactPopOut.classList.add("contactPopOutClass");
  navigation.classList.add("navigationDeskClass");
  navigation.style.pointerEvents = "none";
});

// !!!!!!!!!!!!! JAVASCRIPT FOR FIRST SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR FIRST SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR FIRST SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR FIRST SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR FIRST SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR FIRST SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR FIRST SLIDER !!!!!!!!!!!!!!!

var myFirstSwiper = new Swiper(".firstC-swiper-container", {
  speed: 400,
  spaceBetween: 5,
  slidesPerView: 1.1,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1.4,
    },

    535: {
      slidesPerView: 1.8,
    },
    630: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});

// !!!!!!!!!!!!! JAVASCRIPT FOR THIRD SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR THIRD SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR THIRD SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR THIRD SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR THIRD SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR THIRD SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR THIRD SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR THIRD SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR THIRD SLIDER !!!!!!!!!!!!!!!

var myThirdSwiper = new Swiper(".thirdC-swiper-container", {
  speed: 400,
  slidesPerView: 1.1,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.5,
    },
    800: {
      slidesPerView: 2.2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});

// !!!!!!!!!!!!! JAVASCRIPT FOR SECOND SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR SECOND SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR SECOND SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR SECOND SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR SECOND SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR SECOND SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR SECOND SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR SECOND SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR SECOND SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR SECOND SLIDER !!!!!!!!!!!!!!!

var mySecondSwiper = new Swiper(".secondC-swiper-container", {
  speed: 400,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// !!!!!!!!!!!!! JAVASCRIPT FOR ABOUT PAGE SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR ABOUT PAGE SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR ABOUT PAGE SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR ABOUT PAGE SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR ABOUT PAGE SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR ABOUT PAGE SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR ABOUT PAGE SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR ABOUT PAGE SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR ABOUT PAGE SLIDER !!!!!!!!!!!!!!!
// !!!!!!!!!!!!! JAVASCRIPT FOR ABOUT PAGE SLIDER !!!!!!!!!!!!!!!

var myAboutPageSwiper = new Swiper(".aboutPage-slider-swiper-container", {
  speed: 400,
  slidesPerView: 1.2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1.5,
    },
    450: {
      slidesPerView: 1.5,
    },
    500: {
      slidesPerView: 1.8,
    },
    700: {
      slidesPerView: 2.2,
    },
    1000: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
