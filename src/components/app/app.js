import React from 'react';

import './app.css';
import {Route, Switch} from 'react-router-dom';
import {HomePage, MessagePage} from '../../pages'

const App = () => {

    return (<Switch>
                <Route path = '/' component = {HomePage} exact/>
                <Route path = '/message' component = {MessagePage}/>
            </Switch>)
}

export default App;