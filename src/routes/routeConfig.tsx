import type { RouteProps } from 'react-router-dom';

import { authRoutePaths, publicRoutePaths } from './routePaths';
import { authRoutes, publicRoutes } from './routes';

export const publicRouteConfig: Readonly<Record<ValueOf<typeof publicRoutes>, RouteProps>> = {
    [publicRoutes.NOT_FOUND]: {
        path: publicRoutePaths.not_found,
        element: null,
    },
};

export const authRouteConfig: Readonly<Record<ValueOf<typeof authRoutes>, RouteProps>> = {
    [authRoutes.PROFILE]: {
        path: authRoutePaths.profile,
        element: null,
    },
};
