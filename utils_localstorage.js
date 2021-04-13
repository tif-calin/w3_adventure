const USER = 'USER';

function saveToLocal(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

export function createUser(name) {
    const user = {
        name: name,
        inventory: {}
    }

    saveToLocal(USER, user);
}

export function completeQuest(metal) {
    const user = localStorage.getItem(USER);
    user.inventory[metal] = true;

    saveToLocal(USER, user);
}