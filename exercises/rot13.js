/*
  Function name:  rot13(string);
  Inputs:         A String to be encoded in ROT13.
  Returns:        A ROT13-encoded string.
  Prints:         Nothing

  ROT13 is short for "rotate 13" and is the simplest example of a
  "Caesar cipher".  See http://en.wikipedia.org/wiki/ROT13

  ROT13 works by taking a string and "rotating" all the characters in that
  string 13 places to the right in the alphabet, with "z" wrapping around to
  the beginning of the alphabet.

  In other words, every letter from the top row in this table is replaced with
  the corresponding letter in the bottomr row

    ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
    NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm

  "ROT13" is called a Caesar cipher because Julius Caesar used such letter
  replacement schemes to "encrypt" his communication.
*/

function rot13(string) {
  // You have to fill in the details here!  =]
}

/*
  Write some of your own "sanity checks" here.  Each check should look like:

    console.log(rot13(); == ...expected return value...);

  A good sanity check is like a canary in a coal mine: when it fails we know
  something is very wrong in our code.  This means sanity checks should
  reflect;

    1. The common cases
    2. The edge cases
    3. Likely mistakes you'll make in your code (e.g., using <= instead of <)

  What these cases mean concretely depends on what your function does.

  See http://www.rot-n.com/ to generate test inputs and outputs
*/

console.log(rot13("The Quick Brown Fox Jumps Over The Lazy Dog") ==
    "Gur Dhvpx Oebja Sbk Whzcf Bire Gur Ynml Qbt");
