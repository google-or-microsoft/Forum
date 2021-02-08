import axiosRequest from "../../Utils/axiosRequest";
import Cookies from "js-cookie";

export const addComment = (comment,postId,userId) => {
    return axiosRequest({
        url: `/comments`,
        method: 'post',
        headers: {
            "Authorization": `Basic ${Cookies.get("token")}`
        },
        data: JSON.stringify(comment),postId,userId
    });
}
export const updateComment = (id, comment, postId,userId) => {
    return axiosRequest({
        url: `/comments/${id}`,
        method: 'put',
        headers: {
            "Authorization": `Basic ${Cookies.get("token")}`
        },
        data: JSON.stringify(comment),postId,userId
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