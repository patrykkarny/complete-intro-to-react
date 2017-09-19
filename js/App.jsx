// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AsyncRoute from './AsyncRoute';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const AsyncLandingComponent = props => (
  <AsyncRoute props={props} loadingPromise={import('./Landing')} />
);

const AsyncSearchComponent = props => (
  <AsyncRoute
    props={Object.assign({ shows: preload.shows }, props)}
    loadingPromise={import('./Search')}
  />
);

const AsyncDetailsComponent = (props: { match: Match }) => (
  <AsyncRoute
    props={Object.assign(
      {
        show: preload.shows.find(show => show.imdbID === props.match.params.id),
        match: {},
      },
      props
    )}
    loadingPromise={import('./Details')}
  />
);

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Switch>
        <Route exact path="/" component={AsyncLandingComponent} />
        <Route path="/search" component={AsyncSearchComponent} />
        <Route path="/details/:id" component={AsyncDetailsComponent} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Provider>
);

export default App;
