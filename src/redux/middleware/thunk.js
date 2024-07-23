// 构建中间件的时候，传入 getState, dispatch，使中间件可以用这两个方法
export const thunk = ({ getState, dispatch }) => {
  // 第二层是 compose 的时候生成的一层包一层的函数，其中 next 就是下一层中间件，最后一个 next 就是原始的 dispatch
  return (next) => {
    // 中间件主要逻辑代码
    return (action) => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }
      return next(action);
    };
  };
};