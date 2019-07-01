/*
Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument. Also write a listToArray function
that produces an array from a list. Then add a helper function prepend , which
takes an element and a list and creates a new list that adds the element to the
front of the input list, and nth , which takes a list and a number and returns
the element at the given position in the list (with zero referring to the first
element) or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth .
*/

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
