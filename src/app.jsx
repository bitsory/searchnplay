import React, { Component } from 'react';

import './app.css';

import Navbar from './components/navbar.jsx';
import Showbox from './components/showbox.jsx';
import Test from './components/test';

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
    //"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
    requestOptions
  )
    .then(response => response.json())
    
    .then(result => { 
      
      console.log(result);

      //const addedVideos = [{id:Date.now(), name:result.members}];
      // const addedVideos =  { 
      //   result.map ( (item) => {
      //   id : Date.now(),
      //   name : item.members

      //   });
      // }
      
      const videos = result.items.map (item => {
        return {id : item.id, name : item.snippet};
      });
      console.log(videos);
      
      // const test = [
      //   {id : 1, name : { sub : "jk", pw : "jjj"} },
      //   {id : 2, name : { sub : "ly", pw : "jjj"} }
        
      // ];

      // console.log(test);
      
      this.setState({videos : videos});

      console.log(this.state.videos);

    })
    
    .catch(error => console.log('error', error));
  
}

handleSearch() {
  console.log("search");
}




  render () {
    
    return (
      
      <>
        {<Navbar
          OnSearch={this.handleSearch}
        ></Navbar>}
        
        {
        this.state.videos.map( (event) =>
          <Showbox
          key={event.id}
          boxProp = {event.name.title}
        >
          
          </Showbox>
        )}
      </>
    );
  };
}

export default App;
