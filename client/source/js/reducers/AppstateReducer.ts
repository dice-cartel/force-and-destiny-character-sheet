import { ReduxAction } from '@client/types';
import { AppstateActionTypes } from '@client/actions/AppstateActions';

export type AppstateState = {
};

export const defaultState: AppstateState = {
};

export const AppstateReducer = (state: AppstateState = defaultState, action: ReduxAction): AppstateState => {
  switch (action.type) {
    default:
      return state
  }
};