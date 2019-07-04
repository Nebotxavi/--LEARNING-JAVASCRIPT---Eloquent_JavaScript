
const arrayToList = arr => {
    let list = null;
    for (let num = arr.length - 1; num >= 0; num--) {
        list = { value: arr[num], rest: list };
    }
    return list;
}

const listToArray = list => {
    let arr = [];
    for (let i = list; i; i = i['rest']) arr.push(i['value']);
    return arr;
}

const prepend = (value, rest) => {
    let newList = { value, rest };
    return newList;
}

const nth = (list, n) => {
    if (n == 0) return list['value'];
    else return (nth(list['rest'], n - 1));
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20