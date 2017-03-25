
import statusCodes from 'defs/httpStatusCodes';
import {
    LOGIN_FAILED,
    LOGOUT,
    logoutUser
} from 'actions/account';

export default function logoutMiddleware({dispatch}) {
    return next => action => {
        if (action.payload &&
                !~[LOGOUT, LOGIN_FAILED].indexOf(action.type) &&
                action.payload.statusCode === statusCodes.Unauthorized) {
            let {error, statusCode} = action.payload;
            dispatch(logoutUser(error, statusCode));
        }
        return next(action);
    };
}