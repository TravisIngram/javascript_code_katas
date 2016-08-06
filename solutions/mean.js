/*
  Function name:  mean(list);
  Input:          A list of numbers.
  Returns:        The MEAN (aka average) of all the numbers in the list.
  Prints:         Nothing

  See: https://www.freemathhelp.com/arithmetic-mean.html

  For example,
    The mean of 5 and 2 is 2.5 since (5 + 2)/2 is 3.5
    The mean of 5 and 5 is 5.0 since (5 + 5)/2 is 5.0
    The mean of 10, 20, and 30 is 20.0 since (10 + 20 + 30)/3 is 20.0
    etc.

  Things we'll need:
    1. A way to calculate the sum of the numbers in the list.
    2. A way to calculate the length of the list.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length

  It's possible to use a function that was defined in another file,
  but that's not something we'll touch on here.  Instead, simply use the
  function that you built in the sum.js exercise.
*/

function sum(list) {
  var total = 0;

  for (var i = 0; i < list.length; i++) {
    total += list[i];
  }

  return total;

}

function mean(list) {
  var result = 0;

  var total = sum(list);          // This is the "sum();" function from our sum.js file.
  result = total / list.length;   // Given the list's sum, how can we calculate the average?

  return result;
}

/*
  I'd advise putting some sanity checks here.
  How else will you confirm that your code does what you think it does?

  console.log() prints something to the console as a means of basic debugging.
*/

console.log(mean([10, 1, 2, 10, 10]));
console.log(mean([10, 1, 2, 10, 10, 43, 12, 9]));
console.log(mean([4, 8, 16, 72, 0, 0]));
console.log(mean([1, 1, 2, 26, 85]));

console.log(mean([10, 1, 2, 10, 10]) === 6.6);
console.log(mean([10, 1, 2, 10, 10, 43, 12, 9]) === 12.125);
console.log(mean([4, 8, 16, 72, 0, 0]) == 16.666666666666668);
console.log(mean([1, 1, 2, 26, 85]) === 23);

/*
 Remember: these are rumble strips, not a driving instructor.
 If any are "false" then something is broken. But just because they all return
 "true" doesn't mean you've nailed it. =]
*/
