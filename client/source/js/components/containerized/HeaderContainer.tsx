import * as React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { GenericCallback, User } from '@shared/types';
import { containerize } from '@client/utils/react';
import { UserState } from '@client/reducers/UserReducer';
import { AppBar, Badge, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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
      <AppBar position="static" className={'c-header'}>
        <Toolbar>
          <Typography className='c-header__title' variant="h6" color="inherit" noWrap>
            Holocron
          </Typography>
          <div className='u-flex--grow' />
          <div className='c-header__right-section--desktop'>
            {currentUser ?
              <IconButton
                aria-owns={anchorEl ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenuOpen}
                color="inherit"
                className='c-header__avatar'
              >
                {currentUser.avatar ? <img className='o-avatar' src={currentUser.avatar}/> : '?'}
              </IconButton>
            :
              <Button color='inherit' href='/auth/google'>Sign in with Google</Button>
            }
          </div>
        </Toolbar>
        {currentUser ? <Menu
          id='login-menu'
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={this.handleMenuClose}
        >
          <li className='c-header__menu-heading'>
            {currentUser.name ? <Typography variant='title'>{currentUser.name}</Typography> : null}
            {currentUser.email ? <Typography noWrap>{currentUser.email}</Typography> : null}
          </li>
          <MenuItem onClick={this.handleSignout}>Sign Out</MenuItem>
        </Menu> : null}
      </AppBar>
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