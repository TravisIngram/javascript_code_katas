/*
  Function name:  wordCount(string);
  Input:          A string representing an English sentence
  Returns:        The number of words in the sentence
  Prints:         Nothing

  Although it's more complicated in reality, we'll just pretend
  that a sequence of spaces in a sentence designates the start of a new word.
  That means we don't care about how many spaces are between two words, only
  that there is at least one.
*/

function wordCount(string) {
  // Hint: You'll want to use String.split()
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

}

// console.log() prints something to the console as a means of basic debugging.

console.log(wordCount("apple") === 1);
console.log(wordCount("123...321") === 1);
console.log(wordCount("one two three") === 3);
console.log(wordCount("This sentence has five words.") === 5);
console.log(wordCount("No-spaces-here") === 1);
console.log(wordCount("") === 0 ); // Empty string
console.log(wordCount(" ") === 0); // A string consisting of a single space

/*
  It's probably worth having a few more sanity checks.
  What are some input strings that might be tricky to handle?
  Think of examples where the answer to, "How many words?" is less clear-cut?
*/
