import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import AppNavbar from '../common/AppNavbar';
import axios from 'axios';
import parse from 'html-react-parser';

class PostView extends Component {

    constructor(props) {
        super(props);
        this.state = {post: {}, isLoading: true, redirect: false};
    }

    componentDidMount() {
        let curr = this;
        curr.setState({isLoading: true});
        axios
            .get(`/api/v1/posts/${curr.props.match.params.id}`)
            .then(res => {
                curr.setState({post: res.data, isLoading: false});
            })
            .catch(err => {
                curr.setState({redirect: true, isLoading: false});
            });

    }

    render() {
        const {post, isLoading, redirect} = this.state;
        if (isLoading) {
            return <p>Loading detailed page....</p>;
        }
        if (redirect) {
            return <Redirect to="/PageNotFound"/>
        }
        const title = <h2>{post.title}</h2>;
        const text = <p>{parse(post.text)}</p>;

        const commentsList = post.comments.map(comment =>{
            return <tr key={comment.id}>
                        <td>
                            {comment.text}<br/>
                            {comment.user.user_name}
                        </td>
                   </tr>
            })


        return <div>
            <AppNavbar/>
            <div style={{marginLeft: "15em"}}>
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