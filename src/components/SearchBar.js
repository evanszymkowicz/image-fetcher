import React from "react";

class SearchBar extends React.Component {
  state = { term: '' };
  //Keeps the browser from submitting automatically and refreshing the page
  //using function() keyword will lead to a broken value of .this
  //arrow funciton will replace the binding function
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term); //using it inside a class based component, not funcitonal.
  };

  /*
  This has been refactored to be a "controlled component."
  A callback is invoked as soon as the user types in an input. The result is
  pulled from the event object and then updates the state, pulled from e.target.value
  and rerenders automatically.
  */

  /*
  The event handler takes the input/form tag and passes in a callback.
  the callback is called when the event trigger is tripped.
  */
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit()} className="ui form">
          <div className="field">
            <label>Search for an image!</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })} /* don't use an () with an event handler in state*/
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
