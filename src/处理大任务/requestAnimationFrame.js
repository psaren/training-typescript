const bigArray = Array.from({ length: 1000000 }, (_, i) => i + 1);
let index = 0; // 用于跟踪当前处理到数组的哪个位置

function processElements() {
  const chunkSize = 1000; // 每次处理的元素数量
  const startTime = performance.now();

  // 处理当前批次的元素
  for (let i = 0; i < chunkSize && index < bigArray.length; i++) {
    bigArray[index++] = bigArray[index - 1] * 2; // 假设的“平方”操作，这里只是示例
  }

  // 如果还有元素需要处理，继续使用 requestAnimationFrame
  if (index < bigArray.length) {
    requestAnimationFrame(processElements);
  } else {
    console.log('所有元素处理完毕');
  }

  // 限制处理时间，防止单次执行太长影响UI响应
  const endTime = performance.now();
  if (endTime - startTime > 16) { // 大约60帧的1帧时间
    console.log('本帧处理时间太长，将在下一帧继续处理');
    requestAnimationFrame(processElements);
  }
}

// 开始处理数组
requestAnimationFrame(processElements);