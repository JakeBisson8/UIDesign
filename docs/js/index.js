$(document).ready(function(){
    $("#navigation-title").hide();
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    $('.tooltipped').tooltip();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.tabs').tabs();
    $('.scrollspy').scrollSpy();
    $('.materialboxed').materialbox();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
});

//update navigation style when the user scrolls down and returns to the top of the screen
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 30) {
            $("#navigation").removeClass("transparent z-depth-0").addClass("grey lighten-2 z-depth-1");
            $("#navigation-title").show();
        }
        else {
            $("#navigation").removeClass("grey lighten-2 z-depth-1").addClass("transparent z-depth-0"); 
            $("#navigation-title").hide();
        }
    });
});

//Apple website carousel button actions
$("#apple-website-carousel-btn-next").click(function () {
    $("#apple-website-carousel").carousel('next');
});
$("#apple-website-carousel-btn-prev").click(function () {
    $("#apple-website-carousel").carousel('prev');
});

//grocery store carousel button actions
$("#grocery-store-carousel-next").click(function () {
    $('#grocery-store-carousel').carousel('next');
});
$("#grocery-store-carousel-prev").click(function () {
    $('#grocery-store-carousel').carousel('prev');
});

//Bike service shop button actions
$("#bike-service-carousel-next").click(function () {
    $('#bike-service-carousel').carousel('next');
});
$("#bike-service-carousel-prev").click(function () {
    $('#bike-service-carousel').carousel('prev');
});

//hockey academy button actions
$("#hockey-academy-carousel-next").click(function () {
    $('#hockey-academy-carousel').carousel('next');
});
$("#hockey-academy-carousel-prev").click(function () {
    $('#hockey-academy-carousel').carousel('prev');
});