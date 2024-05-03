import { getCookie } from './getCookie.js';

export const isLogin = () => {
    const username = getCookie('username');
    const password = getCookie('password');

    if(username && password) {
        return true;
    } else {
        return false;
    }
}