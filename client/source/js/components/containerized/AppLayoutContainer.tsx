import * as React from 'react';
import { containerize } from '@client/utils/react';
import { HeaderContainer } from '@client/components/containerized/HeaderContainer';
import { LeftDrawerContainer } from '@client/components/containerized/LeftDrawerContainer';

export interface AppLayoutContainerProps {
  main: any;
}

export interface AppLayoutContainerState {
}

export const AppLayoutContainer = containerize(class extends React.Component<AppLayoutContainerProps, AppLayoutContainerState> {
  render() {
    return (
      <React.Fragment>
        <HeaderContainer />
        <LeftDrawerContainer />
        <main className='c-app-content'>
          {this.props.main}
        </main>
      </React.Fragment>
    );
  }
});