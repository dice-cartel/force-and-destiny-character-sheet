import * as React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect'
import { routerActions } from 'react-router-redux'
import { browserHistory_ } from 'browser-history';
import { store } from '@client/reducers/store';
import { syncHistoryWithStore } from 'react-router-redux';
import { LandingPage } from '@client/components/pages/LandingPage';
import { UserActions } from '@client/actions/UserActions';
import { HomePage } from '@client/components/pages/HomePage';
import { AppLayoutContainer } from '@client/components/containerized/AppLayoutContainer';

const history = syncHistoryWithStore(browserHistory_, store);

const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state.users.currentUserId != null,
  wrapperDisplayName: 'UserIsAuthenticated',
});

const routes = (
  <React.Fragment>
    <Route component={AppLayoutContainer}>
      <React.Fragment>
        <Route exact path='/' components={{ main: LandingPage }} />
        <Route exact path='/home' components={{ main: userIsAuthenticated(HomePage) }} />
      </React.Fragment>
    </Route>
  </React.Fragment>
);

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    componentDidMount() {
      dispatch(UserActions.fetchSelf());
      dispatch(UserActions.fetchAllUsers());
    },
  }
};

export const AppComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(class AppComponent extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          {routes}
        </Router>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.props.componentDidMount();
  }
});
