const bigArray = Array.from({ length: 1000000 }, (_, i) => i + 1);

function processElement() {
  // 定义一个处理函数，例如对数组中的每个元素进行平方操作
  function squareElements(array, index) {
    if (index < array.length) {
      array[index] = array[index] * array[index]; // 元素平方
      requestIdleCallback(() => squareElements(array, index + 1));
    }
  }

  requestIdleCallback(() => squareElements(bigArray, 0));
}

processElement();