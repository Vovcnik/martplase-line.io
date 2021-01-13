$(function() {

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "15px",
        readOnly: true,
        spacing: "5px",
        ratedFill: "#ffc000"

    });
    $(".rate-stars").rateYo({
        rating: 4,
        starWidth: "12px",
        readOnly: true,
        spacing: "5px",
        ratedFill: "#ffc000"
    });
    $(".rate-starss").rateYo({
        rating: 4.5,
        starWidth: "18px",
        readOnly: true,
        spacing: "5px",
        ratedFill: "#ffc000"
    });

    $('.product__item-inner').slick({
        slidesToScroll: 1,
        arrows: true,

    });
    $('.slaider__followers-inner').slick({
        slidesToScroll: 3,
        slidesToShow: 3,
        arrows: true,
        responsive: [{
            breakpoint: 1150,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,

            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,

            }
        }, ]

    });

    $(".js-range-slaider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 400,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $('.filter__item-drop .sidebar__title, .filter__extra').on('click', function() {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    $('.icon-th-list').on('click', function() {
        $('.mix__items').addClass('list');
        $('.mix__item').removeClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th').removeClass('active');
    });
    $('.icon-th').on('click', function() {
        $('.mix__items').removeClass('list');
        $('.mix__item').addClass('list');
        $('.icon-th').addClass('active');
        $('.icon-th-list').removeClass('active');
    });

    $('.notifications').on('click', function() {
        $('.notification__menu').toggleClass('bell-color--active');
        $('.notifications ').toggleClass('bell-color');
        $('.basket').removeClass('basket-color');
        $('.messages').removeClass('message-color');
        $('.messages__menu').removeClass('messages-menu--active');
        $('.basket-menu').removeClass('basket-menu--active');

    });


    $('.basket').on('click', function() {
        $('.basket-menu').toggleClass('basket-menu--active');
        $('.basket').toggleClass('basket-color');
        $('.messages').removeClass('message-color');
        $('.notifications ').removeClass('bell-color');
        $('.messages__menu').removeClass('messages-menu--active');
        $('.notification__menu').removeClass('bell-color--active');

    });

    $('.messages').on('click', function() {
        $('.messages').toggleClass('message-color');
        $('.basket').removeClass('basket-color');
        $('.notifications ').removeClass('bell-color');
        $('.messages__menu').toggleClass('messages-menu--active');
        $('.basket-menu').removeClass('basket-menu--active');
        $('.notification__menu').removeClass('bell-color--active');
    });


    $('input, select').styler();



    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle();
    });

    $('.header__btn-menu').on('click', function() {
        $('.header__box').toggleClass('active');
        $('.logo-text').toggleClass('active');
        $('.basket-menu').removeClass('basket-menu--active');
        $('.messages__menu').removeClass('messages-menu--active');
    });

    $('.tab').on('click', function(e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');



        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

    });

    $('.favorite__priview').on('click', function() {
        $(this).toggleClass('favorite__priview--active')

    });
    var mixer = mixitup(".mix__wordpress-themes, .release__products-inner", {

        animation: {
            duration: 1000,
            enable: true,
            effects: 'scale fade'

        },
        selectors: {
            target: '.less',
        },



    });


});