// Facade pattern: Provides a simplified interface for HTTP requests that do not require authentication.
export const fetchWithoutAuth = async (url, options = {}) => {
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
