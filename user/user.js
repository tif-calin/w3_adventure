import { getUser } from '../utils_localstorage.js';
import quests from '../data/data.js';

const h2Title = document.querySelector('h2');
const sctMain = document.querySelector('.main-section');

const initialize = () => {
    const user = getUser();
    h2Title.innerHTML = user.name;

    let qTotal = 0;
    let qDone = 0;
    for (let q of Object.keys(quests)) if (quests[q].implemented) qTotal++;
    for (let q of Object.values(user.inventory)) if (q) qDone++;

    sctMain.innerHTML += `${user.name}, you have acquired ${qDone} of the ${qTotal} sacred metals.`;
};

initialize();