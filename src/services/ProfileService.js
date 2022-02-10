import http from './HttpService';

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
};

export default profile;
