import http from './HttpService';

const company = {
    createCompany: async function (companyName) {
        const responseCompany = await http.post('/companies', {
            data: {
                name: `${companyName}'s Company`,
            },
        });
        console.log(responseCompany.data.data.id);
        return responseCompany.data.data.id;
    },
    getCompanies: async function () {
        const response = await http.get('/companies');
        console.log(response.data.data);
        return response.data.data;
    },
};

export default company;
