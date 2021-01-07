import axiosRequest from "./axiosRequest";

export const login = (username, password) => {
    return axiosRequest({
        url: `/admin/login`,
        method: 'get',
        headers: {
            authorization: this.createBasicAuthToken(username, password)
        }
    });
}