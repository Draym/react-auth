import React from "react";
import AuthUtils from "../utils/auth/AuthUtils";
import RoutePath from "./Route";

const LoginView = React.lazy(() => import("../web/auth/login/views/LoginView"));
const SignUpView = React.lazy(() => import("../web/auth/signup/views/SignUpView"));

const routes: RoutePath[] = [
    {
        name: 'Login',
        path: '/login',
        exact: true,
        component: LoginView,
        restrictedBy: {validate: AuthUtils.requireNoSession, redirectOnFailure: '/home'}
    },
    {
        name: 'Signup',
        path: '/signup',
        exact: true,
        component: SignUpView,
        restrictedBy: {validate: AuthUtils.requireNoSession, redirectOnFailure: '/home'}
    },
];

export default routes;