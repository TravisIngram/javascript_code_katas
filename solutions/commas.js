/*
  Function name:  commas(num);
  Inputs:         A number, n.
  Returns:        A string representing the input, with commas inserted into the
                  correct position.
  Prints:         Nothing

  For example,

   commas(123);     == "123"
   commas(1234);    == "1,234"
   commas(12345);   == "12,345"
   commas(1234567); == "1,234,567"

  ** Note #1 **
  If it's too much, don't worry about handling negative numbers at first.

  ** Note #2 **
  As always, focus first on how you would do this *as a human*. Imagine you
  has a piece of paper with a comma-less number on it.  How would you decide to
  insert the commas?  Which comma would you insert first?
*/

function commas(num) {
  var numString = '';

  numString += num;



  return numString;

}

console.log(commas(123)     == "123");
console.log(commas(1234)    == "1,234");
console.log(commas(12345)   == "12,345");
console.log(commas(1234567) == "1,234,567");


/*
I need to bulid a new string, once character at a time.  If the index of the
character I'm at is equal to three, I need to add a comma.

Here's one way...

var numString = "";
var newString = "";
var char;

  for (var i = 0; i < numString.length; i++) {
    char = numString.charAt(i);
    newString = newString + char;
    if (i % 3 != 0 && (i < numString.length -1)) {
      newString = newString + ',';
    }
  }

return newString;

/*
  Write some of your own "sanity checks" here.  Each check should look like:

   console.log(comma(); == ...expected return value...);

  A good sanity check is like a canary in a coal mine: when it fails we know
  something is very wrong in our code.  This means sanity checks should
  reflect;

    1. The common cases
    2. The edge cases
    3. Likely mistakes you'll make in your code (e.g., using <= instead of <)

  What these cases mean concretely depends on what your function does.

  ** Hint #1 **
  Use .toString(); to convert a number to a string.  That is,

    (5).toString();
      => "5"
    (100).toString();
      => "100"

  Remember: these are rumble strips, not a driving instructor.
  If any are "false" then something is broken. But just because they all return
  "true" doesn't mean you've nailed it. =]
*/
