$(document).ready(function () {

    mapFooter();

    searchActive();

    doubleRange();

    datapickerLang();

    $('a.expo-more-group, a.awards-slider-group, a.awards-slider-group').fancybox({
        closeBtn: true,
        padding:0,
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0,0,0,0.5)'
                }
            }
        }
    });

    $('a.modalbox').fancybox({
        closeBtn: true,
        padding:0,
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0,0,0,0.5)'
                }
            }
        }
    });

    $(".expo__item-news, .news-item__text").dotdotdot({
        ellipsis: "",
        tolerance: 1
    });

    faqSpoilar();

    $("#card-image").tabs();
    $("#card-tabs").tabs();
    $("#send-order").tabs();


    $("#datepicker").datepicker();


    //************************** sliders *********************************
    $('.promo-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'slider-dots',
        nextArrow: '<div class="slider-next"></div>',
        prevArrow: '<div class="slider-prev"></div>',
        arrows: true
    });

    $('.slider-partners').slick({
        // infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="slider-next"></div>',
        prevArrow: '<div class="slider-prev"></div>',
        arrows: true,
        responsive: [
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 4
                }
            },

            {
                breakpoint: 498,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider-news').slick({
        // infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="slider-next"></div>',
        prevArrow: '<div class="slider-prev"></div>',
        arrows: true,
        responsive: [
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 4
                }
            },

            {
                breakpoint: 498,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.expo-more-slider').slick({
        // infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="expo-more-slider-next"></div>',
        prevArrow: '<div class="expo-more-slider-prev"></div>',
        arrows: true
    });

    $('.news-page__slider').slick({
        // infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="expo-more-slider-next"></div>',
        prevArrow: '<div class="expo-more-slider-prev"></div>',
        arrows: true
    });

    $('.awards-slider, .about-slider').slick({
        // infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="about-slider-next"></div>',
        prevArrow: '<div class="about-slider-prev"></div>',
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
                iconImageSize: [25, 37]
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                //iconImageOffset: [-3, -42]
            });

        // myMap.behaviors.disable("scrollZoom");

        myMap.geoObjects.add(myPlacemark);
    });
}


//двойной ползунок
//http://jqueryui.com/slider/#range
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
    var nav = $('#header-bottom__nav');


    el.on('click', function () {
        nav.hide();
        el.parent().addClass('focus');
        $('.header-bottom__search-el').attr('placeholder', 'Введите название товара...');
        $('.header-bottom__search-btn').val('Поиск');

        close.show();
    });

    close.on('click', function () {
        el.parent().removeClass('focus');
        nav.show(250);
        $('.header-bottom__search-el').attr('placeholder', 'Поиск...');
        $('.header-bottom__search-btn').val('');
        close.hide();
    });
}

function faqSpoilar() {
    var panelItem = document.querySelectorAll('.question'),
        active = document.getElementsByClassName('panel-active');

    Array.from(panelItem).forEach(function (item, i, panelItem) {
        item.addEventListener('click', function (e) {
            if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
                active[0].classList.remove('panel-active'); // убрать класс panel-active

            // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
            this.classList.toggle('panel-active');
        });
    });
}

function dataPickerRu() {
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
            'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
}

function dataPickerGer() {
    $.datepicker.regional['de'] = {
        closeText: "Schließen",
        prevText: "&#x3C;Zurück",
        nextText: "Vor&#x3E;",
        currentText: "Heute",
        monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni",
            "Juli", "August", "September", "Oktober", "November", "Dezember"],
        monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun",
            "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        weekHeader: "KW",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['de']);
}

function dataPickerEsp() {
    $.datepicker.regional['es'] = {
        closeText: "Cerrar",
        prevText: "&#x3C;Ant",
        nextText: "Sig&#x3E;",
        currentText: "Hoy",
        monthNames: [ "enero","febrero","marzo","abril","mayo","junio",
            "julio","agosto","septiembre","octubre","noviembre","diciembre" ],
        monthNamesShort: [ "ene","feb","mar","abr","may","jun",
            "jul","ago","sep","oct","nov","dic" ],
        dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
        dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
        dayNamesMin: [ "D","L","M","X","J","V","S" ],
        weekHeader: "Sm",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);
}


function datapickerLang() {
    var lang = $('.dropbtn-lang').attr('data-lang');
    console.log(lang);

    switch (lang) {
        case 'ru':
            dataPickerRu();
            break;

        case 'ger':
            dataPickerGer();
            break;

        case 'sp':
            dataPickerEsp();
            break;

        default:
            $.datepicker.setDefaults($.datepicker.regional['']);
    }
}