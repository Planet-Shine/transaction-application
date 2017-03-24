
import {
    LOGOUT,
    LOGIN_SUCCEED
} from 'actions/account';
import cookies from 'browser-cookies';

const defaultState = {
    error: null,
    statusCode: null
};

const getDefaultState = () => {
    const idToken = cookies.get('idToken');
    return {
        ...defaultState,
        idToken: idToken,
        loggedIn: !!idToken
    };
};

const account = (state=getDefaultState(), {type, payload}) => {
    switch (type) {
        case LOGIN_SUCCEED:
            return {
                ...state,
                loggedIn: true,
                idToken: payload.idToken,
                error: null,
                statusCode: null
            };
        case LOGOUT:
            return {
                ...getDefaultState(),
                error: payload.error || null,
                statusCode: payload.statusCode || null
            };
        default:
            return state
    }
};

export default account;