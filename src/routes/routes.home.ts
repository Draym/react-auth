import React from "react";
import AuthUtils from "../utils/auth/AuthUtils";
import RoutePath from "./Route";

const HomeView = React.lazy(() => import("../web/home/views/HomeView"));

const base: string = process.env.REACT_APP_BASE_URL || '';

const routes: RoutePath[] = [
    {
        name: 'Home',
        path: `${base}/home`,
        exact: true,
        component: HomeView,
        restrictedBy: {validate: AuthUtils.requireSession, redirectOnFailure: '/'}
    },
];

export default routes;