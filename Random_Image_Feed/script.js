"use strict";

// https://picsum.photos/

const container = document.querySelector('.container'),
      unsplashURL = 'https://picsum.photos/seed/',
      rows = 5;

for (let i = 0; i < rows * 3; i++) {

    const img = document.createElement('img');
    img.src = `${unsplashURL}${getRandomSize()}`;

    container.append(img);
}

function getRandomSize() {

    return `${getRandomNumb()}/${getRandomNumb()}?random=323`;
}

function getRandomNumb() {

    return Math.floor(Math.random() * 10) + 300;
}