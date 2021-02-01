import React from 'react';
import {AppBar, Button, makeStyles, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import history from "../history";
import {useSelector} from "react-redux";

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

    const {loginStatus} = useSelector(state => ({
        loginStatus : state.storeUser.loginStatus
    }));

    const classes = useStyles();
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
                    <Button
                        color="inherit"
                        onClick={() => history.push("/")}>Log Out</Button> :
                    <Button
                        color="inherit"
                        onClick={() => history.push("/login")}>Log In</Button>}
                </Toolbar>
            </AppBar>
        </div>
    );

}

export default Navbar;