// import React, {Component} from 'react';
// import '../../App.css';
// import AppNavbar from '../common/AppNavbar';
// import {Link} from 'react-router-dom';
// import {Button, Container} from 'reactstrap';
//
// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {user:{}};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         const target = event.target;
//
//         this.setState({username: target.username});
//     }
//
//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.username);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <div>
//                 <AppNavbar/>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         username:
//                         <input type="text" value={this.state.username} onChange={this.handleChange} />
//                     </label>
//                     <label>
//                         password:
//                         <input type="text" value={this.state.password} onChange={this.handleChange} />
//                     </label>
//                     <input type="submit" value="Submit" />
//                 </form>
//             </div>
//         );
//     }
// }
//
// export default Login;