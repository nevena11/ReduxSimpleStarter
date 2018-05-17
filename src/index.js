import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAMYrCjRZbUmIwFknQfKU7MK8MWASmFhd4';

// create a new component. This component should produce some HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        }) ;
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange =  {term => videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));
