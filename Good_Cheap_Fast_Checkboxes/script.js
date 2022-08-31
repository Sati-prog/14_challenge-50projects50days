"use strict";

const toggles = document.querySelectorAll('.toggle'),
      good = document.querySelector('#good'),
      cheap = document.querySelector('#cheap'),
      fast = document.querySelector('#fast');

toggles.forEach(toggle => {

    toggle.addEventListener('change', (e) => {

        doTheTrick(e.target);
    });
});

function doTheTrick(theClickOne) {

    if (good.checked && cheap.checked && fast.checked) {

        if (good === theClickOne) {

            fast.checked = false;
        }

        
        if (cheap === theClickOne) {

            good.checked = false;
        }

        
        if (fast === theClickOne) {

            cheap.checked = false;
        }
    }
}