import http from './HttpService';

const addQuestionService = {
    addQuestion: async function (addedQuestion, option) {
        const data = {
            text: addedQuestion,
            type: option,
            order: 0,
        };
        try {
            const response = await http.post('/questions', {
                data: data,
            });
            console.log(response);
        } catch (error) {
            console.log('An error occurred:', error.message);
        }
    },
};

export default addQuestionService;
