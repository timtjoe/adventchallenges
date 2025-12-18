/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {
  // Code here
  //  1. Handle the edge case of no gifts
  if (gifts.length === 0) return 0;

  // 2. Initialize tracking variables
  let sleighCount = 1;
  let currentSleighWeight = 0;

  for (const giftWeight of gifts) {
    // 3. Check if a single gift exceeds the sleigh's total capacity
    if (giftWeight > maxWeight) {
      return null;
    }

    // 4. Check if the gift fits in the current sleigh
    if (currentSleighWeight + giftWeight <= maxWeight) {
      // It fits! Just add the weight
      currentSleighWeight += giftWeight;
    } else {
      // It doen't fit! Send the current sleigh and start a new one.
      sleighCount++
      currentSleighWeight = giftWeight
    }
  }
  return sleighCount
}

console.log(packGifts([2, 3, 4, 1], 5)); // 2
console.log(packGifts([3, 3, 2, 1], 3)); // 3
console.log(packGifts([1, 1, 1, 1], 2)); // 2
console.log(packGifts([5, 6, 1], 5));    // null
console.log(packGifts([], 10));          // 0
