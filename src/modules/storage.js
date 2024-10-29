function updateAccessTocken(tocken) {
    localStorage.setItem('accessToken', tocken);
}

function getAccessToken() {
    return localStorage.getItem('accessToken');
}

export { getAccessToken, updateAccessTocken };
