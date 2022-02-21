import http from './HttpService';

const addQuestionService = {
    addQuestion: async function (addedQuestion, option, companyId) {
        try {
            const questions = await http.get('/questions');
            let arrQuestions = questions.data.data;
            let maxOrder = 0;
            for (let i = 0; i < arrQuestions.length; i++) {
                if (arrQuestions[i].attributes.order > maxOrder) {
                    maxOrder = arrQuestions[i].attributes.order;
                }
            }

            let data = {
                data: {
                    text: addedQuestion,
                    type: option,
                    order: maxOrder + 1,
                    company: companyId,
                },
            };
            const response = await http.post('/questions', data);
            return response;
        } catch (error) {
            console.log('An error occurred:', error.message);
        }
    },
};

export default addQuestionService;
