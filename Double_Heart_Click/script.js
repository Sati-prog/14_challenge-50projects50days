"use strict";

const loveMe = document.querySelector('.loveMe'),
      times = document.querySelector('#times');

let clickTime = 0,
    timesClicked = 0;

loveMe.addEventListener('click', (e) => {

    if (clickTime === 0) {

        clickTime = new Date().getTime();
    } else {

        if ((new Date().getTime() - clickTime) < 800) {

            createHeart(e);
            clickTime = 0;
        } else {

            clickTime = new Date().getTime();
        }
    }
});

const createHeart = (e) => {

    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX,
          y = e.clientY;

    const leftOffset = e.target.offsetLeft,
          topOffset = e.target.offsetTop;

    const xInside = x - leftOffset,
          yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.append(heart);

    times.innerHTML = ++timesClicked;

    setTimeout(() => heart.remove(), 1000);
}