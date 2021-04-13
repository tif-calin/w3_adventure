import quests from '../data/data.js';
import { getUser } from '../utils_localstorage.js';

const questList = document.querySelector('.quest-list');

const initialize = () => {
    // reload list of quests
    questList.innerHTML = '';

    // loop through quests
    for (let quest of Object.keys(quests)) {
        // create li
        const item = document.createElement('li');
        item.classList.add('quest');

        // create <a> with href
        const anchor = document.createElement('a');
        anchor.href = `../quest/?id=${quest}`;
        anchor.textContent = quest;
        item.appendChild(anchor);

        // only add link if quest was actually implemented
        if (!quests[quest].implemented) {
            item.classList.add('unimplemented');
            item.textContent += ' (not yet implemented)';
        }

        // check if quest was completed
        const user = getUser();
        if (user.inventory[quest]) {
            item.classList.add('completed');
            item.textContent += '';
        }

        // display the quest
        questList.appendChild(item);
    }
};

initialize();