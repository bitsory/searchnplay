import React, { Component } from 'react';

class Showbox extends Component {
    
    

    
    

    render() {
        
        

        const video = this.props.boxProp;


        return (
            <>
                <div className="showbox">
                    <span className='video-name'>{video}</span>  
                </div>  
            </>
        );
    }
}

export default Showbox;