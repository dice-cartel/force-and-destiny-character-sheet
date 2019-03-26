import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { AppstateState, AppstateReducer } from '@client/reducers/AppstateReducer';
import { ReduxReducer, ReduxState } from '@client/reducers/ReduxReducer';
import { UserReducer, UserState } from '@client/reducers/UserReducer';

export interface ReducerState {
  routing: routerReducer;
  appstate: AppstateState;
  redux: ReduxState;
  users: UserState;
}

const reducers = combineReducers({
  routing: routerReducer,
  appstate: AppstateReducer,
  redux: ReduxReducer,
  users: UserReducer,
});

export default reducers;