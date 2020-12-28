import React, {Component} from 'react';
import AppNavbar from './common/AppNavbar';
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {login: {}};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.setState({username: target.username});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {login} = this.state;

        axios.get(`/admin/login`,
            {headers: {authorization: this.createBasicAuthToken(login.username, login.password)}});

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <AppNavbar/>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username:
                        <input type="text" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <br />
                    <label>
                        password:
                        <input type="text" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <br />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password);
    }
}

export default Login;