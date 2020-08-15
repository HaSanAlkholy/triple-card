let inp = document.getElementById('search-input')
let sBtn = document.getElementById('sBtn');
// first slider
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  updateOnWindowResize: true,
  autoplay: {
    delay: 4000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//products slider
var mySwiper = new Swiper('.s-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  updateOnWindowResize: true,
  slidesPerView: 5,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    // when window width is >= 480px
    992: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    // when window width is >= 480px
    782: {
      slidesPerView: 3,
      spaceBetween: 5
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 250px
    150: {
      slidesPerView: 1,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// second navbar

$('#sec-icon').click(function (e) {
  $('#sec-nav').toggleClass('sec-nav-active');
  $('#sec-items').toggleClass('show');
});

$('#close-btn').click(function (e) {
  $('#sec-items').toggleClass('show');
  $('#sec-nav').toggleClass('sec-nav-active');
});

$('#sec-nav').click(function (e) {
  if (e.target.id == "sec-nav" || e.target.id == "sec-search") {
    $('#sec-items').removeClass('show');
    $('#sec-nav').removeClass('sec-nav-active');
  }
});

// navbar scroll

window.addEventListener("scroll", scrolled);

function scrolled() {
  let nav = document.getElementById('nav');
  if (this.scrollY > 115) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
}


//search

sBtn.addEventListener('click', search);


function search() {

  if (!document.getElementById('header-icons').classList.contains('header-icons-active')) {

    $('#header-icons .shopping-cart').fadeOut(1000);
    $('#header-icons .account').fadeOut(1000);
    $('#header-icons').addClass('header-icons-active');
    input();

  } else if (!inp.value) {

    $('#header-icons .shopping-cart').fadeIn(1000);
    $('#header-icons .account').fadeIn(1000);
    $('#header-icons').removeClass('header-icons-active');
    sBtn.innerHTML = '<span><i class="fa fa-search"></i></span>';


  } else if (inp.value) {

    document.getElementById('search-form1').submit();

  }

}

//input


inp.addEventListener('input', input);

function input() {

  let val = inp.value;

  if (!val) {
    sBtn.innerHTML = '<span><i class="fas fa-times"></i></span>';
  } else {
    sBtn.innerHTML = '<span><i class="fa fa-search"></i></span>';
  }

}


