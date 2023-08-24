/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const isVowel = (ch) => {
    return "aeiouAEIOU".indexOf(ch) >= 0;
  };
  const arr = s.split("");
  let l = 0;
  let r = arr.length - 1;
  const swap = (arr, l, r) => {
    const temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
  }
  while (l <= r) {
    if (isVowel(arr[l]) && isVowel(arr[r])) {
      swap(arr, l, r);
      l++;
      r--;
      continue;
    }
    if (!isVowel(arr[l])){
      l++;
    }
    if (!isVowel(arr[r])){
      r--;
    }
  }
  return arr.join('');
};

console.log(reverseVowels("hello"))
console.log(reverseVowels("leetcOde"))