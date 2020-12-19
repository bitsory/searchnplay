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

  async componentDidMount() {
    //call component right after it is mounted
    const videos = await this.props.youtubeProp.mostPopular();
    this.setState({videos : videos});    
  }



  handleSearch = async (name) => {
    const videos = await this.props.youtubeProp.search(name);
    this.setState({videos : videos});
    this.setState({selectedVideo : null});  
  }

  handlePlay = (item) => {
    const playItem = item;  
    this.setState({selectedVideo : playItem});
  } 

  render () {
    
    return (
      
      <>
        {<Navbar
          OnSearch={this.handleSearch}
        ></Navbar>}
        
        <section className="mainPage">
        { 
        !this.state.selectedVideo &&
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
