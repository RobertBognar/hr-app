import http from './HttpService';

const company = {
    createCompany: async function (companyName) {
        const responseCompany = await http.post('/companies', {
            data: {
                name: `${companyName}'s Company`,
            },
        });
        return responseCompany.data.data.id;
    },
    companyData: async function () {
        try {
            const response = await http.get('/companies');
            const responseCompany = response.data.data;
            console.log(responseCompany);
            return responseCompany;
        } catch (error) {
            console.error(error);
        }
    },
};

export default company;
