// Service Layer: AuthService manages authentication-related API requests.

import { fetchWithoutAuth } from '../api';

async function registerUser(data) {
    return await fetchWithoutAuth('/users', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}

async function loginUser(data) {
    return await fetchWithoutAuth('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}

export { registerUser, loginUser };
