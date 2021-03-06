import { BrowserRouter as Link } from "react-router-dom";
import "../sass/App.scss";
import React from "react";
import { logoutUser } from "../api/user";
import { withRouter } from "react-router-dom";
import anteater from "../assets/avatars/anteater.svg";
import cobra from "../assets/avatars/cobra.svg";
import crab from "../assets/avatars/crab.svg";
import frog from "../assets/avatars/frog.svg";
import giraffe from "../assets/avatars/giraffe.svg";
import hippo from "../assets/avatars/hippo.svg";
import lion from "../assets/avatars/lion.svg";
import mouse from "../assets/avatars/mouse.svg";
import rabbit from "../assets/avatars/rabbit.svg";
import backarrow from "../assets/backarrow.svg";

class Profile extends React.Component {
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

  logout = () => {
    logoutUser(this.props.history);
  };

  render() {
    return (
      <div className="ProfileContainer">
        <Link to="/dashboard" replace id="backbtn">
          <img id="backarrow" alt="go back arrow" src={backarrow} />
        </Link>
        <div className="Profile">
          <div className="Profile__img">
            <img src={cobra} alt="cobra avatar" />
          </div>
          <div className="Profile__detail">
            <h3>Name: Bob Ross</h3>
            <h3>Email: bob@gmail.com</h3>
          </div>
          <div className="button">
            <button onClick={this.logout} id="logoutbtn">
              Logout
            </button>
          </div>
          {/* <button type="submit" id="editbtn" style={{ textDecoration: 'none', color: 'black' }}>
                            Edit
                    </button> */}
          {/* </div> */}
          {/*   <form className="Profile__form" onSubmit={this.handleSubmit}>
                        <label className="Profile__label">
                            Update Name
                            </label>
                        <input className="Profile__input" type="text" value={this.state.value}
                            onChange={this.handleChange} />
                        <label className="Profile__label">
                            Update Email Address
                            </label>
                        <input className="Profile__input" type="text" value={this.state.value}
                            onChange={this.handleChange} />

                        <label className="Profile__label">
                            Update Password
                            </label>
                        <input className="Profile__input" type="text" value={this.state.value}
                            onChange={this.handleChange} />

                        <label className="Profile__label">
                            Confirm New Password
                            </label>
                        <input className="Profile__input" type="text" value={this.state.value}
                            onChange={this.handleChange} />

                        <label className="Profile__label">
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
            </form> */}
        </div>
      </div>
    );
  }
}
export default withRouter(Profile);
