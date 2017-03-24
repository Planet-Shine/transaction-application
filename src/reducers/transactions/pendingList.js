
import {
    LOAD_TRANSACTIONS_SUCCEED,
    DELETE_TRANSACTION_PENDING,
    DELETE_TRANSACTION_SUCCEED
} from 'actions/transaction';

import {
    LOGOUT_SUCCEED
} from 'actions/account';

const defaultState = [];

const pendingList = (state=defaultState, {type, payload}) => {
    switch (type) {
        case DELETE_TRANSACTION_PENDING:
            return [...state, payload.id];
        case DELETE_TRANSACTION_SUCCEED:
            return state.filter(({id}) => id !== payload.id);
        case LOAD_TRANSACTIONS_SUCCEED:
        case LOGOUT_SUCCEED:
            return defaultState;
        default:
            return state;
    }
};

export default pendingList;