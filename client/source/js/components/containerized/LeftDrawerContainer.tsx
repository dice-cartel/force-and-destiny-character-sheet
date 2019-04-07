import * as React from 'react';
import { containerize } from '@client/utils/react';
import Drawer from '@material-ui/core/Drawer';
import { AppstateActions } from '@client/actions/AppstateActions';
import { GenericCallback } from '@shared/types';

export interface LeftDrawerContainerProps {
  closeLeftDrawer: GenericCallback;
  isLeftDrawerOpen: boolean;
}

export interface LeftDrawerContainerState {
}

export const LeftDrawerContainer = containerize(class extends React.Component<LeftDrawerContainerProps, LeftDrawerContainerState> {
  render() {
    return (
      <Drawer
        open={this.props.isLeftDrawerOpen}
        onClose={this.props.closeLeftDrawer}>
        <nav className={'c-left-drawer'}>
          Hi, I'm a drawer
        </nav>
      </Drawer>
    );
  }
}, (state) => ({
  isLeftDrawerOpen: state.appstate.isLeftDrawerOpen,
}), (dispatch) => ({
  closeLeftDrawer() {
    dispatch(AppstateActions.closeLeftDrawer());
  }
}));