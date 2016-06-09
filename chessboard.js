// Chess Board

// Write a program that creates a string that represents an 8×8 grid, using
// newline characters to separate lines. At each position of the grid there
// is either a space or a “#” character. The characters should form a chess
// board. Passing this string to console.log should show something like this:

// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

// Edit size to change the dimensions of the board (default: 8 X 8).
var size = 8;
var line1 = "# ";
var line2 = " #";

for (var num = 0; num < size/2; num++) {
    console.log(line1.repeat(size/2));
    console.log(line2.repeat(size/2));
}
