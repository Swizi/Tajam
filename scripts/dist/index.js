"use strict";

$(document).ready(function () {
  $(".slogans_slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
  });
  $(".reviews_slider").slick({
    arrows: true,
    dots: true
  });
  $(".clients_slider").slick({
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
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
  });
});
var burger = document.querySelector(".burger");
var menu = document.querySelector(".dropdown_menu_list");
var reviews_slider = document.querySelectorAll(".reviews_slider"); // const reviews_left_arrow = reviews_slider.querySelector(".slick-prev");

console.log(reviews_slider[0].getElementsByClassName("slick-prev")); // console.log(reviews_left_arrow);
// const left_arrow = document.getElementsByClassName(".slick-prev");
// console.log(left_arrow);

burger.addEventListener("click", function () {
  toggleMenu();
});

function toggleMenu() {
  burger.classList.toggle("burger_active");
  menu.classList.toggle("menu_active");
}

$(function () {
  $(".works_block__work").slice(0, 3).show();
  $("#load_more_button").on('click', function (e) {
    e.preventDefault();
    $(".works_block__work:hidden").slice(0, 3).slideDown();

    if (document.getElementsByClassName("works_block__work")[11].clientWidth !== 0) {
      document.getElementById("load_more_button").style.display = "none";
    } else {
      document.getElementById("load_more_button").style.display = "block";
    }
  });
});