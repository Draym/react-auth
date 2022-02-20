import React from "react";

export interface RouteRestriction {
    validate: () => boolean,
    redirectOnFailure: string
}

export default interface RoutePath {
    name: string,
    path: string,
    exact: boolean,
    component: React.LazyExoticComponent<any>,
    restrictedBy: RouteRestriction | null
}
