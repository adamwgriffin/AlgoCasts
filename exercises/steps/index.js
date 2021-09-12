// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i).padEnd(n));
  }
}


function stepsNoRepeatPadEnd(n) {
  for (let i = 1; i <= n; i++) {
    console.log(
      Array(i).fill('#').join('') + Array(n-i).fill(' ').join('')
    );
  }
}

function stepsOnlyForLoops(n) {
  for (let row = 0; row < n; row++) {
    let step = '';
    for (let column = 0; column < n; column++) {
      step += (column <= row) ? '#' : ' ';
    }
    console.log(step);
  }
}

function stepsArrayFromForEach(n) {
  Array.from({ length: n })
    .forEach((_, i) => console.log('#'.repeat(i+1).padEnd(n)));
}

function stepsArryKeysForEach(n) {
  [...Array(n).keys()]
    .forEach((s) => console.log('#'.repeat(s+1).padEnd(n))); 
}

module.exports = steps;
