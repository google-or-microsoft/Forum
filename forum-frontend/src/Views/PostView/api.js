import axiosRequest from '../../Utils/axiosRequest';
import Cookies from 'js-cookie';

export const getPost = (id) => {
    return axiosRequest({
        url: `/posts/${id}`,
        method: 'get',
        headers: {
            "Authorization": `Basic ${Cookies.get("token")}`
        }
    });
}
