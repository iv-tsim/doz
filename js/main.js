document.addEventListener('DOMContentLoaded', function() {

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
        }
    });

});