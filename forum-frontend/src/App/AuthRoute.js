import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import Cookies from "js-cookie";

const AuthRoute = (props) => {

    const {
        role: routeRole,
        backUrl,
        ...otherProps
    } = props;
    const userRole = Cookies.get("role");
    console.log("authRoute " + userRole);
    if (userRole && (routeRole.indexOf(userRole)) !== -1) {
        return <Route {...otherProps} />
    } else {
        return <Redirect to={backUrl}/>
    }
}

export default AuthRoute;