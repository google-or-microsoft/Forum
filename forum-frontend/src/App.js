import './App.css';
import {Route, Router, Switch} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import PostList from './post/PostList';
import PostAddEdit from './post/PostAddEdit';
import PostView from "./post/PostView";
import PageNotFound from "./PageNotFound";
import UserProfile from "./user/UserProfile";
import Login from "./auth/Login";
import AppNavbar from './common/AppNavbar';
import history from './history';
import Register from "./auth/Register";

function App() {
    return (
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
    )
}

export default App;
