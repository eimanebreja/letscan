$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.navigation').addClass('navcolored');

        } else {
            $('.navigation').removeClass('navcolored');
        }
    });
});

$(document).ready(function () {
    $(".owl-one").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        loop: true,
        // margin: 1,
        responsiveClass: true,
        nav: true,
        navText: ["<img src='assets/images/ic_slide_left.svg'>", "<img src='assets/images/ic_slide_right.svg'>"],

        responsive: {
            0: {
                stagePadding: 80,
                items: 1,
                margin: 0,
            },
            568: {
                items: 4
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });
    $(".owl-two").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        loop: true,
        // margin: 1,
        responsiveClass: true,
        nav: true,
        navText: ["<img src='assets/images/ic_slide_left.svg'>", "<img src='assets/images/ic_slide_right.svg'>"],

        responsive: {
            0: {
                stagePadding: 30,
                items: 2,
            },
            568: {
                items: 4
            },
            600: {
                items: 4
            },
            1000: {
                items: 3
            }
        }
    });

});
$(document).ready(function () {


});

$(document).ready(function () {
    $("#link_top").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    $("#link_tops").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    $("#link_gallery").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    $("#link_gallerys").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    $("#link_technology").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    $("#link_technologys").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    $("#link_sample").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    $("#link_samples").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    $("#link_contact").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    $("#link_contacts").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    $("#link_faq").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    $("#link_faqs").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

});

const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const body = document.getElementById("body-area");


menuIcon.addEventListener("click", function () {
    if (slideoutMenu.style.opacity == "1") {
        slideoutMenu.style.opacity = "0";
        slideoutMenu.style.pointerEvents = "none";
        // navcolored.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.5)";
        body.style.overflow = "auto";

        $('.hamburger').toggleClass('is-active');
    } else {
        slideoutMenu.style.opacity = "1";
        slideoutMenu.style.pointerEvents = "auto";
        body.style.overflow = "hidden";
        // navcolored.style.boxShadow = "none";
        $('.hamburger').toggleClass('is-active');
    }
});

(function () {
    $('.menu-lists').on('click', function () {
        $('.hamburger').toggleClass('is-active');
    })
})();

function closeNavSp() {
    if (slideoutMenu.style.opacity == "1") {
        slideoutMenu.style.opacity = "0";
        slideoutMenu.style.pointerEvents = "none";
        body.style.overflow = "auto";
        $('.hamburger').toggleClass('is-active');
    } else {
        slideoutMenu.style.opacity = "1";
        slideoutMenu.style.pointerEvents = "auto";
        $('.hamburger').toggleClass('is-active');
        body.style.overflow = "hidden";
    }
}


$(document).ready(function () {
    $("#showMenu1").click(function () {
        $("#menu1").slideToggle("fast");
        if ($("#pic1").attr("src") ===
            "assets/images/ic_plus.svg") {
            $("#pic1").attr(
                "src",
                "assets/images/ic_minus.svg"
            );
        } else {
            $("#pic1").attr(
                "src",
                "assets/images/ic_plus.svg"
            );
        }
    });
    $("#showMenu2").click(function () {
        $("#menu2").slideToggle("fast");
        if ($("#pic2").attr("src") ===
            "assets/images/ic_plus.svg") {
            $("#pic2").attr(
                "src",
                "assets/images/ic_minus.svg"
            );
        } else {
            $("#pic2").attr(
                "src",
                "assets/images/ic_plus.svg"
            );
        }
    });
    $("#showMenu3").click(function () {
        $("#menu3").slideToggle("fast");
        if ($("#pic3").attr("src") ===
            "assets/images/ic_plus.svg") {
            $("#pic3").attr(
                "src",
                "assets/images/ic_minus.svg"
            );
        } else {
            $("#pic3").attr(
                "src",
                "assets/images/ic_plus.svg"
            );
        }
    });
    $("#showMenu4").click(function () {
        $("#menu4").slideToggle("fast");
        if ($("#pic4").attr("src") ===
            "assets/images/ic_plus.svg") {
            $("#pic4").attr(
                "src",
                "assets/images/ic_minus.svg"
            );
        } else {
            $("#pic4").attr(
                "src",
                "assets/images/ic_plus.svg"
            );
        }
    });
    $("#showMenu5").click(function () {
        $("#menu5").slideToggle("fast");
        if ($("#pic5").attr("src") ===
            "assets/images/ic_plus.svg") {
            $("#pic5").attr(
                "src",
                "assets/images/ic_minus.svg"
            );
        } else {
            $("#pic5").attr(
                "src",
                "assets/images/ic_plus.svg"
            );
        }
    });
    $("#showMenu6").click(function () {
        $("#menu6").slideToggle("fast");
        if ($("#pic6").attr("src") ===
            "assets/images/ic_plus.svg") {
            $("#pic6").attr(
                "src",
                "assets/images/ic_minus.svg"
            );
        } else {
            $("#pic6").attr(
                "src",
                "assets/images/ic_plus.svg"
            );
        }
    });
    $("#showMenu7").click(function () {
        $("#menu7").slideToggle("fast");
        if ($("#pic7").attr("src") ===
            "assets/images/ic_plus.svg") {
            $("#pic7").attr(
                "src",
                "assets/images/ic_minus.svg"
            );
        } else {
            $("#pic7").attr(
                "src",
                "assets/images/ic_plus.svg"
            );
        }
    });
    $("#showMenu8").click(function () {
        $("#menu8").slideToggle("fast");
        if ($("#pic8").attr("src") ===
            "assets/images/ic_plus.svg") {
            $("#pic8").attr(
                "src",
                "assets/images/ic_minus.svg"
            );
        } else {
            $("#pic8").attr(
                "src",
                "assets/images/ic_plus.svg"
            );
        }
    });
    $("#showMenu9").click(function () {
        $("#menu9").slideToggle("fast");
        if ($("#pic9").attr("src") ===
            "assets/images/ic_plus.svg") {
            $("#pic9").attr(
                "src",
                "assets/images/ic_minus.svg"
            );
        } else {
            $("#pic9").attr(
                "src",
                "assets/images/ic_plus.svg"
            );
        }
    });
    $("#showMenu10").click(function () {
        $("#menu10").slideToggle("fast");
        if ($("#pic10").attr("src") ===
            "assets/images/ic_plus.svg") {
            $("#pic10").attr(
                "src",
                "assets/images/ic_minus.svg"
            );
        } else {
            $("#pic10").attr(
                "src",
                "assets/images/ic_plus.svg"
            );
        }
    });
    $("#showMenu11").click(function () {
        $("#menu11").slideToggle("fast");
        if ($("#pic11").attr("src") ===
            "assets/images/ic_plus.svg") {
            $("#pic11").attr(
                "src",
                "assets/images/ic_minus.svg"
            );
        } else {
            $("#pic11").attr(
                "src",
                "assets/images/ic_plus.svg"
            );
        }
    });
    $("#showMenu12").click(function () {
        $("#menu12").slideToggle("fast");
        if ($("#pic12").attr("src") ===
            "assets/images/ic_plus.svg") {
            $("#pic12").attr(
                "src",
                "assets/images/ic_minus.svg"
            );
        } else {
            $("#pic12").attr(
                "src",
                "assets/images/ic_plus.svg"
            );
        }
    });
});

function tapClick(elem) {
    var a = document.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove("actives");
        a[i].classList.remove("actives-span");
    }
    elem.classList.add("actives");
    elem.classList.add("actives-span");
}