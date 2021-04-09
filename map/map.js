import { quests } from '../data/data.js';

const questList = document.querySelector('.quest-list');

const initialize = () => {
    questList.innerHTML = '';
    for (let quest of Object.keys(quests)) {
        const item = document.createElement('li');
        item.classList.add('quest');
        const anchor = document.createElement('a');

        anchor.href = `../quest/?=${quest}`;
        anchor.textContent = quest;
        item.appendChild(anchor);
        questList.appendChild(item);
    }
};

initialize();