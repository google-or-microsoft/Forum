import React, {useEffect, useState} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useDispatch, useSelector} from "react-redux";
import {closeRegisterModalAction, openRegisterModalAction} from "../../actions";
import {register} from "../../api";

const RegisterModal = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {open} = useSelector(state => ({
        open: state.login.showRegisterModal
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(openRegisterModalAction());
    }, []);

    const handleClose = () => {
        dispatch(closeRegisterModalAction());
    };

    const handleSubmit = (e) => {
        const userInfo = {
            name: username,
            password: password,
            role: "ROLE_USER",
            email: email,
            deleted: false
        }
        e.preventDefault();
        register(userInfo).then(handleClose());
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle id="form-dialog-title">Register</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <br/>
                        <input type="text" value={username} name="name" onChange={(e) => setUsername(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Email Address:
                        <br/>
                        <input type="text" value={email} name="email" onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <br/>
                        <input type="text" value={password} name="password"
                               onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <br/>
                    <Button type="submit">
                        Submit
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </form>

            </Dialog>
        </div>)
}

export default RegisterModal;


