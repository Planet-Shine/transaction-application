
import {
    TRANSACTION_FORM_FIELD
} from 'actions/transactionForm';
import {
    CREATE_TRANSACTION_PENDING,
    CREATE_TRANSACTION_SUCCEED,
    CREATE_TRANSACTION_FAILED
} from 'actions/transaction';
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
        case CREATE_TRANSACTION_PENDING:
            return {
                ...state,
                disabled: true
            };
        case CREATE_TRANSACTION_SUCCEED:
            return {
                ...state,
                disabled: false,
                statusCode: payload.statusCode,
                succeed: true
            };
        case CREATE_TRANSACTION_FAILED:
            return {
                ...state,
                succeed: false,
                disabled: false,
                statusCode: payload.statusCode,
                error: payload.error
            };
        case TRANSACTION_FORM_FIELD:
            return {
                ...state,
                succeed: false,
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