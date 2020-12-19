import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
      
    inputRef = React.createRef();


    onSubmit = (event) => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        
        name && this.props.OnSearch(name);
        this.inputRef.current.value = '';
    }

    

    render() {
        

        return (
            <div className='navbar'>
                    <span className="navbar_logo">    
                        <i className="fab fa-youtube fa-2x"></i>
                        <h1 className="navbar_title">YouTube</h1>
                    </span>
                    <form className='search-form' onSubmit={this.onSubmit}>
                    <input 
                        type='search'
                        ref={this.inputRef}
                        className='search-input'
                        placeholder='search...' 
                    ></input>
                    <button className='search-btn'><i className="fas fa-search fa-2x"></i></button>

                </form>
            </div>
        );
    }
}

export default Navbar;