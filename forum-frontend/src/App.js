import './App.css';
import {Route, Router, Switch} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import PostList from './Views/PostList';
import PostAddEdit from './Views/NewPost/PostAddEdit';
import PostView from "./Views/PostView/PostView";
import PageNotFound from "./PageNotFound";
import UserProfile from "./Views/UserProfile/UserProfile";
import Login from "./Views/Auth/Login";
import AppNavbar from './Components/AppNavbar';
import history from './history';
import Register from "./Views/Auth/Register";
import store from "./store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <AppNavbar/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/login' exact component={Login}/>
                    <Route path='/posts' exact component={PostList}/>
                    <Route path='/register' exact component={Register}/>
                    <Route path='/posts/:id' exact component={PostView}/>
                    <Route path='/posts/:id/edit' exact component={PostAddEdit}/>
                    <Route path='/users/:username' exact component={UserProfile}/>
                    <Route path='*' component={PageNotFound}/>
                </Switch>
            </Router>
        </Provider>
    )
}

export default App;
