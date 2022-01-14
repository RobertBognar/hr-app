import http from './HttpService';

const registration = {
    register: async function (name, email, password, file) {
        const response = await http.post('/auth/local/register', {
            name: name,
            email: email,
            password: password,
        });
        console.log(response);
        const token = response.data.jwt;
        // localStorage.setItem('user', JSON.stringify(token));
        console.log(token);
        console.log(file);
        // http.headers.post['Authorization'] = `Bearer ${token}`;
        try {
            const responseUpload = await http.post('/upload', file, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('dadadadafggggggg', responseUpload);
        } catch (e) {
            console.log('!!!!', e);
        }
        // const responseUpload = await http({
        //     method: 'post',
        //     url: '/upload',
        //     data: file,
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         Authorization: `Bearer ${token}`,
        //     },
        // });
    },
};

export default registration;

// http.get('/companies', {
//     headers: {
//         Authorization: `Bearer ${data}`,
//     },
// });
