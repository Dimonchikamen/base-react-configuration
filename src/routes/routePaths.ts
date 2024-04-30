import { authRoutes, publicRoutes } from './routes';

export const authRoutePaths: Record<ValueOf<typeof authRoutes>, string> = {
    [authRoutes.PROFILE]: '/profile',
} as const;

export const publicRoutePaths: Record<ValueOf<typeof publicRoutes>, string> = {
    [publicRoutes.NOT_FOUND]: '*',
} as const;
