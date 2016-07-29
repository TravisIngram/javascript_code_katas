/*
  Function name:  hotOrCold(numToGuess);
  Input:          A single number, numToGuess.
  Returns:        Nothing
  Behavior:       Prompts the user to guess the number "numToGuess", saying "hot" or
                  "cold" depending on whether the user's guess is too high or too low.
                  Once the user has guessed correctly, the function prints a victory
                  message and returns.

  ** Note #1 **
  This is meant to be a demonstration of how command-line user input works.
  Unfortunatly, this type of command line game is harder to implement in a
  language like JavaScript.  So this exercise is a work in progress.

  A differnt approach will be needed which may be beyond the scope of this set
  of examples.
*/

var userGuess = 0;

function getUserGuess(numToGuess) {
  var userGuess = window.prompt("Guess a number and press enter: ");
  return Number(userGuess);
}

getUserGuess();


function hotOrCold(numToGuess) {
  var userGuess = window.prompt("Guess a number and press enter: ");

  // This is called a "while loop"
  // "while true" will loop for ever, unless something inside the loop tells
  // us to stop.  In our case, we'll stop the while loop once a user guesses
  // correctly.

  // Hint: you might want to put some temporary print/puts/p statements
  // in this method while you're filling it out, so you can tell
  // everything is working as your expect.

  while (numToGuess != userGuess) {
    if (userGuess < numToGuess) {
      console.log("Cold!");
    } else if (userGuess > numToGuess) {
      console.log("Hot!");
    } else
      console.log("Correct!");
  }
}

