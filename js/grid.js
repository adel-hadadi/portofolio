$(function () {
  $("#sidebar-toggle-show").click(function () {
    $(".menu nav").addClass("show");
    if ($(".menu nav").hasClass("show")) {
      $("#sidebar-toggle-close").removeClass("d-none");
    }
  });
  $("#sidebar-toggle-close").click(function () {
    $(".menu nav").removeClass("show");
    $("#sidebar-toggle-close").addClass("d-none");
  });

  $(".image-library-other").owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      478: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

});
//scroll on skills
$(".nav_item").click(function () {
  var elemanId = $(this).attr("id");
  if ($(".menu nav").hasClass("show")) {
    $(".menu nav").removeClass("show");
    $("#sidebar-toggle-close").addClass("d-none");
  }
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("." + elemanId).offset().top,
    },
    200
  );
  
});
$(".scroll-icon").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".time-line").offset().top,
    },
    200
  );
});

$(".scroll-top").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("body").offset().top,
    },
    200
  );
});
$(".slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  rtl: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1700: {
      items: 4,
    },
  },
});

$(".portfolio .portfolio-img").hover(
  function () {
    $(this).children().css("bottom", "0");
  },
  function () {
    $(this).children().css("bottom", "-100%");
  }
);


