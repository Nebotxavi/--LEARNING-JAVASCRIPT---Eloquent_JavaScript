/*
Theprevious chapterintroduced the standard functionMath.minthat returnsits smallest argument. We can build something like that now. Write a functionminthat takes two arguments and returns their minimum.
*/

// OPTION 1 - function declaration

function min(n1, n2){
  return Math.min(n1, n2)
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// OPTION 2 - arrow function

const min = (n1, n2) => Math.min(n1, n2);

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// OPTION arrow function without math.min

const min = (n1, n2) => {
  if (n1 > n2)
    return n2;
  else
    return n1;
}
