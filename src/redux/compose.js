export default function compose(...funcs) {
  if (funcs.length === 0) {
    // infer the argument type from the first function
    // and return the result of the last function
    // @ts-ignore
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}