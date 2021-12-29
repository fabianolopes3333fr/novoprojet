jQuery(document).ready(function ($) {

  //FIXED HEADER
  window.onscroll = function () {
    if (window.pageYOffset > 140) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  };



  // isotope
  let btns = $("#services .button-group button");// click button

  btns.click(function (e) {
    $("#services .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");// filter
    $("#services .grid").isotope({
      filter: selector,
    });
  });

   $(window).on("load", function () {
    $("#services .grid").isotope({
      filter: "*",
    });
  });

  // magnify
  $(".grid .popup-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
      tPrev: "Anterior",
      tNext: "Próxima",
      tCounter: "%curr% de %total%",
    },
  });

  //owl carousel
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items:2,
    loop:true,
    margin:30,
    autoplayTimeout:true,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:false,
        loop:true
      },
      600:{
        items:1,
        nav:false,
        loop:true
      },
      1000:{
        items:2,
        nav:false,
        loop:true
      }
    }
  });
  $('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
  })
  
  





});