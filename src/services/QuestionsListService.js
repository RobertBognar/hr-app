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
    addQuestion: async function (singleData) {
        try {
            const questionData = await http.get('/questions');

            let orderMAx = 0;
            questionData.data.data.map((item) => {
                if (item.attributes.order > orderMAx)
                    orderMAx = item.attributes.order;
            });
            const response = await http.post('/questions', {
                data: { ...singleData, order: orderMAx + 1 },
            });
            return response;
        } catch (error) {
            console.log('An error occurred:', error.message);
        }
    },
    deleteQuestion: async function (id) {
        try {
            const response = await http.delete(`/questions/${id}`);
            return response;
        } catch (error) {
            console.log('An error occurred:', error.message);
        }
    },
};
export default questionsListService;
