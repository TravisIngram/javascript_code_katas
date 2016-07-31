/*
  Function name:  printPyramid(height);
  Input:          A number n.
  Returns:        Nothing
  Prints:         A pyramid consisting of "*" characters that is "n" characters tall
                  at its tallest.

  For example, print_pyramid(4) should print

  *
  **
  ***
  ****
  ***
  **
  *

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

function printPyramid(height) {
  // You have to fill in the details here!  =]

  // Suggestion: you can call printTriangle(); to print out the first, "upward"
  // half of the pyramid.

  // You'll have to write code to print out the second, "downward"
  // half of the pyramid.
}


// console.log(); prints something to the console as a means of basic debugging.

console.log(printPyramid(10));

console.log("\n\n\n");   // This is here to make the separation between pyramids clearer

console.log(printPyramid(6));

/*
 Remember: these are rumble strips, not a driving instructor.
 If any are "false" then something is broken. But just because they all return
 "true" doesn't mean you've nailed it. =]
*/
