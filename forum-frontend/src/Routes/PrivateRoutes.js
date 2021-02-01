import PostList from "../Views/PostList";
import PostView from "../Views/PostView";
import PostAddEdit from "../Views/NewPost";
import UserProfile from "../Views/User/UserProfile";

const PrivateRoutes = [
    {
        path: '/posts',
        component: PostList,
        exact: true,
        role: ['ROLE_USER', 'ROLE_ADMIN'],
        backUrl: '/login'
    },
    {
        path: '/posts/:id',
        component: PostView,
        exact: true,
        role: ['ROLE_USER', 'ROLE_ADMIN'],
        backUrl: '/login'
    },
    {
        path: '/posts/:id/edit',
        component: PostAddEdit,
        exact: true,
        role: ['ROLE_USER', 'ROLE_ADMIN'],
        backUrl: '/login'
    },
    {
        path: '/users/:username',
        component: UserProfile,
        exact: true,
        role: ['ROLE_USER', 'ROLE_ADMIN'],
        backUrl: '/login'
    },
];

export default PrivateRoutes;