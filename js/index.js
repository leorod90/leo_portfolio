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
$(document).ready(function () {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Add the controls attribute and autoplay if it's a mobile device
  if (isMobile) {
    $('.speech-bubble').text('Click Me!');

    $('#click-trigger').click(function () {
      $('.appear-div').css('opacity', 1);
      $('.go-corner-left').css({
        'top': '-30%',
        'left': '-30%',
        'height': '200%',
        'width': '200%',
        'border-radius': '0%'
      });
      $('.go-corner').css({
        'top': '-30%',
        'right': '-30%',
        'height': '200%',
        'width': '200%',
        'border-radius': '0%'
      });
    });
  } else {
    $('.huddln-mp4').attr({
      'controls': false,
      'autoplay': false
    });

    $('.speech-bubble').text('Hover Me!');
  }
});

let hoverTimeout;

$('.huddln-mp4').on('mouseover', function (e) {
  const evt = e.type;
  if (evt === 'mouseover') {
    this.play();
    hoverTimeout = setTimeout(() => {
      $('.speech-wrapper').fadeOut(500);
    }, 3000); // 3000 milliseconds = 3 seconds
  }
});

$('.huddln-mp4').on('mouseout', function (e) {
  clearTimeout(hoverTimeout);
  this.pause();
});

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function updateElementText(element, text, iterations) {
  const randomText = text
    .split('')
    .map((char, i) => {
      if (i < iterations) {
        return text[i];
      }
      if (char.match(/[A-Z]/)) {
        return letters[Math.floor(Math.random() * 26)];
      }
      return char;
    })
    .join('');

  element.text(randomText);
}

function displayRandomText() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const data1 = $('#title-1'); // Replace with your element selector
  const data1Length = data1.data('value').length;

  let iterations1 = 0;
  const speed = 30

  const interval1 = setInterval(function () {
    const randomText = data1.text().split('').map((char, i) => {
      if (i < iterations1) {
        return data1.data('value')[i];
      }
      return letters[Math.floor(Math.random() * 26)];
    }).join('');

    data1.text(randomText);

    if (iterations1 >= data1Length) {
      clearInterval(interval1);
    }

    iterations1 += 0.5;
  }, speed);

  const data2 = $('#title-2'); // Replace with your element selector
  const data2Length = data2.data('value').length;

  const interval2 = setInterval(function () {
    const randomText = data2.text().split('').map((char, i) => {
      if (i + data1Length < iterations1) {
        return data2.data('value')[i];
      }
      return letters[Math.floor(Math.random() * 26)];
    }).join('');

    data2.text(randomText);

    if (iterations1 >= data2Length + data1Length) {
      clearInterval(interval2);
    }

    iterations1 += 0.5;
  }, speed);

  const data3 = $('#title-3'); // Replace with your element selector
  const data3Length = data3.data('value').length;
  console.log( data2.text())
  const interval3 = setInterval(function () {
    const randomText = data3.text().split('').map((char, i) => {
      if (i + data1Length + data2Length < iterations1) {
        return data3.data('value')[i];
      }
      return letters[Math.floor(Math.random() * 26)];
    }).join('');

    data3.text(randomText);

    if (iterations1 >= data3Length + data2Length + data1Length) {
      clearInterval(interval3);
    }

    iterations1 += 0.5;
  }, speed);
}


// Call the function to start the random text animation
displayRandomText();