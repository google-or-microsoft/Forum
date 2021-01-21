import axiosRequest from "../../Utils/axiosRequest";

export const getPost = (id) => {
    return axiosRequest({
        url: `/posts/${id}`,
        method: 'get',
        headers:{
            "Authorization": `Basic ${localStorage.getItem("token")}`
        }
    });
}