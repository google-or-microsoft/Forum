import React, {useState} from 'react';
import {register} from "./api";
import history from "../../history";


const Register = () => {

    const [allValues, setAllValues] = useState({
        email: '',
        username: '',
        role: 'ROLE_USER',
        password: '',
        deleted: false
    });

    const handleChange = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        register(allValues).then(() => history.push('/'));
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    username:
                    <input type="text" name="name" onChange={(e) => handleChange(e)}/>
                </label>
                <br/>
                <label>
                    Email Address:
                    <input type="text" name="email" onChange={(e) => handleChange(e)}/>
                </label>
                <br/>
                <label>
                    password:
                    <input type="text" name="password" onChange={e => handleChange(e)}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Register;