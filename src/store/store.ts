import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

let devTools: (f: any) => any =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

if (
  process.env.NODE_ENV === 'production' ||
  (process as any).env.NODE_ENV === 'prod'
) {
  devTools = (f) => f;
}

export const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), devTools)
);
