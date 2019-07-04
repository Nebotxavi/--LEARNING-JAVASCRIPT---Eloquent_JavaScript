/*
Write a function that computes the dominant writing direction in a string of text.
Remember that each script object has a direction property that can be "ltr"(left to right),
"rtl"(right to left), or"ttb"(top to bottom).
The dominant direction is the direction of a majority of the characters that have a script associated
 with them. The character Script and count By functions defined earlier in the chapter are
 probably useful here.
*/

function dominantDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({ name }) => name != "none");

    dominant = scripts.reduce((a, b) => a['count'] < b['count'] ? b : a);
    return dominant['name'];
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
