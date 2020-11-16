import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AppNavbar from '../common/AppNavbar';

class PostView extends Component {

    constructor(props) {
        super(props);
        this.state = {post: {}, isLoading: true};
    }

    componentDidMount() {
        // Todo: add check for the id, make sure invalid URLs are directed to 404 page.
        this.setState({ isLoading: true });
        if (this.props.match.params.id !== 'new') {
            fetch(`/api/v1/posts/${this.props.match.params.id}`)
                .then(response => response.json())
                .then(data => this.setState({post: data, isLoading: false}));
        }

    }



    render() {
        const { post, isLoading } = this.state;
        if (isLoading){
            return <p>Loading detailed page....</p>;
        }
        const title = <h2>{post.title}</h2>;
        const text = <h2>{post.text}</h2>;
        const comments = post.comments;
        const commentsList = comments.map(comment =>{
            return <tr key={comment.id}>

                <td>
                    {comment.text}<br/>
                    {comment.user.user_name}
                </td>
            </tr>
        })
        return <div>
            <AppNavbar/>
            <div style={{marginLeft:"15em"}}>
                {title}
                {text}
                <br/>
                <br/>
                <p>Comments of this post</p>
                {commentsList}
            </div>
        </div>
    }
}

export default withRouter(PostView);