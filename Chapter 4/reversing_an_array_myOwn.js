
const reverseArray = arr => {
    let newArr = [];
    for (let i of arr) newArr.unshift(i);
    return newArr;
}

const reverseArrayInPlace = arr => {
    let oldValue = 0;
    for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
        oldValue = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = oldValue;
    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]