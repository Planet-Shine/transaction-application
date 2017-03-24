
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class AccountMenu extends Component {

    static propTypes = {
        onLogout: PropTypes.func
    };

    render() {
        
        return (
            <div>
                <Link to="/transactions">
                    Список транзакций
                </Link>
                <Link to="/transactions/create">
                    Создать транзакцию
                </Link>
                <a href="javascript:void(0);" onClick={this.props.onLogout}>
                    Logout
                </a>
            </div>
        );
    }
}

export default AccountMenu;