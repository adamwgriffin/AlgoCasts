// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str.split('').reverse().join('');

  // let reversed = '';
  // for (let i = str.length-1; i >= 0; i--) {
  //   reversed = reversed + str[i];
  // }
  // return reversed;

  // let reversed = '';
  // for (let character of str) {
  //   reversed = character + reversed;
  // }
  // return reversed;

  return str.split('').reduce((rev, char) => char + rev);
}

// reverse('dokken');

module.exports = reverse;
