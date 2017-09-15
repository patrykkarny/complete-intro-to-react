// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

type Props = {
  shows: Array<Show>,
};

type State = {
  searchTerm: string,
};

class Search extends Component<Props, State> {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     searchTerm: 'debug statement',
  //   };

  //   this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  // }

  // handleSearchTermChange() {
  //   this.setState({ searchTerm: event.target.value });
  // };

  state: State = {
    searchTerm: '',
  };

  props: Props;

  handleSearchTermChange = (event: SyntheticKeyboardEvent<KeyboardEvent> & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <Header searchTerm={this.state.searchTerm} showSearch handleSearchTermChange={this.handleSearchTermChange} />
        {this.props.shows
          .filter(
            show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
          )
          .map(show => <ShowCard key={show.imdbID} {...show} />)}

      </div>
    );
  }
}

export default Search;
