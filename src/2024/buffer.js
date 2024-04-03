const buffer = Buffer.from("你好","utf-8");
console.log(buffer);
// <Buffer e4 bd a0 e5 a5 bd>
const str = buffer.toString("utf-8");
console.log(str);