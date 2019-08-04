import React from "react";
import { Link } from "react-router-dom";
import "./../sass/App.scss";
import batonlogo from "../assets/batonlogo.svg";
import Avatar from "./Avatar";
import anteater from "../assets/avatars/anteater.svg";
import cobra from "../assets/avatars/cobra.svg";
import crab from "../assets/avatars/crab.svg";
import frog from "../assets/avatars/frog.svg";
import giraffe from "../assets/avatars/giraffe.svg";
import hippo from "../assets/avatars/hippo.svg";
import lion from "../assets/avatars/lion.svg";
import mouse from "../assets/avatars/mouse.svg";
import rabbit from "../assets/avatars/rabbit.svg";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirm: "",
      avatars: [
        {
          img_url: anteater
        },
        {
          img_url: cobra
        },
        {
          img_url: crab
        },
        {
          img_url: frog
        },
        {
          img_url: giraffe
        },
        {
          img_url: hippo
        },
        {
          img_url: lion
        },
        {
          img_url: mouse
        },
        {
          img_url: rabbit
        }
      ]
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };
  setAvatar = e => {
    console.log("selected");
    // this.setState({ image: image })
  };

  render() {
    return (
      <div className="SignupContainer">
        <img src={batonlogo} alt="Logo" />
        <div className="SignUp">
          <form className="SignUp__form" onSubmit={this.handleSubmit}>
            <label className="SignUp__label">Name</label>
            <input
              className="SignUp__input"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <label className="SignUp__label">Email Address</label>
            <input
              className="SignUp__input"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <label className="SignUp__label">Password</label>
            <input
              className="SignUp__input"
              type="password"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <label className="SignUp__label">Confirm Password</label>
            <input
              className="SignUp__input"
              type="password"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <label className="SignUp__label">Pick an animal avatar...</label>
            <div className="avatars">
              {this.state.avatars.map(avatar => {
                return (
                  <div className="col">
                    <Avatar image={avatar.img_url} setAvatar={this.setAvatar} />
                  </div>
                );
              })}
            </div>
            <div className="buttons">
              <Link to="/signin" id="signinbtn1">
                Sign In
              </Link>
              <button type="submit" id="signupbtn1">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
