import { Character, ReduxAction } from '@client/types';
import { CharacterActionTypes } from '@client/actions/CharacterActions';

export type CharacterState = {
  characters: {
    [key: string]: Character;
  },
};

const defaultState: CharacterState = {
  characters: {},
};

export const CharacterReducer = (state: CharacterState = defaultState, action: ReduxAction) => {
  switch (action.type) {
    case CharacterActionTypes.FETCH_ALL_SUCCESS:
      return {
        ...state,
        characters: action.characters,
      };
    default:
      return state
  }
};