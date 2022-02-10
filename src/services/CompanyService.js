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
        const response = await http.get(`/companies/484`);
        const company = response.data.data.attributes.name;
        return company;
        // const response = await http.get(`/companies/${id}`);
        // const company = response.data.data.id;
        // return company;
    },
    fetchLogo: async function () {
        const response = await http.get(`/upload/files/637`);
        const logo = response.data.name;
        return logo;
    },
    editCompany: async function (id, companyName) {
        const responseEditCompany = await http.put(`/companies/484`, {
            data: {
                name: `${companyName}`,
            },
        });
        return responseEditCompany;
    },
};

export default company;
