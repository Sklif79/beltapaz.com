$(document).ready(function(){
    mapFooter();

    //sliders
    $('.promo-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'slider-dots',
        nextArrow: '<div class="slider-next"></div>',
        prevArrow: '<div class="slider-prev"></div>',
        arrows: true
    });

    $('.slider-partners').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="slider-next"></div>',
        prevArrow: '<div class="slider-prev"></div>',
        arrows: true
    });
});


function mapFooter() {
    var myMap;
    ymaps.ready(function () {
        myMap = new ymaps.Map('mapFooter', {
            center: [53.71382238397995,23.82329127007925],
            zoom: 16,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: '',
                balloonContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '/assets/images/map-marker.png',
                // Размеры метки.
                iconImageSize: [25, 37],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                //iconImageOffset: [-3, -42]
            });

        // myMap.behaviors.disable("scrollZoom");

        myMap.geoObjects.add(myPlacemark);
    });

}