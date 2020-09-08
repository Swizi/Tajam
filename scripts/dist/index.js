"use strict";

var burger = document.querySelector(".burger");
var menu = document.querySelector(".dropdown_list");
var reviews_slider = document.querySelectorAll(".reviews__slider");
$(document).ready(function () {
  $(".slogans__slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
  });
  $(".reviews__slider").slick({
    arrows: true,
    dots: true
  });
  $(".clients__slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 400,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  var $page = $('html, body');
  $('a[href*="#"]').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 70
    }, 400);
    return false;
  });
});
burger.addEventListener("click", function () {
  toggleMenu();
});

function toggleMenu() {
  burger.classList.toggle("burger_active");
  menu.classList.toggle("menu_active");
}

$(function () {
  $(".work").slice(0, 3).show();
  $("#load-more_button").on('click', function (e) {
    e.preventDefault();
    $(".work:hidden").slice(0, 3).slideDown();

    if (document.getElementsByClassName("work")[11].clientWidth !== 0) {
      document.getElementById("load-more_button").style.display = "none";
    } else {
      document.getElementById("load-more_button").style.display = "block";
    }
  });
});