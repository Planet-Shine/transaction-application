
import React, { Component, PropTypes } from 'react';

class SelectItem extends Component {

    static propTypes = {
        caption: PropTypes.string,
        value: PropTypes.string,
        onClick: PropTypes.func.isRequired
    };


    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { value, onClick } = this.props;
        onClick(value);
    }

    render() {
        var { caption, className } = this.props;
        return (
            <li onClick={this.handleClick} {...{className}}>
                {caption}
            </li>
        );
    }
}

export default SelectItem;