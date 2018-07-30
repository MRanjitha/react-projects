import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'
import {applyMiddleware,compose,combineReducers,createStore} from 'redux';
import { Provider } from 'react-redux'

import productReducers from './reducers/products-reducers';
import userReducers from './reducers/users-reducers';

const allReducers = combineReducers({
    product: productReducers,
    user: userReducers
});

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()    
);

const store = createStore(
    allReducers,
    {
        product: [{name: 'iphone'}],
        user: 'Micheal'
    },
    allStoreEnhancers
);




ReactDOM.render(<Provider store={store}><App aRandomProps="Whatever"/></Provider>, document.getElementById('root'));
registerServiceWorker();
