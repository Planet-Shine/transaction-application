
import {
    TRANSACTION_FORM,
    TRANSACTION_FORM_DELETE_ERRORS
} from 'actions/transactionForm';
import {
    ROUTER_STATE_CHANGE
} from 'actions/router';

const defaultState = [];

const errors = (state=defaultState, {type, payload}) => {
    switch (type) {
        case TRANSACTION_FORM:
            return [...payload.errors];
        case TRANSACTION_FORM_DELETE_ERRORS:
            return state.filter(({name}) => name !== payload.filedName);
        case ROUTER_STATE_CHANGE:
            return defaultState;
        default:
            return state;
    }
};

export default errors;