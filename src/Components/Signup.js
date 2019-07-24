import React from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import './node_modules/react-router-modal/css/react-router-modal.css';
import './../sass/App.scss';
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

            <div>
                <img src={batonlogo} alt="Logo" />

            {/* </div>
            <div className="Signup">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email Address</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                </form>
            </div>
            ,
            <div> */}

                {/* <div className="Signup"> */}
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Email Address
                                <input type="text" value={this.state.value}
                            onChange={this.handleChange} />
                        </label>
                        <label>
                            Password
                                <input type="text" value={this.state.value}
                            onChange={this.handleChange} />
                        </label>
                        <label>
                            Confirm Password
                                <input type="text" value={this.state.value}
                            onChange={this.handleChange} />
                        </label>
                    </form>

                     <button>Sign In</button>
                     <button>Sign Up</button>
            </div> 
        );
    }
}