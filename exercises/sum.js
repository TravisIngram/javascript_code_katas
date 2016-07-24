/*
  Function name:  sum(list);
  Input:          A list of numbers
  Returns:        The SUM of all the numbers in the list.
  Prints:         Nothing

  In English, the "sum" function takes as input a list of numbers and
  returns the SUM (total) of all the numbers in the list.

  Things we'll need:
    1. Something to keep track of the running total.
    2. Something that goes through the list one number at a time.
    3. Something that adds the current number to the running total.

  For (3), consider these bits of JavaScript:
    var total = 10;           // assign the value 10 to the variable "total"
    var total = total + 5;    // the value of "total" is now 15
    var total = total + 20;   // the value of "total" is now 35
    var total = total + 7;    // the value of "total" is now 42
    var total = total - 10;   // the value of "total" is now 32 (notice the minus)
    var total = total + 70;   // the value of "total" is now 102
*/

function sum(list) {
  // This is your job. =]

}


// console.log() prints something to the console as a means of basic debugging.

console.log(sum([1]) === 1);
console.log(sum([0]) === 0);
console.log(sum([-1]) === -1);
console.log(sum([1, -1]) === 0);
console.log(sum([0, 10, 0, 20]) === 30);
console.log(sum([-111, -111, -111]) === -333);
console.log(sum([11, 22, 33]) === 66);

/*
 Remember: these are rumble strips, not a driving instructor.
 If any are "false" then something is broken. But just because they all return
 "true" doesn't mean you've nailed it. =]
*/
