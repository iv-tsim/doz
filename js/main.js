$(document).ready(function () {
    $('input[type=tel]').mask('+7 (999) 999-99-99', {
        completed: function () {
            this[0].dispatchEvent(new window.Event('change', { bubbles: true }));
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let gallerySlider = new Swiper('.gallery-slider', {
        slidesPerGroup: 1,
        slidesPerView: 6,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper',
        navigation: {
            prevEl: '.slider-arrow.gallery-arrow.gallery-arrow__left',
            nextEl: '.slider-arrow.gallery-arrow.gallery-arrow__right',
        },
    });

    let cardThumbs = new Swiper('.card-thumbs', {
        slidesPerGroup: 1,
        slidesPerView: 5,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper'
    });

    let cardSlider = new Swiper('.card-slider', {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        touchEventsTarget: 'wrapper',
        thumbs: {
            swiper: cardThumbs
        }
    });

    document.addEventListener('change', function (event) {
        const target = event.target;

        if (target.matches('.input') && !target.classList.contains('hero-main__top-date__input')) {
            const parent = target.closest('.input-wrapper');

            if (target.value === '') {
                parent.classList.remove('active');
            } else {
                parent.classList.add('active');
            }
        }
    });

    document.addEventListener('click', function(event) {
        let target = event.target;

        if (!target.closest('.card-select__top')) {
            document.querySelectorAll('.card-select').forEach(function (item) {
                item.classList.remove('active');
            });
        }

        if (target.closest('.card-select__top')) {
            let currentTarget = target.closest('.card-select');

            if (currentTarget.classList.contains('active')) {
                currentTarget.classList.remove('active');
                return;
            }

            document.querySelectorAll('.card-select').forEach(function (item) {
                item.classList.remove('active');
            });

            currentTarget.classList.add('active');
        }

        if (target.matches('.card-select__item')) {
            target.closest('.card-select__main').querySelectorAll('.card-select__item').forEach(function(item) {
                item.classList.remove('active');
            });
            target.classList.add('active');
            target.closest('.card-select').querySelector('.card-select__value').textContent = target.textContent;
        }
    })

    if (document.querySelector('div#map')) {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
                center: [59.955885564123555,40.18514599999996],
                zoom: 15
            });
            
            var myPlacemark = new ymaps.Placemark([59.955885564123555,40.18514599999996], {
                hintContent: 'Харовск, ул. Пустораменская, д. 50, офис 11',
                balloonContent: 'Харовск, ул. Пустораменская, д. 50, офис 11'
            },
            {
                preset: 'islands#redIcon',
                iconLayout: 'default#image',
                iconImageHref: '../img/general/mark.svg',
                iconImageSize: [35, 49],
                iconImageOffset: [-19, -52]
            });

            myMap.geoObjects.add(myPlacemark);

            myMap.controls
                .remove('geolocationControl')
                .remove('fullscreenControl')
                .remove('typeSelector')
                .remove('searchControl')
                .remove('trafficControl')
                .remove('zoomControl')
                .remove('rulerControl');

            myMap.behaviors.disable([
                'scrollZoom',
                'dblClickZoom'
            ]);
        });
    }
});
