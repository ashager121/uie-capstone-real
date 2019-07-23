import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App.js';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
        <div>
            <Route path="/" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/dashboard" component={App} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
