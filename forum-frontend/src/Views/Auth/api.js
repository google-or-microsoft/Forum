import axiosRequest from "../../Utils/axiosRequest";

export const login = (username, password) => {
    return axiosRequest({
        url: `/admin/login`,
        method: 'get',
        headers: {
            authorization: this.createBasicAuthToken(username, password)
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