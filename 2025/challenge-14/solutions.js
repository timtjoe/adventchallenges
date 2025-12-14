/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  // Code here
  // 1. Traverse all properties of the current object level
  for (const [key, value] of Object.entries(workshop)) {
    // Check if the property's VALUE is the gift we are looking for.
    if (value === gift) {
      // Found it! Return the path segment: just the key that points to the gift.
      return [key]
    }
    // Check if the value is a non-null object (needs further exploration)
    if (typeof value === 'object' && value !== null) {
      // Recursively search the nested object (value).
      const subPath = findGiftPath(value, gift);
      // If the recursive call found the gift (subPath is NOT an empty array)
      if (subPath.length > 0) {
        // Prepend the current key to the path returned by the deeper call.
        return [key, ...subPath];
      }
    }
  }
  // If the loop finishes without finding the gift, return an empty array.
  return []
}


const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch'
    },
    box: 'car'
  },
  gift: 'doll'
}

console.log(`'train' -> ${findGiftPath(workshop, 'train')} (Expected: storage,shelf,box1)`);
console.log(`'switch' -> ${findGiftPath(workshop, 'switch')} (Expected: storage,shelf,box2)`);
console.log(`'car' -> ${findGiftPath(workshop, 'car')} (Expected: storage,box)`);
console.log(`'doll' -> ${findGiftPath(workshop, 'doll')} (Expected: gift)`);
console.log(`'plane' -> ${findGiftPath(workshop, 'plane')} (Expected: )`);