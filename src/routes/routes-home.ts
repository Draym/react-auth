import React from "react";
import AuthUtils from "../utils/auth/AuthUtils";
import RoutePath from "./Route";

const HomeView = React.lazy(() => import("../web/home/views/HomeView"));

const routes: RoutePath[] = [
    {
        name: 'Home',
        path: '/home',
        exact: true,
        component: HomeView,
        restrictedBy: {validate: AuthUtils.requireSession, redirectOnFailure: '/'}
    },
];

export default routes;