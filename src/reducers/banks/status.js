

import {
    LOAD_BANKS_PENDING,
    LOAD_BANKS_SUCCEED,
    LOAD_BANKS_FAILED
} from 'actions/bank';

import {
    LOGOUT_SUCCEED
} from 'actions/account';

const defaultState = {
    error: null,
    statusCode: null,
    loaded: false,
    pending: false
};

const status = (state=defaultState, {type, payload}) => {
    switch (type) {
        case LOAD_BANKS_PENDING:
            return {
                ...state,
                loaded: false,
                pending: true
            };
        case LOAD_BANKS_SUCCEED:
            return {
                ...state,
                statusCode: payload.statusCode,
                loaded: true,
                pending: false
            };
        case LOAD_BANKS_FAILED:
            return {
                ...state,
                loaded: false,
                statusCode: payload.statusCode,
                error: payload.error,
                pending: false
            };
        case LOGOUT_SUCCEED:
            return defaultState;
        default:
            return state;
    }
};

export default status;