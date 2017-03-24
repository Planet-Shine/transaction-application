
import React, { Component, PropTypes } from 'react';

import httpStatusCodes from 'defs/httpStatusCodes';

const errorMessages = {
    login: {
        required: 'Введите login'
    },
    password: {
        required: 'Введите пароль'
    }
};

const formErrors = {
    [httpStatusCodes.BadRequest]: `Авторизация неудачна. Проверьте, что все поля введены правильно.`
};

class LoginForm extends Component {

    static propTypes = {
        onChange: PropTypes.func,
        onSubmit: PropTypes.func,
        fields: PropTypes.shape({
            login: PropTypes.string,
            password: PropTypes.string
        }),
        errors: PropTypes.array,
        status: PropTypes.object
    };

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    }

    handleTextFieldChange({ target: {name, value} }) {
        this.props.onChange(name, value);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        if (!this.props.status.disabled) {
            let login = this.refs.login.value;
            let password = this.refs.password.value;
            this.props.onSubmit({
                login,
                password
            });
        }
    }

    render () {
        var { errors, status,  fields } = this.props;
        const { login, password } = fields;
        const errorMap = {};
        errors.forEach(({error, name}) => {
            errorMap[name] = errorMessages[name][error];
        });
        const { disabled, succeed, error, statusCode } = status;
        
        return (
            <form className="login-form"
                  onSubmit={this.handleSubmit}
                  noValidate>
                <div className="login-form__field">
                    <input type="text"
                           ref="login"
                           onChange={this.handleTextFieldChange}
                           name="login"
                           placeholder="логин"
                           value={login}
                           disabled={disabled} />
                    {
                        errorMap.login &&
                        <div>
                            {errorMap.login}
                        </div>
                    }
                </div>
                <div className="login-form__field">
                    <input type="password"
                           ref="password"
                           onChange={this.handleTextFieldChange}
                           name="password"
                           placeholder="пароль"
                           value={password}
                           disabled={disabled} />
                    {
                        errorMap.password &&
                        <div>
                            {errorMap.password}
                        </div>
                    }
                </div>
                {
                    succeed &&
                    <div className="form__succeed">
                        Вы успешно авторизованы. Через мгновение вы будете перемещены на страницу вашего счёта.<br />
                        Добро пожаловать!
                    </div>
                }
                {
                    error &&
                    <div className="form__error">
                        {error || formErrors[statusCode] || formErrors[httpStatusCodes.BadRequest]}
                    </div>
                }
                <div className="login-form__actions">
                    {
                        !succeed &&
                        <button disabled={disabled} >
                            войти
                        </button>
                    }
                    {disabled && <div className="form__preloader"></div>}
                </div>
            </form>
        );
    }
}

export default LoginForm;