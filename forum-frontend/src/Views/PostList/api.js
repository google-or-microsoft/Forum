import axiosRequest from '../../Utils/axiosRequest';
import Cookies from 'js-cookie';

export const getPagedPosts = () => {
    return axiosRequest({
        url: `/posts`,
        method: 'get',
        headers: {
            "Authorization": `Basic ${Cookies.get("token")}`
        },
        params: {
            page: 0,
            size: 3,
        }
    });
}

export const deletePost = (id) => {
    return axiosRequest({
        url: `/posts/${id}`,
        method: 'delete',
        headers: {
            "Authorization": `Basic ${Cookies.get("token")}`
        }
    });
}

