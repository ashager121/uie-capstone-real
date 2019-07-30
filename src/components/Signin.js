// import './node_modules/react-router-modal/css/react-router-modal.css';
import './../sass/App.scss';
import React from 'react'
import batonlogo from '../assets/batonlogo.svg'
// import { Link } from 'react-router-dom'
import {login} from '../api/user'
import {withRouter} from 'react-router-dom'
import classnames from 'classnames'

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errors: {}
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
      var userData = {
        email: this.state.email,
        password: this.state.password
      };

      login(userData, this.props.history).then((err)=>{
        console.log(err);
        if (err) {
          this.setState({errors: err});
        }
      });
    }

    render() {
        return (
            <div className="SigninContainer">
                <img src={batonlogo} alt="Logo" />
                <form className="SignIn__form" onSubmit={this.handleSubmit}>
                <div className="SignIn">
                    <div className="SignIn__form">
                        <label className="SignIn__label">
                            Email Address
                            </label>
                      <input
                        type="text"
                        id="email"
                        value={this.state.email}
                        error={this.state.errors.email}
                        className={classnames("SignIn__input", {
                          invalid: this.state.errors.email
                        })}
                        onChange={this.handleChange}/>
                      <span className="red-text">{this.state.errors.email}</span>


                      <label className="SignIn__label">
                            Password
                            </label>
                      <input
                        type="text"
                        id="password"
                        value={this.state.password}
                        error={this.state.errors.password}
                        className={classnames("SignIn__input", {
                          invalid: this.state.errors.password
                        })}
                        onChange={this.handleChange}/>
                      <span className="red-text">{this.state.errors.password}</span>
                    </div>
                </div>

                <div className="buttons">
                    <button id="signupbtn2" style={{ textDecoration: 'none', color: 'white' }}>
                        Sign Up
                    </button>
                    <button type="submit" id="signinbtn2" style={{ textDecoration: 'none', color: 'black' }}>
                        Sign In
                    </button>
                </div>
              </form>
            </div >
        );
    }
}

export default withRouter(Signin);