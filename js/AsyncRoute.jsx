// @flow

import React, { Component } from 'react';
import Spinner from './Spinner';

type Props = {
  props: any,
  loadingPromise: Promise<{ default: Class<React.Component<*, *>> }>,
};

type State = {
  loaded: boolean,
};

class AsyncRoute extends Component<Props, State> {
  state = {
    loaded: false,
  };
  componentDidMount() {
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }
  props: Props;
  component = null;

  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />;
    }
    return <Spinner />;
  }
}

export default AsyncRoute;
