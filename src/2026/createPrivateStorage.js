/*
### 实践挑战 (Practice Phase)
为了证明你已经真正掌握了闭包的精髓，请尝试完成下面这个小任务：

任务：编写一个“私有存储器”函数 createPrivateStorage 。

要求如下：

1. 它不接受参数，返回一个对象。
2. 返回的对象有两个方法： set(key, value) 和 get(key) 。
3. 数据必须存储在函数内部的闭包变量中， 外部无法直接访问或修改 （即除了通过这两个方法外，没法直接拿到存储的数据）。
*/

const createPrivateStorage = () => {
  const data = {};
  return {
    set(key, value) {
      data[key] = value;
    },
    get(key) {
      return data[key];
    }
  }
}