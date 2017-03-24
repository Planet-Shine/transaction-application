
import React, { Component, PropTypes } from 'react';
import { LoginForm as LoginFormComponent } from 'components';
import { connect } from 'react-redux';

import { filledStringReg } from 'utils/validation';
import { loginForm, deleteErrors, changeField } from 'actions/loginForm';
import { loginUser } from 'actions/account';

const mapStateToProps = ({ loginForm: {fields, errors, status}, account }) => {
    return {
        fields,
        errors,
        status,
        account
    };
};

@connect(mapStateToProps)
class LoginForm extends Component {

    static propTypes = {
        fields: PropTypes.shape({
            email: PropTypes.string,
            password: PropTypes.string
        }),
        errors: PropTypes.array,
        account: PropTypes.object,
        status: PropTypes.object
    };

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit({login, password}) {
        var fields = {
                login, password
            },
            errors = [];
        if (!filledStringReg.test(login)) {
            errors.push({
                name: 'login',
                error: 'required'
            });
        }
        if (!filledStringReg.test(password)) {
            errors.push({
                name: 'password',
                error: 'required'
            });
        }
        const { dispatch } = this.props;
        if (!errors.length) {
            dispatch(loginUser(login, password));
        }
        dispatch(loginForm(fields, errors));
    }

    handleChange(name, value) {
        const { dispatch } = this.props;
        dispatch(deleteErrors(name));
        dispatch(changeField({[name] : value}));
    }

    render() {
        const { fields, errors, status, account } = this.props;
        const { handleSubmit, handleChange } = this;
        return (
            <LoginFormComponent fields={fields}
                                errors={errors}
                                status={status}
                                account={account}
                                onSubmit={handleSubmit}
                                onChange={handleChange} />
        );
    }
}

export default LoginForm;