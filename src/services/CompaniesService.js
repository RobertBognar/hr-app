import http from './HttpService';

const company = {
    createCompany: async function () {
        let token = localStorage.getItem('token');
        const company = await http.post(
            '/companies',
            {
                data: {
                    name: 'quantox',
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
    },
    getCompanies: async function () {
        let token = localStorage.getItem('token');

        const getCompany = await http.get('/companies', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
};

export default company;
