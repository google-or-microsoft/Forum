import axiosRequest from "../../Utils/axiosRequest";
import Cookies from "js-cookie";

export const addPost = (post) => {
    return axiosRequest({
        url: `/posts`,
        method: 'post',
        headers: {
            "Authorization": `Basic ${Cookies.get("token")}`
        },
        data: JSON.stringify(post)
    });
}
export const updatePost = (id, post) => {
    return axiosRequest({
        url: `/posts/${id}`,
        method: 'put',
        headers: {
            "Authorization": `Basic ${Cookies.get("token")}`
        },
        data: JSON.stringify(post)
    });
}