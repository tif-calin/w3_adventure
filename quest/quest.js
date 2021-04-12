import quests from '../data/data.js';
import { findByProperty, capitalizeFirstLetter } from '../utils.js';

const questName = (new URLSearchParams(window.location.search)).get('id');
const quest = quests[questName];

const mainSection = document.querySelector('.quest-section');
const btnNext = document.querySelector('#next');
let latestForm = null;

function loadMessage(messageID) {
    // will load the latest message as well as form
    if (latestForm) for (let input of latestForm.querySelectorAll('*')) input.disabled = true;

    const message = quest.messages[messageID];

    const paragraph = document.createElement('p');
    paragraph.innerText = message.prompt;
    mainSection.appendChild(paragraph);

    const form = document.createElement('form');
    form.name = messageID;
    form.classList.add('message');
    for (let resp of Object.keys(message.responses)) {
        const label = document.createElement('label');

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.value = resp;
        radio.name = messageID;

        const div = document.createElement('div');
        div.classList.add('response');
        div.textContent = resp;

        label.appendChild(radio);
        label.appendChild(div);
        form.appendChild(label);
    }
    mainSection.appendChild(form);
    latestForm = form;
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
}

loadQuest(questName);

btnNext.addEventListener('click', () => {
    // check that an option was selected

    // load the next message
    const selectedResp = latestForm.querySelector('input:checked').value;
    const selectedMssg = quest.messages[latestForm.name].responses[selectedResp];

    // if message is null, quest completed 
    if (selectedMssg) loadMessage(selectedMssg);
});