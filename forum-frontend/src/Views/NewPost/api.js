import axiosRequest from "../../Utils/axiosRequest";

export const addPost = (post) => {
    return axiosRequest({
        url: `/posts`,
        method: 'post',
        data: JSON.stringify(post)
    });
}
export const updatePost = (id, post) => {
    return axiosRequest({
        url: `/posts/${id}`,
        method: 'put',
        data: JSON.stringify(post)
    });
}