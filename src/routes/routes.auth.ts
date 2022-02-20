import React from "react";
import AuthUtils from "../utils/auth/AuthUtils";
import RoutePath from "./Route";

const LoginView = React.lazy(() => import("../web/auth/views/login/LoginView"));
const SignUpView = React.lazy(() => import("../web/auth/views/signup/SignUpView"));

const base: string = process.env.REACT_APP_BASE_URL || '';

const routes: RoutePath[] = [
    {
        name: 'Login',
        path: `${base}/login`,
        exact: true,
        component: LoginView,
        restrictedBy: {validate: AuthUtils.requireNoSession, redirectOnFailure: '/home'}
    },
    {
        name: 'Signup',
        path: `${base}/signup`,
        exact: true,
        component: SignUpView,
        restrictedBy: {validate: AuthUtils.requireNoSession, redirectOnFailure: '/home'}
    },
];

export default routes;