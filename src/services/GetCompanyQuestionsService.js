import http from './HttpService';

const GetCompanyQuestionsService = {
    userCompanyQuestions: async function (id) {
        try {
            const questions = await http.get(`/questions?id=${id}`);
            const companyQ = questions.data.data;

            return companyQ;
        } catch (error) {
            return;
        }
    },
    getProfile: async function (userId) {
        try {
            const profile = await http.get(
                `/profiles?filter[user][id][$eq]=${userId}&populate=company`,
            );

            return profile.data.data;
        } catch (error) {
            return;
        }
    },
    answerServis: function (arrayOfAnswers) {
        arrayOfAnswers.map((answer) => {
            postAnswer(answer);
        });
    },
};
function postAnswer(answer) {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0');
    var year = today.getFullYear();
    var hour = today.getHours();
    var minute = today.getMinutes();
    if (minute < 10) {
        minute = '0' + minute;
    }
    var second = today.getSeconds();
    if (second < 10) {
        second = '0' + second;
    }
    var date =
        year +
        '-' +
        month +
        '-' +
        day +
        'T' +
        hour +
        '-' +
        minute +
        '-' +
        second +
        'Z';

    try {
        let data = {
            data: {
                question: answer.questionId,
                profile: answer.profile,
                answer: answer.answer,
                createdAt: { date },
                updatedAt: '',
                createdBy: answer.profile,
                updatedBy: '',
            },
        };
        http.post('/answers', data);
    } catch (error) {
        console.log('An error occurred:', error.message);
        return;
    }
}

export default GetCompanyQuestionsService;
