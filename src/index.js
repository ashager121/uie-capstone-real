import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Signin from './components/Signin';
import Signup from './components/Signup';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route path="/dashboard" component={App} />
            <Route path='*' component={Signup} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
