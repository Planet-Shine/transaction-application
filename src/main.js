
// import arrayPrototypeFind from 'array.prototype.find';
// arrayPrototypeFind.shim(); // Ставим полифил find для ie9.
// import 'es6-promise/auto'; // Ставим полифил Promise для ie9.

import React from 'react';
import ReactDOM from 'react-dom';
import produceStore from 'store';
import getRoutes from 'routes';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import { routerStateChange } from 'actions/router';

import './styles/main.sass';

const store = produceStore();

function renderApp() {
    ReactDOM.render(
        <Provider store={store} key="provider"> 
            <Router history={hashHistory}
                    onUpdate={function() {
                        store.dispatch(routerStateChange({state: this.state}));
                    }}>
                {getRoutes(store)}
            </Router>
        </Provider>,
        document.getElementById('mount-point')
    );
}
renderApp();