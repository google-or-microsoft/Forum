import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import Home from './components/home/Home';
import PostList from './components/post/PostList';
import PostAddEdit from './components/post/PostAddEdit';
import PostView from "./components/post/PostView";
import PageNotFound from "./PageNotFound";
import UserProfile from "./components/user/UserProfile";
import Login from "./components/Login";

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={Home}/>
                    <Route path='/login' exact={true} component={Login}/>
                    <Route path='/posts' exact={true} component={PostList}/>
                    <Route path='/posts/:id' exact={true} component={PostView}/>
                    <Route path='/posts/:id/edit' exact={true} component={PostAddEdit}/>
                    <Route path='/users/:userName' exact={true} component={UserProfile}/>
                    <Route path='*' component={PageNotFound}/>
                </Switch>
            </Router>
        )
    }
}


export default App;
