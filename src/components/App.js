import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  /* images property.
   Default to an empty array if you think that this will eventually be a prop.
   Objects ([]) have the built in .map function, but the value `null` does not. */
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('search/photos', {
        //params specifiies which query terms are added on to the GET request
        params: { query: term }
      });

      this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className= "ui container" style={{ marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
      </div>
      /*This is another reason to use [] instead of null. Cannot render
        this.state.images.length.null. BUT: resturn array results cause JS, yo
      */
    );
  }
}


export default App;
