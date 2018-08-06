import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

export const configureStore = preloadedState => {
  const middlewares = [];
  const middlewareEnhanser = applyMiddleware(...middlewares);
  //the middlewares to apply

  const storeEnhancers = [middlewareEnhanser];
  //we can combine sets of middlewares??

  const composedEnhancer = composeWithDevTools(...storeEnhancers);
  //these middlewares need to be combined tother.

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
};
