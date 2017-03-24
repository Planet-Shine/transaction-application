
export const LOGIN_FORM = 'LOGIN_FORM';
export const LOGIN_FORM_FIELD = 'LOGIN_FORM_FIELD';
export const LOGIN_FORM_DELETE_ERRORS = 'LOGIN_FORM_DELETE_ERRORS';

export const loginForm = (fields, errors) => {
    return {
        type: LOGIN_FORM,
        payload: {fields, errors}
    };
};

export const changeField = (field) => {
    return {
        type: LOGIN_FORM_FIELD,
        payload: {field}
    };
};

export const deleteErrors = (fieldName) => {
    return {
        type: LOGIN_FORM_DELETE_ERRORS,
        payload: {fieldName}
    };
};