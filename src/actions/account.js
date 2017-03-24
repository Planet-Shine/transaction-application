
import api from 'api';

export const LOGIN_SUCCEED = 'LOGIN_SUCCEED';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCEED = 'LOGOUT_SUCCEED';

export const loginPending = (name, password) => {
    return {
        type: LOGIN_PENDING,
        payload: {name, password}
    };
};

export const loginSucceed = (idToken, statusCode) => {
    return {
        type: LOGIN_SUCCEED,
        payload: {idToken, statusCode}
    };
};

export const loginFailed = (error, statusCode) => {
    return {
        type: LOGIN_FAILED,
        payload: {error, statusCode}
    };
};


export const loginUser = (name, password) => {
    return dispatch => {
        dispatch(loginPending(name, password));
        api.login(name, password)
            .then(({entity: {ok, idToken}, status: {code: statusCode}}) => {
                if (ok) {
                    dispatch(loginSucceed(idToken, statusCode));
                } else {
                    dispatch(loginFailed(null, statusCode));
                }
            }, ({entity: error, status: {code: statusCode}}) => {
                dispatch(loginFailed(error, statusCode));
            });
    }
};

export const logout = (error, statusCode) => {
    return {
        type: LOGOUT,
        payload: {error, statusCode}
    };
};

export const logoutSucceed = (error, statusCode) => {
    return {
        type: LOGOUT_SUCCEED
    };
};


export const logoutUser = (error, statusCode) => {
    return dispatch => {
        api.logout();
        dispatch(logout(error, statusCode));
    };
};