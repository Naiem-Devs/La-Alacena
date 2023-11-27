(function($) {
  "use strict";


      // sticky nav
      $(window).scroll(function(){
        if($(this).scrollTop()>50){
            $('.header-area').addClass("sticky")  
        }
        else{
            $('.header-area').removeClass("sticky")
        }
    });



 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

    // mainSlider
    function mainSlider() {
      var BasicSlider = $(".hero-area");
      BasicSlider.on("init", function(e, slick) {
        var $firstAnimatingElements = $(".single-slider:first-child").find(
          "[data-animation]"
        );
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on("beforeChange", function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.single-slider[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: false,
        autoplaySpeed: 10000,
        dots: false,
        fade: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-shift-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-shift-right"></i></button>',
        responsive: [
          { breakpoint: 767, settings: { dots: false, arrows: false } }
        ]
      });
  
      function doAnimations(elements) {
        var animationEndEvents =
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        elements.each(function() {
          var $this = $(this);
          var $animationDelay = $this.data("delay");
          var $animationType = "animated " + $this.data("animation");
          $this.css({
            "animation-delay": $animationDelay,
            "-webkit-animation-delay": $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function() {
            $this.removeClass($animationType);
          });
        });
      }
    }
    mainSlider();


  // owlCarousel
  // $(".gellery-slider").owlCarousel({
  //   loop: true,
  //   margin:10,
  //   items: 6,
  //   navText: [
  //     '',
  //     ''
  //   ],
  //   rtl:true, 
  //   nav: true, 
  //   stagePadding:50,
  //   URLhashListener:true,
  //   autoplayHoverPause:true,
  //   startPosition: 'URLHash',
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     767: {
  //       items: 2
  //     },
  //     992: {
  //       items: 2
  //     }
  //   }
  // });
  $('.gellery-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="assets/img/right.svg" alt=""></button>',
  });
  $('.rincones-slider').slick({  
    slidesToShow: 1,
    slidesToScroll: 1, 
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="assets/img/right.svg" alt=""></button>',
  });


  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  }); 

  // counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // isotop
  $(".grid").imagesLoaded(function() {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item"
      }
    });

    // filter items on button click
    $(".portfolio-menu").on("click", "button", function() {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".portfolio-menu button").on("click", function(event) {
      $(this)
        .siblings(".active")
        .removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });
  

  // Nice-select
  $('select').niceSelect();

  // Nice-select
  $('.slt').niceSelect();
 
})(jQuery);
