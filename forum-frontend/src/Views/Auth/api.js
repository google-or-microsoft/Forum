import axiosRequest from "../../Utils/axiosRequest";

export const login = (username, password) => {
    let token = window.btoa(username + ":" + password);
    localStorage.setItem("token",token);
    return axiosRequest({
        url: `/auth/login`,
        method: 'get',
        headers: {
            "Authorization": `Basic ${token}`
        }
    })
}

export const register = (user) => {
    return axiosRequest({
        url: `/auth/register`,
        method: 'post',
        data: JSON.stringify(user)
    });
}