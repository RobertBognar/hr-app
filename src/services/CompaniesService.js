import http from './HttpService';

const company = {
    setCompany: async function (name) {
        const response = await http.post('/companies', {
            name,
        });

        console.log(response);

        return response;
    },
};

export default company;
