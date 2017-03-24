
import React, { Component } from 'react';
import { AccountHeader } from 'components';
import { AccountMenu } from 'containers';

class AccountLayout extends Component {

    render() {
        return (
            <div className="account-layout card">
                <AccountHeader>
                    <AccountMenu />
                </AccountHeader>
                <div className="account-layout__content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AccountLayout;