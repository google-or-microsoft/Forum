import React from 'react';
import Comment from "../Comment";

export default function CommentList(props) {
    return (
        <div>
            <p>Comments of this post</p>
            {props.comments.map((comment)=>(
                <Comment {...comment}/>
            ))}
        </div>
    );
}
