/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  potions.sort((a, b) => a - b);
  return spells.map(num => getResult(num, potions, success, {}));
};

const getResult = (num, sortedPotions, success, map) => {
  const len = sortedPotions.length;
  const min = sortedPotions[0];

  const max = sortedPotions[len - 1];
  if (success > max * num) return 0;
  if (success < min * num) return len;
  if(map[num]) {
    return map[num];
  }
  let index = 0;
  while (sortedPotions[index] * num < success) {
    index++;
  }
  map[num] = len - index;
  return map[num];
}
spells = [5,1,3], potions = [1,2,3,4,5], success = 7
// spells = [3,1,2], potions = [8,5,8], success = 16
// spells = [1,2,3,4,5,6,7], potions = [1,2,3,4,5,6,7], success = 25;
// spells = [15,8,19], potions = [38,36,23], success = 328

const res = successfulPairs(spells, potions, success);

console.log('res', res);