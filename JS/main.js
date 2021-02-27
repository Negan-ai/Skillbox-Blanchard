// form //
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
    rules: {
        name:{
            required: true,
            minLength: 2,
            maxLength:30,
        },

        tel: {
            required: true,
            maxLength: 10,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length == 10
            }
        },
    },

    messages: {
        name: {
            required: 'Как Вас зовут?',
            minLength: 'Не менее двух символов!'
        },

        tel: {
            required: 'Введите Ваш телефон',
            maxLength: 'Не менее десяти символов!'
        }
    },
});
// smooth transition //
$(document).ready(function(){
	$('nav a, .hero__link').on('click', function(event){
		event.preventDefault();
		let href = $(this).attr('href');
		let headerHeight = $('.header').height();
		let offset = $(href).offset().top - headerHeight;
		$('body,html').animate({
			scrollTop: offset,
		}, 1000);
	});

		$('.to-top').on('click', function(event) {
			event.preventDefault();
			$('body,html').animate({
				scrollTop: 0,
			}, 700);
	});
});

// ibg //
function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }
  
  ibg();

// burger //
$(document).ready(function() {
  $('.header-burger').click(function(event) {
      $('.header-burger, .burger-dropdown').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

// * select-menu *//
// realism //
$(document).ready(function() {
  $('.realism').click(function(event) {
      $('.realism, .list-realism').toggleClass('selected');
  });
});
$(document).ready(function() {
  $('.realism').click(function(event) {
      $('.list-impressionism, .list-post-impressionism, .list-vanguard, .list-futurism').removeClass('selected');
      $('.impressionism, .post-impressionism, .vanguard, .futurism').removeClass('selected');
  });
});

// impressionism //
$(document).ready(function() {
  $('.impressionism').click(function(event) {
      $('.impressionism, .list-impressionism').toggleClass('selected');
  });
});
$(document).ready(function() {
  $('.impressionism').click(function(event) {
      $('.list-realism, .list-post-impressionism, .list-vanguard, .list-futurism').removeClass('selected');
      $('.realism, .post-impressionism, .vanguard, .futurism').removeClass('selected');
  });
});

// post-impressionism //
$(document).ready(function() {
  $('.post-impressionism').click(function(event) {
      $('.post-impressionism, .list-post-impressionism').toggleClass('selected');
  });
});
$(document).ready(function() {
  $('.post-impressionism').click(function(event) {
      $('.list-realism, .list-impressionism, .list-vanguard, .list-futurism').removeClass('selected');
      $('.realism, .impressionism, .vanguard, .futurism').removeClass('selected');
  });
});

// vanguard //
$(document).ready(function() {
  $('.vanguard').click(function(event) {
      $('.vanguard, .list-vanguard').toggleClass('selected');
  });
});
$(document).ready(function() {
  $('.vanguard').click(function(event) {
      $('.list-realism, .list-impressionism, .list-post-impressionism, .list-futurism').removeClass('selected');
      $('.realism, .impressionism, .post-impressionism, .futurism').removeClass('selected');
  });
});

// futurism //
$(document).ready(function() {
  $('.futurism').click(function(event) {
      $('.futurism, .list-futurism').toggleClass('selected');
  });
});
$(document).ready(function() {
  $('.futurism').click(function(event) {
      $('.list-realism, .list-impressionism, .list-post-impressionism, .list-vanguard').removeClass('selected');
      $('.realism, .impressionism, .post-impressionism, .vanguard').removeClass('selected');
  });
});

// $(document).ready(function() {
//   $('.search__input').click(function(event) {
//       $('a.realism__btn + .simplebar-scrollbar::before').toggleClass('is-focus');
//   });
// });

/* search */
$(document).ready(function() {
  $('.search__input').click(function(event) {
      $('.search__svg').toggleClass('is-focus');
  });
});

$(document).ready(function() {
  $('.media-search').click(function(event) {
      $('.media-search-content').addClass('media-form-open');
  });
});

$(document).ready(function() {
  $('.media-search').click(function(event) {
      $('.media-search').addClass('media-search-is-open');
  });
});

$(document).ready(function() {
  $('.media-search').click(function(event) {
      $('.header-top__inner').addClass('search-is-open');
  });
});

$(document).ready(function() {
  $('.search-closed__btn').click(function(event) {
      $('.header-top__inner').removeClass('search-is-open');
  });
});

$(document).ready(function() {
  $('.media-search').click(function(event) {
      $('.logo, .header-burger').addClass('display-none');
  });
});

$(document).ready(function() {
  $('.media-search').click(function(event) {
      $('.media-search-content').removeClass('display-none');
  });
});

$(document).ready(function() {
  $('.search-closed__btn').click(function(event) {
      $('.logo, .header-burger').removeClass('display-none');
  });
});

$(document).ready(function() {
  $('.search-closed__btn').click(function(event) {
      $('.media-search-content').toggleClass('display-none');
  });
});

$(document).ready(function() {
  $('.search-closed__btn').click(function(event) {
      $('.media-search').removeClass('media-search-is-open');
  });
});

/* slider */
const sliders = document.querySelectorAll('.swiper-container');

sliders.forEach((el) => {
	let swiper = new Swiper(el, {
		loop: true,
		navigation: {
			nextEl: el.querySelector('.swiper-button-next'),
			prevEl: el.querySelector('.swiper-button-prev'),
		},
	});
});

/* slider-hero */
const mySwiper = new Swiper('.hero__slider', {
  loop: true,
  autoplay: {
    dalay: 5000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

});

/* slider-gallery */
  var swiper = new Swiper('.gallery-container', {
    // slidesPerView: 3,
    // spaceBetween: 50,
    // initialSlide: 1,
    // slidesPerGroup: 3,
    // slidesPerGroup: 3,
    breakpoints: {
      // when window width is >= 320px
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 35,
        slidesPerColumn: 2,
        slidesPerGroup: 1
      },
      665: {
        slidesPerView: 2,
        spaceBetween: 35,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
      },
      // when window width is >= 480px
      980: {
        slidesPerView: 2,
        spaceBetween: 35,
        slidesPerColumn: 2,
        slidesPerGroup: 2
      },
      // when window width is >= 640px
      1340: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        initialSlide: 1,
      },
    },

    pagination: {
      el: '.pag1',
      type: 'fraction',
     },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

/* modal */
$(document).ready(function() {
  $('.gallery-slide__preview').click(function(event) {
      $('.visibility-hidden').addClass('modal-active');
  });
});

/* tabs-content */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event){
          const path = event.currentTarget.dataset.path

          document.querySelectorAll('.tab-content').forEach(function(tabContent) {
           tabContent.classList.remove('tab-content-active')
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
      })

  })
  
})

// france //
document.addEventListener('DOMContentLoaded', function() {
document.querySelectorAll('.france-autor').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-france-content').forEach(function(tabContent) {
       tabContent.classList.remove('tab-link-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-link-active')
  })

})
})

