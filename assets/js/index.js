'use strict';

// KONSTANTEN / VARIABLEN
const elements = {};

// FUNKTIONEN
const domMapping = () => {
    elements.sections = document.querySelectorAll('section');
    elements.imgLazyLoading = document.querySelectorAll('img[data-src]')
}

const intersectionHandler = entries => {
    console.log(entries);
    for (let entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.add('hidden');
        }
    }
}

const lazyLoadingHandler = entries => {
    for (let entry of entries) {
        if (entry.isIntersecting) {
            if (!entry.target.src) {
                entry.target.src = entry.target.dataset.src;
            }
        }
    }
}

const appendEventlisteners = () => { }

const appendObservers = () => {
    const intersectionOptions = {
        rootMargin: '-100px'
    }
    const myIntersectionObserver = new IntersectionObserver(intersectionHandler, intersectionOptions);
    for (let el of elements.sections) {
        myIntersectionObserver.observe(el);
    }

    // 50px, bevor das Bild in den Viewport scrollt
    const lazyLoadingOptions = {
        rootMargin: '50px'
    }
    const lazyLoadingObserver = new IntersectionObserver(lazyLoadingHandler, lazyLoadingOptions);
    for (let img of elements.imgLazyLoading) {
        lazyLoadingObserver.observe(img)
    }
}

const init = () => {
    domMapping();
    appendEventlisteners();
    appendObservers();
}

// INIT
init();