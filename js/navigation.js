

$(".nav_drawer").click(function () {
    $(".main_navigation").toggle();
    $(".nav_drawer").toggleClass('nav_drawer_opened');
});

$(window).scroll(function () {
    $("header").addClass("header_scroll");
    $("nav").addClass("main_navigation_scroll");
    $(".logo").addClass("logo_scroll");
});

$(window).scroll(function () {
    var current = $(this).scrollTop();
    if (current < 500) {
        $("header").removeClass("header_scroll");
        $("nav").removeClass("main_navigation_scroll");
        $(".logo").removeClass("logo_scroll");
    }
});

//rules page

$(".ground").show();
$(".team").hide();
$(".match_officials").hide();
$(".how_to_play").hide();
$(".more_information").hide();

$(".page_navbar").click(function () {
    $(".page_nav").toggle();
});

$("#ground_list").click(function () {
    $(".ground").show();
    $(".team").hide();
    $(".match_officials").hide();
    $(".how_to_play").hide();
    $(".more_information").hide();
});

$("#team_list").click(function () {
    $(".ground").hide();
    $(".team").show();
    $(".match_officials").hide();
    $(".how_to_play").hide();
    $(".more_information").hide();
});

$("#match_officials_list").click(function () {
    $(".ground").hide();
    $(".team").hide();
    $(".match_officials").show();
    $(".how_to_play").hide();
    $(".more_information").hide();
});

$("#how_to_play_list").click(function () {
    $(".ground").hide();
    $(".team").hide();
    $(".match_officials").hide();
    $(".how_to_play").show();
    $(".more_information").hide();
});

$("#more_information_list").click(function () {
    $(".ground").hide();
    $(".team").hide();
    $(".match_officials").hide();
    $(".how_to_play").hide();
    $(".more_information").show();
});


//stats page 

$(".odi_cricket").show();
$(".test_cricket").hide();
$(".t20_cricket").hide();
$(".team_rankings").hide();

$(".page_navbar").click(function () {
    $(".page_nav").toggle();
});

$("#odi_cricket_list").click(function () {
    $(".odi_cricket").show();
    $(".test_cricket").hide();
    $(".t20_cricket").hide();
    $(".team_rankings").hide();
});

$("#test_cricket_list").click(function () {
    $(".odi_cricket").hide();
    $(".test_cricket").show();
    $(".t20_cricket").hide();
    $(".team_rankings").hide();
});

$("#t20_cricket_list").click(function () {
    $(".odi_cricket").hide();
    $(".test_cricket").hide();
    $(".t20_cricket").show();
    $(".team_rankings").hide();
});

$("#team_rankings_list").click(function () {
    $(".odi_cricket").hide();
    $(".test_cricket").hide();
    $(".t20_cricket").hide();
    $(".team_rankings").show();
});

