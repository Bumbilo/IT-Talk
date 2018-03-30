$(document).ready(function () {
    var slider = $('.slider');
    var allImages = slider.find('.slider__item');
    var sliderWidth = slider.width();
    var startMargin = 0;

    function Slider(sliderWidth, countImg) {
        var imageWidth = sliderWidth / countImg;
        allImages.width(imageWidth);

        slider.find('.slider__left').click(function () {
            startMargin += -(sliderWidth / countImg);
            if (startMargin < imageWidth * -(allImages.length - countImg)) {
                startMargin = -imageWidth * (allImages.length - countImg);
            }
            slider.find('.slider__box_content').css('margin-left', startMargin + 'px');
        });

        slider.find('.slider__right').click(function () {
            startMargin += (sliderWidth / countImg);
            if (startMargin > 0) {
                startMargin = 0;
            }
            slider.find('.slider__box_content').css('margin-left', startMargin + 'px');
        });
    }

    $(window).resize(function () {
        sliderWidth = slider.width();
        Slider(sliderWidth, 4);
         if (sliderWidth < 576) {
            Slider(sliderWidth, 1);
        } else if (sliderWidth < 768) {
            Slider(sliderWidth, 2);
        } else if(sliderWidth < 992){
            Slider(sliderWidth, 3);
        } 
    });

    Slider(sliderWidth, 3);
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

});