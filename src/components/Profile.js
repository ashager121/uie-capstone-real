import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../sass/App.scss';
import React from "react";
import batonlogo from '../assets/batonlogo.svg';
import { logoutUser } from "../api/user";

export class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            confirm: "",
            // avatars:"",
        }
    }

    logout = () => {
        logoutUser(this.props.history);
    }

    render() {
        return (

            <div className="ProfileContainer" >
                <button onClick={this.logout}>Logout</button>
                <img src={batonlogo} alt="Logo" />
                <div className="Profile">
                    <form className="Profile__form" onSubmit={this.handleSubmit}>
                        <label ClassName="Profile__label">
                            Email Address
                    </label>
                        <input className="Profile__input" type="text" value={this.state.value}
                            onChange={this.handleChange} />
                    </form>
                </div>
            </div>

        )
    }
}
export default withRouter(Profile);