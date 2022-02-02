import http from './HttpService';

const companyInfoService = {
    addCompanyInfo: async function (companyName, logo) {
        const data = {
            companyName: companyName,
            //logo: logo,
        };
        try {
            const response = await http.post('/companies', {
                data: data,
            });
            console.log(response);
        } catch (error) {
            console.log('Error has occured: ', error.message);
        }
    },
    getCompanyInfo: async function () {
        try {
            const response = await http.get('/companies');
            console.log(response);
            const companyInfoResp = response.data.data;
            return companyInfoResp;
        } catch (error) {
            console.log('Error has occured: ', error.message);
        }
    },
};

export default companyInfoService;
