import http from './HttpService';

const questionsListService = {
    questionsData: async function () {
        try {
            const response = await http.get('/questions');
            const responseQuestions = response.data.data;
            return responseQuestions;
        } catch (error) {
            console.error(error);
        }
    },
};

export default questionsListService;
