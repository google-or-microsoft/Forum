import axiosRequest from "../axios/axiosRequest";

export const getUserPosts = (username) => {
    return axiosRequest({
        url: `/posts/user/${username}`,
        method: 'get'
    });
}
