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
    getProfilesByStatus: async function () {
        try {
            const response = await http.get(
                '/profiles?populate=*&filters[status][$eq]=pending',
            );
            const responseProfiles = response.data.data;
            console.log(responseProfiles);
            return responseProfiles;
        } catch (error) {
            console.error(error);
        }
    },
    getProfilePublished: async function () {
        try {
            const response = await http.get(
                '/profiles?populate=*&filters[status][$eq]=published',
            );
            const responseProfiles = response.data.data;
            console.log(responseProfiles);
            return responseProfiles;
        } catch (error) {
            console.error(error);
        }
    },
    getProfileId: async function (id) {
        const response = await http.get(`/profiles/${id}`);
        const responseProfileName = response.data.data.attributes.name;
        return responseProfileName;
    },
    fetchProfileById: async function (id) {
        const response = await http.get(`/profiles/${id}`);
        const responseProfile = response.data.data;
        return responseProfile;
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
    filterTeamAscending: async function () {
        try {
            const response = await http.get(
                '/profiles?populate=*&sort[0]=name%3Aasc&filters[status][$eq]=published',
            );
            const responseAscending = response.data.data;
            console.log(responseAscending);
            return responseAscending;
        } catch (error) {
            console.log('An error occured: ', error.message);
        }
    },
    filterTeamDescending: async function () {
        try {
            const response = await http.get(
                '/profiles?populate=*&sort[0]=name%3Adesc&filters[status][$eq]=published',
            );
            const responseAscending = response.data.data;
            console.log(responseAscending);
            return responseAscending;
        } catch (error) {
            console.log('An error occured: ', error.message);
        }
    },
    filterTeamJoinedAscending: async function () {
        try {
            const response = await http.get(
                '/profiles?populate=*&sort[0]=createdAt%3Aasc&filters[status][$eq]=published',
            );
            const responseJoinedAscending = response.data.data;
            console.log(responseJoinedAscending);
            return responseJoinedAscending;
        } catch (error) {
            console.log('An Error Has Occured:', error.message);
        }
    },
    filterTeamJoinedDescending: async function () {
        try {
            const response = await http.get(
                '/profiles?populate=*&sort[0]=createdAt%3Adesc&filters[status][$eq]=published',
            );
            const responseJoinedAscending = response.data.data;
            console.log(responseJoinedAscending);
            return responseJoinedAscending;
        } catch (error) {
            console.log('An Error Has Occured:', error.message);
        }
    },
};

export default profile;
