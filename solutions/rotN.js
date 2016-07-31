/*
  Function name:  rotN(string, n);
  Inputs:         A String to be encoded plus an integer to "rotate" by
  Returns:        A ROT-N encoded message
  Prints:         Nothing

  In a previous kata, we wrote a ROT13 method.  In this one, we will write
  a ROT-N method.

  e.g., rot13(string); == rotN(string, 13);
*/

function rotN(string, n) {
  // You have to fill in the details here!  =]
}

/*
  Write some of your own "sanity checks" here.  Each check should look like:

    console.log(rotN(); == ...expected return value...);

  A good sanity check is like a canary in a coal mine: when it fails we know
  something is very wrong in our code.  This means sanity checks should
  reflect;

    1. The common cases
    2. The edge cases
    3. Likely mistakes you'll make in your code (e.g., using <= instead of <)

  What these cases mean concretely depends on what your function does.

  See http://www.rot-n.com/ to generate test inputs and outputs
*/

console.log(rotN("The Quick Brown Fox Jumps Over The Lazy Dog", 13) ==
    "Gur Dhvpx Oebja Sbk Whzcf Bire Gur Ynml Qbt");
