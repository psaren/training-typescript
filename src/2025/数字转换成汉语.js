// 写出一个函数trans，将数字转换成汉语的输出，输入为不超过10000亿的数字。
const trans = (num) => {
  const s = `${num}`;
  s.trimLeft('0');
  const numMap = {
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '七',
    8: '八',
    9: '九',
  };
  const arr = ['零', '十', '百', '千', '万', '亿'];
  if (s.length < 2) return numMap[s] || '';
  if (s.length === 2) {
    if (s === '00') return '';
    if (s[0] === '0') return '零' + numMap[s[1]];
    return numMap[s[0]] + (s[1] === '0' ? '十' : `十${numMap[s[1]]}`)
  }
  if (s.length === 3) {
    console.log(s, s.replace(/^0+/, ''));
    if (s[0] === '0') return '零' + trans(s.replace(/^0+/, ''));
    return numMap[s[0]] + '百' + trans(s.slice(1));
  }
  if (s.length === 4) {
    if (s[0] === '0') return '零' + trans(s.replace(/^0+/, ''));
    return numMap[s[0]] + '千' + trans(s.slice(1));
  }
  if (s.length === 5) {
    if (s[0] === '0') return '零' + trans(s.replace(/^0+/, ''));
    return numMap[s[0]] + '万' + trans(s.slice(1));
  }
  if (s.length < 9) {
    return trans(s.slice(0, s.length-4)) + '万' + trans(s.slice(s.length-4));
  }
  if (s.length >= 9) {
    return trans(s.slice(0, s.length-8)) + '亿' + trans(s.slice(s.length-8));
  }
};

console.log(trans(100000000000));