
import {
    LOAD_TRANSACTIONS_PENDING,
    LOAD_TRANSACTIONS_SUCCEED,
    LOAD_TRANSACTIONS_FAILED
} from 'actions/transaction';

import {
    LOGOUT_SUCCEED
} from 'actions/account';

const defaultState = {
    error: null,
    pending: false,
    statusCode: null,
    loaded: false
};

const status = (state=defaultState, { type, payload }) => {
    switch (type) {
        case LOAD_TRANSACTIONS_PENDING:
            return {
                ...state,
                loaded: false,
                pending: true
            };
        case LOAD_TRANSACTIONS_SUCCEED:
            return {
                ...state,
                pending: false,
                statusCode: payload.statusCode,
                loaded: true
            };
        case LOAD_TRANSACTIONS_FAILED:
            return {
                ...state,
                loaded: false,
                pending: false,
                statusCode: payload.statusCode,
                error: payload.error
            };
        case LOGOUT_SUCCEED:
            return defaultState;
        default:
            return state;
    }
};

export default status;