import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setUser, updatePassword, updateUsername} from "../User/actions";
import {Container, TextField} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

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

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    const classes = useStyles();

    return (
        <Container>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className={classes.root}>
                    <br/>
                    <TextField label="Username" value={username} variant="outlined"
                               onChange={(event) => dispatch(updateUsername(event.target.value))}/>
                    <br/>
                    <TextField label="Password" value={password} variant="outlined"
                               onChange={(event) => dispatch(updatePassword(event.target.value))}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>

        </Container>
    );

}

export default Login;