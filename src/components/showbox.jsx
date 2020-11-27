import React, { Component } from 'react';

class Showbox extends Component {
    
    
    play = () =>{
        console.log("play");
        this.props.OnPlay(this.props.boxProp.id);
        console.log(`play : ${this.props.boxProp.id}`);
    }
    
    

    render() {
        
        const videoTitle = this.props.boxProp.name.title;
        const thumbNail = this.props.boxProp.name.thumbnails.default.url;
        
        return (
            <>
                <div className="showbox">
                        <span className='video' onClick={this.play}>
                            <embed type="image/jpg" src={thumbNail}></embed>
                            <p>{videoTitle}</p>
                        
                        </span>
                
                    
                </div>  
            </>
        );
    }
}

export default Showbox;