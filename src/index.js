import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import StoreService from './services/service';
import { StoreServiceProvider } from './components/service-context';
import store from './store';

const service = new StoreService();

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundry>
            <StoreServiceProvider value={service}>
                <Router>
                    <App />
                </Router>
            </StoreServiceProvider>
        </ErrorBoundry>
    </Provider>, document.getElementById('root')
);