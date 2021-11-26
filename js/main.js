$(document).ready(function () {
    $('input[type=tel]').mask('+7 (999) 999-99-99', {
        completed: function () {
            this[0].dispatchEvent(new window.Event('change', { bubbles: true }));
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let fallerySlider = new Swiper('.gallery-slider', {
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
});
