import React, { Component } from 'react';

class Play extends Component {
    

    render() {

        const selectedVideo = this.props.playProp;
        

        return (
            <> 
             <iframe id="player" type="text/html" width="640" height="360" 
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                frameborder="1"></iframe>
  
    
            </>
        );
    }
}

export default Play;            