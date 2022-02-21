import http from './HttpService';

const GetCompaniesService = {
    getCompanies: async function () {
        try {
            const response = await http.get('/companies');

            return response.data.data;
        } catch (error) {
            console.log('An error occurred:', error.message);
        }
    },
};
export default GetCompaniesService;
