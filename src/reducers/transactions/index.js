
import { combineReducers } from 'redux';

import list from './list';
import status from './status';
import pendingList from './pendingList';

export default combineReducers({
    list,
    status,
    pendingList
});
