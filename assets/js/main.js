//loader

$(window).on('load', function () {
  $('.pre-loader').fadeOut("500", function () {
      $('html').removeClass("overflow");
      $(this).remove();
  });
});

// first slider
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  updateOnWindowResize: true,
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//products slider
var mySwiper2 = new Swiper('.s-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  updateOnWindowResize: true,
  slidesPerView: 5,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
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
  $('html').toggleClass('overflow');
});

$('#close-btn').click(function (e) {
  $('#sec-items').removeClass('show');
  $('#sec-nav').removeClass('sec-nav-active');
  $('html').removeClass('overflow');
});

$('#sec-nav').click(function (e) {
  if (e.target.id == "sec-nav" || e.target.id == "sec-search") {
    $('#sec-items').removeClass('show');
    $('#sec-nav').removeClass('sec-nav-active');
    $('html').removeClass('overflow');
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
let form = document.getElementById('search-form1');
let inp = document.getElementById('search-input');
let sBtn = document.getElementById('sBtn');
let sBtn2 = document.getElementById('sBtn2');
let cSearch = document.getElementById('close');

// listeners
sBtn.addEventListener('click', openSearch);
cSearch.addEventListener('click', closeSearch);
sBtn2.addEventListener('click', Search);


function openSearch() {

  $('#search').toggleClass('search-active');

  $('html').addClass('overflow');
  
}

function closeSearch() {

  $('#search').toggleClass('search-active');

  $('html').removeClass('overflow');

}

function Search() {

  if (inp.value) {
    form.submit();
  }

}



function show(e){
  $(e).toggleClass('active');
}