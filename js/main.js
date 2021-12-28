jQuery(document).ready(function($){

  //FIXED HEADER
  window.onscroll = function(){
    if(window.pageYOffset > 140) {
      $('#header').addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  };



// isotope
  let btns = $("#service .button-group button");// click button

  btns.click(function (e) {
    $("#service .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");// filter
    $("#service .grid").isotope({
      filter: selector,
    });
  });
  $(window).on("load", function() {
    $("#service .grid").isotope({
      filter: "*",
    });
  });

// magnify
  $(".grid .popup-link").magnificPopup({ // slide foto
    type: "image",
    gallery: {
      enabled:true,
      tPrev: "Anterior",
      tNext: "Proxima",
      tCouter: "%curr% de %total%",
    },
  });

//owl carousel
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });





});