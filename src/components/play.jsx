import React, { Component } from 'react';

class Play extends Component {
    

    render() {

        const selectedVideo = this.props.playProp;
        
        

        return (
            <> 
             <iframe className="player" title="youtube video player" type="text/html" width="800" height="480" 
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                frameBorder="1" allowFullScreen={true}></iframe>
            <div className='selectedDescription'><br></br>
                <span className='selectedTitle'>Title : {selectedVideo.name.title}</span><br></br>
                <span className='selectedPublishedAt'>Published : {selectedVideo.name.publishedAt}</span><br></br>
                <span className='selectedDes'>description : {selectedVideo.name.description}</span>
            </div>
  
    
            </>
        );
    }
}

export default Play;            