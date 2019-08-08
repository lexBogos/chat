import React from 'react';
import ReactDom from 'react-dom';
import Provider from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import MessegestoreService from './services/messegestore-service';
import  {MessegestoreServiceProvider} from './components/messegestore-service-context/';
import store from './store';