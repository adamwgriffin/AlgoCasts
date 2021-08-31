// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charCounts = str.split('').reduce((chars, c) => {
    chars[c] = chars[c] + 1 || 1;
    return chars;
  }, {});
  return Object.keys(charCounts).reduce((a, b) => charCounts[a] > charCounts[b] ? a : b);
}

// maxChar("abcccccccd")

module.exports = maxChar;
