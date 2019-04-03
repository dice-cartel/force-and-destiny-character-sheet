import CharacterClient from '@client/clients/CharacterClient';

export const PREFIX = `@Character`;
export const CharacterActionTypes = {
  FETCH_ALL_REQUEST: `${PREFIX}:FETCH_ALL_REQUEST`,
  FETCH_ALL_SUCCESS: `${PREFIX}:FETCH_ALL_SUCCESS`,
  FETCH_ALL_FAILURE: `${PREFIX}:FETCH_ALL_FAILURE`,
};

export const CharacterActions = {
  requestAllCharacters_: () => ({
    type: CharacterActionTypes.FETCH_ALL_REQUEST,
  }),
  receiveAllCharacters_: (characters) => ({
    type: CharacterActionTypes.FETCH_ALL_SUCCESS,
    characters,
    receivedAt: Date.now(),
  }),
  fetchAllCharacters: () => (dispatch) => {
    dispatch(CharacterActions.requestAllCharacters_());
    CharacterClient.fetchAll()
      .then(characters => {
        dispatch(CharacterActions.receiveAllCharacters_(characters));
      });
  },
};