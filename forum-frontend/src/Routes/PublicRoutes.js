import Login from "../Views/Login/Login";
import Home from "../Views/Home/Home";
import RegisterModal from "../Views/Login/Components/RegisterModal";

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
        path: '/register',
        component: RegisterModal,
        exact: true,
    }
];

export default PublicRoutes;