import './App.css';
import {Route, Router, Switch} from 'react-router-dom';
import React from 'react';
import Home from './Views/Home/Home';
import PostList from './Views/PostList';
import PostAddEdit from './Views/NewPost';
import PostView from "./Views/PostView";
import PageNotFound from "./Views/NotFound/PageNotFound";
import UserProfile from "./Views/UserProfile/UserProfile";
import Login from "./Views/Auth/Login";
import AppNavbar from './Components/Navbar';
import history from './history';
import Register from "./Views/Auth/Register";
import store from "./App/store";
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
