/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  // Code here
  const rows = board.trim().split('\n');
  const height = rows.length;
  const width = rows[0].length

  //Find the initial position of the Reindeer ('@):
  let renoRow = -1;
  let renoCol = -1;

  for (let r = 0; r < height; r++) {
    const c = rows[r].indexOf("@");
    if (c !== -1) {
      renoRow = r;
      renoCol = c;
      break; //found the reindeer, no need to check other rows.
    }
  }

  //Initialize the status: 'fail' is the default if no success or crash occurs.
  let status = 'fail';

  //Simulate the movements:
  for (const move of moves) {
    let newRow = renoRow;
    let newCol = renoCol;

    switch (move) {
      case "L": newCol--; break;
      case "R": newCol++; break;
      case "U": newRow--; break;
      case "D": newRow++; break;
      //handle unexpected moves characters
      default: continue;
    }

    //Check for Off-board crash:
    if (newRow < 0 || newRow >= height || newCol < 0 || newCol >= width) {
      if (status === 'success') {
        return 'success';
      }
      return 'crash';
    }

    //Check for Obstacles ('#') crash:
    const nextCell = rows[newRow][newCol];
    if (nextCell === '#') {
      if (status === 'success') {
        return 'success';
      }
      return 'crash';
    }

    //Check for Success Condition (Pickup '*')
    if (nextCell === '*') {
      status = 'success';
    }

    //Update the Reindeer's position for the next move iteration.
    renoRow = newRow;
    renoCol = newCol;
  } //forof loop ends.
  return status;
}

const board = `
.....
.*#.*
.@...
.....
`

console.log(`'D' -> ${moveReno(board, 'D')}`)      // Expected: fail
console.log(`'U' -> ${moveReno(board, 'U')}`)      // Expected: success
console.log(`'RU' -> ${moveReno(board, 'RU')}`)    // Expected: crash
console.log(`'RRRUU' -> ${moveReno(board, 'RRRUU')}`) // Expected: success
console.log(`'DD' -> ${moveReno(board, 'DD')}`)    // Expected: crash
console.log(`'UUU' -> ${moveReno(board, 'UUU')}`)  // Expected: success
console.log(`'RR' -> ${moveReno(board, 'RR')}`)    // Expected: fail