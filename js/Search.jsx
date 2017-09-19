// @flow
import { connect } from 'react-redux';
import React from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

type Props = {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Show[],
};

const Search = (props: Props) => (
  <div className="search">
    <Header showSearch />
    {props.shows
      .filter(
        show =>
          `${show.title} ${show.description}`
            .toUpperCase()
            .indexOf(props.searchTerm.toUpperCase()) >= 0
      )
      .map(show => <ShowCard key={show.imdbID} {...show} />)}
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
