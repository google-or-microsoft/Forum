import React, {useEffect, useRef, useState} from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../Views/Login/actions";
import history from "../history";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(1),
    },
    avatar:{
        marginRight: theme.spacing(2)
    }
}));

const DropList = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const {username} = useSelector(state => ({
        username: state.login.username,
    }));

    const dispatch = useDispatch();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>
            <div>
                <Avatar
                    className={classes.avatar}
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}>
                    {username}
                </Avatar>

                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({TransitionProps, placement}) => (
                        <Grow
                            {...TransitionProps}
                        >
                            <Paper className={classes.paper}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={(e)=> {
                                            history.push('/users/'+username);
                                            handleClose(e);
                                        }}>Profile</MenuItem>
                                        <MenuItem onClick={(e) => {
                                            dispatch(logoutAction());
                                            handleClose(e);
                                        }}>Log Out</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
}
export default DropList;