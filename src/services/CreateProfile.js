import http from './HttpService';

const profile = {
    createProfile: async function (username, userId, photoId) {
        await http.post(`/profiles`, {
            data: {
                status: 'pending',
                name: `${username}`,
                profilePhoto: `${photoId}`,
                user: `${userId}`,
            },
        });
    },
};

export default profile;
