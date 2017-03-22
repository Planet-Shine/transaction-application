
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { hashHistory } from 'react-router';
import reducers from 'reducers';

const produceStore = () => {
    const preloadedState = {};
    const reduxRouterMiddleware = routerMiddleware(hashHistory);
    const middleware = [reduxRouterMiddleware, thunk];
    const finalCreateStore = applyMiddleware(...middleware)(createStore);
    return finalCreateStore(reducers, preloadedState);
};

export default produceStore;