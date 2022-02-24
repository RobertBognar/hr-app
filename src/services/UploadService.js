import http from './HttpService';

const upload = {
    upload: async function (file) {
        const responseUpload = await http.post('/upload', file);
        const profilePhotoId = responseUpload.data[0].id;
        return profilePhotoId;
    },

    getFiles: async function () {
        const responseUpload = await http.get('/upload/files');
        console.log(responseUpload.data);
        return responseUpload.data;
    },
};

export default upload;
