
import React from 'react';
import { Route, Redirect } from 'react-router';
import {
    AccountLayout,
    LoginPage
} from 'containers';
import { 
    VisitorLayout,
    CreateTransactionPage,
    TransactionsPage,
    NotFoundPage
} from 'components';

export default (store) => {
    return (
        <Route>
            <Redirect from="/" to="/transactions/create" />
            <Route path="/" component={VisitorLayout}>
                <Route name="login" path="/login" component={LoginPage} />
            </Route>
            <Route path="/" component={AccountLayout} onEnter={requireAuth}>
                <Route name="createTransaction" path='/transactions/create' component={CreateTransactionPage} />
                <Route name="transactions" path='/transactions' component={TransactionsPage} />
            </Route>
            <Route name="notFound" path='*' component={NotFoundPage} />
        </Route>
    );

    function requireAuth(nextState, replace) {
        if (!store.getState().account.loggedIn) {
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            });
        }
    }
};

