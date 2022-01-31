import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import questionsListService from '../../services/QuestionsListService';

import { Flex, Box, Input, Heading, Button } from '@chakra-ui/react';
// import http from '../../services/HttpService';
// import questionsListService from '../../services/QuestionsListService';

const EditQuestion = () => {
    const [question, setQuestion] = useState('');

    async function getQuestion() {
        const quest = await questionsListService.getQuestion(id);
        setQuestion(quest);
    }
    useEffect(() => {
        getQuestion();
    }, []);

    const para = useParams();
    const id = para.id;
    console.log(id);
    console.log(question);

    return (
        <>
            <Flex
                px={['55px', '55px', '155px']}
                direction="row"
                className="bgBlack"
                minH="calc(100vh - 42px)"
                color={'white'}
                justifyContent="space-around"
                paddingTop={20}
            >
                <Heading>Edit Question</Heading>
                <form /* width={'1000px'} */>
                    {
                        <Input
                            width={'700px'}
                            color={'white'}
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    }
                </form>
                <Box justifySelf={'flex-start'}>
                    <Button
                        onClick={() =>
                            questionsListService.editQuestion(id, question)
                        }
                        color={'black'}
                    >
                        Edit
                    </Button>
                </Box>
            </Flex>
        </>
    );
};

export default EditQuestion;
