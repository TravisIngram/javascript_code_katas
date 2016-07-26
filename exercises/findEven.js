/*
  Function name:  findEven(array);
  Inputs:         An array of integers
  Returns:        An array of all the even integers appearing from the input array.
                  If NO even integers are found, return an empty array.
  Prints:         Nothing

  For example,

   findEven([1,2,3,4,5,6]);
   => [2,4,6]

   findEven([10,10,10,11,11,11]);
   => [10,10,10]
*/

function findEven(array) {
  // You have to fill in the details here!  =]
}

/*
  ** Note #1 **
  The most common way to determine whether a number is even in JavaScript is
  to make use of the 'modulo operator'.

    if num % 2 == 0 ...

  The "%" is called the "modulo operator".
  http://en.wikipedia.org/wiki/Modulo_operation

  It returns the remainder after we divide the left-hand side by the
  right-hand side. That means "num % 2" is the remainder after we divide
  "num" by 2.  If that remainder is 0 then num is even, i.e., num is a multiple
  of 2.

  ** Note #2 **
  If you want to append something to an existing array, use Array push
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

  It works like this:

   var myArray = [1,2,3];
   myArray.push("apple");
   myArray;
   => [1,2,3,"apple"]
*/

// console.log(); prints something to the console as a means of basic debugging.

// Here are some sanity checks written in "plain English".
// See if you can translate them into JavaScript. Your checks should look like this.

//  console.log(mode([...data points...]) == ...expected return value...);

// If the input is the empty array, findEven should return the empty array.


// If the input array contains all EVEN numbers, findEven should return the input array.

//  console.log(findEven([2, 4, 6, 8, 10]));
//  => [2, 4, 6, 8, 10]

// If the input array contains all ODD numbers, findEven should return the empty array.

// If an even number appears N times in the input array, it should appear N times in the the array that findEven returns.

