/*
  Function name:  max(list);
  Input:          A list (array) of numbers.
  Returns:        The largest number in the list.
  Prints:         Nothing

  In English, the "max" method takes as input a list of numbers and
  returns the largest number in that list.

  Note: This exercise is "complete."
  This is meant to give you a starting point and also illustrate what we're
  looking for. There is ***NO NEED*** to comment line-by-line, although it
  can't hurt. It's not common in everyday, professional JavaScript, but here
  we're in a learning environment.
*/

function max(list) {
  var maxSoFar = list[0];                  // Setting maxSoFar to the first element of the list.
  for (var i = 0; i < list.length; i++) {  // Looping through each item in list
    if (list[i] > maxSoFar) {              // if the current item is greater than maxSoFar,
      maxSoFar = list[i];                  // set maxSoFar to current item.
    }
  }

  return maxSoFar;                         // We've gone through entire list, return the value of maxSoFar.
}

/*
  This "if" statement will be gobblededook, but it means:
    "If this file is the file currently being executed, then..."

  __FILE__ is always the name of the current file.
  $0 is always the name of the program beind executed.

  This means that if we run this file directly, i.e.,
      ruby max.rb
  then everything below will be executed.

  If, however, we include this file in another Ruby program via
      require 'max'
  then the below will *not* be executed
*/

// if __FILE__ == $PROGRAM_NAME
  // "p" prints something to the screen in a way that's better for debugging

console.log(max([1, 2, 3]) === 3);
console.log(max([0, -100, 50, -200]) === 50);
console.log(max([-200, -400, -100, -300]) === -100);
console.log(max([0]) === 0);
console.log(max([1]) === 1);
console.log(max([-1]) === -1);
console.log(max([11, 11, 11]) === 11);
console.log(max([-22, -11, -22]) === -11);

/*
  Each of the lines above will print out "true" or "false" and collectively
  act as a sanity check.  Remember that conceptually "x === y"
  means "are x and y equal?"

  That is, when you run the code, if any lines print out "false"
  then you know something is off in your code.

  This does *not* mean that your code is perfect if each line
  prints out "true.""  For example,
    1. We might have missed a corner case
    2. The code does what it should, but is conceptually confused
    3. Something else we haven't though of

  Remember: Option #3 is *always* possible.

  Think of these like rumble strips on the side of the road.  They're here
  to tell you when you're veering off the road, not to guarantee you're
  driving phenomenally. :)
*/