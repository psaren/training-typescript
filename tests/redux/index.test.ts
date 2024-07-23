import { createStore } from '../../src/redux/index';
import { expect } from '@jest/globals';

describe('createStore', () => {
  it('should create a store with initial state', () => {
    const reducer = (state = 0, action: { type: string }) => {
      if (action.type === 'INCREMENT') {
        return state + 1;
      }
      return state;
    };
    const store = createStore(reducer);
    expect(store.getState()).toBe(0);
    store.dispatch({ type: 'INCREMENT' });
    expect(store.getState()).toBe(1);
  });

  it('should allow subscription to state changes', () => {
    const reducer = (state = 0, action: { type: string }) => {
      if (action.type === 'INCREMENT') {
        return state + 1;
      }
      return state;
    };
    const store = createStore(reducer);
    let state = 0;
    const unsubscribe = store.subscribe(() => {
      state = store.getState();
    });
    store.dispatch({ type: 'INCREMENT' });
    expect(state).toBe(1);
    unsubscribe();
  });
});