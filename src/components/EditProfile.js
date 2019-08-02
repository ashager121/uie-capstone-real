import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../sass/App.scss';
import React from "react";
import batonlogo from '../assets/batonlogo.svg';
import { logoutUser } from "../api/user";
import { withRouter } from 'react-router-dom';
import Avatar from './Avatar';
import anteater from '../assets/avatars/anteater.svg';
import cobra from '../assets/avatars/cobra.svg';
import crab from '../assets/avatars/crab.svg';
import frog from '../assets/avatars/frog.svg';
import giraffe from '../assets/avatars/giraffe.svg';
import hippo from '../assets/avatars/hippo.svg';
import lion from '../assets/avatars/lion.svg';
import mouse from '../assets/avatars/mouse.svg';
import rabbit from '../assets/avatars/rabbit.svg';

class EditProfile extends React.Component {
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
                },
            ]
        }
    }

    logout = () => {
        logoutUser(this.props.history);
    }

    render() {
        return (

            <div className="editProfileContainer" >
                <img src={batonlogo} alt="Logo" />
                <div className="button">
                    <button onClick={this.logout} id="logoutbtn">Logout</button>
                </div>
                <div className="editProfile">
                    <form className="editProfile__form" onSubmit={this.handleSubmit}>
                        <label className="editProfile__label">
                            Update Name
                            </label>
                        <input className="editProfile__input" type="text" value={this.state.value}
                            onChange={this.handleChange} />
                        <label className="editProfile__label">
                            Update Email Address
                            </label>
                        <input className="editProfile__input" type="text" value={this.state.value}
                            onChange={this.handleChange} />

                        <label className="editProfile__label">
                            Update Password
                            </label>
                        <input className="editProfile__input" type="text" value={this.state.value}
                            onChange={this.handleChange} />

                        <label className="editProfile__label">
                            Confirm New Password
                            </label>
                        <input className="editProfile__input" type="text" value={this.state.value}
                            onChange={this.handleChange} />

                        <label className="editProfile__label">
                            Update Avatar
                            </label>

                        <div className="avatars">
                            {this.state.avatars.map((avatar) => {
                                return <div className="col">
                                    <Avatar
                                        image={avatar.img_url}
                                        setAvatar={this.setAvatar}
                                    />
                                </div>
                            })}

                        </div>

                        <div className="buttons">
                            <button id="backbtn" style={{ textDecoration: 'none', color: 'black' }}>
                                <Link to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>Back</Link>
                            </button>
                            <button type="submit" id="savebtn" style={{ textDecoration: 'none', color: 'black' }}>
                                Save
                    </button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}
export default withRouter(EditProfile);