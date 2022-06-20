let config1 = {
    type: 'carousel',
    perView: 3,
    breakpoints: {
        767: {
            perView: 1
        },
        992: {
            perView: 2
        }
    }
};

new Glide('._blog_slider', config1).mount();

let config2 = {
    type: 'carousel',
    perView: 2,
    peek: { before: 200, after: 200 },
    perTouch: 2,
    animationDuration: 1000,
    breakpoints: {
        575: {
            perView: 1,
            peek: { before: 0, after: 20 }
        },
        767: {
            perView: 1,
            peek: { before: 0, after: 0 }
        },
        992: {
            perView: 2
        },
        1601: {
            peek: { before: 0, after: -50 }
        }
    }
};

new Glide('._testi_slider', config2).mount();