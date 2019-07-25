import React from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import './node_modules/react-router-modal/css/react-router-modal.css';
import './../sass/App.scss';
// import './../sass/_signup.scss';
import batonlogo from '../assets/batonlogo.svg'
// import Default1 from './assetts/default1.png';
// import Default2 from './assetts/default2.png';
// import Default3 from './assetts/default3.png';
// import Default4 from './assetts/default4.png';


export default class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            confirm: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (

            <div className="SignupContainer">
                <img src={batonlogo} alt="Logo" />

                <div className="SignUp">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Email Address
                            </label>
                                <input type="text" value={this.state.value}
                            onChange={this.handleChange} />
                        
                        <label>
                            Password
                            </label>
                                <input type="text" value={this.state.value}
                            onChange={this.handleChange} />
                        
                        <label>
                            Confirm Password
                            </label>
                                <input type="text" value={this.state.value}
                            onChange={this.handleChange} />
                        
                    </form>
                    </div>
                    <div className="buttons">
                     <button id="signinbtn">Sign In</button>
                     <button id="signupbtn">Sign Up</button>
                     </div>
            </div> 
        );
    }
}