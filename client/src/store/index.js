import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const reduxDevToolSetUp =  typeof window === 'object' &&
                      window.devToolsExtension !== 'undefined' ?
                      window.devToolsExtension() : null

const middleware = applyMiddleware(thunk)

export default createStore(
  rootReducer,
  compose(middleware, reduxDevToolSetUp)
)
