// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// just a simple for loop with slice(). this is supposedly the fastest function tested with jsPerf (and that works from
// IE8).
function chunk(array, size) {
  let chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i+size));
  }
  return chunks;
}

// Array.from can accept an object as it's first argument, with a length property. we divide the give arrays length by
// the given size to find out how many chunks we can make. Math.ceil rounds the number up if size doesn't divide evenly.
// we want that because we want to put the remaining elements in one final array, e.g., [[ 1, 2], [3, 4], [5]].
// Array.from also has an optional 2nd argument that is a mapping function. we use it's index variable, along with some
// simple math, to get the correct indexes for each call to slice() that creates the appropriate chunk for each element
// of our array.
const chunkEsSix = (arr, size) =>
  Array.from(
    { length: Math.ceil(arr.length/size) },
    (_, i) => arr.slice(i*size, i*size+size)
  );

// similar to above, only we create the initial array by only passing the number of elements to the Array() constructor,
// then destructuring into a new array to make sure each is element is "filled" with an undefined value. the we call map
// explicitly to fill the chunks using slice just like above.
const chunkEsSixAlt = (arr, size) =>
  [...Array(Math.ceil(arr.length / size))]
    .map((_, i) => arr.slice(i*size, i*size+size));


/* using reduce. we use division with reduce as well, but the method is a little different. here we use the modulo (%)
operator to see if the size divides evenly into the current index,. if it does, that means we are at a position where
we can slice a chunk. for example:
  const arr = [1, 2, 3, 4, 5]
  const size = 2
  arr.length === 5
  5 / 2 === 2.5
  so, arr can be divided into 2 chunks of 2 elements, with one remaining chunk that has less than 2 chunks.
  [[1, 2], [3, 4], [5]]
we destructure the chunks we already have into the beginning of a new array, then we slice
at the current index to get the new chunk. if the index doesn't divide evently, we just return the current array
unmodified so that we can move on to the next index. this condition relies on the fact that even numbers will be 0,
which evaluates to false, and others will be more than 0, evaluates to true */
const chunkReduce = (arr, size) => arr.reduce((acc, _, i) => (i % size) ? acc : [...acc, arr.slice(i, i+size)], []);
/*
looping through the array with reduce:
const arr = [1, 2, 3, 4, 5]
const size = 2
let i = 0
0 % 2 === 0, 0 is falsey, which means it divided evenly, so go into else clause and call `slice(0, 2)`
result: acc = [[1, 2]], slice() return the element at the index of it's first arg, then all other elements up to __but
not including__ the last index.
1 % 2 === 1, 1 is the remainder. 1 is truthy, so don't slice, just return current acc: [[1, 2]]
2 % 2 === 0, it divided evently again, get the next slice `slice(2, 4)`
result: acc = [[1, 2], [3, 4]]
3 % 2 === 1, it doesn't divide evenly, just return [[1, 2], [3, 4]]
4 % 2 === 0, the last index of 4 can be divided by 2 with no remainder so `slice(4, 6)`
result: acc = [[1, 2], [3, 4], [5]], 5 was at index 4 and there are no further elements for slice to return even though
the end index was 6.
reduce returns: [[1, 2], [3, 4], [5]]
*/

module.exports = chunk;
