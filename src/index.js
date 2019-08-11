import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import MessagestoreService from './services/messegestore-service';
import  {MessagestoreServiceProvider} from './components/messagestore-service-context';
import store from './store';


const messagestoreService = new MessagestoreService();

ReactDOM.render(
            <Provider store = { store }>
                <ErrorBoundry>
                    <MessagestoreServiceProvider value = {messagestoreService}>
                        <Router>
                            <App/>
                        </Router>
                    </MessagestoreServiceProvider>
                </ErrorBoundry>    
            </Provider>
, document.getElementById('root')
);