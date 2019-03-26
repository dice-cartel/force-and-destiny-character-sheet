import * as React from 'react';
import { containerize } from '@client/utils/react';

export const HomePage = containerize(class HomePage extends React.Component<any, any> {
  render() {
    return (
      <div>
        Home Page
      </div>
    );
  }

  componentDidMount() {
    this.props.componentDidMount();
  }
}, (state) => ({
  users: state.users,
}), (dispatch) => {
  return {
    componentDidMount() {
      // fetch data
    }
  }
});