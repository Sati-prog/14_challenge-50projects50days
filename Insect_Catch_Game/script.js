"use strict";

const screens = document.querySelectorAll('.screen'),
      choose_insect_btns = document.querySelectorAll('.choose-insect-btn'),
      start_btn = document.querySelector('#start-btn'),
      game_container = document.querySelector('#game-container'),
      timeEl = document.querySelector('#time'),
      scoreEl = document.querySelector('#score'),
      message = document.querySelector('#message');

let seconds = 0,
    score = 0,
    selected_insect = {};

start_btn.addEventListener('click', () => screens[0].classList.add('up'));

choose_insect_btns.forEach(btn => {

    btn.addEventListener('click', () => {

        const img = btn.querySelector('img'),
              src = img.getAttribute('src'),
              alt = img.getAttribute('alt');

        selected_insect = { src, alt };

        screens[1].classList.add('up');

        setTimeout(createInsect, 1000);
        startGame();
    });
});

function startGame() {

    setInterval(increaseTime, 1000);
}

function increaseTime() {

    let min = Math.floor(seconds / 60),
        sec = seconds % 60;

    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    timeEl.innerHTML = `Time: ${min}:${sec}`;
    seconds++;
}

function createInsect() {

    const insect = document.createElement('div');
    insect.classList.add('insect');

    const { x, y } = getRandomLocation();
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;

    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)"/>`;

    insect.addEventListener('click', catchInsect);

    game_container.appendChild(insect);
}

function getRandomLocation() {

    const width = window.innerWidth,
          height = window.innerHeight,
          x = Math.random() * (width - 200) + 100,
          y = Math.random() * (height - 200) + 100;

    return { x, y };
}

function catchInsect() {

    increaseScore();

    this.classList.add('caught');
    setTimeout(() => this.remove(), 2000);

    addInsects();
}

function addInsects() {

    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}

function increaseScore() {

    score++;

    if (score > 19) {

        message.classList.add('visible');
    }

    scoreEl.innerHTML = `Score: ${score}`;
}