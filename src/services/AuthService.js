import http from './HttpService';

const Auth = {
    login: async function (userEmail, userPassword) {
        try {
            const response = await http.post('/auth/local', {
                identifier: userEmail,
                password: userPassword,
            });
            return response;
        } catch (error) {
            console.log('An error occurred:', error.message);
        }
    },
};
export default Auth;
