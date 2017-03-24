
import {
    LOGOUT,
    LOGIN_SUCCEED
} from 'actions/account';
import cookies from 'browser-cookies';

const getDefaultState = () => {
    const idToken = cookies.get('idToken');
    const defaultState = {
        idToken: idToken,
        loggedIn: !!idToken
    };
    return defaultState;
};

const account = (state=getDefaultState(), {type, payload}) => {
    switch (type) {
        case LOGIN_SUCCEED:
            return {
                ...state,
                loggedIn: true,
                idToken: payload.idToken
            };
        case LOGOUT:
            return getDefaultState();
        default:
            return state
    }
};

export default account;