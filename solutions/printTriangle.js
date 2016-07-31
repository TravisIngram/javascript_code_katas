/*
  Function name:  printTriangle(count);
  Input:          A number n
  Returns:        Nothing
  Prints:         A right triangle consisting of "*" characters that is "n"
                  characters tall

  For example, printTriangle(4); should print

  *
  **
  ***
  ****

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

function printTriangle(height) {
  // You have to fill in the details here!  =]
}


// console.log(); prints something to the console as a means of basic debugging.

console.log(printTriangle(1));

console.log("\n\n\n");   // This is here to make the separation between triangles clearer

console.log(printTriangle(2));

console.log("\n\n\n");   // This is here to make the separation between triangles clearer

console.log(printTriangle(3));

console.log("\n\n\n");   // This is here to make the separation between triangles clearer

console.log(printTriangle(10));

/*
 Remember: these are rumble strips, not a driving instructor.
 If any are "false" then something is broken. But just because they all return
 "true" doesn't mean you've nailed it. =]
*/
