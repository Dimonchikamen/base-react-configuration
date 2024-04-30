import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { authRouteConfig, publicRouteConfig } from './routeConfig';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<PublicRoute />}>
                {Object.values(authRouteConfig).map(({ path, element }) => (
                    <Route
                        key={`auth-route-${path}`}
                        path={path}
                        element={element}
                    />
                ))}
            </Route>
            <Route element={<PrivateRoute />}>
                {Object.values(publicRouteConfig).map(({ path, element }) => (
                    <Route
                        key={`public-route-${path}`}
                        path={path}
                        element={element}
                    />
                ))}
            </Route>
        </Routes>
    );
};
