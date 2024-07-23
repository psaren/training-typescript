import compose from './compose';

export default function applyMiddleware(...middlewares) {
  // 返回一个函数，这个函数会接收 createStore 作为参数，并对其进行增强，返回一个增强后的 createStore 函数
  return (createStore) => (reducer) => {
    // 使用原始的 createStore 函数，创建好 store
    let store = createStore(reducer);
    let dispatch = () => {
      throw new Error(
        '不允许在构建中间件时调用 dispatch，其他中间件不会应用此 dispatch。'
      );
    };
    // 提供给中间件的 API，中间件在构建时可以用到这些 api
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args),
    };
    // 调用中间件函数（对所有中间件进行构建）
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    // 使用 compose 将中间件数组串起来
    dispatch = compose(...chain)(store.dispatch);

    return {
      ...store,
      dispatch,
    };
  };
}