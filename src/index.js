import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.js';
import Signin from './components/Signin';
import Signup from './components/Signup';
import * as serviceWorker from './serviceWorker';
import { ModalContainer } from 'react-router-modal';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route path="/dashboard" component={App} />
            <Route path='*' component={Signup} />
        </Switch>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
