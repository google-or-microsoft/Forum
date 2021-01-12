import {LOAD_POSTS} from "./constants";

export const loadPosts = data => ({
    type: LOAD_POSTS,
    data
});