const fs = require('fs');
const { resolve } = require('path');
const inputStream = fs.createReadStream(resolve(__dirname, 'buffer.js')); //
const outputStream = fs.createWriteStream(resolve(__dirname, 'output.js')); //
inputStream.pipe(outputStream);
inputStream.on('end', () => console.log('copy successfully'));