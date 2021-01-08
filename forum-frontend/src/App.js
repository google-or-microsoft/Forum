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
import history from './history';

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/posts' exact><PostList /></Route>
                <Route path='/posts/:id' exact component={PostView}/>
                <Route path='/posts/:id/edit' exact component={PostAddEdit}/>
                <Route path='/users/:username' exact component={UserProfile}/>
                <Route path='*' component={PageNotFound}/>
            </Switch>
        </Router>
    )
}

export default App;
