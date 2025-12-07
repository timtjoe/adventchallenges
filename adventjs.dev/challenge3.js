/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  // Code here
  let output = "";
  if (size < 2) return "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      if (i == 1 || i === size || j === 1 || j === size) {
        output += symbol;
      } else {
        output += " ";
      }
    }
    output += "\n"
  }

  return output
}
const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###
*/

const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--
*/

const g4 = drawGift(1, '+')
console.log(g4)
// ""  poor intern…