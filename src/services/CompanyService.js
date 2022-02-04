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
    fetchCompany: async function (companyName) {
        const responseFetchCompany = await http.get('/companies/1', {
            data: {
                name: `${companyName}`,
            }
        })
        return responseFetchCompany.data.data.id;
    }
};

export default company;
