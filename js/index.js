//TOGGLE BURGER
const menuBurger = document.getElementsByClassName("menu-btn");
const sideMenu = document.getElementsByClassName("mobile-menu");

const toggleMenu = function () {
  sideMenu[0].classList.toggle("active");
};

menuBurger[0].addEventListener("click", toggleMenu);

document.querySelector("#contain-all").addEventListener("click", function () {
  sideMenu[0].classList.remove("active");
});

// SCROLL HEADER ANIMATION
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".header").addClass("header-move");
  } else {
    $(".header").removeClass("header-move");
  }
});

// //ADD ACTIVE TO CURRENT SECTION
const removeAllClasses = () => {
  $(".header-menu>a.nav-active").removeClass("nav-active");
  $(".mobile-menu>a.mobile-active").removeClass("mobile-active");
};

const addTheClass = (name) => {
  $(`.nav-${name}`).addClass("nav-active");
  $(`.nav-${name}-min`).addClass("mobile-active");
};

$(document).scroll(function () {
  var y = $(this).scrollTop();
  const projectsDivTop = $("#projects").offset().top;
  const aboutMeDivTop = $("#about-me").offset().top;

  if (y < projectsDivTop) {
    removeAllClasses();
    addTheClass("home");
  } else if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight ||
    y >= aboutMeDivTop - 150
  ) {
    removeAllClasses();
    addTheClass("about-me");
  } else {
    removeAllClasses();
    addTheClass("projects");
  }
});

//SCROLL TO DIVE=
const scrollToDiv = (event, divID) => {
  let num = this.hash === "#home" ? -100 : 0;
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $(divID).offset().top + num,
    },
    900
  );
};

$(".header-menu a").click(function (event) {
  const divID = this.hash;
  scrollToDiv(event, divID);
});

$(".mobile-menu a").click(function (event) {
  const divID = this.hash;
  scrollToDiv(event, divID);
});

//RELOAD TO TOP
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


//PLAY MP4
$('.huddln-mp4').on('mouseover mouseout', function (e) {
  const evt = e.type;
  if (evt === 'mouseover') {
    this.play();
  }
  if (evt === 'mouseout') {
    this.pause();
  }
});