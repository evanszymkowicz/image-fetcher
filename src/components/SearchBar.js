import React from "react";

class SearchBar extends React.Component {
  state = { term: '' };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
          <label>Search for an image!</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })} /* don't use an () with an event handler in state*/
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;

/*
This has been refactored to be a "controlled component."
A callback is invoked as soon as the user types in an input. The result is
pulled from the event object and then updates the state, pulled from e.target.value
and rerenders automatically.
*/
