import http from './HttpService';
import upload from './UploadService';

const profile = {
    getUser: async function () {
        try {
            const response = await http.get('/users/me');

            console.log(response.data.id);

            return response.data.id;
        } catch (error) {
            console.error(error);
        }
    },

    filterUser: async function () {
        try {
            const userStorage = JSON.parse(localStorage.getItem('userData'));
            const response = await http.get(
                '/profiles?filters[user][id][$eq]=' + userStorage.id,
            );
            console.log(response.data.data[0]);

            return response.data.data[0];
        } catch (error) {
            console.error(error);
        }
    },

    updateProfile: async function (name, photoId) {
        try {
            const user = await profile.filterUser();
            const response = await http.put(`/profiles/` + user.id, {
                data: {
                    name: name,
                    profilePhoto: photoId,
                },
            });

            return response.data.data.attributes.name;
        } catch (error) {
            console.error(error);
        }
    },
    getProfiles: async function () {
        try {
            const response = await http.get('/profiles?populate=*');

            return response.data.data;
        } catch (error) {
            console.error(error);
        }
    },
    getProfileById: async function (id) {
        const response = await http.get(`/profiles/${id}`);
        const profile = response.data.data;
        return profile;
    },
    getProfilesByStatus: async function () {
        try {
            const response = await http.get(
                'profiles?populate=*&filters[status][$eq]=pending',
            );

            return response.data.data;
        } catch (error) {
            console.error(error);
        }
    },
    editProfile: async function (id, name, photoId) {
        const response = await http.put(`/profiles/${id}?populate=*`, {
            data: {
                name: name,
                profilePhoto: photoId,
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
    addNewTeamMember: async function (newMember, setEmail, setPassword, file) {
        const response = await http.post('/auth/local/register', {
            username: newMember,
            email: setEmail,
            password: setPassword,
        });
        const userToken = response.data.jwt;
        localStorage.setItem('userToken', userToken);

        const username = response.data.user.username;
        const userId = response.data.user.id;
        const profilePhotoId = await upload.upload(file);

        await profile.createProfile(username, userId, profilePhotoId);
    },
};

export default profile;
