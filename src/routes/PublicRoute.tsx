import type { FC, ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface IPublicRouteProps {
    children?: ReactNode;
}

export const PublicRoute: FC<IPublicRouteProps> = ({ children }) => {
    const isAuth = false; //get auth

    if (isAuth) {
        return <Navigate to={'/'} />;
    }

    return children || <Outlet />;
};
