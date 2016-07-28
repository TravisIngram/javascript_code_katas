/*
  Function name:  timeFormat(seconds);
  Inputs:         A number, representing seconds.
  Returns:        A string, describing the number of weeks, days, minutes, seconds.
  Prints:         Nothing

  Remember when we wrote the countdown clock to count down from 5 minutes?
  Let's write a function that takes in an integer, representing a number of
  seconds, and returns a string describing larger chunks of time.

  For example,

    timeFormat(1234);
      => "20m 34s"
    timeFormat(12345);
      => "3h 25m 45s"

  This should support weeks, days, hours, minutes, and seconds.
*/

function timeFormat(seconds) {
  // You have to fill in the details here!  =]
}

/*
  Write some of your own "sanity checks" here.  Each check should look like:

   console.log(timeFormat(); == ...expected return value...);

  A good sanity check is like a canary in a coal mine: when it fails we know
  something is very wrong in our code.  This means sanity checks should
  reflect;

    1. The common cases
    2. The edge cases
    3. Likely mistakes you'll make in your code (e.g., using <= instead of <)

  What these cases mean concretely depends on what your function does.

  We likely want to test the boundaries where the parts "flip over",
  and also one output on each side of that boundary, i.e., exactly 1 hour,
  1 hour plus 1 second, and 1 hour minute 1 second.

  Why? This is where our code is most likely to "go wrong."
*/

console.log(timeFormat(0) == "0s");
console.log(timeFormat(1) == "1s");

console.log(timeFormat(59) == "59s");
console.log(timeFormat(60) == "1m 0s");
console.log(timeFormat(61) == "1m 1s");

console.log(timeFormat(3600) == "1h 0m 0s");

