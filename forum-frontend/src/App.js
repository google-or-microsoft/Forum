import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    isLoading: true,
    users:[]
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/api/v1/users');
    const body = await response.json();
    this.setState({ users: body, isLoading: false });
  }

  render() {
    const {users, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>User List</h2>
            {users.map(user =>
              <div key={user.id}>
                {user.user_name}
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

 


export default App;
