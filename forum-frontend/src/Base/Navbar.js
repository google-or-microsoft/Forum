import React from 'react';
import {AppBar, Button, makeStyles, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import history from "../history";
import {useDispatch, useSelector} from "react-redux";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    bar: {
        backgroundColor: '#96a48b'
    }
}));


const Navbar = () => {

    const {loginStatus, username} = useSelector(state => ({
        loginStatus: state.login.loginStatus,
        username: state.login.username,
    }));

    const classes = useStyles();

    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Forum
                    </Typography>
                    {loginStatus ?
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {username}
                        </Avatar> :
                        // <Button
                        //     color="inherit"
                        //     onClick={() => dispatch(logoutAction())}>Log Out</Button> :
                        <Button
                            color="inherit"
                            onClick={() => history.push("/login")}>Log In</Button>}
                </Toolbar>
            </AppBar>
        </div>
    );

}

export default Navbar;