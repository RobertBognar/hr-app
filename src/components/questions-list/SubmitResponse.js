import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
    Text,
    Flex,
    Button,
    Input,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    VStack,
    Textarea,
    Modal,
    useDisclosure,
    ModalBody,
    ModalFooter,
} from '@chakra-ui/react';
import {
    ChevronUpIcon,
    ChevronDownIcon,
    CheckCircleIcon,
} from '@chakra-ui/icons';

import questionsListService from '../../services/QuestionsListService';

import './SubmitResponse.css';
import SubmitHeader from './../UI/SubmitHeader';
import ButtonNext from '../UI/ButtonNext';

const SubmitResponse = () => {
    const [data, setData] = useState([]);
    const [questionAnswerData, setQuestionAnswerData] = useState([]);
    const [visibleQuestionCount, setVisibleQuestionCount] = useState(0);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    //ADD LOGIC FOR FETCHING ALL QUESTIONS DATA FROM API
    async function getQuestions(id) {
        const fetchedQuestionArray = await questionsListService.questionsData(
            id,
        );
        setData(fetchedQuestionArray);
    }
    useEffect(() => {
        setTimeout(() => {
            getQuestions();
        }, 2000);
    }, []);

    //UPDATE HANDLE EVENTS & MODALS, CHECK BUTTON ON UI COMPONENT
    const handlePreviousButton = () => {
        setVisibleQuestionCount(visibleQuestionCount - 1);
        setQuestionAnswerData(
            questionAnswerData.slice(0, questionAnswerData.length - 1),
        );
        setValue('answer', '');
    };

    //MODAL
    const { isOpen, onOpen, onClose } = useDisclosure();

    const openModalOnSubmit = () => {
        onOpen();
        questionsListService.addAnswersData(questionAnswerData);
    };

    const onSubmit = (questionAnswers) => {
        if (questionAnswers.answer === '') {
            setQuestionAnswerData([
                ...questionAnswerData,
                questionAnswers.answerFile[0],
            ]);
        } else {
            setQuestionAnswerData([
                ...questionAnswerData,
                questionAnswers.answer,
            ]);
        }
        setVisibleQuestionCount(visibleQuestionCount + 1);
        setValue('answer', '');
    };

    return (
        <Flex
            px={['55px', '55px', '155px']}
            direction="column"
            className="bgBlack"
            minH="calc(100vh - 42px)"
        >
            <SubmitHeader />
            {data.map((question, id) => {
                return (
                    <div key={id}>
                        {id === visibleQuestionCount && (
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Flex
                                    p="25px"
                                    border="2px"
                                    borderColor="gray.200"
                                    borderStyle="solid"
                                    justify="space-evenly"
                                    minH="300px"
                                    width="800px"
                                    ml="40"
                                    mt="40px"
                                >
                                    <VStack justify="space-between">
                                        <VStack>
                                            <ChevronUpIcon
                                                w={16}
                                                h={10}
                                                color="gray.200"
                                            />
                                            <Text color="gray.200">
                                                {id + 1} / {data.length}
                                            </Text>
                                            <ChevronDownIcon
                                                w={16}
                                                h={10}
                                                color="gray.200"
                                            />
                                        </VStack>
                                        {id !== 0 && (
                                            <Button
                                                bg="black"
                                                color="whiteAlpha.500"
                                                border="1px"
                                                borderColor="gray.200"
                                                _hover={{
                                                    background: 'white',
                                                    color: 'black',
                                                }}
                                            >
                                                <Text
                                                    onClick={() =>
                                                        handlePreviousButton()
                                                    }
                                                >
                                                    Previous
                                                </Text>
                                            </Button>
                                        )}
                                    </VStack>
                                    <Flex direction="column">
                                        <Text
                                            fontSize="42px"
                                            fontWeight="extrabold"
                                            color="white"
                                            pt="15px"
                                        >
                                            {question.attributes.text}
                                        </Text>
                                        {question.attributes.type === 'text' ? (
                                            <>
                                                <Input
                                                    id="answers"
                                                    type="text"
                                                    color="white"
                                                    {...register('answer', {
                                                        required: true,
                                                        validate: (value) => {
                                                            return !!value.trim();
                                                        },
                                                    })}
                                                />
                                                {errors.answer && (
                                                    <Text
                                                        color="red"
                                                        textAlign="center"
                                                    >
                                                        Please Insert Text
                                                    </Text>
                                                )}
                                            </>
                                        ) : question.attributes.type ===
                                          'image' ? (
                                            <>
                                                <Input
                                                    id="answers"
                                                    type="file"
                                                    color="white"
                                                    {...register('answerFile', {
                                                        required: true,
                                                    })}
                                                />
                                                {errors.answerFile && (
                                                    <Text
                                                        color="red"
                                                        textAlign="center"
                                                    >
                                                        Please Insert Picture
                                                    </Text>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <Textarea
                                                    id="answers"
                                                    size="sm"
                                                    color="white"
                                                    resize="none"
                                                    {...register('answer', {
                                                        required: true,
                                                        validate: (value) => {
                                                            return !!value.trim();
                                                        },
                                                    })}
                                                />
                                                {errors.answer && (
                                                    <Text
                                                        color="red"
                                                        textAlign="center"
                                                    >
                                                        Please Insert A Value
                                                    </Text>
                                                )}
                                            </>
                                        )}
                                        )
                                    </Flex>
                                    <VStack justify="flex-end">
                                        {id === data.length - 1 ? (
                                            <Button
                                                type="submit"
                                                bg="black"
                                                color="whiteAlpha.500"
                                                border="1px"
                                                borderColor="gray.200"
                                                _hover={{
                                                    background: 'white',
                                                    color: 'black',
                                                }}
                                                onClick={() =>
                                                    openModalOnSubmit()
                                                }
                                            >
                                                Save
                                            </Button>
                                        ) : (
                                            <ButtonNext />
                                        )}
                                    </VStack>
                                </Flex>
                            </form>
                        )}
                    </div>
                );
            })}
            <Modal isOpen={isOpen} onClose={onClose} size="2xl">
                <ModalOverlay />
                <ModalContent backgroundColor="gray.50">
                    <ModalCloseButton />
                    <ModalBody mt="48px" textAlign="center">
                        <Text as="i">
                            Thank you for subbmiting the answers! :)
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="gray" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default SubmitResponse;
