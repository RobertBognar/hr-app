import http from './HttpService';
import profile from './CreateProfile';

const registration = {
    register: async function (name, email, password, file) {
        const response = await http.post('/auth/local/register', {
            username: name,
            email: email,
            password: password,
        });

        const token = response.data.jwt;
        localStorage.setItem('token', token);

        const responseUpload = await http.post('/upload', file, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const username = response.data.user.username;
        const userId = response.data.user.id;
        const profilePhotoId = responseUpload.data[0].id;

        profile.createProfile(username, userId, profilePhotoId, '4');
    },
};

export default registration;
