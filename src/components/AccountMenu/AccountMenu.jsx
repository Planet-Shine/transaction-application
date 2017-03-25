
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class AccountMenu extends Component {

    static propTypes = {
        onLogout: PropTypes.func
    };

    render() {
        
        return (
            <span className="account-menu">
                <Link className="account-menu__item" to="/transactions">
                    История<br/> переводов
                </Link>
                <Link className="account-menu__item" to="/transactions/create">
                    Перевод<br/> средств
                </Link>
                <a href="javascript:void(0);" className="account-menu__item" onClick={this.props.onLogout}>
                    Logout
                </a>
            </span>
        );
    }
}

export default AccountMenu;