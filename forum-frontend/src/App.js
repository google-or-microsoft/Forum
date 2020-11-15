import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/home/Home';
import PostList from './components/post/PostList';
import PostAddEdit from './components/post/PostAddEdit';
import PostView from "./components/post/PostView";

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/posts' exact={true} component={PostList}/>
          <Route path='/posts/:id' exact={true} component={PostView}/>
          <Route path='/posts/:id/edit' component={PostAddEdit}/>
        </Switch>
      </Router>
    )
  }
}

 


export default App;
