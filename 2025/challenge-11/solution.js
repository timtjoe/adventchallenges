/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  // Code here
  // 1. Determine Dimensions
  const rows = warehouse.length;
  if (rows === 0) {
    return 0; // Handle empty warehouse
  }
  const cols = warehouse[0].length;

  let unguardedCount = 0;

  // 2. Direction Vectors (Cardinal Direction: Up, Down, Left, Right)
  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1] // Right
  ];

  // 3. Grid Traversal (Nested Iteration 0)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (warehouse[r][c] === '*') {
        let isGuarded = false;
        // 4. Neighborhood Check
        //Iterate through the 4 cardinal directions
        for (const [dr, dc] of directions) {
          const nr = r + dr; // Neighbor row
          const nc = c + dc; // Neighbor column

          //Boundary Check: Ensure the neighbor is within the grid limits.
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
            
            //Content Check: If the neighbor is a camera (#), the present is guarded.
            if(warehouse[nr][nc] === '#') {
              isGuarded = true;
              // Early Exit: Stop checking other directions for this presents.
              break;
            }
          }
        }

        // 5. Counting
        if (!isGuarded) {
          unguardedCount++;
        }
      }
    }
  }
  return unguardedCount;
}

const warehouse1 = [
  '.*.',
  '*#*',
  '.*.'
] // ➞ 0

// All presents are next to a camera

const warehouse2 = [
  '...',
  '.*.',
  '...'
] // ➞ 1

// This present has no cameras around

const warehouse3 = [
  '*.*',
  '...',
  '*#*'
] // ➞ 2
// The presents in the top corners have no cameras around

const warehouse4 = [
  '.....',
  '.*.*.',
  '..#..',
  '.*.*.',
  '.....'
] // ➞ 4

// The four presents have no cameras, because they are diagonal to the camera

console.log(`Warehouse 1 (Expected 0): ${findUnsafeGifts(warehouse1)}`);
console.log(`Warehouse 2 (Expected 1): ${findUnsafeGifts(warehouse2)}`);
console.log(`Warehouse 3 (Expected 2): ${findUnsafeGifts(warehouse3)}`);
console.log(`Warehouse 4 (Expected 4): ${findUnsafeGifts(warehouse4)}`);