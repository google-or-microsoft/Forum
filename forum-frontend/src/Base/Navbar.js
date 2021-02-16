import React from 'react';
import {AppBar, Button, makeStyles, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import history from "../history";
import {useDispatch, useSelector} from "react-redux";
import DropList from "./DropList";

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
        loginStatus: state.login.loginStatus,
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
                    <Typography variant="h5" className={classes.title}>
                        <Button
                            color="inherit"
                            onClick={()=> history.push("/")}>
                        Forum
                        </Button>
                    </Typography>
                    {loginStatus ?
                        <div>
                            <DropList/>
                        </div>
                        :
                        <div>
                            <Button
                                color="inherit"
                                onClick={() => history.push("/login")}>Sign In</Button>

                            <Button
                                color="inherit"
                                onClick={() => history.push("/register")}>Sign Up</Button>
                        </div>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );

}

export default Navbar;