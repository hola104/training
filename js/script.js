const cards = document.querySelector('.brands');
let swiper;
const activeSwiper = function () {
    swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 16,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        slidesPerView: 'auto',
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
    return swiper;
};

const breakpoint = window.matchMedia('(max-width: 767px)');
const breakpointChecker = function () {
    if (breakpoint.matches) {
        activeSwiper();
        return;
    }

    if (!breakpoint.matches && swiper !== undefined) {
        swiper.destroy(true, true);
    }
};

breakpoint.addEventListener('change', breakpointChecker);
breakpointChecker();


const readmoreButton = document.querySelector('.readmore-button');
const readmoreImg = document.querySelector('.button__img');
const readmoreTxt = document.querySelector('.button__text');

readmoreButton.addEventListener('click', () => {
    cards.classList.toggle('brands--visible');

    if (readmoreTxt.textContent === 'Показать все') {
        readmoreTxt.textContent = 'Скрыть'
    } else {
        readmoreTxt.textContent = 'Показать все'
    }
    readmoreImg.classList.toggle('button__img--activated');
})
