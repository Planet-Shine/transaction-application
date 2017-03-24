
import React, { Component } from 'react';
import { AccountMenu } from 'containers';

class AccountLayout extends Component {

    render() {
        return (
            <div>
                <AccountMenu />
                {this.props.children}
            </div>
        );
    }
}

export default AccountLayout;