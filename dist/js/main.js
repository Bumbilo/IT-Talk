$(document).ready(function () {
    var postItem = $('.content__item');
    var postImg = postItem.find('.post__img_wrap');
    var sliderItem = $('.slider').find('.slider__wrapper');


    sliderItem.hover(function() {
        $(this).find('.slider__info').css('transition', 'translateY(-60%)')
    }, function() {
        $(this).find('.slider__info').css('transition', 'translateY(-30%)')
    });

    postItem.hover(function () {
        $(this).find('.post__category').css('top', '10px');
        $(this).find('.post__meta').css('right', '10px');
    }, function () {
        $(this).find('.post__category').css('top', '-25px');
        $(this).find('.post__meta').css('right', '-60px');
    });

    postImg.hover(function () {
        $(this).find('.post__img_mask').css('right', '-600px');
    }, function () {
        $(this).find('.post__img_mask').css('right', '300px');
    });

    $('.slider').slick({
        infinite: true,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 2400,
                settings: {
                    slidesToShow: 4,
                    infinite: true
                }
            }, {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    infinite: true
                }
            }]
    })
});