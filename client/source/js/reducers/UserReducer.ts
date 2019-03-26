import { User, ReduxAction } from '@client/types';
import { UserActionTypes } from '@client/actions/UserActions';

export type UserState = {
  users: {
    [key: string]: User;
  },
  currentUserId?: string;
};

const defaultState: UserState = {
  users: {},
  currentUserId: null,
};

export const UserReducer = (state: UserState = defaultState, action: ReduxAction) => {
  switch (action.type) {
    case UserActionTypes.GOT_ALL:
      return {
        ...state,
        users: state.currentUserId ? {
          ...state.users,
          ...action.users,
          [state.currentUserId]: state.users[state.currentUserId],
        } : {
          ...state.users,
          ...action.users,
        }
      };
    case UserActionTypes.GOT_SELF:
      return action.user ? {
        users: {
          ...state.users,
          [action.user._id]: action.user
        },
        currentUserId: action.user._id,
      } : {
        ...state,
        currentUserId: null,
        isAdmin: false,
      };
    default:
      return state
  }
};