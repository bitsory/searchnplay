import React, { Component } from 'react';

class Showbox extends Component {
    
    
    play = () =>{
        console.log("play");
        this.props.OnPlay(this.props.boxProp);
        console.log(`play : ${this.props.boxProp}`);
    }
    
    

    render() {
        
        const videoTitle = this.props.boxProp.name.title;
        const channelTitle = this.props.boxProp.name.channelTitle;
        const thumbNail = this.props.boxProp.name.thumbnails.medium.url;
        
        return (
            <>
                <div className="showbox">
                        <span className='video' onClick={this.play}>
                            <embed className='thumbNail' type="image/jpg" src={thumbNail}></embed>
                            <div className='description'>
                            <div className='videoTitle'>{videoTitle}</div>
                            <div className='channelTitle'>{channelTitle}</div>
                            </div>
                        </span>
                
                    
                </div>  
            </>
        );
    }
}

export default Showbox;