/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
// 1、两字符串长度相同
// 2、两字符串字符种类相同
// 3、字符频次相同
var closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  const wordMap1 = {};
  const wordMap2 = {};
  for (let i = 0;i < word1.length;i++) {
    const count1 = wordMap1[word1[i]] ? wordMap1[word1[i]] + 1 : 1;
    const count2 = wordMap2[word2[i]] ? wordMap2[word2[i]] + 1 : 1;
    wordMap1[word1[i]] = count1;
    wordMap2[word2[i]] = count2;
  }
  const char1 = Object.keys(wordMap1);
  const char2 = Object.keys(wordMap2);
  if (char1.length !== char2.length) {
    return false;
  }
  for (let i = 0;i < char2.length;i++) {
    if (!wordMap1(char2[i])) {
      return false;
    }
  }
  // 至此已证明：2、两字符串字符种类相同
  const arr1 = Object.values(wordMap1);
  const arr2 = Object.values(wordMap2);
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  for (let i = 0;i < arr1.length;i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};