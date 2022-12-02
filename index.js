let container = document.querySelector('.container')

// swiper

const fetchSwipe = (swipeType, slideView) => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: slideView,
        spaceBetween: 80,
        slidesPerGroup: swipeType,
        loop: false,
        loopFillGroupWithBlank: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

fetchSwipe(3, 3)

let a = window.screen.width

console.log(a);

if (a <= 480) {
    fetchSwipe(1, 1)
    window.reload()
} else if (a <= 1025) {
    fetchSwipe(2, 2)
} else {
    fetchSwipe(3, 3)
}

// swiper