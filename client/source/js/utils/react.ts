import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ReducerState } from '@client/reducers';

export type mapStateCallback = (state: ReducerState) => any;
export type mapDispatchCallback = (dispatch: Function) => any;

export function containerize<P = any>(component, mapStateToProps?: mapStateCallback, mapDispatchToProps?: mapDispatchCallback): () => React.Component<P, any> {
  return withRouter(connect(
    mapStateToProps || (() => ({})),
    mapDispatchToProps || (() => ({})),
  )(component));
}
