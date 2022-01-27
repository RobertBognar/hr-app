import React from 'react';
import { Heading, Text, Flex, Button } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';

const QuestionsList = ({ data, handleDelete, setAddNewQuestion }) => {
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
                    onClick={() => setAddNewQuestion(true)}
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
                        <Flex direction="column">
                            <Text fontWeight="700" fontSize="14px">
                                Question {id + 1} - {card.questionType}
                            </Text>
                            <Text fontSize="24px">{card.question}</Text>
                        </Flex>
                        <Flex>
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
