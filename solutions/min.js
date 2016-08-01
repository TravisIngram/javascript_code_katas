/*
  Function name:  min(list);
  Input:          A list of numbers.
  Returns:        The SMALLEST number in the list.
  Prints:         Nothing

  In English, the "min" method takes as input a list of numbers and
  returns the SMALLEST number in that list.

  Your job here is to fill in the ____.  Be deliberate, don't just guess!
  The number of spaces (____) is meaningless; it's not as if four blank spots
  means you need to replace it with a 4-character chunk of JavaScript.

  This is going to be very similar to the previous exercise, max.
  So don't be afraid if these two methods look almost identical
*/

function min(list) {
  var smallestNum = list[0];
  for (var i = 0; i < list.length; i++) {
    if (list[i] < smallestNum) {
      smallestNum = list[i];
    }
  }

  return smallestNum;
}


// console.log() prints something to the console as a means of basic debugging.

console.log(min([1, 2, 3]) === 1);
console.log(min([0, -100, 50, -200]) === -200);
console.log(min([-200, -400, -100, -300]) === -400);
console.log(min([0]) === 0);
console.log(min([1]) === 1);
console.log(min([-1]) === -1);
console.log(min([11, 11, 11]) === 11);
console.log(min([-22, -11, -22]) === -22);

/*
  Each of the lines above will print out "true" or "false" and collectively
  act as a sanity check.  Remember that conceptually "x === y"
  means "are x and y equal?"

  That is, when you run the code, if any lines print out "false"
  then you know something is off in your code.

  Think of these like rumble strips on the side of the road.  They're here
  to tell you when you're veering off the road, not to guarantee you're
  driving phenomenally. :)
*/
