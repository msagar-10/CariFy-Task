(function ($) {
  "use strict";
  $(document).on("ready", function () {
    /*==============================================================================
		  Header Sticky JS
	  ===============================================================================*/
    var activeSticky = $("#active-sticky"),
      winDow = $(window);
    winDow.on("scroll", function () {
      var scroll = $(window).scrollTop(),
        isSticky = activeSticky;
      if (scroll < 150) {
        isSticky.removeClass("is-sticky");
      } else {
        isSticky.addClass("is-sticky");
      }
    });

    /*==============================================================================
		 	Mobile Menu JS
	  ===============================================================================*/
    var $offcanvasNav = $("#offcanvas-menu a");
    $offcanvasNav.on("click", function () {
      var link = $(this);
      var closestUl = link.closest("ul");
      var activeLinks = closestUl.find(".active");
      var closestLi = link.closest("li");
      var linkStatus = closestLi.hasClass("active");
      var count = 0;

      closestUl.find("ul").slideUp(function () {
        if (++count == closestUl.find("ul").length)
          activeLinks.removeClass("active");
      });
      if (!linkStatus) {
        closestLi.children("ul").slideDown();
        closestLi.addClass("active");
      }
    });

    /*==============================================================================
		  Hero Slider
	  ================================================================================*/
    $(".hero-slider").owlCarousel({
      items: 1,
      autoplay: true,
      loop: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      smartSpeed: 500,
      merge: true,
      nav: true,
      dots: false,
      margin: 24,
      navText: [
        "<i class='fi-rr-angle-small-left'></i>",
        "<i class='fi-rr-angle-small-right'></i>",
      ],
    });
  });

  /*==============================================================================
		Preloader JS
	================================================================================*/
  $(window).on("load", function (event) {
    $("#preloader").delay(800).fadeOut(500);
  });
})(jQuery);
