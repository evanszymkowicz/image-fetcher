import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  /* images property.
   Default to an empty array if you think that this will eventually be a prop.
   Objects ([]) have the built in .map function, but the value `null` does not. */
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        //params specifiies which query terms are added on to the GET request
        params: { query: term },
        headers: {
          Authorization: 'Client-ID d92d7481830508f78be383ff84156b0ba9d6f834d29cdd67f4541db18b27af32'
          //referred to as access key in Upsplash docs
        }
      });
      this.setState({ images: response.data.results });
    }

  render() {
    return (
      <div className= "ui container" style={{ marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length} images
      </div>
      /*This is another reason to use [] instead of null. Cannot render
        this.state.images.length.null. BUT: resturn array results cause JS, yo
      */
    );
  }
}


export default App;
