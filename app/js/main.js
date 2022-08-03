$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-dotshead',
    });
    
    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        slidesPerRow: 4,
        asNavFor: '.header__slider', 
        responsive: [
          {
            breakpoint: 961, 
            settings: 'unslick',
          },
        ]  
        
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-map',
        responsive: [
          {
            breakpoint: 1210,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            }
          },
          {
            breakpoint: 426,
            settings: {
              slidesToShow: 1,
              centerMode: false,
            }
          },
        ]  
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1103,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              centerMode: true,
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            }
          },
        ]  
    });

    $('.holder__slider, .shop__slider').slick({
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt=""></img>',
        infinite: true,
        fade: true,
    });

});

// Calc

$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg"></div><div class="quantity-button quantity-down"><img src="img/minus.svg"></div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});

$('.quantity-button').on('click', function(){
  let summ = $('.nights').val() * $('.guests').val() * 150;
  $('.summ').html(summ);
})

let summ = $('.nights').val() * $('.guests').val() * 150;
  $('.summ').html(summ);

// Surfboard content

$('.surfboard-box__circle').on('click', function(){
    $(this).toggleClass('active')
});

// Menu

$('.menu-btn').on('click', function(){
  $('.menu').toggleClass('active');
});

// Wow

new WOW().init();

// Scroll


jQuery(document).ready(function() {
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top - 80;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
    return false;
  });
});











