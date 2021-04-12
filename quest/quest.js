import quests from '../data/data.js';
import { findByProperty, capitalizeFirstLetter } from '../utils.js';

const questName = (new URLSearchParams(window.location.search)).get('id');
const quest = quests[questName];

const mainSection = document.querySelector('.quest-section');
let latestForm = null;

function loadMessage(messageID) {
    // will load the latest message as well as form
    if (latestForm) for (let input of latestForm.querySelectAll('*')) input.disabled = true;

    const message = quest.messages[messageID];

    const paragraph = document.createElement('p');
    paragraph.innerText = message.prompt;
    mainSection.appendChild(paragraph);

    for (let resp of Object.keys(message.responses)) {
        const label = document.createElement('label');
        const radio = document.createElement('input');

        label.textContent = resp;

        radio.type = 'radio';
        radio.name = messageID;
        label.appendChild(radio);

        mainSection.appendChild(label);
    }
}

function loadQuest(questName) {
    if (!quest['implemented']) return;
    mainSection.innerHTML = '';

    // add title
    const title = document.createElement('h2');
    title.innerText = capitalizeFirstLetter(questName) + ' Quest';
    mainSection.appendChild(title);

    // load first message
    loadMessage(quest['start']);
};

loadQuest(questName);