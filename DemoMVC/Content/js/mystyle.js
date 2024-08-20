
$('.counter').countUp();
$(function () {
    $('.navbar-toggler').click(function () {
        $('body').toggleClass('noscroll');
    })
});
$(window).on("scroll", function () {
var scroll = $(window).scrollTop();

if (scroll >= 80) {
    $("#site-header").addClass("nav-fixed");
} else {
    $("#site-header").removeClass("nav-fixed");
}
});
$(".navbar-toggler").on("click", function () {
$("header").toggleClass("active");
});
$(document).on("ready", function () {
if ($(window).width() > 991) {
$("header").removeClass("active");
}
$(window).on("resize", function () {
if ($(window).width() > 991) {
    $("header").removeClass("active");
}
});
});

$(document).ready(function () {
    $('.owl-one').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            480: {
                items: 1,
                nav: false
            },
            667: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true
            }
        }
    })
})

$(document).ready(function () {
    $(".owl-two").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false,
                loop: false
            }
        }
    })
})
    $(document).ready(function () {
        $('.owl-carousel-posts').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplaySpeed: 1000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false
                },
                480: {
                    items: 3,
                    nav: true,
                    margin: 0
                },
                736: {
                    items: 4,
                    nav: true,
                    margin: 0
                },
                1000: {
                    items: 5,
                    nav: true,
                    margin: 0
                }
            }
        })
    })
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            400: {
                items: 2,
                nav: true,
                margin: 20
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
                margin: 25
            }
        }
    })
})

window.onscroll = function () {
scrollFunction()
};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("movetop").style.display = "block";
} else {
document.getElementById("movetop").style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

