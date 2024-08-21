import '../src/apply';
import '../src/bind';
import '../src/call';

describe('Function.prototype.myApply', () => {
  test('should call the function with the provided context', () => {
    const obj = { value: 42 };
    function testFunc(this: typeof obj) {
      return this.value;
    }
    
    const result = testFunc.myApply(obj);
    expect(result).toBe(42);
  });

  test('should pass arguments correctly', () => {
    function sum(a: number, b: number) {
      return a + b;
    }
    
    const result = sum.myApply(null, [5, 3]);
    expect(result).toBe(8);
  });

  test('should use global context when context is null or undefined', () => {
    (global as any).testValue = 'global';
    function getGlobalValue(this: typeof globalThis) {
      return this.testValue;
    }
    
    const result1 = getGlobalValue.myApply(null);
    const result2 = getGlobalValue.myApply(undefined);
    
    expect(result1).toBe('global');
    expect(result2).toBe('global');
    
    delete (global as any).testValue;
  });

  test('should throw TypeError when called on non-function', () => {
    const notAFunction = {};
    expect(() => {
      (notAFunction as any).myApply();
    }).toThrow(TypeError);
  });
});

describe('Function.prototype.myBind', () => {
  test('should return a new function', () => {
    function testFunc() {}
    const boundFunc = testFunc.myBind({});
    expect(typeof boundFunc).toBe('function');
    expect(boundFunc).not.toBe(testFunc);
  });

  test('should bind the correct context', () => {
    const obj = { value: 42 };
    function getValue(this: typeof obj) {
      return this.value;
    }
    const boundGetValue = getValue.myBind(obj);
    expect(boundGetValue()).toBe(42);
  });

  test('should pass arguments correctly', () => {
    function sum(a: number, b: number) {
      return a + b;
    }
    const boundSum = sum.myBind(null, 5);
    expect(boundSum(3)).toBe(8);
  });

  test('should throw TypeError when called on non-function', () => {
    const notAFunction = {};
    expect(() => {
      (notAFunction as any).myBind();
    }).toThrow(TypeError);
  });
});

describe('Function.prototype.myCall', () => {
  test('should call the function with the provided context', () => {
    const obj = { value: 42 };
    function testFunc(this: typeof obj) {
      return this.value;
    }
    
    const result = testFunc.myCall(obj);
    expect(result).toBe(42);
  });

  test('should pass arguments correctly', () => {
    function sum(a: number, b: number) {
      return a + b;
    }
    
    const result = sum.myCall(null, 5, 3);
    expect(result).toBe(8);
  });

  test('should use global context when context is null or undefined', () => {
    (global as any).testValue = 'global';
    function getGlobalValue(this: typeof globalThis) {
      return this.testValue;
    }
    
    const result1 = getGlobalValue.myCall(null);
    const result2 = getGlobalValue.myCall(undefined);
    
    expect(result1).toBe('global');
    expect(result2).toBe('global');
    
    delete (global as any).testValue;
  });

  test('should throw TypeError when called on non-function', () => {
    const notAFunction = {};
    expect(() => {
      (notAFunction as any).myCall();
    }).toThrow(TypeError);
  });
});
