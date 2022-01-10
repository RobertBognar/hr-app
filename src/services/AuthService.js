import http from './HttpService';

const auth = {
    login: function (userEmail, userPassword) {
        http.post('/auth/local', {
            email: userEmail,
            password: userPassword,
        })
            .then((response) => {
                console.log('User profile ', response.data.user);
                console.log('User token ', response.data.jwt);
            })
            .catch((error) => {
                console.log('An error occurred:', error.message);
            });
    },
};

export default auth;
