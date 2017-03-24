
import { combineReducers } from 'redux';

import list from './list';
import map from './map';
import status from './status';

export default combineReducers({
    map,
    list,
    status
});