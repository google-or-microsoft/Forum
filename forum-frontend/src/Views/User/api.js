import axiosRequest from "../../Utils/axiosRequest";
import Cookies from 'js-cookie';

export const getUserPosts = (id) => {
    return axiosRequest({
        url: `/posts/user/${id}`,
        method: 'get',
        headers: {
            "Authorization": `Basic ${Cookies.get("token")}`
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
