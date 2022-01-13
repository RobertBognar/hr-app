import http from './HttpService';

const Auth = (userEmail, userPassword) => {
    http.post('/auth/local', {
        identifier: userEmail,
        password: userPassword,
    })
        .then((response) => {
            localStorage.setItem(
                'userData',
                JSON.stringify(response.data.user),
            );
            console.log('User profile ', response.data.user);

            localStorage.setItem(
                'userToken',
                JSON.stringify(response.data.jwt),
            );
            console.log('User token ', response.data.jwt);
        })
        .catch((error) => {
            console.log('An error occurred:', error.message);
        });
};

export default Auth;
