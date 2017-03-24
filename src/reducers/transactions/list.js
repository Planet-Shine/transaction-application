
import {
    LOAD_TRANSACTIONS_PENDING,
    LOAD_TRANSACTIONS_SUCCEED,
    LOAD_TRANSACTIONS_FAILED,
    DELETE_TRANSACTION_PENDING
} from 'actions/transaction';

import {
    LOGOUT_SUCCEED
} from 'actions/account';

import {
    CREATE_TRANSACTION_SUCCEED
} from 'actions/transaction';

const defaultState = [];

const list = (state=defaultState, {type, payload}) => {
    switch (type) {
        case DELETE_TRANSACTION_PENDING:
            return state.filter(({id}) => id !== payload.id);
        case LOAD_TRANSACTIONS_PENDING:
            return defaultState;
        case LOAD_TRANSACTIONS_SUCCEED:
            return [...payload.list];
        case LOAD_TRANSACTIONS_FAILED:
            return defaultState;
        case CREATE_TRANSACTION_SUCCEED:
            return [...state, payload.transaction];
        case LOGOUT_SUCCEED:
            return defaultState;
        default:
            return state;
    }
};

export default list;