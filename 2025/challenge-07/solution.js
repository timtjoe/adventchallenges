/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  let ornamentCount = 0;
  let treeWidth = (2 * height) - 1;
  let treeString = '';

  for (let i = 1; i <= height; i++) {
    let spaces = ' '.repeat(height - i);
    let starsLength = 2 * i - 1;
    let currentRow = '';

    currentRow += spaces; 

    for (let k = 0; k < starsLength; k++) {
      ornamentCount++;
      if (ornamentCount % frequency === 0) {
        currentRow += ornament;
      } else {
        currentRow += '*';
      }
    }
    treeString += currentRow + '\n';
  }

  let trunkPadding = ' '.repeat(Math.floor(treeWidth / 2));
  let trunkChar = '#';

  treeString += trunkPadding + trunkChar;
  return treeString;
}

//test cases
drawTree(5, 'o', 2)
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, '@', 3)
//   *
//  *@*
// *@**@
//   #

drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #