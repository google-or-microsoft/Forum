import axiosRequest from '../../Utils/axiosRequest';

export const getPosts = () => {
    return axiosRequest({
        url: `/posts`,
        method: 'get',
        headers:{
            "Authorization": `Basic ${localStorage.getItem("token")}`
        }
    });
}

export const deletePost = (id) => {
    return axiosRequest({
        url: `/posts/${id}`,
        method: 'delete',
        headers:{
            "Authorization": `Basic ${localStorage.getItem("token")}`
        }
    });
}

