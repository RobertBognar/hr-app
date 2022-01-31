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
        console.log(response.data.data.attributes.text);
        const question = response.data.data.attributes.text;
        // console.log(response.data.attributes.text);
        const idd = response.data.data.id;
        console.log('aaaaaaaaaaaaaaaaaaaaaafafasf', idd);
        return question;
    },
    editQuestion: async function (id, text) {
        const response = await http.put(`/questions/${id}`, {
            data: {
                text,
                type: 'text',
                order: 0,
                answers: [`${id}`, 'string or id'],
                company: 'string or id',
                createdAt: '2022-01-31T13:27:05.951Z',
                updatedAt: '2022-01-31T13:27:05.951Z',
                createdBy: 'string or id',
                updatedBy: 'string or id',
            },
        });
        console.log(response);
    },
};

export default questionsListService;
