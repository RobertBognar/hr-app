import http from './HttpService';

const registration = {
    register: function (name, email, password, chooseFile) {
        http.post('/auth/local/register', {
            name: name,
            email: email,
            password: password,
            chooseFile: chooseFile.current.value,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => console.log(error.message));
    },
};

export default registration;
