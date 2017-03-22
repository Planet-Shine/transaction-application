
import React from 'react';
import { Route } from 'react-router';
import { App } from 'components';

export default (store) => {
    return (
        <Route>
            <Route path="/" component={App} />
        </Route>
    );
};

