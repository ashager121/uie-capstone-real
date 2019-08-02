import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import * as serviceWorker from './serviceWorker';
import { ModalContainer } from 'react-router-modal';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// export default function Routing() {
const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/dashboard" component={App} />
            <Route path='/profile' component={Profile} />
            <Route path='/editprofile' component={EditProfile} />
            <Route path='*' component={Signin} />
        </Switch>
        <ModalContainer />
    </Router>
)
// }
ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
