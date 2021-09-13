// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

// calculate chars for last row. each row needs two extra characters to form a pyramid, so:
// (n - 1) * 2 = max
// calculates the index of the middle character in each row
// const midpoint = Math.floor((2 * n - 1) / 2)

function pyramid(n) {
  const rowCharCount = 2 * n - 1;
  for (let row = 1, column = 1; row <= n; row++, column += 2) {
    const pad = ' '.repeat((rowCharCount - column) / 2);
    console.log(pad+'#'.repeat(column)+pad);
  }
}

// without using repeat()
function pyramidNoRepeat(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);
  const rowCharCount = 2 * n - 1;

  for (let row = 0; row < n; row++) {
    let level = '';
    for (let column = 0; column < rowCharCount; column++) {
      level += (midpoint - row <= column && midpoint + row >= column) ? '#' : ' ';
    }
    console.log(level);
  }
}

// recursive version
function pyramidRecursive(n, row=0, column=1) {
  if (row === n) return;
  const rowCharCount = 2 * n - 1;
  const pad = ' '.repeat((rowCharCount - column) / 2);
  console.log(pad+'#'.repeat(column)+pad);
  pyramid(n, row + 1, column + 2);
}

module.exports = pyramid;
