import React, {Component} from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import {Button, Container} from '@material-ui/core';

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Button><Link to="/posts">Manage Forum Posts</Link></Button>
                </Container>
            </div>
        );
    }
}

export default Home;