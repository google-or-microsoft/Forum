import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';
import PostList from './PostList';
import PostAddEdit from './PostAddEdit';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/posts' exact={true} component={PostList}/>
          <Route path='/posts/:id' component={PostAddEdit}/>
        </Switch>
      </Router>
    )
  }
}

 


export default App;