// germany //
document.addEventListener('DOMContentLoaded', function() {
document.querySelectorAll('.germany-autor').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-germany-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-link-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-link-active')
  })

})
})

  // italy //
document.addEventListener('DOMContentLoaded', function() {
document.querySelectorAll('.italy-autor').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-italy-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-link-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-link-active')
  })

})
})

    // russia //
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.russia-autor').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path
  
        document.querySelectorAll('.tab-russia-content').forEach(function(tabContent) {
          tabContent.classList.remove('tab-link-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-link-active')
    })
  
  })
  })

       // belgium //
  document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.belgium-autor').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.tab-belgium-content').forEach(function(tabContent) {
          tabContent.classList.remove('tab-link-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-link-active')
    })

  })
  })

/* accordion */
$(function () {
	$("#accordion").accordion({
		collapsible: true,
		heightStyle: "content",
	});
});

$(function () {
	$("#accordion2").accordion({
		collapsible: true,
		heightStyle: "content"
	});
});

$(function () {
	$("#accordion3").accordion({
		collapsible: true,
		heightStyle: "content"
	});
});

$(function () {
	$("#accordion4").accordion({
		collapsible: true,
		heightStyle: "content"
	});
});

$(function () {
	$("#accordion5").accordion({
		collapsible: true,
		heightStyle: "content"
	});
});
$(document).ready(function() {
  $('.title-1').click(function(event) {
      $('.btn-1').toggleClass('accordion__btn-active');
  });
});
$(document).ready(function() {
  $('.title-2').click(function(event) {
      $('.btn-2').toggleClass('accordion__btn-active');
  });
});
$(document).ready(function() {
  $('.title-3').click(function(event) {
      $('.btn-3').toggleClass('accordion__btn-active');
  });
});
$(document).ready(function() {
  $('.title-4').click(function(event) {
      $('.btn-4').toggleClass('accordion__btn-active');
  });
});
$(document).ready(function() {
  $('.title-5').click(function(event) {
      $('.btn-5').toggleClass('accordion__btn-active');
  });
});
$(document).ready(function() {
  $('.title-6').click(function(event) {
      $('.btn-6').toggleClass('accordion__btn-active');
  });
});
$(document).ready(function() {
  $('.title-7').click(function(event) {
      $('.btn-7').toggleClass('accordion__btn-active');
  });
});

