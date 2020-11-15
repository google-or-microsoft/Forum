import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';
import PostList from './PostList';
import PostAddEdit from './PostAddEdit';
import PostView from "./PostView";

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
