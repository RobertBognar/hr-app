import http from './HttpService';
import upload from './UploadService';

const profile = {
    createProfile: async function (username, userId, photoId, companyId) {
        await http.post(`/profiles`, {
            data: {
                status: 'pending',
                name: `${username}`,
                profilePhoto: `${photoId}`,
                user: `${userId}`,
                company: companyId,
            },
        });
    },
    getProfile: async function () {
        try {
            const response = await http.get('/profiles?populate=*');
            const responseProfiles = response.data.data;
            console.log(responseProfiles);
            return responseProfiles;
        } catch (error) {
            console.error(error);
        }
    },
    getProfileId: async function (id) {
        const response = await http.get(`/profiles/${id}`);
        const question = response.data.data.attributes.name;
        return question;
    },
    editProfile: async function (id, name, photo) {
        const response = await http.put(`/profiles/${id}`, {
            data: {
                name: `${name}`,
                photo: `${photo}`,
            },
        });
        return response;
    },
    deleteProfile: async function (id) {
        try {
            const response = await http.delete(`/profiles/${id}`);
            return response;
        } catch (error) {
            console.log('An error occurred:', error.message);
        }
    },
    addNewTeamMember: async function (newMember, newEmail, newPassword, file) {
        const response = await http.post('/auth/local/register', {
            username: newMember,
            email: newEmail,
            password: newPassword,
        });
        const token = response.data.jwt;
        localStorage.setItem('userToken', token);

        const username = response.data.user.username;
        const userId = response.data.user.id;
        const profilePhotoId = await upload.upload(file);

        await profile.createProfile(username, userId, profilePhotoId);
    },
};

export default profile;
