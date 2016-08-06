/*
  Function name:  countMax(list);
  Inputs:         A list of numbers
  Returns:        The number of times the largest number in the list appears.
  Prints:         Nothing

  For example,
    countMax([10, 1, 2, 10, 10]);
    => 3

  The number "3" is returned since "10" is the largest number in the list and
  it occurs 3 times.

  ** Note **
  While it's possible to make use of a function that is contained in another
  file, that's a topic we'll cover later.
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

function countInList(list, itemToCount) {
  var count = 0;

  for (var i = 0; i < list.length; i++) {
    if (list[i] == itemToCount) {
      count += 1;
    }
  }
  return count;
}

function countMax(list) {
  // var currentMax = max(list);      The first example is the same as the second.
  // countInList(list, currentMax));  Both are using the Max function.

  var maxNum = countInList(list, max(list));

  return maxNum;
}

/*
  You can write this using nothing more than the 'max();' and
  'countInList();' functions that you've already written.

  Remember: inelegant, working code is better than elegant,
  unfinished code.

  I'd advise putting some sanity checks here.
  How else will you confirm that your code does what you think it does?
*/

// countMax([10, 1, 2, 10, 10]);
console.log(countMax([10, 1, 2, 10, 10])      === 3);
console.log(countMax([0, 0, 0, 0, 0])         === 5);
console.log(countMax([100, 218, 218, 110, 0]) === 2);
console.log(countMax([0, 1, 2, 1, 0])         === 1);
console.log(countMax([])                      === 0);
