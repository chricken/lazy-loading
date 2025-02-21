'use strict';

// KONSTANTEN / VARIABLEN
const elements = {};

// FUNKTIONEN
const domMapping = () => {
    elements.sections = document.querySelectorAll('section');
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

const appendEventlisteners = () => { }

const appendObservers = () => {
    const intersectionOptions = {
        rootMargin:'-100px'
        // threshold: 1
    }
    const myIntersectionObserver = new IntersectionObserver(intersectionHandler, intersectionOptions);
    for (let el of elements.sections) {
        myIntersectionObserver.observe(el);
    }
}

const init = () => {
    domMapping();
    appendEventlisteners();
    appendObservers();
}

// INIT
init();