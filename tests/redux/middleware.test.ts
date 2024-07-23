import { createStore } from '../../src/redux/index';
import applyMiddleware from '../../src/redux/applyMiddleware';
import { expect } from '@jest/globals';

describe('applyMiddleware', () => {
  it('should apply middleware correctly', () => {
    const reducer = (state = 0, action) => {
      if (action.type === 'INCREMENT') {
        return state + 1;
      }
      return state;
    };

    const logger = (store) => (next) => (action) => {
      console.log('dispatching', action);
      return next(action);
    };

    const store = createStore(reducer, applyMiddleware(logger));
    store.dispatch({ type: 'INCREMENT' });

    expect(store.getState()).toBe(1);
  });
});
