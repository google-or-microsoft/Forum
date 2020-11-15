import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AppNavbar from '../common/AppNavbar';

class PostView extends Component {

    constructor(props) {
        super(props);
        this.state = { post: {}, isLoading: true };
    }

    componentDidMount() {
        // Todo: add check for the id, make sure invalid URLs are directed to 404 page.
        if (this.props.match.params.id !== 'new') {
            fetch(`/api/v1/posts/${this.props.match.params.id}`)
                .then(response => response.json())
                .then(data => this.setState({post: data}));
        }
    }

    render() {
        const post = this.state.post;
        const title = <h2>{post.title}</h2>;
        const text = <h2>{post.text}</h2>;

        return <div>
            <AppNavbar/>
            <div>
                {title}
                {text}
            </div>
        </div>
    }
}

export default withRouter(PostView);