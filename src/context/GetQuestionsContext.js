import { createContext, useContext, useState } from 'react';
import GetCompanyQuestionsService from '../services/GetCompanyQuestionsService';
export const GetQuestionsContext = createContext('');
export const useGetQuestionsContext = () => useContext(GetQuestionsContext);
export const GetQuestionsProvider = ({ children }) => {
    const [companyQuestions, setCompanyQuestions] = useState([]);

    async function getCompanyQ(id) {
        let getQ = await GetCompanyQuestionsService.userCompanyQuestions(id);
        let questionObject;
        let questionArr = [];
        if (getQ) {
            getQ.map((question) => {
                questionObject = {};
                questionObject.id = question.id;
                questionObject.text = question.attributes.text;
                questionObject.type = question.attributes.type;

                questionArr.push(questionObject);
            });
        }

        setCompanyQuestions(questionArr);
    }

    return (
        <GetQuestionsContext.Provider value={{ companyQuestions, getCompanyQ }}>
            {children}
        </GetQuestionsContext.Provider>
    );
};
