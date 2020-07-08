import React from 'react';

// click on stuff from react docs
// needs an off as well but this is a start with on
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    } // constructor
  
    render() {
        return (
            <button
                className={this.state.value}
                onClick={() => this.setState({value: 'X'})}
                style={{height: '20px'}}
            >
                {this.state.value}
            </button>
        );
    } // render
} // Square

  export default Square;