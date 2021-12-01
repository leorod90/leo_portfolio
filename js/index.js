//toggle menu
//return array
const menuBtn = document.getElementsByClassName("menu-btn");
const mobileMenu = document.getElementsByClassName("mobile-menu");

const toggleMenu = function () {
  mobileMenu[0].classList.toggle("active");
};

menuBtn[0].addEventListener("click", toggleMenu);

document.querySelector("#contain-all").addEventListener("click", function () {
  mobileMenu[0].classList.remove("active");
});

//scrollbar menu
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".header").addClass("header-move");
    // $(".nav-home").removeClass("nav-active");
  } else {
    $(".header").removeClass("header-move");
    // $(".nav-home").addClass("nav-active");
  }
});

//add active to current section
function addActive(nav) {
  const navName = $(`.nav-${nav}`);
  const heightThreshold = $(`#${nav}`).offset().top - 70;
  const heightThreshold_end = $(`#${nav}`).offset().top + $(`#${nav}`).height();
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();

    if (scroll >= heightThreshold && scroll <= heightThreshold_end) {
      navName.addClass("nav-active");
    } else {
      navName.removeClass("nav-active");
    }
  });
}

//addActive('home');
//addActive('skills');
//addActive("about-me");
//addActive("projects");

//scroll to div
$(".header-menu a").click(function () {
  event.preventDefault();
  const divID = this.hash;
  let num = this.hash === "#home" ? -100 : 0;

  $("html, body").animate(
    {
      scrollTop: $(divID).offset().top + num,
    },
    900
  );
});

$(".mobile-menu a").click(function () {
  event.preventDefault();
  const divID = this.hash;
  let num = this.hash === "#home" ? -100 : 0;

  $("html, body").animate(
    {
      scrollTop: $(divID).offset().top + num,
    },
    900
  );
});
