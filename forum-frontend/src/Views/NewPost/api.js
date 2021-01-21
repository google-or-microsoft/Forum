import axiosRequest from "../../Utils/axiosRequest";

export const addPost = (post) => {
    return axiosRequest({
        url: `/posts`,
        method: 'post',
        headers:{
            "Authorization": `Basic ${localStorage.getItem("token")}`
        },
        data: JSON.stringify(post)
    });
}
export const updatePost = (id, post) => {
    return axiosRequest({
        url: `/posts/${id}`,
        method: 'put',
        headers:{
            "Authorization": `Basic ${localStorage.getItem("token")}`
        },

        data: JSON.stringify(post)
    });
}