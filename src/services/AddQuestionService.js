import http from './HttpService';

const addQuestionService = {
    addQuestion: async function (addedQuestion, option) {
        try {
            const questions = await http.get('/questions');
            let order = questions.data.data.length;

            console.log(order);
            let userData = JSON.parse(localStorage.getItem('userData'));
            let data = {
                data: {
                    text: addedQuestion,
                    type: option,
                    order: order + 1,
                    company: userData.username,
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
