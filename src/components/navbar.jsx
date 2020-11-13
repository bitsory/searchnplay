import React, { Component } from 'react';

class Navbar extends Component {
onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    this.props.OnSearch();
}

    render() {
        return (
            <div className='navbar'>
                
                
                    <span className="navbar_logo">    
                        <i className="fab fa-youtube"></i>
                        
                    </span>YouTube
                    <form className='search-form' onSubmit={this.onSubmit}>
                    <input 
                    className='search-input'
                    placeholder='search' 
                    size="20"></input>
                    <button className='search-btn'><i className="fas fa-search"></i></button>

                </form>
            </div>
        );
    }
}

export default Navbar;