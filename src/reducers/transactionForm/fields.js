
import {
    TRANSACTION_FORM,
    TRANSACTION_FORM_FIELD
} from 'actions/transactionForm';

import {
    CREATE_TRANSACTION_SUCCEED
} from 'actions/transaction';

import {
    ROUTER_STATE_CHANGE
} from 'actions/router';

const defaultState = {
    bankId: '',
    amount: ''
};

const fields = (state=defaultState, {type, payload}) => {
    switch (type) {
        case TRANSACTION_FORM:
            return {
                ...payload.fields
            };
        case TRANSACTION_FORM_FIELD:
            return {
                ...state,
                ...payload.field
            };
        case CREATE_TRANSACTION_SUCCEED:
        case ROUTER_STATE_CHANGE:
            return defaultState;
        default:
            return state;
    }
};

export default fields;