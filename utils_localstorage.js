const USER = 'USER';

function saveToLocal(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

function getFromLocal(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function getUser() {
    return getFromLocal(USER);
}

export function createUser(name) {
    const user = {
        name: name,
        inventory: {}
    };

    saveToLocal(USER, user);
}

export function completeQuest(metal) {
    const user = getFromLocal(USER);
    user.inventory[metal] = true;

    saveToLocal(USER, user);
}