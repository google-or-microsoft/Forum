import Login from "../Views/Auth/Login";
import Home from "../Views/Home/Home";
import Register from "../Views/Auth/Register";

const PublicRoutes = [
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/',
        component: Register,
        exact: true,
    }
];

export default PublicRoutes;