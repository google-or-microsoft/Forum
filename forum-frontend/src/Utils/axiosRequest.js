import axios from 'axios';
import history from '../history';

// const baseUrl = process.env.REACT_APP_API_BASE_URL;
/**
 * Create an axios instance
 */
let tokenContext = localStorage.getItem("token");
console.log(tokenContext);
const service = axios.create({

    baseURL: "/api/v1",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${tokenContext}`
    }
})

service.interceptors.response.use(
    res => {
        const code = res.status;
        if (code !== 200) {
            if (code === 404) {
                history.push('/PageNotFound');
            }
            return Promise.reject('error');
        } else {
            if (res.data === "Success login"){
                localStorage.clear();
                localStorage.setItem("token",res.headers["authorization"]);
                localStorage.setItem("username",res.headers["username"]);
            }
            return res.data;
        }
    },
    err => {
        return Promise.reject(err);
    }
)
export default service;