/*
  Function name:  printSquare(count);
  Input:          A number 'n'.
  Returns:        Nothing
  Prints:         An n-by-n grid of *'s.

  Note, this PRINTS a square, it does not RETURN a square.  For example,
  printSquare(3); should print this to the screen:

  ***
  ***
  ***


  The printLine(); function is here to help you.
  Conceptually, it prints out a row of stars (*) equal to "count".
  Run it yourself to see how it works.  Experiment with different inputs.
*/

function printLine(count) {
  var starRow = "";
  for (var i = 0; i < count; i++) {
    starRow += "*";
  }

  console.log(starRow);
}

/*
  We can call functions that we've defined ourselves.  In this case, we want
  to call the printLine(); function we've defined to help us print out a square.
*/

function printSquare(dimension) {
  for (var i = 0; i < dimension; i++) {
    printLine(____);
  }
}



// console.log(); prints something to the console as a means of basic debugging.

console.log(printSquare(1));

console.log("\n\n\n");   // This is here to make the separation between squares clearer

console.log(printSquare(2));

console.log("\n\n\n");   // This is here to make the separation between squares clearer

console.log(printSquare(3));

console.log("\n\n\n");   // This is here to make the separation between squares clearer

console.log(printSquare(10));

/*
 Remember: these are rumble strips, not a driving instructor.
 If any are "false" then something is broken. But just because they all return
 "true" doesn't mean you've nailed it. =]
*/
