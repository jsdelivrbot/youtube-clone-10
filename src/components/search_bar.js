import React, { Component } from 'react'; //ES6 syntax sugar

class SearchBar extends Component {
  constructor(props) {
    super(props); //call parent class 'Component'

    this.state = { term: '' }; //plain js passed to state
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
