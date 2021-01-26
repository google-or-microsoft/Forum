import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setUser, updatePassword, updateUsername} from "../User/actions";

const Login = () => {
    const {username, loginStatus, password} = useSelector(state => ({
        username: state.storeUser.username,
        loginStatus: state.storeUser.loginStatus,
        password: state.storeUser.password
    }));

    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setUser(username, password));
    }


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    username:
                    <input type="text" value={username}
                           onChange={(event) => dispatch(updateUsername(event.target.value))}/>
                </label>
                <br/>
                <label>
                    password:
                    <input type="text" value={password}
                           onChange={(event) => dispatch(updatePassword(event.target.value))}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Login;