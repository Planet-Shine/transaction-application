
import {
    LOGIN_FORM,
    LOGIN_FORM_DELETE_ERRORS
} from 'actions/loginForm';
import {
    ROUTER_STATE_CHANGE
} from 'actions/router';

const defaultState = [];

const errors = (state=defaultState, {type, payload}) => {
    switch (type) {
        case LOGIN_FORM:
            return [...payload.errors];
        case LOGIN_FORM_DELETE_ERRORS:
            return state.filter(({name}) => name !== payload.fieldName);
        case ROUTER_STATE_CHANGE:
            return defaultState;
        default:
            return state;
    }
};

export default errors;