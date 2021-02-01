import axiosRequest from "../../Utils/axiosRequest";
import Cookies from 'js-cookie';

export const getUserPosts = (username) => {
    return axiosRequest({
        url: `/posts/user/${username}`,
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
