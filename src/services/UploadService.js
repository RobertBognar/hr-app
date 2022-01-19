import http from './HttpService';

const upload = {
    upload: async function (file) {
        const responseUpload = await http.post('/upload', file);
        const profilePhotoId = responseUpload.data[0].id;
        return profilePhotoId;
    },
};

export default upload;
