/*
  Function name:  runLengthEncode(string);
  Inputs:         A String that has been "run-length encoded"
  Returns:        The original string
  Prints:         Nothing

  This takes a run-length encoded string and "reconstructs" the original string.
*/

function runLengthDecode(string) {
  // You have to fill in the details here!  =]
}

/*
  Write some of your own "sanity checks" here.  Each check should look like:

   console.log(runLengthDecode(); == ...expected return value...);

  A good sanity check is like a canary in a coal mine: when it fails we know
  something is very wrong in our code.  This means sanity checks should
  reflect;

    1. The common cases
    2. The edge cases
    3. Likely mistakes you'll make in your code (e.g., using <= instead of <)

  What these cases mean concretely depends on what your function does.

  They should be the mirror image of the tests for runLengthEncode();

  If both methods are implemented correctly, this should always be true:

  console.log(runLengthDecode(runLengthEncode(string)) == string);
*/

console.log(runLengthDecode("6W6A6W6A6B") == "WWWWWWAAAAAAWWWWWWAAAAAABBBBBB");
console.log(runLengthDecode("1A") == "A");
console.log(runLengthDecode("1A1B") == "AB");
console.log(runLengthDecode("1M1i2s1i2s1i2p1i") == "Mississippi");
