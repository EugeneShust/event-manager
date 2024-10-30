import { API_URL } from '../config';
// Facade pattern: Provides a simplified interface for HTTP requests that do not require authentication.

export const fetchWithoutAuth = async (url, options = {}) => {
    options.headers = {
        ...options.headers,
        'Content-Type': 'application/json',
    };

    console.log('Request:', url, options.body ? '\nBody:' + options.body : '');

    const response = await fetch(`${API_URL}${url}`, options);

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const result = response.json();

    console.log(console.log('Response:', url, '\nBody:', result));

    return result;
};
