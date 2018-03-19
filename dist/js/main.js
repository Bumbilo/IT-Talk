$(document).ready(function () {
    var slider = $('.slider');
    var allImages = slider.find('.slider__item');
    var sliderWidth = slider.width();
    var startMargin = 0;

    function Slider(countImg) {
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
    Slider(3)

});
