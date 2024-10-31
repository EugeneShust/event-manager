// Utility Module: Helper function to get token from LocalStorage.
export const getToken = () => {
    let token = localStorage.getItem('accessToken');
    if (token && token.startsWith('"') && token.endsWith('"')) {
        token = token.slice(1, -1);
    }
    return token;
};
