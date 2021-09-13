// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowelsOne(str) {
  return str.split('')
    .reduce((n, char) => ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase()) ? ++n : n, 0);
}

// using regex still using split
function vowelsTwo(str) {
  return str.split('')
    .reduce((n, char) => /[aeiou]/i.test(char) ? ++n : n, 0);
}

// using a for..of loop
function vowelsThree(str) {
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
      count++;
    }
  }
  return count;
}

// using filter with split
function vowelsFour(str) {
  return str.split('').filter(c => /[aeiou]/i.test(c)).length;
}

// regex with match(). need to use "?" because if there are no matches it would return null instead of an empty array
function vowelsFive(str) {
  return str.match(/[aeiou]/ig)?.length || 0;
}

// regex with replace() to get rid of non-vowels
function vowels(str) {
  return str.replace(/[^aeiou]/ig, '').length;
}

module.exports = vowels;
