// Facade pattern: Provides a simplified interface to the complex logic for making HTTP requests.
import { getToken } from '../utils';

export const fetchWithAuth = async (url, options = {}) => {
    const token = getToken();

    if (token) {
        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
    }

    const response = await fetch(`${API_URL}${url}`, options);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};
