import React, { Component } from 'react';

class Navbar extends Component {
    inputRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        console.log(name);
        name && this.props.OnSearch(name);
        this.inputRef.current.value = '';
    }

    render() {
        return (
            <div className='navbar'>
                    <span className="navbar_logo">    
                        <i className="fab fa-youtube"></i>
                        
                    </span>YouTube
                    <form className='search-form' onSubmit={this.onSubmit}>
                    <input 
                        ref={this.inputRef}
                        className='search-input'
                        placeholder='search..' 
                        size="50"></input>
                    <button className='search-btn'><i className="fas fa-search"></i></button>

                </form>
            </div>
        );
    }
}

export default Navbar;