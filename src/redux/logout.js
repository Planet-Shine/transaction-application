
import statusCodes from 'defs/httpStatusCodes';
import {
    LOGOUT,
    logoutUser
} from 'actions/account';

export default function logoutMiddleware({dispatch}) {
    return next => action => {
        if (action.payload && action.type !== LOGOUT && action.payload.statusCode === statusCodes.Unauthorized) {
            let {error, statusCode} = action.payload;
            dispatch(logoutUser(error, statusCode));
        }
        return next(action);
    };
}