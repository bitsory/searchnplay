import React, { Component } from 'react';

class Showbox extends Component {
    
    
    play = () =>{
        
        this.props.OnPlay(this.props.boxProp);
        
    }
    
    

    render() {
        
        const videoTitle = this.props.boxProp.name.title;
        const channelTitle = this.props.boxProp.name.channelTitle;
        const thumbNail = this.props.boxProp.name.thumbnails.medium.url;
        
        return (
            <>
                <li className="showbox">
                        <div className='video' onClick={this.play}>
                            <embed className='thumbNail' type="image/jpg" src={thumbNail} alt='thumbnail'></embed>
                            <div className='description'>
                            <div className='videoTitle'>{videoTitle}</div>
                            <div className='channelTitle'>{channelTitle}</div>
                            </div>
                        </div>
                
                    
                </li>  
            </>
        );
    }
}

export default Showbox;