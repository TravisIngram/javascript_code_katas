/*
  Function name:  shortestString(list);
  Inputs:         A list of strings.
  Returns:        The shortest string in the list.
  Prints:         Nothing
*/

function shortestString(list) {
  var charCount = list[0].length;
  var shortString = "";
  for (var i = 0; i < list.length; i++) {
    if (list[i].length <= charCount) {
      shortString = list[i];
      charCount = list[i].length;
    }
  }
  return shortString;
}

/*
  I'd advise putting some sanity checks here.
  How else will you confirm that your code does what you think it does?

  This is currently only a partial solution.  It doesn't account for multiple
  strings of the same length.  I'll iterate on it and present a better solution
  soon.
*/

// console.log() prints something to the console as a means of basic debugging.

console.log(shortestString(["zz", "aaa", "b", "cccc", "FFFFFFFF", "dd"]));
console.log(shortestString(["zz", "a", "     ", "   ", "  ", "        "]));
console.log(shortestString(["zzslkfj231lkjdsi", "The quick brown fox", "bee", "Banananananana", "FFFFFFFF", ""]));
console.log(shortestString(["z", "a", "b", "c", "F", "dd"]));
console.log(shortestString([0, 213, 12398, 23, 123, 9]));
