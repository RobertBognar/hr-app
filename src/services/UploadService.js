import http from './HttpService';

const upload = {
    uploadFile: async function (file) {
        const response = await http.post('/upload', {
            file,
        });
        console.log(response);
        return response;
    },
};

export default upload;
