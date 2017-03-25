
import React, { Component, PropTypes } from 'react';
import {TinyInfo} from 'components';

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
    [httpStatusCodes.BadRequest]: `Авторизация неудачна. Проверьте, что все поля введены правильно.`,
    [httpStatusCodes.Unauthorized]: `Неверная пара: логин и пароль.`
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
            <form className="form login-form"
                  onSubmit={this.handleSubmit}
                  noValidate>
                <h1>Вход
                    <TinyInfo>
                        Используйте следующие логины и
                        пароли для авторизации: <br/>
                        Ivan — Ivanpass<br/>
                        admin — adminpass<br/>
                        user — userpass
                    </TinyInfo>
                </h1>
                <div className="form__field">
                    <input type="text"
                           ref="login"
                           className="input input-full"
                           onChange={this.handleTextFieldChange}
                           name="login"
                           placeholder="логин"
                           value={login}
                           disabled={disabled} />
                    {
                        errorMap.login &&
                        <div className="form__field-error">
                            {errorMap.login}
                        </div>
                    }
                </div>
                <div className="form__field">
                    <input type="password"
                           ref="password"
                           className="input input-full"
                           onChange={this.handleTextFieldChange}
                           name="password"
                           placeholder="пароль"
                           value={password}
                           disabled={disabled} />
                    {
                        errorMap.password &&
                        <div className="form__field-error">
                            {errorMap.password}
                        </div>
                    }
                </div>
                <div className="form__actions">
                    {disabled && <div className="preloader"></div>}
                    {
                        !succeed &&
                        <button className="button" disabled={disabled} >
                            Войти
                        </button>
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
                        {formErrors[statusCode] || error  || formErrors[httpStatusCodes.BadRequest]}
                    </div>
                }
            </form>
        );
    }
}

export default LoginForm;