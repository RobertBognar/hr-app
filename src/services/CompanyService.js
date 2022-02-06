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
};

export default company;
