export const createStore = (reducer: Function, enhancer?: Function) => {
  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('enhancer 必须是一个函数');
    }
    return enhancer(createStore)(reducer);
  }
  let state: any;
  let listeners: Function[] = [];
  const getState = () => {
    return state;
  };
  const dispatch = (action: {type: string}) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };
  const subscribe = (listener: Function) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    }
  };
  // 执行一次初始化的 dispatch，这样可以保证整个 state 树都拥有初始状态值，这样在定义 reducer 函数时定义都初始 state 才会生效。
  dispatch({type: '@@INIT'});
  return {
    getState,
    dispatch,
    subscribe,
  };
};