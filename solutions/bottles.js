/*
  Function name:  bottles(startNumber);
  Inputs:         A number, n
  Returns:        Nothing
  Prints:         The text for "99 bottles", starting at the input number and
                  counting down to 1

  For example, bottles(99); should print...

  99 bottles of beer on the wall, 99 bottles of beer.
  Take one down, pass it around, 98 bottles of beer on the wall!
  98 bottles of beer on the wall, 99 bottles of beer.
  Take one down, pass it around, 97 bottles of beer on the wall!

  ... and so on...

  2 bottles of beer on the wall, 2 bottles of beer.
  Take one down, pass it around, 1 bottle of beer on the wall!
  1 bottle of beer on the wall, 1 bottle of beer.
  Take one down, pass it around, no more bottles of beer on the wall!

  ** NOTE NOTE NOTE **
  This function should print out the correct form of "bottles".  That is,
  it should say
    2 bottles
    1 bottle
    no more bottles
    etc.
*/

function bottles(startNumber) {

}


// console.log(); prints something to the console as a means of basic debugging.

  // What *should* this print?
  console.log(bottles(5));


/*

** Hint #1 **

  Ruby has a 'downto' method that is useful in cases like this.  Unfortunatly,
  JavaScript doesn't have anything similar built in.  But a similar, basic
  version is provided below.

  This function is actually extending the Number class.

    Number.prototype.downTo = function(t, cb) {

      var i = this;

      if (t > this) {
        return +this;
      }

      while (i >= t) {
        cb(i--);
      }

      return +this;
    };

  It can be called in the following way.

    (10).downTo(5, function(i) {
      console.log(i);
    });

** Hint #2 **
  The priority is getting this function to work, even if your code is messy, but
  try to isolate the part of each line that changes depending on the number of
  bottles and move it to its own function.  This makes handling the
  singular/plural logic much easier.

  Yes, that means you'll need to define another function here on your own. If you
  decide to try this approach, give it a sensible name. :)
*/
