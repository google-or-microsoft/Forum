import axiosRequest from "./axiosRequest";

export const getUserPosts = (username) => {
    return axiosRequest({
        url: `/posts/user/${username}`,
        method: 'get'
    });
}
