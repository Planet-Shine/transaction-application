
export const TRANSACTION_FORM = 'TRANSACTION_FORM';
export const TRANSACTION_FORM_FIELD = 'TRANSACTION_FORM_FIELD';
export const TRANSACTION_FORM_DELETE_ERRORS = 'TRANSACTION_FORM_DELETE_ERRORS';

export const transactionForm = (fields, errors) => {
    return {
        type: TRANSACTION_FORM,
        payload: {fields, errors}
    };
};

export const changeField = (field) => {
    return {
        type: TRANSACTION_FORM_FIELD,
        payload: {field}
    };
};

export const deleteErrors = (fieldName) => {
    return {
        type: TRANSACTION_FORM_DELETE_ERRORS,
        payload: {fieldName}
    };
};