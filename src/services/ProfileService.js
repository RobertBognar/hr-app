import http from './HttpService';

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
    editProfile: async function (id, name) {
        const response = await http.put(`/profiles/${id}`, {
            data: {
                name: `${name}`,
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
};

export default profile;
