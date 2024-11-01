// Service Layer: AuthService manages authentication-related API requests.

import { fetchWithoutAuth, fetchWithAuth } from '../api';

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

async function getProfile() {
    return await fetchWithAuth('/auth/profile');
}

async function updateProfile(id, data) {
    return await fetchWithAuth(`/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
}

export { registerUser, loginUser, getProfile, updateProfile };
