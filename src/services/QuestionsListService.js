import http from './HttpService';

const questionsListService = {
    questionsData: async function () {
        try {
            const response = await http.get('/questions');
            console.log(response);
            const responseQuestions = response.data.data;
            return responseQuestions;
        } catch (error) {
            console.error(error);
        }
    },
    getQuestion: async function (id) {
        const response = await http.get(`/questions/${id}`);
        const question = response.data.data.attributes.text;
        return question;
    },
    editQuestion: async function (id, text) {
        const response = await http.put(`/questions/${id}`, {
            data: {
                text: `${text}`,
            },
        });
        return response;
    },
};

export default questionsListService;
