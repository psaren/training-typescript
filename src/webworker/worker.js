onmessage = function (event) {
  const start = event.data.start;
  const end = event.data.end;
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  postMessage(sum); // 向主线程发送消息
};
