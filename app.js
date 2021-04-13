import { createUser } from './utils_localstorage.js';

const inpName = document.querySelector('#input-name');
const spnNames = document.querySelectorAll('.name');

// initialize state
const initialize = () => {
    
}

// set event listeners to update state and DOM
inpName.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        createUser(inpName.value);

        for (let span of spnNames) span.innerHTML = inpName.value;
    
        for (let hidden of document.querySelectorAll('.hidden')) {
            hidden.classList.remove('hidden');
        }

        inpName.disabled = true;
    }
})