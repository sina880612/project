$(function () {

    $(".nav_inside ul li:nth-child(5) a").click(function (a) {

        a.preventDefault();

        $(".login_block").fadeIn();

    })

    $(".nav_mobile ul li:nth-child(5) a").click(function (b) {

        b.preventDefault();

        $(".nav_mobile").slideUp();

        $(".login_block").fadeIn();

    });

    $(".footer_right ul:nth-of-type(4) li:nth-of-type(2) a").click(function (c) {

        c.preventDefault();

        $(".login_block").fadeIn();

    })

    $(".fa-xmark").click(function () {

        $(".login_block").fadeOut();

    })

    $(".login_block").click(function () {

        $(".login").click(function (s) {

            s.stopPropagation();
        })

        $(".login_block").fadeOut();

    })

})