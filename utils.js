
export function findByProperty(arr, val, key = 'id', all = false) {
    // will return either the first instance or all instances of items in an array who have a property with a certain value
    let items = [];

    for (let item of arr) {
        if (item[key] === val) {
            if (!all) return item;
            items.push(item);
        };
    };

    return items;
};