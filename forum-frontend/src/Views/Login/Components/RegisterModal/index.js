import React, {useState} from "react";
import {register} from "../../api";
import history from "../../../../history";

const RegisterModal = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        const userInfo = {
            name: username,
            password: password,
            role: "ROLE_USER",
            email: email,
            deleted: false
        }
        e.preventDefault();
        register(userInfo).then(history.push('/'));
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    username:
                    <input type="text" value={username} name="name" onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Email Address:
                    <input type="text" value={email} name="email" onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <br/>
                <label>
                    password:
                    <input type="text" value={password} name="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>)
}

export default RegisterModal;