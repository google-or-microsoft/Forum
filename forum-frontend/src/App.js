import './App.css';
import {Route, Router, Switch} from 'react-router-dom';
import React from 'react';
import PageNotFound from "./Views/NotFound/PageNotFound";
import AppNavbar from './Base/Navbar';
import history from './history';
import store from "./App/store";
import {Provider} from "react-redux";
import PublicRoutes from "./Routes/PublicRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";
import AuthRoute from "./App/AuthRoute";

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <AppNavbar/>
                <Switch>
                    {PublicRoutes.map(
                        ({path, component, ...routes}) =>
                            <Route key={path} path={path} component={component} {...routes}/>
                    )}
                    {PrivateRoutes.map(
                        (route) => {
                            return <AuthRoute key={route.path} {...route}/>;
                        }
                    )}
                    <Route path='*' component={PageNotFound}/>
                </Switch>
            </Router>
        </Provider>
    )
}

export default App;
