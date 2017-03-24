
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import account from './account';
import loginForm from './loginForm';
import transactionForm from './transactionForm';
import banks from './banks';
import transactions from './transactions';

export default combineReducers({
    routing: routerReducer,
    banks,
    account,
    loginForm,
    transactions,
    transactionForm
});