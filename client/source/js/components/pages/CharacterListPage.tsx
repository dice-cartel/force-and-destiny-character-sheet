import * as React from 'react';
import { containerize } from '@client/utils/react';
import { Character, UUID } from '@shared/types';
import { CharacterActions } from '@client/actions/CharacterActions';

export const CharacterListPage = containerize(class CharacterListPage extends React.Component<any, any> {
  render() {
    const characterList = this.renderCharacterList(this.props.characters);
    return (
      <div>
        CharacterListPage
        {characterList}
      </div>
    );
  }

  renderCharacterList(characters: Record<UUID, Character>) {
    return Object.keys(characters).map((id: UUID) => {
      const char = characters[id];
      return (
        <div className='c-character-list-page__character' key={id}>
          {char.name}
        </div>
      )
    });
  }

  componentDidMount() {
    this.props.componentDidMount();
  }
}, (state) => ({
  characters: state.characters.characters,
}), (dispatch) => ({
  componentDidMount() {
    dispatch(CharacterActions.fetchAllCharacters());
  },
}));