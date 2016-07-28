/*
  Function name:  pigLatin(word);
  Inputs:         A string representing a single word (i.e., no spaces).
  Returns:        The word translated into "pig latin".
  Prints:         Nothing

  ** Note #1 **
  There are two rules for translating something into "pig latin":
    1. If a word begins with a consonant or sequence of consonants, move the
       sequence of consonants  to the end of the word and then append "ay"
    2. If a word begins with a vowel, just append "ay"

  See: http://en.wikipedia.org/wiki/Pig_Latin Rules

  Here are some examples:
    pigLatin("happy");
      => "appyhay"
*/

function pigLatin(word) {
  // You have to fill in the details here!  =]
}

/*
  Write some of your own "sanity checks" here.  Each check should look like:

   console.log(pigLatin(__) == ...expected return value...);

  A good sanity check is like a canary in a coal mine: when it fails we know
  something is very wrong in our code.  This means sanity checks should
  reflect;

    1. The common cases
    2. The edge cases
    3. Likely mistakes you'll make in your code (e.g., using <= instead of <)

  What these cases mean concretely depends on what your function does.

  Remember: these are rumble strips, not a driving instructor.
  If any are "false" then something is broken. But just because they all return
  "true" doesn't mean you've nailed it. =]
*/

console.log(pigLatin("happy") == "appyhay");
console.log(pigLatin("duck")  == "uckday");
console.log(pigLatin("glove") == "oveglay");  // Notice what happened to "gl"

console.log(pigLatin("egg")   == "eggay");
console.log(pigLatin("inbox") == "inboxay");
console.log(pigLatin("eight") == "eightay");
