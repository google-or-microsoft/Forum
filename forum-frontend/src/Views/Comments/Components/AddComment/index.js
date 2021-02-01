import TextField from "@material-ui/core/TextField";
import React from "react";
import {modifyCommentAction, updateCommentAction} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";

const AddComment = (props) => {
    const {comment} = useSelector(state => ({
            comment: state.modifyComment.comment
        }
    ))
    const dispatch = useDispatch();
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(modifyCommentAction(comment.id, comment, props.postId));
        }}>
            <TextField label="Comment"
                       variant="outlined"
                       fullWidth="true"
                       value={comment.text || ''}
                       onChange={(event) => dispatch(updateCommentAction(event.target.value))}
            />
            <br/><br/>
            <div>
                <Button
                    variant="contained"
                    type="submit">Submit</Button>
            </div>
        </form>
    );

}
export default AddComment;