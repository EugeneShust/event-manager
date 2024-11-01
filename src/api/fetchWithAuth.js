import { API_URL } from '../config';
import { getToken } from '../utils';
// Facade pattern: Provides a simplified interface to the complex logic for making HTTP requests.

export const fetchWithAuth = async (url, options = {}) => {
    const token = getToken();

    options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    if (options.body) console.log('Request:', url, '\nBody:', options.body);

    const response = await fetch(`${API_URL}${url}`, options);

    if (!response.ok) {
        const errorText = await response.text();
        console.error(
            `Error: ${response.status} ${response.statusText}`,
            errorText,
        );
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const result = await response.json();

    console.log('Response:', url, '\nBody:', result);

    return result;
};
