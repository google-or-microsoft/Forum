import React, {Component} from 'react';
import AppNavbar from '../../Components/AppNavbar';
import {register} from "./api";


class Register extends Component {

    state = {
        name: "",
        password: "",
        role: "USER",
        email: "",
        deleted: false
    };

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let userInfo = {...this.state};
        userInfo[name] = value;
        this.setState(userInfo);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const userInfo = this.state;

        register(userInfo);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <AppNavbar/>
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username:
                        <input type="text" name="name" onChange={(e) => this.handleChange(e)}/>
                    </label>
                    <br/>
                    <label>
                        Email Address:
                        <input type="text" name="email" onChange={(e) => this.handleChange(e)}/>
                    </label>
                    <br/>
                    <label>
                        password:
                        <input type="text" name="password" onChange={e => this.handleChange(e)}/>
                    </label>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Register;