import type { FC, ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface IPrivateRouteProps {
    children?: ReactElement;
}

export const PrivateRoute: FC<IPrivateRouteProps> = ({ children }) => {
    const isAuth = true; // check auth

    if (!isAuth && !localStorage.getItem('@ACCESS_TOKEN')) {
        return <Navigate to="/" />; // navigate to login
    }

    return children || <Outlet />;
};
