import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import AddNewQuestion from './AddNewQuestion';
import QuestionsList from './QuestionsList';
import questionsListService from '../../services/QuestionsListService';

const QuestionsListMain = () => {
    const [data, setData] = useState([]);
    const [addNewQuestion, setAddNewQuestion] = useState(false);

    async function questionArrayFunc() {
        const arr = await questionsListService.questionsData();
        setData(arr);
    }
    useEffect(() => {
        questionArrayFunc();
    }, []);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    return (
        <Flex
            px={['55px', '55px', '155px']}
            direction="column"
            className="bgBlack"
            minH="calc(100vh - 42px)"
        >
            {!addNewQuestion && (
                <QuestionsList
                    data={data}
                    handleDelete={handleDelete}
                    setAddNewQuestion={setAddNewQuestion}
                />
            )}
            {addNewQuestion && (
                <AddNewQuestion
                    setAddNewQuestion={setAddNewQuestion}
                    data={data}
                    setData={setData}
                />
            )}
        </Flex>
    );
};

export default QuestionsListMain;
