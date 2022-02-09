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
    questionsDataPagination: async function (currentPage) {
        try {
            const response = await http.get('/questions', {
                params: {
                    'pagination[page]': currentPage,
                    'pagination[pageSize]': 5,
                },
            });
            return response;
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
    addAnswersData: async function (answersData) {
        await answersData.forEach((answer) => {
            try {
                const response = http.post('/answers', {
                    data: { answer: answer },
                });
                return response;
            } catch (error) {
                console.log('An error occurred:', error.message);
            }
        });
    },
};
questionsListService.questionsDataPagination(2);
export default questionsListService;
