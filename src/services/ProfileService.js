import http from './HttpService';

const profile = {
    createProfile: async function (username, userId, photoId, usernameCompany) {
        await http.post(`/profiles`, {
            data: {
                status: 'pending',
                name: `${username}`,
                profilePhoto: `${photoId}`,
                user: `${userId}`,
                usernameCompany,
            },
        });
    },
};

export default profile;
