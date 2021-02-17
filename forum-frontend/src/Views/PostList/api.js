import axiosRequest from '../../Utils/axiosRequest';
import Cookies from 'js-cookie';

export const getPagedPosts = (pageIndex, pageSize) => {
    return axiosRequest({
        url: `/posts`,
        method: 'get',
        headers: {
            "Authorization": `Basic ${Cookies.get("token")}`
        },
        params: {
            page: pageIndex,
            size: pageSize
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

