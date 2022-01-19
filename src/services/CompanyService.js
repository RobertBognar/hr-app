import http from './HttpService';

const company = {
    setCompany: async function (companies) {
        const responseCompany = await http.post('/companies', {
            data: {
                name: `${companies}'s Company`,
            },
        });
        return responseCompany;
    },
};

export default company;
