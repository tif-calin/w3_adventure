import quests from '../data/data.js';
import { getUser } from '../utils_localstorage.js';

const questList = document.querySelector('.quest-list');

const didWin = () => {
    let qTotal = 0;
    let qDone = 0;
    for (let q of Object.keys(quests)) if (quests[q].implemented) qTotal++;
    for (let q of Object.values(user.inventory)) if (q) qDone++;

    if (qTotal - qDone <= 0) return true;
    return false;
};

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

    // check for win
    didwin = didWin();
};

initialize();