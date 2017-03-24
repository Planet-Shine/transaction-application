
import {
    LOGIN_FORM_FIELD
} from 'actions/loginForm';
import {
    LOGIN_PENDING,
    LOGIN_SUCCEED,
    LOGIN_FAILED
} from 'actions/account';
import {
    ROUTER_STATE_CHANGE
} from 'actions/router';

const defaultState = {
    succeed: false,
    error: null,
    disabled: false,
    statusCode: null
};

const status = (state=defaultState, {type, payload}) => {
    switch (type) {
        case LOGIN_PENDING:
            return {
                ...state,
                disabled: true
            };
        case LOGIN_SUCCEED:
            return {
                ...state,
                disabled: false,
                statusCode: payload.statusCode,
                succeed: true
            };
        case LOGIN_FAILED:
            return {
                ...state,
                succeed: false,
                disabled: false,
                statusCode: payload.statusCode,
                error: payload.error
            };
        case LOGIN_FORM_FIELD:
            return {
                ...state,
                error: null,
                statusCode: null
            };
        case ROUTER_STATE_CHANGE:
            return defaultState;
        default:
            return state;
    }
};

export default status;