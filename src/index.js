//require("../dist/css/site.css");

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadInstitutions} from './actions/institutionActions';
import './styles/site.css';

const store = configureStore();

/*let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);*/

store.dispatch(loadInstitutions());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);

