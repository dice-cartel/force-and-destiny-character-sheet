import * as React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { GenericCallback, User } from '@shared/types';
import { containerize } from '@client/utils/react';
import { UserState } from '@client/reducers/UserReducer';

export interface HeaderContainerProps {
  users: UserState;
  logout: GenericCallback;
}

export interface HeaderContainerState {
  anchorEl: any;
}

export const HeaderContainer = containerize(class extends React.Component<HeaderContainerProps, HeaderContainerState> {
  state = {
    anchorEl: null,
  };

  render() {
    const { anchorEl } = this.state;
    const { users } = this.props;
    const { currentUserId } = users;
    const currentUser: User = currentUserId ? users.users[currentUserId] : null;

    return (
      <div className='c-header'>
        Hello
        <div>
          {currentUser
            ? (<div onClick={this.handleMenuOpen}>
                {currentUser.avatar ? <img className='o-avatar' src={currentUser.avatar} /> : <span>{currentUser.name}</span>}
              </div>
            )
            : <Button color='primary' href='/auth/google'>Sign in with Google</Button>
          }
          {currentUser ? <Menu
            id='login-menu'
            anchorEl={anchorEl}
            open={!!anchorEl}
            onClose={this.handleMenuClose}
          >
            <MenuItem onClick={this.handleSignout}>Sign Out</MenuItem>
          </Menu> : null}
        </div>
      </div>
    );
  }

  handleMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSignout = () => {
    this.handleMenuClose();
    window.location.href = '/auth/logout';
  }
}, (state) => {
  return {
    users: state.users,
  }
});