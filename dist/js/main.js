$(document).ready(function () {
    var postItem = $('.content__item');
    var postImg = postItem.find('.post__img_wrap');

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
                    slidesToShow: 5,
                    infinite: true
                }
            }, {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 4,
                    infinite: true
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true
                }

            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    infinite: true
                }
            }]
    })
});