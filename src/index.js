import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App.js';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import * as serviceWorker from './serviceWorker';
import { ModalContainer } from 'react-router-modal';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router>
        <ModalContainer />
        <Switch>
            <Route path="/" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/dashboard" component={App} />
        </Switch>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
