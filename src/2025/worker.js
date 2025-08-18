self.addEventListener('message', (event) => {
  console.log('message', event.data);
  if (event.data.type === 'mul') {
    const result = event.data.num * 2;
    self.postMessage({ type: 'mul', result });
  }
});