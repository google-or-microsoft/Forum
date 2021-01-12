import axiosRequest from '../axios/axiosRequest';

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

export const getPost = (id) => {
    return axiosRequest({
        url: `/posts/${id}`,
        method: 'get'
    });
}

export const getPosts = () => {
    return axiosRequest({
        url: `/posts`,
        method: 'get'
    });
}

export const deletePost = (id) => {
    return axiosRequest({
        url: `/posts/${id}`,
        method: 'delete'
    });
}

