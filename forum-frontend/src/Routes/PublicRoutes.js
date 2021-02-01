import Login from "../Views/Login/Login";
import Home from "../Views/Home/Home";
import Register from "../Views/Login/Register";

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