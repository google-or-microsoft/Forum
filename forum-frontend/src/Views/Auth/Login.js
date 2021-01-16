import React, {useState} from 'react';
import {login} from './api';
import history from "../../history";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(username, password)
        history.push('/');
    }


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    username:
                    <input type="text" value={username} onChange={handleUsernameChange}/>
                </label>
                <br/>
                <label>
                    password:
                    <input type="text" value={password} onChange={handlePasswordChange}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Login;