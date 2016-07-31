/*
  Function name:  padArray(array, minSize, padWith);
  Inputs:         An array, a minimum size, and a padding element
  Returns:        An array which has been padded with the padding element
                  if the array is smaller than the minimum size
  Prints:         Nothing

  For example,

   padArray([1,2,3], 5, "waffles");
    => [1,2,3,"waffles","waffles"]

   padArray([1,2,3], 4, "waffles");
    => [1,2,3,"waffles"]

   padArray([1,2,3], 3, "waffles");
    => [1,2,3]

  Note #1
  Remember, use Array#push if you want to append something to an array.

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

  It works like this:

   var array = [1,2,3];
   array.push("waffles");
   array => [1,2,3,"waffles"]
*/

function padArray(array, minSize, padWith) {
  // You have to fill in the details here!  =]
}

/*
  Write some of your own "sanity checks" here.  Each check should look like:

   console.log(padArray(__) == ...expected return value...);

  A good sanity check is like a canary in a coal mine: when it fails we know
  something is very wrong in our code.  This means sanity checks should
  reflect;

    1. The common cases
    2. The edge cases
    3. Likely mistakes you'll make in your code (e.g., using <= instead of <)

  What these cases mean concretely depends on what your function does.

  Here are some sanity checks written in "plain English".
  See if you can translate them into JavaScript.

    If minSize is 0
      then padArray should always return the input array.

    If minSize is less than the size of the input array
      then padArray should always return the input array.

    If minSize equals the size of the input array
      then padArray should always return the input array.

    If minSize is 1 greater than the size of the input array
      then padArray should add a single item to the end of the input array.

Remember: these are rumble strips, not a driving instructor.
  If any are "false" then something is broken. But just because they all return
  "true" doesn't mean you've nailed it. =]
*/
