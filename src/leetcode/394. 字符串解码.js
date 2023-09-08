/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
  for (let i = 0;i < s.length;i++) {
    if (s[i] === ']') {
      let str = '';
      let numStr = '';
      while (stack.length > 0) {
        const last = stack.pop();
        if (last === '[') {
          break;
        } else {
          str = last + str;
        }
      }
      // '[' 前面是数字
      while (stack.length > 0) {
        const last = stack.pop();
        if (/\d/.test(last)) {
          numStr = last + numStr;
        } else {
          stack.push(last);
          break;
        }
      }
      stack.push(str.repeat(+numStr));
    } else {
      stack.push(s[i]);
    }
  }
  console.log('stack', stack);
  return stack.join('');
};

s = "13[a]2[bc]"
console.log(decodeString(s))
s = "3[a2[c]]"
console.log(decodeString(s))
s = "2[abc]3[cd]ef"
console.log(decodeString(s))