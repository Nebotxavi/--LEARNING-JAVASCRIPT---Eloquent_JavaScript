/*
Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace . The first, reverseArray , takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace , does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.
Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situations?
Which one runs faster?
*/

// OPTION 1 for reverseArray

function reverseArray(arr) {
    let new_arr = [];
    for (let i of arr) {
        new_arr.unshift(i);
    }
    return new_arr;
}

// OPTION 2 for reverseArray

function reverseArray2(arr) {
    let new_arr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        new_arr.push(arr[i]);
    }
    return new_arr;
}


function reverseArrayInPlace(arr) {
    let previous = 0;
    for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
        previous = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = previous
    }
    return arr
}



console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
console.log(reverseArray2(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
