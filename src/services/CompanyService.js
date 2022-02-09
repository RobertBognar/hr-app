import http from './HttpService';

const company = {
    companyData: async function () {
        try {
            const response = await http.get('/companies');
            console.log(response);
            const responseCompany = response.data.data.id;
            return responseCompany;
        } catch (error) {
            console.error(error);
        }
    },
    createCompany: async function (companyName) {
        const responseCompany = await http.post('/companies', {
            data: {
                name: `${companyName}'s Company`,
            },
        });
        console.log(responseCompany.data.data.id);
        return responseCompany.data.data.id;
    },
    fetchCompany: async function (id) {
        const response = await http.get(`/companies/1`);
        const company = response.data.data.attributes.name;
        console.log(company);
        return company;
    },
    editCompany: async function (id, companyName) {
        const responseEditCompany = await http.put(`/companies/1`, {
            data: {
                name: `${companyName}`,
            },
        });
        return responseEditCompany;
    },
};

export default company;
