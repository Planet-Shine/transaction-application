
import React, { Component, PropTypes } from 'react';
import { LoginForm } from 'containers';
import statusCodes from 'defs/httpStatusCodes';

class LoginPage extends Component {

    static propTypes = {
        account: PropTypes.object
    };

    render() {
        const { account } = this.props;
        return (
            <div className="card">
                {
                    account.statusCode === statusCodes.Unauthorized &&
                    <div className="user-message">
                        —Вы не авторизованы. Операция не была произведена.
                        Возможно, вышло время жизни вашего ключа доступа.
                        Пожайлуста произведите аутентификацию, чтобы продолжить работу.
                    </div>
                }
                <LoginForm />
            </div>
        );
    }
}

export default LoginPage;
