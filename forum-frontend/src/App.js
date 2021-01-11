import './App.css';
import {Route, Router, Switch} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import PostList from './components/post/PostList';
import PostAddEdit from './components/post/PostAddEdit';
import PostView from "./components/post/PostView";
import PageNotFound from "./PageNotFound";
import UserProfile from "./components/user/UserProfile";
import Login from "./components/auth/Login";
import AppNavbar from './components/common/AppNavbar';
import history from './history';
import Register from "./components/auth/Register";

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
