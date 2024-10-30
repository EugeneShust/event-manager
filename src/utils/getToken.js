// Utility Module: Helper function to get token from LocalStorage.
export const getToken = () => {
    return localStorage.getItem('accessToken');
};
