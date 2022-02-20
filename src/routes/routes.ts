import React from "react";
import RoutePath from "./Route";

import routesAuth from "./routes.auth";
import routesHome from "./routes.home";

const MainView = React.lazy(() => import("../web/main/views/MainView"));
const Page404View = React.lazy(() => import("../web/error/views/Page404View"));

const base: string = process.env.REACT_APP_PUBLIC_URL || '';

const routes: RoutePath[] = [
    {name: 'Default', path: `${base}/`, exact: true, component: MainView, restrictedBy: null},
    {name: 'Page 404', path: `${base}/404`, exact: true, component: Page404View, restrictedBy: null},
    ...routesAuth,
    ...routesHome
];

export default routes;