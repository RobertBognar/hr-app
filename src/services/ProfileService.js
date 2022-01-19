import http from './HttpService';

const profile = {
    createProfile: async function (username, userId, photoId, companyName) {
        await http.post(`/profiles`, {
            data: {
                status: 'pending',
                name: `${username}`,
                profilePhoto: `${photoId}`,
                user: `${userId}`,
                companyName,
            },
        });
    },
};

export default profile;
