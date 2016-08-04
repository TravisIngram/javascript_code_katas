/*
  Function name:  countInList(list, itemToCount);
  Inputs:         1. a list of anything, 2. an item for us to count in the list
  Returns:        The number of times our item is contained in the input list.
  Prints:         Nothing

  For example,
    countInList([1,2,3], 1);    == 1
    countInList([1,2,3], -1);   == 0
    countInList([1,1,1], 1);    == 3

  ** Note #1 **
  Some languages, like Ruby and Python, have built in methods to do this.
  JavaScript does not, so we have to write it ourselves.

  See: http://www.ruby-doc.org/core-2.1.2/Array.html#method-i-count

  ** Note #2 ***
  I ran into an issue with this exercise because of where I placed the return
  statement.  Just something to watch out for.
*/

function countInList(list, itemToCount) {
  var count = 0;

  for (var i = 0; i < list.length; i++) {
    if (list[i] == itemToCount) {
      count += 1;
    }
  }
  return count;
}

/*
  I'd advise putting some sanity checks here.
  How else will you confirm that your code does what you think it does?
*/

console.log(countInList([1,2,3,1,4,1], 1)   === 3);
console.log(countInList([1,2,3], -1)  === 0);
console.log(countInList([1,1,1], 1)   === 3);
console.log(countInList([], 4)   === 0);