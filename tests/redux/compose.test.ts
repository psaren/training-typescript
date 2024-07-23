import compose from "../../src/redux/compose";

describe("compose", () => {
  const add = (x: number, y: number) => x + y;
  const multiply = (x: number) => x * 2; // 修正拼写错误
  const composeFunc = compose(multiply, add);

  test("compose with two functions", () => {
    expect(composeFunc(2, 3)).toBe(10);
  });

  test("compose with one function", () => {
    const singleFunc = compose(multiply);
    expect(singleFunc(5)).toBe(10);
  });

  test("compose with no functions", () => {
    const noFunc = compose();
    expect(noFunc(5)).toBe(5);
  });
})