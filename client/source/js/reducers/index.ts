import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { AppstateState, AppstateReducer } from '@client/reducers/AppstateReducer';
import { ReduxReducer, ReduxState } from '@client/reducers/ReduxReducer';
import { UserReducer, UserState } from '@client/reducers/UserReducer';
import { CharacterReducer, CharacterState } from '@client/reducers/CharacterReducer';

export interface ReducerState {
  routing: routerReducer;
  appstate: AppstateState;
  redux: ReduxState;
  users: UserState;
  characters: CharacterState;
}

const reducers = combineReducers({
  routing: routerReducer,
  appstate: AppstateReducer,
  redux: ReduxReducer,
  users: UserReducer,
  characters: CharacterReducer,
});

export default reducers;