import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import reducers from '@client/reducers';
import { browserHistory_ } from '../browser-history';

export let store = createStore(reducers,
  applyMiddleware(
    thunkMiddleware,
    createLogger(),
    routerMiddleware(browserHistory_),
  )
);