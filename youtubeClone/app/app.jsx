import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAC2mj9HUU0U5yD5cNUE9WxJgPziO3EKQw';

// Create a new component
// Should produce some html
class App extends Component {
  constructor(props) {
      super(props);
      // a list of videos is the state
      this.state = {
        videos: [],
        selectedVideo: null
      };

      this.videoSearch('surfboards');
  }

  videoSearch(term) {
    // request to get a list of videos
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's html and put it on the page
// (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
