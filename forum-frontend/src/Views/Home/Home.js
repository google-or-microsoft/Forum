import React, {Component} from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import {Button, Container} from '@material-ui/core';

class Home extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Button color="link"><Link to="/posts">Manage Forum Posts</Link></Button>
                </Container>
            </div>
        );
    }
}

export default Home;