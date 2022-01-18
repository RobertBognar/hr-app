import http from './HttpService';

const profile = {
    createProfile: async function (username, userId, photoId) {
        let token = localStorage.getItem('token');
        const profile = await http.post(
            `/profiles`,
            {
                data: {
                    status: 'pending',
                    name: `${username}`,
                    profilePhoto: `${photoId}`,
                    user: `${userId}`,
                },
            },

            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );

        // const getProfile = await http.get(`profiles?populate=*`, {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //     },
        // });
        // console.log('get profiles', getProfile);
    },
};

export default profile;
