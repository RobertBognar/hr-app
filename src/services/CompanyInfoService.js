import http from './HttpService';

const addCompanyInfoService = {
    addCompanyInfo: async function (companyName, logo) {
        const data = {
            companyName: companyName,
            logo: logo,
        };
        try {
            const response = await http.post('/companyinfo', {
                data: data,
            });
            console.log(response);
        } catch (error) {
            console.log('Error has occured: ', error.message);
        }
    },
};

export default addCompanyInfoService;
