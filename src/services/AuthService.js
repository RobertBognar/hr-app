import http from './HttpService';

const Auth = (userEmail, userPassword) => {
    http.post('/auth/local', {
        identifier: userEmail,
        password: userPassword,
    })
        .then((response) => {
            console.log('User profile ', response.data.user);
            let userArray = [];
            if (localStorage.getItem('userData')) {
                userArray.push(JSON.parse(localStorage.getItem('userData')));
            }
            localStorage.setItem(
                'userData',
                JSON.stringify(response.data.user),
            );
            console.log('User token ', response.data.jwt);
        })
        .catch((error) => {
            console.log('An error occurred:', error.message);
        });
};

export default Auth;
