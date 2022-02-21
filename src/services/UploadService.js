import http from './HttpService';

const upload = {
    upload: async function (file) {
        const responseUpload = await http.post('/upload', file);
        const profilePhotoId = responseUpload.data[0].id;
        return profilePhotoId;
    },
    getFilesId: async function (id) {
        const response = await http.get(`/upload/files/${id}`);
        const responseProfileName = response.data.name;
        return responseProfileName;
    },
};

export default upload;
