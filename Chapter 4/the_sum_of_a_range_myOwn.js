
function range(n1, n2, step = n1 < n2 ? 1 : -1) {
    range_array = []
    if (n1 < n2) {
        for (let i = n1; i <= n2; i += step) {
            range_array.push(i);
        }
    } else {
        for (let i = n1; i >= n2; i += step) {
            range_array.push(i);
        }
    }
    return range_array;
}

const sum = arr => {
    let total = 0
    for (num of arr) total += num;
    return total
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55