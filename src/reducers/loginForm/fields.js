
import {
    LOGIN_FORM,
    LOGIN_FORM_FIELD
} from 'actions/loginForm';

import {
    LOGIN_SUCCEED
} from 'actions/account';

import {
    ROUTER_STATE_CHANGE
} from 'actions/router';
import {
    LOGOUT
} from 'actions/account';

const defaultState = {
    login: '',
    password: ''
};

const fields = (state=defaultState, {type, payload}) => {
    switch (type) {
        case LOGIN_FORM:
            return {
                ...payload.fields
            };
        case LOGIN_FORM_FIELD:
            return {
                ...state,
                ...payload.field
            };
        case LOGIN_SUCCEED:
        case ROUTER_STATE_CHANGE:
            return defaultState;
        default:
            return state;
    }
};

export default fields;