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
    fetchCompany: async function (id, companyName) {
        const responseFetchCompany = await http.get(`/companies/${id}`, {
            data: {
                name: `${companyName}`,
            }
        })
        return responseFetchCompany.data.data.attributes.name;
    },
    editCompany: async function (id, companyName) {
        const responseEditCompany = await http.put(`/companies/${id}`, {
            data: {
                name: `${companyName}`,
            },
        });
        return responseEditCompany;
    }
};

export default company;
