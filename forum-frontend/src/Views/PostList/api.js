import axiosRequest from '../../Utils/axiosRequest';
import Cookies from 'js-cookie';

export const getPosts = () => {
    return axiosRequest({
        url: `/posts`,
        method: 'get',
        headers: {
            "Authorization": `Basic ${Cookies.get("token")}`
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

