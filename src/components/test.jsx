import React, { Component } from 'react';

class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:''
         
         
        } 
       }

    componentDidMount() { //컴포넌트가 마운트된 직후 호출된다. 
        
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
          };
        
          fetch(
            "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=3&key=AIzaSyCCc_I30kyjugwIB-BnghJJqi8hagtgCT8",
            //"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
            requestOptions
            )
            .then(response => response.json())
            
            .then(result => { 
            
              console.log(result);
        
              //const addedVideos = [...this.state.videos, {id:Date.now(), name:result.etag}];
              this.setState({name :  result.items});
        
              //console.log(this.state.videos);
        
        
            })
            //.then(result => console.log(result.homeTown))
            .catch(error => console.log('error', error));
            // this.setState({
            // name : this.state.name+"!!"
    }
        
       
       
    render() {
        return <h1>{this.state.name}</h1>;
    } 
    
      
      
      
}

export default Test;