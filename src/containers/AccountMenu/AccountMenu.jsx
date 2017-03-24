
import React, { Component } from 'react';
import { AccountMenu as AccountMenuComponent } from 'components';
import { connect } from 'react-redux';
import { logoutUser } from 'actions/account';

@connect()
class AccountMenu extends Component {

    constructor() {
        super();
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.dispatch(logoutUser());
    }

    render() {
        return (
            <AccountMenuComponent
                    onLogout={this.handleLogout}
                />
        );
    }
}

export default AccountMenu;