// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const SearchWithShows = props => <Search shows={preload.shows} {...props} />;

const DetailCard = (props: { match: Match }) => (
  <Details show={preload.shows.find(show => show.imdbID === props.match.params.id)} {...props} />
);

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={SearchWithShows} />
        <Route path="/details/:id" component={DetailCard} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
