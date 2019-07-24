import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import * as serviceWorker from './serviceWorker';
// import { ModalContainer } from 'react-router-modal';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// export default function Routing() {
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
// }
ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
