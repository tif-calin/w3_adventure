import quests from '../data/data.js';

const questList = document.querySelector('.quest-list');

const initialize = () => {
    questList.innerHTML = '';
    for (let quest of Object.keys(quests)) {
        const item = document.createElement('li');
        item.classList.add('quest');
        const anchor = document.createElement('a');

        anchor.href = `../quest/?id=${quest}`;
        anchor.textContent = quest;
        item.appendChild(anchor);
        if (!quests[quest].implemented) {
            item.classList.add('unimplemented');
            item.textContent += ' (not yet implemented)';
        }
        questList.appendChild(item);
    }
};

initialize();