import { fetchWithAuth, fetchWithoutAuth } from '../fetch';
import { updateAccessTocken } from '../storage';

async function registerUser(data) {
    try {
        return await fetchWithoutAuth('users', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    } catch (error) {
        console.error('registerUser', error);
    }
}

async function authenticateUser(data) {
    try {
        const result = await fetchWithoutAuth('auth/login', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        if (result.tocken) updateAccessTocken(result.tocken);

        return result;
    } catch (error) {
        console.error('authenticateUser', error);
    }
}


export { registerUser, authenticateUser };
