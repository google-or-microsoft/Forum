import './App.css';
import PostList from './PostList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/posts' exact={true} component={PostList}/>
        </Switch>
      </Router>
    )
  }
}

 


export default App;
