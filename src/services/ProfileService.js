import http from './HttpService';

const profile = {
    createProfile: async function (username, userId, photoId, companyId) {
        console.log(companyId);
        await http.post(`/profiles`, {
            data: {
                status: 'pending',
                name: `${username}`,
                profilePhoto: `${photoId}`,
                user: `${userId}`,
                company: `${companyId}`,
            },
        });
    },
    getProfiles: async function () {
        try {
            const profiles = await http.get('/profiles');

            return profiles.data.data;
        } catch (error) {
            console.log('An error occurred:', error.message);
        }
    },
    getProfileById: async function (id) {
        try {
            const profile = await http.get(`/profiles/${id}`);
            console.log(profile.data.data);
            return profile.data.data;
        } catch (error) {
            console.log('An error occurred:', error.message);
        }
    },

    editProfile: async function (id, data) {
        const response = await http.put(`/profiles/${id}`, data);

        return response;
    },
};

export default profile;
