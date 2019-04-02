import React, { Component } from 'react';

class Heart extends Component {
    state = { filled: false }

    changeHeart = () => {
        const filled = !(this.state.filled)
        this.setState({ filled })
    }

    render() { 
        const heartIcon = this.state.filled ? "fa fa-heart" : "fa fa-heart-o";
        return <i className={heartIcon} onClick={this.changeHeart}></i>;
    }
}
 
export default Heart;

