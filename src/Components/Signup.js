import React from "react";
import { Link } from 'react-router-dom'
import './../sass/App.scss';
import batonlogo from '../assets/batonlogo.svg';
import Avatar from './Avatar';

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
                    <form className="SignUp__form" onSubmit={this.handleSubmit}>
                        <label className="SignUp__label">
                            Email Address
                            </label>
                        <input className="SignUp__input" type="text" value={this.state.value}
                            onChange={this.handleChange} />

                        <label className="SignUp__label">
                            Password
                            </label>
                        <input className="SignUp__input" type="text" value={this.state.value}
                            onChange={this.handleChange} />

                        <label className="SignUp__label">
                            Confirm Password
                            </label>
                        <input className="SignUp__input" type="text" value={this.state.value}
                            onChange={this.handleChange} />

                        <label className="SignUp__label">
                            Avatar
                            </label>
                    </form>
                </div>
                <div className="avatars">
                    <div className="col">
                        <Avatar />
                    </div>
                    <div className="col">
                        <Avatar />
                    </div>
                    <div className="col">
                        <Avatar />
                    </div>
                    <div className="col">
                        <Avatar />
                    </div>
                    <div className="col">
                        <Avatar />
                    </div>
                    <div className="col">
                        <Avatar />
                    </div>
                    <div className="col">
                        <Avatar />
                    </div>
                    <div className="col">
                        <Avatar />
                    </div>
                    <div className="col">
                        <Avatar />
                    </div>
                </div>

                <div className="buttons">
                    <button id="signinbtn1">
                        <Link to="/signin" style={{ textDecoration: 'none', color: 'white' }}>Sign In</Link>
                    </button>
                    <button id="signupbtn1">
                        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link>
                    </button>
                </div>
            </div>
        );
    }
}