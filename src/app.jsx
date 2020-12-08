import React, { Component } from 'react';

import './app.css';

import Navbar from './components/navbar.jsx';
import Showbox from './components/showbox.jsx';
import Play from './components/play.jsx';


class App extends Component {
  state = {

    videos: [],
    selectedVideo : null

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
      console.log(this.state.selectedVideo);

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
    this.setState({selectedVideo : null});

    console.log(this.state.videos);

  })
  
  .catch(error => console.log('error', error));
}

handlePlay = (item) => {
  const playItem = item;
  console.log(playItem);
  console.log("handlePlay");
  this.setState({selectedVideo : playItem});
  console.log(this.state.selectedVideo);
  

}

  render () {
    
    return (
      
      <>
        {<Navbar
          OnSearch={this.handleSearch}
        ></Navbar>}
        
        <section className="mainPage">
        { !this.state.selectedVideo &&
        this.state.videos.map( (video) =>
          <Showbox
            key={video.id}
            
            boxProp = {video}
            OnPlay={this.handlePlay}>          
          </Showbox>
        )}
        </section>
        <section className='playPage'>
          <section className='playingVideo'>
            {this.state.selectedVideo && 
              <Play
              playProp = {this.state.selectedVideo}>
              </Play>
            }    
          </section> 

          <section className='playPageList'>
            {this.state.selectedVideo &&
            this.state.videos.map( (video) =>
            <Showbox
              key={video.id}
              
              boxProp = {video}
              OnPlay={this.handlePlay}>          
            </Showbox>
            )}
          </section>  
        </section>
        
      </>
    );
  };
}

export default App;
