// import './node_modules/react-router-modal/css/react-router-modal.css';
import './../sass/App.scss';
import React from 'react'
import batonlogo from '../assets/batonlogo.svg'

export default function Signin() {
    return (
        <div>
            <img src={batonlogo} alt="Logo" />
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
            </form>

            <button>Sign In</button>
            <button>Sign Up</button>
        </div>
    );
}
