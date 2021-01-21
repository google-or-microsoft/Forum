import axiosRequest from "../../Utils/axiosRequest";

export const login = (username, password) => {
    let token = 'Basic ' + window.btoa(username + ":" + password);
    return axiosRequest({
        url: `/auth/login`,
        method: 'get',
        headers: {
            "Authorization": token
        }
    });
}

export const register = (user) => {
    return axiosRequest({
        url: `/auth/register`,
        method: 'post',
        data: JSON.stringify(user)
    });
}