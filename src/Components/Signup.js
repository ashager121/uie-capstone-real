import React from "react";
import 'react-router-modal/css/react-router-modal.css';
// import '_signup.scss'
// import 'index.scss';
// import Default1 from './assetts/default1.png';
// import Default2 from './assetts/default2.png';
// import Default3 from './assetts/default3.png';
// import Default4 from './assetts/default4.png';


export default class Login extends React.Component {
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

            // <div className="Login">
            //     <header>
            //         <h1>BATON</h1>
            //         <h3>Just keep sprinting.</h3>
            //     </header>
            //     <form onSubmit={this.handleSubmit}>
            //         <FormGroup controlId="email" bsSize="large">
            //             <ControlLabel>Email</ControlLabel>
            //             <FormControl
            //                 autoFocus
            //                 type="email"
            //                 value={this.state.email}
            //                 onChange={this.handleChange}
            //             />
            //         </FormGroup>
            //         <FormGroup controlId="password" bsSize="large">
            //             <ControlLabel>Password</ControlLabel>
            //             <FormControl
            //                 value={this.state.password}
            //                 onChange={this.handleChange}
            //                 type="password"
            //             />
            //         </FormGroup>
            //         <FormGroup controlId="confirm" bsSize="large">
            //             <ControlLabel>Confirm Password</ControlLabel>
            //             <FormControl
            //                 value={this.state.confirm}
            //                 onChange={this.handleChange}
            //                 type="password"
            //             />
            //         </FormGroup>
            //         <Button
            //             block
            //             bsSize="large"
            //             disabled={!this.validateForm()}
            //             type="submit"
            //         >
            //             Sign In
            //             </Button>
            //         <Button
            //             block
            //             bsSize="large"
            //             disabled={!this.validateForm()}
            //             type="submit"
            //         >
            //             Sign Up
            //             </Button>
            //     </form>
            // </div>
            <div>
                sign up
         </div>
        );
    }
}