import React, { useState, useEffect } from 'react';
import {
    Heading,
    Text,
    Flex,
    Button,
    Input,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalHeader,
    VStack,
    Textarea,
    Modal,
    useDisclosure,
} from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import questionsListService from '../../services/QuestionsListService';
import { useNavigate } from 'react-router-dom';
import './SubmitResponsePage.css';

const SubmitResponsePage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [answersData, setAnswersData] = useState([]);
    const [visibleItem, setVisibleItem] = useState(0);

    async function questionArrayFunc() {
        const arr = await questionsListService.questionsData();
        setData(arr);
    }
    useEffect(() => {
        questionArrayFunc();
    }, []);

    const handlePreviousBtn = () => {
        setVisibleItem(visibleItem - 1);
        setAnswersData(answersData.slice(0, answersData.length - 1));
        setValue('answer', '');
    };

    const openModal = () => {
        onOpen();
    };

    const closeModal = () => {
        onClose();
        navigate('/');
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = (answer) => {
        if (answer.answer === '') {
            setAnswersData([...answersData, answer.answerFile[0].name]);
        } else {
            setAnswersData([...answersData, answer.answer]);
        }
        if (data.length === visibleItem + 1) {
            if (answer.answer === '') {
                questionsListService.addAnswersData([
                    ...answersData,
                    answer.answerFile[0].name,
                ]);
            } else {
                questionsListService.addAnswersData([
                    ...answersData,
                    answer.answer,
                ]);
            }
        }
        setVisibleItem(visibleItem + 1);
        setValue('answer', '');
    };

    return (
        <Flex
            px={['55px', '55px', '155px']}
            direction="column"
            className="bgBlack"
            minH="calc(100vh - 42px)"
        >
            <Heading py="50px" color="white">
                Quantox's Team
            </Heading>
            {data.map((item, id) => {
                return (
                    <div key={id}>
                        {id === visibleItem && (
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Flex
                                    p="25px"
                                    border="1px"
                                    borderColor="white"
                                    justify="space-between"
                                    minH="300px"
                                >
                                    <VStack justify="space-between">
                                        <VStack ml={id === 0 ? '35px' : '0'}>
                                            <ChevronUpIcon
                                                w={6}
                                                h={6}
                                                color="white"
                                            />
                                            <Text color="white">
                                                {id + 1}/{data.length}
                                            </Text>
                                            <ChevronDownIcon
                                                w={6}
                                                h={6}
                                                color="white"
                                            />
                                        </VStack>
                                        {id !== 0 && (
                                            <Button
                                                bg="black"
                                                color="white"
                                                border="1px"
                                                borderColor="white"
                                                _hover={{
                                                    background: 'white',
                                                    color: 'black',
                                                }}
                                                onClick={() =>
                                                    handlePreviousBtn()
                                                }
                                            >
                                                Previous
                                            </Button>
                                        )}
                                    </VStack>
                                    <Flex direction="column" p="0 40px">
                                        <Text
                                            fontWeight="600"
                                            fontSize="38px"
                                            color="white"
                                            py="15px"
                                            htmlFor="questionAnswer"
                                        >
                                            {item.attributes.text}
                                        </Text>
                                        {item.attributes.type === 'text' ? (
                                            <>
                                                <Input
                                                    id="questionAnswer"
                                                    type="text"
                                                    color="white"
                                                    className={
                                                        errors.answer
                                                            ? 'redBorder'
                                                            : ''
                                                    }
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
                                                        can’t be empty
                                                    </Text>
                                                )}
                                            </>
                                        ) : item.attributes.type === 'image' ? (
                                            <>
                                                <Input
                                                    id="questionAnswer"
                                                    type="file"
                                                    color="white"
                                                    className={
                                                        errors.answerFile
                                                            ? 'redBorder'
                                                            : ''
                                                    }
                                                    {...register('answerFile', {
                                                        required:
                                                            'can’t be empty',
                                                    })}
                                                />
                                                {errors.answerFile && (
                                                    <Text
                                                        color="red"
                                                        textAlign="center"
                                                    >
                                                        {
                                                            errors.answerFile
                                                                .message
                                                        }
                                                    </Text>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <Textarea
                                                    id="questionAnswer"
                                                    size="sm"
                                                    color="white"
                                                    resize="none"
                                                    className={
                                                        errors.answer
                                                            ? 'redBorder'
                                                            : ''
                                                    }
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
                                                        can’t be empty
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
                                                color="white"
                                                border="1px"
                                                borderColor="white"
                                                _hover={{
                                                    background: 'white',
                                                    color: 'black',
                                                }}
                                                onClick={() => openModal()}
                                            >
                                                Save
                                            </Button>
                                        ) : (
                                            <Button
                                                type="submit"
                                                bg="black"
                                                color="white"
                                                border="1px"
                                                borderColor="white"
                                                _hover={{
                                                    background: 'white',
                                                    color: 'black',
                                                }}
                                            >
                                                Next
                                            </Button>
                                        )}
                                    </VStack>
                                </Flex>
                            </form>
                        )}
                    </div>
                );
            })}
            <Modal
                size="xl"
                blockScrollOnMount={true}
                isOpen={isOpen}
                onClose={() => closeModal()}
            >
                <ModalOverlay />
                <ModalContent
                    color="white"
                    bg="black"
                    border="1px"
                    borderColor="white"
                    p={['0', '0', '25px', '50px']}
                >
                    <ModalHeader mb="50px">
                        Thank you for your answers to our questions
                    </ModalHeader>
                    <ModalCloseButton onClick={() => closeModal()} />

                    <Button
                        colorScheme="green"
                        mr={3}
                        onClick={() => closeModal()}
                    >
                        Close
                    </Button>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default SubmitResponsePage;
