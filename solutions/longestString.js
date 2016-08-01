/*
  Function name:  longestString(list);
  Inputs:         A list of strings
  Returns:        The longest string in the list
  Prints:         Nothing

  For example, longestString(["a", "zzzz", "c"]) should return "zzzz" since
  the other strings are 1 character long and "zzzz" is 4 characters long.

  To find the length of the string in the variable myString, call myString.length.

  For example,
    var myString = "zzzz";
    console.log(myString.length);
    => 4
*/

// function longestString(list) {
//   var stringCount = 0;
//   var elementCount = [];
//   for (var i = 0; i < list.length; i++) {
//     elementCount.push(list[i].length);
//   }
//   console.log(elementCount);
//   return elementCount;
// }

function longestString(list) {
  var charCount = 0;
  var longString = "";
  for (var i = 0; i < list.length; i++) {
    if (list[i].length > charCount) {
      longString = list[i];
      charCount = list[i].length;
    }
  }
  return longString;
}

/*
  I'd advise putting some sanity checks here.
  How else will you confirm that your code does what you think it does?
*/

// console.log() prints something to the console as a means of basic debugging.

console.log(longestString(["zz", "aaa", "b", "cccc", "FFFFFFFF", "dd"]));
console.log(longestString(["zz", "a", "     ", "   ", "  ", "        "]));
console.log(longestString(["zzslkfj231lkjdsi", "The quick brown fox", "bee", "Banananananana", "FFFFFFFF", ""]));
console.log(longestString(["z", "a", "b", "c", "F", "dd"]));
console.log(longestString([0, 213, 12398, 23, 123, 9]));
