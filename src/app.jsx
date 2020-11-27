import React, { Component } from 'react';

import './app.css';

import Navbar from './components/navbar.jsx';
import Showbox from './components/showbox.jsx';


class App extends Component {
  state = {

    videos: []

  };

  componentDidMount() {//컴포넌트가 마운트된 직후 호출된다. 
    //call component right after it is mounted
  
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyCCc_I30kyjugwIB-BnghJJqi8hagtgCT8",
      
      requestOptions
    )
    .then(response => response.json())
    
    .then(result => { 
      
      console.log(result);

      
      const videos = result.items.map (item => {
        return {id : item.id, name : item.snippet};
      });
      console.log(videos);
      
      
      this.setState({videos : videos});

      console.log(this.state.videos);

    })
    
    .catch(error => console.log('error', error));
  
}

handleSearch = (name) => {
  console.log(name);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${name}&part=snippet&type=video&maxResults=10&key=AIzaSyCCc_I30kyjugwIB-BnghJJqi8hagtgCT8`,
    
    requestOptions
  )
  .then(response => response.json())
  
  .then(result => { 
    
    console.log(result);

    
    const videos = result.items.map (item => {
      return {id : item.id.videoId, name : item.snippet};
    });
    console.log(videos);
    
    
    this.setState({videos : videos});

    console.log(this.state.videos);

  })
  
  .catch(error => console.log('error', error));
}

handlePlay(event) {
  const playItem = event;
  console.log(playItem);
  var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
  var URL = `https://www.youtube.com/embed/${playItem}`;
  window.open(URL, "_blank", strWindowFeatures);
  console.log("handlePlay");
}

  render () {
    
    return (
      
      <>
        {<Navbar
          OnSearch={this.handleSearch}
        ></Navbar>}
        
        {
        this.state.videos.map( (video) =>
          <Showbox
          key={video.id}
          // boxPropTitle = {video.name.title}
          // boxPropThumbnail = {video.name.thumbnails.default.url}
          boxProp = {video}
          OnPlay={this.handlePlay}
        >
          
          </Showbox>
        )}
      </>
    );
  };
}

export default App;
