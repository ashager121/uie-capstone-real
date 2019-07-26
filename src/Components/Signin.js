// import './node_modules/react-router-modal/css/react-router-modal.css';
import './../sass/App.scss';
import React from 'react'
import batonlogo from '../assets/batonlogo.svg'
import { Link } from 'react-router-dom'

// export default function Signin() {
//     return (
export default class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
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
            <div className="SigninContainer">
                <img src={batonlogo} alt="Logo" />
                <div className="SignIn">
                    <form className="SignIn__form" onSubmit={this.handleSubmit}>
                        <label className="SignIn__label">
                            Email Address
                                </label>
                        <input className="SignIn__input" type="text" value={this.state.value}
                            onChange={this.handleChange} />

                        <label className="SignIn__label">
                            Password
                                </label>
                        <input className="SignIn__input" type="text" value={this.state.value}
                            onChange={this.handleChange} />
                    </form>
                </div>

                <div className="buttons">
                    <button id="signupbtn2">
                        <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>Sign Up</Link>
                    </button>
                    <button id="signinbtn2">
                        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>Sign In</Link>
                    </button>
                </div>
            </div >
        );
    }
}