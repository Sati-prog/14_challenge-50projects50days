"use strict";

const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {

    button.addEventListener('click', function(e) {

        const x = e.clientX,
              y = e.clientY;

        const buttonTop = e.target.offsetTop,
              buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft,
              yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    });
});