import Home from "../pages/home/Home";
import LogIn from "../pages/sign/LogIn";
import SignUp from "../pages/sign/SignUp";
import shopRoutes from "./shopRoutes";

const publicRoutes = [
    { path: '/', component: {Home} },
    { path: '/login', component: {LogIn}, layout: null },
    { path: '/signup', component: {SignUp}, layout: null },
]

const privateRoutes = [
    ...shopRoutes,
]

export { publicRoutes, privateRoutes }