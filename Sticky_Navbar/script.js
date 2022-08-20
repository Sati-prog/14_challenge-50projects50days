"use strict";

const nav = document.querySelector('.nav'),
      menu = document.querySelectorAll('a');

window.addEventListener('scroll', fixNav);

function fixNav() {

    if (window.scrollY > nav.offsetHeight + 150) {

        nav.classList.add('active');
    } else {

        nav.classList.remove('active');
    }
}

menu.forEach((item) => {

    item.addEventListener('mouseenter', () => {

        if(item === 0) {

            item.classList.add('current');
        } else {

            item.classList.remove('current');
        }    
    });
});