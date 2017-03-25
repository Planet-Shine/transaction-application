
import React, {Component} from 'react';
import classNames from 'classnames';


class TinyInfo extends Component {
    state = {
        opened: false
    };

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            opened: !this.state.opened
        });
    }

    render() {
        return (
            <span className={classNames({
                    "tiny-info": true,
                    "tiny-info_opened": this.state.opened
                })} onClick={this.handleClick}>
                <span className="tiny-info__hint">
                    {this.props.children}
                </span>
            </span>
        )
    }
}

export default TinyInfo;