import axiosRequest from "../../Utils/axiosRequest";
import Cookies from 'js-cookie';

export const getUserPagedPosts = (id) => {
    return axiosRequest({
        url: `/posts/user/${id}`,
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

export const getUser = (id) => {
    return axiosRequest({
        url: `/users/${id}`,
        method: 'get',
        headers: {
            "Authorization": `Basic ${Cookies.get("token")}`
        }
    });
}

export const getUserByName = (username) => {
    return axiosRequest({
        url: `/users`,
        params: {
            name: username
        },
        method: 'get',
        headers: {
            "Authorization": `Basic ${Cookies.get("token")}`
        }
    });
}
