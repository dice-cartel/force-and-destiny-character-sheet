import * as React from 'react';
import { containerize } from '@client/utils/react';

export const LandingPage = containerize(class extends React.Component<any, any> {
  render() {
    return (
      <div>Landing Page</div>
    );
  }

  componentDidUpdate(props) {
    if (props.users.currentUserId) {
      this.props.goToHome();
    }
  }
}, (state) => ({
  users: state.users,
}), (dispatch) => {
  return {
    goToHome() {
      this.router.push('/characters');
    }
  }
});