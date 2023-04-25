import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';
import login from './login';

export const store = createStoreon([
    login,
    process.env.NODE_ENV !== 'production' && storeonDevtools
]);
