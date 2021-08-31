// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// the fastest function tested with jsPerf (and that works from IE8):
// function chunk(array, size) {
//   let chunks = [];
//   for (let i = 0; i < array.length; i += size) {
//     chunks.push(array.slice(i, i+size));
//   }
//   return chunks;
// }

const chunk = (arr, size) => [...Array(Math.ceil(arr.length / size))].map((_, i) => arr.slice(i*size, i*size+size));

// const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length/size) }, (_, i) => arr.slice(i*size, i*size+size));

// using reduce
// const chunk = (arr, size) => arr.reduce((acc, _, i) => (i % size) ? acc : [...acc, arr.slice(i, i+size)], []);

// const chunk = (arr, size) => {
//   return arr.reduce((acc, _, i) => {
//     if (i % size === 0) acc.push(arr.slice(i, i + size))
//     return acc
//   }, [])
// }

module.exports = chunk;
