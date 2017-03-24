
import {
    LOAD_BANKS_PENDING,
    LOAD_BANKS_SUCCEED,
    LOAD_BANKS_FAILED
} from 'actions/bank';

import {
    LOGOUT_SUCCEED
} from 'actions/account';

const defaultState = [];

const list = (state=defaultState, {type, payload}) => {
    switch (type) {
        case LOAD_BANKS_PENDING:
            return defaultState;
        case LOAD_BANKS_SUCCEED:
            return [...payload.list];
        case LOAD_BANKS_FAILED:
            return defaultState;
        case LOGOUT_SUCCEED:
            return defaultState;
        default:
            return state;
    }
};

export default list;