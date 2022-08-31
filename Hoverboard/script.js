"use strict";

const container = document.querySelector('#container'),
      colors = ['blue', 'red', 'green', 'yellow', 'violet'],
      SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {

    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {

        setColor(square);
    });

    square.addEventListener('mouseout', () => {

        removeColor(square);
    });

    container.append(square);
}

function setColor(element) {

    const color = getRandomColor();

    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
   
    element.style.background = '#2a2a2a';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {

    return colors[Math.floor(Math.random() * colors.length)];
}