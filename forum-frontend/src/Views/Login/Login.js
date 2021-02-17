import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {loginAction} from "./actions";
import {Container, TextField} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginAction(username, password));
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
                    <TextField label="Username" value={username} variant="outlined" onChange={(e) => {
                        e.preventDefault();
                        setUsername(e.target.value)
                    }}/>
                    <br/>
                    <TextField label="Password" value={password} variant="outlined" onChange={(e) => {
                        e.preventDefault();
                        setPassword(e.target.value)
                    }}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
                <div>
                    <p>
                        Not a member of us? Click <a href={"/register"}> here </a> to sign up.
                    </p>
                </div>
            </div>

        </Container>
    );

}

export default Login;