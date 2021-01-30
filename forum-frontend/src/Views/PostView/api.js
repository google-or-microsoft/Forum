import axiosRequest from '../../Utils/axiosRequest';
import Cookies from 'js-cookie';

export const getPost = (id) => {
    return axiosRequest({
        url: `/posts/${id}`,
        method: 'get',
        headers: {
            "Authorization": `Basic ${Cookies.get("token")}`
        }
    });
}

export const getComments = (id) => {
    return axiosRequest({
        url: `/comments/post/${id}`,
        method: 'get',
        headers: {
            "Authorization": `Basic ${Cookies.get("token")}`
        }
    });
}