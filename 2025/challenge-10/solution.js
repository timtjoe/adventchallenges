/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {

  // 1. Initialization
  let maxDepth = 0;
  let currentDepth = 0;

  // 2. Iterate and Validate
  for (const char of s) {
    if (char === "[") {
      // Found an opening bracket: increase depth.
      currentDepth++

      // Update the maximum depth achieved so far.
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
      }
    } else if(char === "]") {
      // Found a closing bracket: decrease depth.
      currentDepth--

      // CHECK 1: Closes before opening (e.g., '][') or Extra closing (e.g., '[]]]')
      // If currentDepth drops below 0, the brackets are unbalanced immediately.
      if (currentDepth < 0) {
        return -1;
      }
    }
  }

  // 3. Final Balance Check
    
    // After the loop, currentDepth must be exactly 0.
    // CHECK 2: Missing closing brackets (e.g., '[[[') or one remains unclosed (e.g., '[][][')
  if (currentDepth !== 0) {
    return -1
  }
  return maxDepth
}

// --- Examples ---
console.log(`maxDepth('[]')       -> ${maxDepth('[]')}`);      // -> 1
console.log(`maxDepth('[[]]')     -> ${maxDepth('[[]]')}`);    // -> 2
console.log(`maxDepth('[][]')     -> ${maxDepth('[][]')}`);    // -> 1
console.log(`maxDepth('[[][]]')   -> ${maxDepth('[[][]]')}`);  // -> 2
console.log(`maxDepth('[[[]]]')   -> ${maxDepth('[[[]]]')}`);  // -> 3
console.log(`maxDepth('][[]][]')  -> ${maxDepth('[][[]][]')}`); // -> 2
console.log('--- Invalid Letters (Expected -1) ---');
console.log(`maxDepth('][')       -> ${maxDepth('][')}`);      // -> -1 (Closes before opening)
console.log(`maxDepth('[[[')      -> ${maxDepth('[[[')}`);     // -> -1 (Missing closing brackets)
console.log(`maxDepth('[]]]')     -> ${maxDepth('[]]]')}`);    // -> -1 (Extra closing brackets)
console.log(`maxDepth('[][][')    -> ${maxDepth('[][][')}`);    // -> -1 (One remains unclosed)