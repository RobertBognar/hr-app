import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Heading, Text, Flex, Button } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import questionsListService from '../../services/QuestionsListService';

const QuestionsList = () => {
    const [data, setData] = useState([]);

    async function questionArrayFunc() {
        const arr = await questionsListService.questionsData();
        setData(arr);
    }
    useEffect(() => {
        questionArrayFunc();
    }, []);

    const navigate = useNavigate();

    async function handleDelete(id) {
        await questionsListService.deleteQuestion(id);
        questionArrayFunc();
    }

    return (
        <>
            <Flex
                direction={['column', 'row', 'row']}
                justifyContent="space-between"
                alignItems="center"
                py="40px"
            >
                <Heading py="10px" color="white">
                    Questions
                </Heading>
                <Button
                    display="flex"
                    alignItems="end"
                    py="10px"
                    className="question-list-add-btn"
                    onClick={() =>
                        navigate('/questionslistmain/addnewquestion')
                    }
                >
                    <SmallAddIcon w={6} h={6} />
                    Add new question
                </Button>
            </Flex>
            {data.map((card, id) => {
                return (
                    <Flex
                        direction={['column', 'row', 'row']}
                        key={card.id}
                        color="white"
                        justifyContent="space-between"
                        border="1px"
                        borderColor="white"
                        w="100%"
                        p="25px"
                        mb="25px"
                    >
                        {console.log(card)}
                        <Flex direction="column">
                            <Text fontWeight="700" fontSize="14px">
                                Question {id + 1}
                            </Text>
                            <Text fontSize="24px">{card.attributes.text}</Text>
                        </Flex>
                        <Flex>
                            {}
                            <Link to={`/questions/${card.id}/edit`}>
                                <Button
                                    bg="black"
                                    color="white"
                                    border="1px"
                                    borderColor="white"
                                    mt="15px"
                                    _hover={{
                                        background: 'white',
                                        color: 'black',
                                    }}
                                >
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                bg="black"
                                color="white"
                                border="1px"
                                borderColor="white"
                                ml="25px"
                                mt="15px"
                                _hover={{
                                    background: 'white',
                                    color: 'black',
                                }}
                                onClick={() => handleDelete(card.id)}
                            >
                                Delete
                            </Button>
                        </Flex>
                    </Flex>
                );
            })}
        </>
    );
};

export default QuestionsList;
