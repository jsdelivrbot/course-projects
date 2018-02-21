class ArtistList extends React.Component {
  state = {
    artists: [],
  };

  componentDidMount() {
    this.setState({ artists: Seed.artists });
  }

 // this function takes the artistId and adds a like to their value
 // it maps over the artists and if it finds a match it adds the value
 // if not it just returns
 // after the map it does setState which re renders the component
 handleArtistLikes = (artistId) => {
   const nextArtists = this.state.artists.map((artist) => {
     if (artist.id === artistId) {
       return Object.assign({}, artist, {
         likes: artist.likes + 1,
       });
     } else {
       return artist;
     }
   });
   this.setState({
     artists: nextArtists,
   });
  }

  render() {
    // This will sort the artists by most likes first
    const artists = this.state.artists.sort((a, b) => (
      b.likes - a.likes
    ));
    //const artists = this.state.artists;

    const artistComponents = artists.map((artist) => (
      // onLike calls this.handleArtistLikes
      <Artist
        key={'artist-' + artist.id}
        id={artist.id}
        title={artist.title}
        url={artist.url}
        likes={artist.likes}
        bandImageUrl={artist.bandImageUrl}
        onLike={this.handleArtistLikes}
      />
    ));

    return (
      <div className='ui unstackable items'>
        {artistComponents}
      </div>
    );
  }
}

class Artist extends React.Component {
  // called via onClick this calls the prop onLike and
  // passes the id of the value clicked
  handleLikes = () => (
    this.props.onLike(this.props.id)
  );

  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.bandImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            {/* onClick start the flow back up by calling handleLikes */}
            <a onClick={this.handleLikes}>
              <i className='large caret up icon' />
            </a>
            {this.props.likes}
          </div>
          <div className='description'>
              {this.props.title}
          </div>
        </div>
      </div>
    );
  }

}



ReactDOM.render(
  <ArtistList />,
  document.getElementById('content')
);
