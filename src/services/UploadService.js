import http from './HttpService';

const upload = {
    upload: async function (file) {
        const responseUpload = await http.post('/upload', file);
        const profilePhotoId = responseUpload.data[0].id;
        return profilePhotoId;
    },
    getPhotos: async function () {
        try {
            const response = await http.get('/upload/files');
            console.log(response);
            return response.data[0].name;
        } catch (error) {
            console.error(error);
        }
    },
};

export default upload;