$(document).ready(function() {
  $('.laguage__btn').click(function(event) {
      $('.laguage__btn').removeClass('default');
  });
});

/* events */
$(document).ready(function() {
  $('.events__btn').click(function(event) {
      $('.events-content__item').removeClass('event-hidden');
  });
  $('.events__btn').click(function(event) {
    $('.event-hedden-768').addClass('event-hedden-768-active');
});
$('.events__btn').click(function(event) {
  $('.events__btn').addClass('event-btn-hidden');
});
});

// $(document).ready(function() {
//   $('.events__btn').click(function(event) {
//       $('.event-hedden-768').addClass('event-hedden-768-active');
//   });
// });

// $(document).ready(function() {
//   $('.events__btn').click(function(event) {
//       $('.events__btn').addClass('event-btn-hidden');
//   });
// });

/* events-slider */
var swiper = new Swiper('.events-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* checkbox */
$(document).ready(function() {
  $('.mobile-category-btn').click(function(event) {
      $('.mobile-category-btn').toggleClass('mobile-category-btn--active');
  });
  $('.mobile-category-btn').click(function(event) {
    $('.checkbox-content__label').toggleClass('checkbox-content__label--active');
});
$('.checkbox-content__label').click(function(event) {
  $('.checkbox-content__label').removeClass('checkbox-content__label--active');
});
$('.checkbox-content__label').click(function(event) {
  $('.mobile-category-btn').removeClass('mobile-category-btn--active');
});
$('#checkbox-1, #checkbox-2, #checkbox-3, #checkbox-4, #checkbox-5, #checkbox-6, #checkbox-7, #checkbox-8, #checkbox-9, #checkbox-10, #checkbox-11, #checkbox-12').click(function(event) {
  $('.checkbox-selected').removeClass('checkbox-selected');
});
$('#checkbox-1').click(function(event) {
$('#checkbox-1').addClass('checkbox-selected');
});
$('#checkbox-2').click(function(event) {
$('#checkbox-2').addClass('checkbox-selected');
});
$('#checkbox-3').click(function(event) {
$('#checkbox-3').addClass('checkbox-selected');
});
$('#checkbox-4').click(function(event) {
$('#checkbox-4').addClass('checkbox-selected');
});
$('#checkbox-5').click(function(event) {
$('#checkbox-5').addClass('checkbox-selected');
});
$('#checkbox-6').click(function(event) {
$('#checkbox-6').addClass('checkbox-selected');
});
$('#checkbox-7').click(function(event) {
$('#checkbox-7').addClass('checkbox-selected');
});
$('#checkbox-8').click(function(event) {
$('#checkbox-8').addClass('checkbox-selected');
});
$('#checkbox-9').click(function(event) {
$('#checkbox-9').addClass('checkbox-selected');
});
$('#checkbox-10').click(function(event) {
$('#checkbox-10').addClass('checkbox-selected');
});
$('#checkbox-11').click(function(event) {
  $('#checkbox-11').addClass('checkbox-selected');
  });
  $('#checkbox-12').click(function(event) {
    $('#checkbox-12').addClass('checkbox-selected');
    });
$('.checkbox-selected').click(function(event) {
  $('.checkbox-content__label').addClass('checkbox-content__label--active');
  });
});

/* slider-editions */
var swiper = new Swiper('.editions-container', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  pagination: {
    el: '.pag2',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.next-2',
    prevEl: '.prev-2',
  },
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1,
      spaceBetween: 35,
      slidesPerGroup: 1,
    },
    665: {
      slidesPerView: 2,
      spaceBetween: 35,
      slidesPerGroup: 2
    },
    // when window width is >= 480px
    980: {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 2
    },
    // when window width is >= 640px
    1460: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },
});

/*projects-slider*/
var swiper = new Swiper('.projects-container', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.next-3',
    prevEl: '.prev-3',
  },
  breakpoints: {
      // when window width is >= 320px
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 35,
        slidesPerGroup: 2
      },
      // when window width is >= 480px
      980: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2
      },
      // when window width is >= 640px
      1460: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
});

/* map */
ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.758463,37.601079],
        zoom: 14
    });
    var myGeoObject = new ymaps.GeoObject({
      // geometry: {
      //     type: "Point", // тип геометрии - точка
      //     coordinates: [55.758463,37.601079] // координаты точки
      // }
  });

  var myPlacemark = new ymaps.Placemark([55.758463,37.601079], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-marker.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
});
  
  
  myMap.geoObjects.add(myGeoObject);
  myMap.geoObjects.add(myPlacemark);
}

/* select */

const element = document.querySelector('.select');
  const choices = new Choices(element, {
  });



  
