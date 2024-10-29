import { getAccessToken } from './storage';

const API_URL = 'https://events-api-on1o.onrender.com/api/';

const fetchWithAuth = async (url, options = {}) => {
    const token = getAccessToken();

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

const fetchWithoutAuth = async (url, options = {}) => {
    options.headers = {
        ...options.headers,
        'Content-Type': 'application/json',
    };

    const response = await fetch(`${API_URL}${url}`, options);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};

export { fetchWithAuth, fetchWithoutAuth };
