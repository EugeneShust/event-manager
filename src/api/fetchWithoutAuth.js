import { API_URL } from '../config';
// Facade pattern: Provides a simplified interface for HTTP requests that do not require authentication.

export const fetchWithoutAuth = async (url, options = {}) => {
    options.headers = {
        ...options.headers,
        'Content-Type': 'application/json',
    };

    if (options.body) console.log('Request:', url, '\nBody:', options.body);

    const response = await fetch(`${API_URL}${url}`, options);

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
};
