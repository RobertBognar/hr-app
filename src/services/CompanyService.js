import http from './HttpService';

const company = {
    createCompany: async function (companyName) {
        const responseCompany = await http.post('/companies', {
            data: {
                name: `${companyName}'s Company`,
            },
        });
        return responseCompany;
    },
};

export default company;
