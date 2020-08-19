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
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 400,
            settings: {
                slidesToShow: 1
            }
        }
    ]
    });
});

const burger = document.querySelector(".burger");
const menu = document.querySelector(".dropdown_menu_list");
const reviews_slider = document.querySelectorAll(".reviews_slider");

// const reviews_left_arrow = reviews_slider.querySelector(".slick-prev");
console.log(reviews_slider[0].getElementsByClassName("slick-prev"));

// console.log(reviews_left_arrow);

// const left_arrow = document.getElementsByClassName(".slick-prev");

// console.log(left_arrow);

burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
});

