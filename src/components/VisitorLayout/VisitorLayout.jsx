
import React, { Component } from 'react';

class VisitorLayout extends Component {

    render() {
        return (
            <div className="visitor-layout">
                {this.props.children}
            </div>
        );
    }
}

export default VisitorLayout;
