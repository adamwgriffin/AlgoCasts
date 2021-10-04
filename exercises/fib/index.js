// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// an iterative solution for fibonacci that just uses a simple array and for loop. it's fast, using linear run time
// complexity. it's also arguably easier to understand. n is the __index of the array__ that stores the value we want
// from the series, so it's 0-based instead of starting at one.
function iterativeFib(n) {
  // need to add the 1st 2 numbers in the series manually, so that we can have 2 previous numbers to sum
  const series = [0, 1];
  for (let i = 2; i <= n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series[n];
}

// a higher order function that captures a cache variable inside a closure and returns a new function for the one you
// passed in that will cache it's return value each time it's called. making cache an optional arg opens up the
// possibility of using an existing cache you may have saved previously so that the cache doesn't have to start from
// scratch each time we memoize the same function.
const memoize = (fn, cache={}) => (...args) =>
  cache[args] ? cache[args] : cache[args] = fn(...args);

// the standard recursive solution for fibonacci. it has exponential runtime complexity because of the way this kind of
// recursive solution creates a tree of function calls that often repeat calls with the same arguments multiple times.
const recursiveFib = n =>
  n < 2 ? n : fib(n-1) + fib(n-2);

// using the memoize function to return a version of recursiveFib that uses our cache will dramaitically speed up the
// performance of recursiveFib()
const fib = memoize(recursiveFib);

// using the second cache argument from this version of memoize, we could create a cache object outside of the memoized
// function then pass it by reference like so:
const savedCache = {};
const cachedFib = memoize(recursiveFib, savedCache);
// once we're done with cachedFib() we could store the cache somewhere like localStorage
localStorage.setItem('fibCache', JSON.stringify(savedCache));
// then grab it again later
savedCache = JSON.parse(localStorage.getItem('fibCache'))
const newCachedFib = memoize(recursiveFib, savedCache);

module.exports = fib;
