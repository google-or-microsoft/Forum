import axiosRequest from '../../Utils/axiosRequest';

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

