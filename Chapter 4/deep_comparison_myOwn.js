
const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) return true;
    if (obj1 == null || typeof obj1 != 'object' ||
        obj2 == null || typeof obj2 != 'object')
        return false;

    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);

    if (obj1Keys.length != obj2Keys.length) return false;

    for (let item of obj1Keys) {
        if (!obj2[item] || !deepEqual(obj1[item], obj2[item])) return false;
    }
    return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true