
import React, { Component } from 'react';

class AccountHeader extends Component {

    render() {
        return (
            <div className="account-header" >
                <span className="brand">
                    ReactBank
                </span>
                {this.props.children}
            </div>
        );
    }
}

export default AccountHeader;