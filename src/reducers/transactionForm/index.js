
import { combineReducers } from 'redux';
import fields from './fields';
import errors from './errors';
import status from './status';

export default combineReducers({
    fields,
    errors,
    status
});