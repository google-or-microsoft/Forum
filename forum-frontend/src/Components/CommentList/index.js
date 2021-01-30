import React from 'react';
import Comment from "../Comment";


export default function CommentList(props) {
    return (
        <div>
            {props.comments.map((comment)=>(
                <Comment {...comment}/>
            ))}
        </div>
    );
}
