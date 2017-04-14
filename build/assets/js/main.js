$(document).ready(function () {
    mapFooter();

    searchActive();

    doubleRange();

    // cropExpo();

    $(".expo__item-news").dotdotdot({
        ellipsis: "",
        tolerance: 1
    });

    faqSpoilar();

    $("#card-image").tabs();
    $("#card-tabs").tabs();


    //************************** sliders *********************************
    $('.promo-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'slider-dots',
        nextArrow: '<div class="slider-next"></div>',
        prevArrow: '<div class="slider-prev"></div>',
        arrows: true,
        adaptiveHeight: true,
        centerMode: true
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

    $('.slider-news').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="slider-next"></div>',
        prevArrow: '<div class="slider-prev"></div>',
        arrows: true
    });

    $('.expo-more-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="expo-more-slider-next"></div>',
        prevArrow: '<div class="expo-more-slider-prev"></div>',
        arrows: true
    });

});


function mapFooter() {
    var myMap;
    ymaps.ready(function () {
        myMap = new ymaps.Map('mapFooter', {
            center: [53.71382238397995, 23.82329127007925],
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


//двойной ползунок
function doubleRange() {
    $("#slider-range").slider({
        range: true,
        min: 80,
        max: 500,
        values: [120, 400],
        slide: function (event, ui) {
            $("#range-min").val(ui.values[0]);
            $("#range-max").val(ui.values[1]);
        }
    });

    $("#range-min").val($("#slider-range").slider("values", 0));
    $("#range-max").val($("#slider-range").slider("values", 1));
}


function searchActive() {
    // var el = $('input.header-bottom__search-el');
    var el = $('input.header-bottom__search-el');
    var close = $('div.header-bottom__search-close');
    var nav = $('nav.header-bottom__nav');


    el.on('click', function () {
        nav.hide().css('position', 'absolute');
        el.parent().addClass('focus');
        $('.header-bottom__search-el').attr('placeholder', 'Введите название товара...');
        $('.header-bottom__search-btn').val('Поиск')
        close.show();
    });

    close.on('click', function () {
        el.parent().removeClass('focus');
        nav.show(600);
        $('.header-bottom__search-el').attr('placeholder', 'Поиск...');
        $('.header-bottom__search-btn').val('');
        close.hide();
    });
}

// function cropExpo () {
//     if ( $('.expo__item-news').length ) {
//
//         $('.expo__item-news').each( function () {
//             var size = 170,
//                 newsContent= $(this),
//                 newsText = newsContent.text();
//
//             if(newsText.length > size){
//                 newsContent.text(newsText.slice(0, size) + ' ...');
//             }
//
//         });
//     }
// }

function faqSpoilar() {
    var panelItem = document.querySelectorAll('.question'),
        active = document.getElementsByClassName('panel-active');

    Array.from(panelItem).forEach(function(item, i, panelItem) {
        item.addEventListener('click', function(e) {
            if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
                active[0].classList.remove('panel-active'); // убрать класс panel-active

            // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
            this.classList.toggle('panel-active');
        });
    });
}