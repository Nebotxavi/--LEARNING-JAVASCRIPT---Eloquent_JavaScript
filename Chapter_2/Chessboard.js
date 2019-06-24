/*
Write a program that creates a string that represents an 8×8 grid, using newlinecharacters to separate lines. At each position of the grid there is either a spaceor a "#" character. The characters should form a chessboard.
When you have a program that generates this pattern, define a bindingsize= 8and change the program so that it works for anysize, outputting a gridof the given width and height.

When you have a program that generates this pattern, define a bindingsize= 8and change the program so that it works for anysize, outputting a gridof the given width and height.
*/

let limit = prompt("Introduce the number of rows and lines")
let board = ''

for (let y = 1; y <= limit; y++){
  for (let x = 1; x <= limit; x++){
    if ((y + x) % 2 == 0){
      board += '#';
    } else {
      board += ' ';
    }
  }
  board += '\n';
}           
console.log(board)
