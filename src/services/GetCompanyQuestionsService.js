import http from './HttpService';

const GetCompanyQuestionsService = {
    userCompanyQuestions: async function (id) {
        try {
            const questions = await http.get(`/questions?id=${id}`);
            const companyQ = questions.data.data;

            return companyQ;
        } catch (error) {
            console.log('An error occurred:', error.message);
            return;
        }
    },
};

export default GetCompanyQuestionsService;
//napravi answer servis koji ce da prima parametre za body i kreira post
//uzmi niz
//mapiraj kroz niz i za svaki post metodu
