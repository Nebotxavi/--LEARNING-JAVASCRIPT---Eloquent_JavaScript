/*
Write a program that creates a string that represents an 8×8 grid, using newlinecharacters to separate lines. At each position of the grid there is either a spaceor a "#" character. The characters should form a chessboard.
When you have a program that generates this pattern, define a bindingsize= 8and change the program so that it works for anysize, outputting a gridof the given width and height.

When you have a program that generates this pattern, define a bindingsize= 8and change the program so that it works for anysize, outputting a gridof the given width and height.
*/


let limit = prompt('Introduce a number')
let line1 = ' # # # #'
let line2 = '# # # # '
let switcher = true
for (let counter = 1; counter <= limit; counter++){
  if (switcher) {
    console.log(line1);
  } else {
      console.log(line2);
  }
  if (switcher){
    switcher = false;
  } else {
      switcher = true
    }
  }
