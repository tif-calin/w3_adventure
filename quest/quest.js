import quests from '../data/data.js';
import { findByProperty } from '../utils.js';

const questName = (new URLSearchParams(window.location.search)).get('id');

function loadQuest(questName) {
    const quest = quests[questName];
    if (!quest['implemented']) return;

    const mainSection = document.querySelector('.quest-section');
    mainSection.innerHTML = '';

    // add title
    const title = document.createElement('h2');
    title.innerText = questName + ' Quest';
    mainSection.appendChild(title);
};

loadQuest(questName);