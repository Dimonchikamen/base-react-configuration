import { Suspense } from 'react';

import { AppRoutes } from './routes';

import classes from './App.module.css';

export const App = () => {
    return (
        <Suspense fallback="">
            <div className={classes.page_wrap}>
                <div className={classes.wrap_content}>
                    <AppRoutes />
                </div>
            </div>
        </Suspense>
    );
};
