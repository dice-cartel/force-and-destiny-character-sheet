import { ReduxAction } from '@client/types';
import { AppstateActionTypes } from '@client/actions/AppstateActions';

export type AppstateState = {
  isLeftDrawerOpen: boolean;
};

export const defaultState: AppstateState = {
  isLeftDrawerOpen: false,
};

export const AppstateReducer = (state: AppstateState = defaultState, action: ReduxAction): AppstateState => {
  switch (action.type) {
    case AppstateActionTypes.SET_LEFT_DRAWER:
      return {
        isLeftDrawerOpen: action.state,
      };
    default:
      return state
  }
};