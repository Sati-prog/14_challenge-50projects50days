"use strict";

const ratings = document.querySelectorAll('.rating'),
      ratingsContainer = document.querySelector('.ratings-container'),
      sendBtn = document.querySelector('#send'),
      panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {

    if (e.target.parentNode.classList.contains('rating')) {

        removeActive();

        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
});

sendBtn.addEventListener('click', (e) => {

    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank you!</strong>
        <br>
        <strong>${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActive(e) {

    for (let i = 0; i < ratings.length; i++) {

        ratings[i].classList.remove('active');
    }
}