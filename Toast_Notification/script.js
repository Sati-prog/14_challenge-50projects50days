"use strict";

const button = document.querySelector('#button'),
      toasts = document.querySelector('#toasts');

const messages = [
    'Hi',
    'Hola',
    'Hello',
    'How are you?',
    'Como estas?',
    "I'm fine, and you?",
    'Bien, gracias, y tu?'
];

const types = [
    'info',
    'success',
    'error'
];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
    
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.classList.add(type ? type : getRandomType());

    notification.innerText = message ? message : getRandomMessage();

    toasts.appendChild(notification);

    setTimeout(() => {

        notification.remove();

    }, 3000);
}

function getRandomMessage() {

    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {

    return types[Math.floor(Math.random() * types.length)];
}