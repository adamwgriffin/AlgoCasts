// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str.split(' ').map(s => s[0].toUpperCase()+s.slice(1)).join(' ');
}

// using a regex instead
const capitalizeRegex = (str) => str.replace(/\S+/g, (m) => m[0].toUpperCase()+m.slice(1))

module.exports = capitalize;
