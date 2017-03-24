import api from 'api';

export const CREATE_TRANSACTION_PENDING = 'CREATE_TRANSACTION_PENDING';
export const CREATE_TRANSACTION_SUCCEED = 'CREATE_TRANSACTION_SUCCEED';
export const CREATE_TRANSACTION_FAILED = 'CREATE_TRANSACTION_FAILED';

export const LOAD_TRANSACTIONS_PENDING = 'LOAD_TRANSACTIONS_PENDING';
export const LOAD_TRANSACTIONS_SUCCEED = 'LOAD_TRANSACTIONS_SUCCEED';
export const LOAD_TRANSACTIONS_FAILED = 'LOAD_TRANSACTIONS_FAILED';

export const DELETE_TRANSACTION_PENDING = 'DELETE_TRANSACTION_PENDING';
export const DELETE_TRANSACTION_SUCCEED = 'DELETE_TRANSACTION_SUCCEED';
export const DELETE_TRANSACTION_FAILED = 'DELETE_TRANSACTION_FAILED';

export const createTransactionPending = () => {
    return {
        type: CREATE_TRANSACTION_PENDING
    };
};

export const createTransactionSucceed = (transaction, statusCode) => {
    return {
        type: CREATE_TRANSACTION_SUCCEED,
        payload: {transaction, statusCode}
    };
};

export const createTransactionFailed = (error, statusCode) => {
    return {
        type: CREATE_TRANSACTION_FAILED,
        payload: {error, statusCode}
    };
};

export const createTransaction = (bankId, amount) => {
    return dispatch => {
        dispatch(createTransactionPending());
        api.createTransaction(bankId, amount)
            .then(({entity: {ok, transaction}, status: {code: statusCode}}) => {
                if (ok && transaction) {
                    dispatch(createTransactionSucceed(transaction, statusCode));
                } else {
                    dispatch(createTransactionFailed(null, statusCode));
                }
            }, ({entity: error, status: {code: statusCode}}) => {
                dispatch(createTransactionFailed(error, statusCode));
            });
    };
};

export const loadTransactionsPending = () => {
    return {
        type: LOAD_TRANSACTIONS_PENDING
    };
};

export const loadTransactionsSucceed = (transactions, statusCode) => {
    return {
        type: LOAD_TRANSACTIONS_SUCCEED,
        payload: {list: transactions, statusCode}
    };
};

export const loadTransactionsFailed = (error, statusCode) => {
    return {
        type: LOAD_TRANSACTIONS_FAILED,
        payload: {error, statusCode}
    };
};

export const loadTransactions = () => {
    return dispatch => {
        dispatch(loadTransactionsPending());
        api.loadTransactions()
            .then(({entity: {ok, transactions}, status: {code: statusCode}}) => {
                if (ok && transactions instanceof Array) {
                    dispatch(loadTransactionsSucceed(transactions, statusCode));
                } else {
                    dispatch(loadTransactionsFailed(null, statusCode));
                }
            }, ({entity: error, status: {code: statusCode}}) => {
                dispatch(loadTransactionsFailed(error, statusCode));
            });
    };
};

export const deleteTransactionPending = (id) => {
    return {
        type: DELETE_TRANSACTION_PENDING,
        payload: {id}
    };
};

export const deleteTransactionSucceed = (id, statusCode) => {
    return {
        type: DELETE_TRANSACTION_SUCCEED,
        payload: {id, statusCode}
    };
};

export const deleteTransactionFailed = (error, statusCode) => {
    return {
        type: DELETE_TRANSACTION_FAILED,
        payload: {error, statusCode}
    };
};


export const deleteTransaction = (id) => {
    return dispatch => {
        dispatch(deleteTransactionPending(id));
        api.deleteTransaction(id)
            .then(({entity: {ok}, status: {code: statusCode}}) => {
                if (ok) {
                    dispatch(deleteTransactionSucceed(id, statusCode));
                } else {
                    dispatch(deleteTransactionFailed(null, statusCode));
                    dispatch(loadTransactions());
                }
            }, ({entity: error, status: {code: statusCode}}) => {
                dispatch(deleteTransactionFailed(error, statusCode));
                dispatch(loadTransactions());
            });
    }
};