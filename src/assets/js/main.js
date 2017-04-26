$(document).ready(function () {

    validatePopups();

    $('.expo__item-title').setMaxHeights();

    dealersToggle();

    servicesImagesToggle();

    asideToggle();

    mapFooter();

    searchActive();

    doubleRange();

    datapickerLang();

    navigation();

    $('a.expo-more-group, a.awards-slider-group, a.awards-slider-group').fancybox({
        closeBtn: true,
        padding: 0,
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(0,0,0,0.5)'
                }
            }
        }
    });

    $('a.modalbox').fancybox({
        closeBtn: true,
        padding: 0,
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(0,0,0,0.5)'
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
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="slider-next"></div>',
        prevArrow: '<div class="slider-prev"></div>',
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },

            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider-news').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="slider-next"></div>',
        prevArrow: '<div class="slider-prev"></div>',
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },

            {
                breakpoint: 690,
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
        arrows: true,
        responsive: [
            {
                breakpoint: 1042,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    $('.news-page__slider').slick({
        // infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="about-slider-next"></div>',
        prevArrow: '<div class="about-slider-prev"></div>',
        arrows: true,
        responsive: [
            {
                breakpoint: 498,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.awards-slider').slick({
        // infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="about-slider-next"></div>',
        prevArrow: '<div class="about-slider-prev"></div>',
        arrows: true,
        responsive: [
            {
                breakpoint: 1042,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.about-slider').slick({
        // infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="about-slider-next"></div>',
        prevArrow: '<div class="about-slider-prev"></div>',
        arrows: true,
        responsive: [
            {
                breakpoint: 498,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.recommendation').slick({
        // infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        // nextArrow: '<div class="about-slider-next"></div>',
        // prevArrow: '<div class="about-slider-prev"></div>',
        arrows: false,
        responsive: [
            {
                breakpoint: 1042,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 1,
                    nextArrow: '<div class="about-slider-next"></div>',
                    prevArrow: '<div class="about-slider-prev"></div>',
                    arrows: true
                }
            }
        ]
    });


    //tablet
    if ($(window).width() < 730) {
        $("#card-tabs").mCustomScrollbar({
            axis: "x"
        });
    }


    //mobile
    if ($(window).width() < 498) {

        $(".product-card__table-wrap").mCustomScrollbar({
            axis: "x",
            advanced: {autoExpandHorizontalScroll: true}
        });
    }

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

//анимация поиска в header
function searchActive() {
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
        monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
        monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun",
            "jul", "ago", "sep", "oct", "nov", "dic"],
        dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
        dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
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

//спойлер фильтра подбора
function asideToggle() {
    if ($(window).width() < 1041) {
        $('aside.aside').slideUp(0);
        $('.filter-wrap').removeClass('active');
        $('.aside-toggle').removeClass('aside-toggle_border');

        $('.aside-toggle').on('click', function () {
            $('aside.aside').slideToggle(500);
            $(this).toggleClass('aside-toggle_border');
            $('.filter-wrap').toggleClass('active');

            if ($(window).width() < 701) {
                $('div.products-nav').slideUp(0);
                $('div.products-nav__wrap').removeClass('active');
            }
        });
    }

    if ($(window).width() < 701) {
        $('div.products-nav').slideUp(0);
        $('.div.products-nav__wrap').removeClass('active');

        $('div.products-nav-toggle').on('click', function () {
            $('div.products-nav').slideToggle(500);
            $(this).toggleClass('aside-toggle_border');
            $('div.products-nav__wrap').toggleClass('active');

            $('aside.aside').slideUp(0);
            $('div.filter-wrap').removeClass('active');
            $('div.aside-toggle').removeClass('aside-toggle_border');
        });
    }
}


//спойлер страницы услуг
function servicesImagesToggle() {
    if ($(window).width() < 1041) {
        $('ul.services-images__list').slideUp(0);

        $('.services-images__info-title').each(function () {
            if (!$(this).siblings('ul.services-images__list').length) {
                $(this).addClass('hide_after');
            }
        });

        $('.services-images__info-title').on('click', function () {
            if ($(this).hasClass('active')) {
                $(this).toggleClass('active').siblings('ul.services-images__list').slideToggle();
                return false;
            }

            $('ul.services-images__list').slideUp();
            $('.services-images__info-title').removeClass('active');

            $(this).toggleClass('active').siblings('ul.services-images__list').slideToggle();
        })
    }
}

//спойлер страницы диллеры
function dealersToggle() {
    if ($(window).width() < 1042) {
        $('div.dealers-mobile__content').slideUp(0);

        $('.dealers-mobile__title').on('click', function () {
            if ($(this).parent('div.dealers-mobile-el').hasClass('active')) {
                $(this).siblings('div.dealers-mobile__content').slideToggle();
                $(this).parent('div.dealers-mobile-el').toggleClass('active');
                return false;
            }

            $('div.dealers-mobile__content').slideUp();
            $('div.dealers-mobile-el').removeClass('active');
            $(this).siblings('div.dealers-mobile__content').slideToggle();
            $(this).parent('div.dealers-mobile-el').toggleClass('active');

        })
    }
}

function navigation() {

    if ($(window).width() < 1042) {
        var mobileNav = $('.header-top');

        $('.mobile-nav').on('click', function () {
            mobileNav.show();
        });

        $('.mobile-nav__close').on('click', function () {
            mobileNav.hide();

        });

        $(document).on('click', function (e) {
            if (
                !$(e.target).closest(".mobile-nav").length
                && !$(e.target).closest(".header-top").length
            ) {
                mobileNav.hide();
            }
        });
    }
}

//плагин обрезки текста
$(document).ready(function () {
    //плагин
    jQuery.fn.liTextLength = function (options) {
        // настройки по умолчанию
        var o = jQuery.extend({
            length: 150,                                    //Видимое кол-во символов
            afterLength: '...',                                //Текст после видимого содержания
            fullText: true,                                    //Добавить ссылку для отображения скрытого текста
            moreText: '<br>полный&nbsp;текст',                //Текст ссылки до показа скрытого содержания
            lessText: '<br>скрыть&nbsp;полный&nbsp;текст'    //Текст ссылки после показа скрытого содержания
        }, options);
        return this.each(function () {
            var
                $el = $(this),
                elText = $.trim($el.text()),
                elLength = elText.length;
            if (elLength > o.length) {
                var
                    textSlice = $.trim(elText.substr(0, o.length)),
                    textSliced = $.trim(elText.substr(o.length));
                if (textSlice.length < o.length) {
                    var
                        textVisible = textSlice,
                        textHidden = $.trim(elText.substr(o.length));
                } else {
                    var
                        arrSlice = textSlice.split(' '),
                        popped = arrSlice.pop(),
                        textVisible = arrSlice.join(' ') + ' ',
                        textHidden = popped + textSliced + ' ';
                }
                ;
                var
                    $elTextHidden = $('<span>').addClass('elTextHidden').html(textHidden),
                    $afterLength = $('<span>').addClass('afterLength').html(o.afterLength + ' '),
                    $more = $('<span>').addClass('more').html(o.moreText);
                $el.text(textVisible).append($afterLength).append($elTextHidden);
                var displayStyle = $elTextHidden.css('display');
                $elTextHidden.hide();
                if (o.fullText) {
                    $el.append($more);
                    $more.click(function () {
                        if ($elTextHidden.is(':hidden')) {
                            $elTextHidden.css({display: displayStyle});
                            $more.html(o.lessText);
                            $afterLength.hide();
                        } else {
                            $elTextHidden.hide();
                            $more.html(o.moreText);
                            $afterLength.show();
                        }
                        ;
                        return false;
                    });
                } else {
                    $elTextHidden.remove();
                }
                ;
            }
            ;
        });
    };

    if ($(window).width() < 497) {
        //инициализация
        $('#tab-description').liTextLength({
            length: 597,                                    //Видимое кол-во символов
            afterLength: '...',                                //Текст после видимого содержания
            fullText: true,                                    //Добавить ссылку для отображения скрытого текста
            moreText: '<div class="description-more"><span>Подробнее</span></div>',                //Текст ссылки до показа скрытого содержания
            lessText: '<div class="description-more"><span>Свернуть</span></div>'    //Текст ссылки после показа скрытого содержания
        });
    }

});


$.fn.setMaxHeights = function () {
    var maxHeight = this.map(function (i, e) {
        return $(e).height();
    }).get();

    return this.height(Math.max.apply(this, maxHeight));
};

//валидатор формы попап
function validatePopups() {
    var myLanguage = {
        errorTitle: "Ошибка отправки формы!",
        requiredField: "Это обязательное поле",
        requiredFields: "Вы задали не все обязательные поля",
        badTime: "Вы задали некорректное время",
        badEmail: "Вы задали некорректный e-mail",
        badTelephone: "Вы задали некорректный номер телефона",
        badSecurityAnswer: "Вы задали некорректный ответ на секретный вопрос",
        badDate: "Вы задали некорректную дату",
        lengthBadStart: "Значение должно быть в диапазоне",
        lengthBadEnd: " символов",
        lengthTooLongStart: "Значение длинее, чем ",
        lengthTooShortStart: "Значение меньше, чем ",
        notConfirmed: "Введённые значения не могут быть подтверждены",
        badDomain: "Некорректное значение домена",
        badUrl: "Некорретный URL",
        badCustomVal: "Введённое значение неверно",
        andSpaces: " и пробелы ",
        badInt: "Значение - не число",
        badSecurityNumber: "Введённый защитный номер - неправильный",
        badUKVatAnswer: "Некорректный UK VAT номер",
        badStrength: "Пароль не достаточно надёжен",
        badNumberOfSelectedOptionsStart: "Вы должны выбрать как минимум ",
        badNumberOfSelectedOptionsEnd: " ответов",
        badAlphaNumeric: "Значение должно содержать только числа и буквы ",
        badAlphaNumericExtra: " и ",
        wrongFileSize: "Загружаемый файл слишком велик (максимальный размер %s)",
        wrongFileType: "Принимаются файлы следующих типов %s",
        groupCheckedRangeStart: "Выберите между ",
        groupCheckedTooFewStart: "Выберите как минимум ",
        groupCheckedTooManyStart: "Выберите максимум из ",
        groupCheckedEnd: " элемент(ов)",
        badCreditCard: "Номер кредитной карты некорректен",
        badCVV: "CVV номер некорректно",
        wrongFileDim: "Неверные размеры графического файла,",
        imageTooTall: "изображение не может быть уже чем",
        imageTooWide: "изображение не может быть шире чем",
        imageTooSmall: "изображение слишком мало",
        min: "минимум",
        max: "максимум",
        imageRatioNotAccepted: "Изображение с таким соотношением сторон не принимается",
        badBrazilTelephoneAnswer: "Введённый номер телефона неправильный",
        badBrazilCEPAnswer: "CEP неправильный",
        badBrazilCPFAnswer: "CPF неправильный"
    };

    $.validate({
        language: myLanguage
    });
}