import { createUser, getUser } from './utils_localstorage.js';

const inpName = document.querySelector('#input-name');
const spnNames = document.querySelectorAll('.name');
const btnStart = document.querySelector('#button-start');

// initialize state
const resetPage = name => {
    for (let span of spnNames) span.innerHTML = name;

    for (let hidden of document.querySelectorAll('.hidden')) hidden.classList.remove('hidden');

    inpName.disabled = true;
    inpName.value = getUser().name;
};

const initialize = () => {
    if (getUser().name) resetPage(getUser().name);
};

// set event listeners to update state and DOM
inpName.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        createUser(inpName.value);

        resetPage(inpName.value);
    }
});

btnStart.addEventListener('click', () => window.location = './map/');

initialize();