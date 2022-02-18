import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';

import './submitResponsePage.css';

import http from '../../services/HttpService';
import questionsListService from '../../services/QuestionsListService';

import {
    Flex,
    Box,
    Input,
    Heading,
    Button,
    Textarea,
    Text,
    Modal,
    ModalHeader,
    ModalCloseButton,
    ModalOverlay,
    ModalContent,
    useDisclosure,
} from '@chakra-ui/react';

const SubmitResponsePage = () => {
    const [questionsArray, setQuestionsArray] = useState([]);
    const [iterQuestion, setIterQuestion] = useState(0);
    const [profile, setProfile] = useState('');
    const [answersArray, setAnswersArray] = useState([]);

    const navigate = useNavigate();

    const idUser = JSON.parse(localStorage.getItem('userData')).id;

    const idProf = async function () {
        const response = await http.get(
            `/profiles?filters[user][id][$eq]=${idUser}&populate=*`,
        );
        setProfile(response);
    };
    useEffect(() => {
        idProf();
    }, []);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const openModal = () => {
        onOpen();
    };

    const closeModal = () => {
        onClose();
        navigate('/');
    };

    const onSubmit = (data) => {
        setIterQuestion(iterQuestion + 1);

        if (data.picture) {
            const formData = new FormData();
            formData.append('files', data.picture[0]);
            setAnswersArray([...answersArray, data.picture[0].name]);
        } else {
            setAnswersArray([...answersArray, data.submitquestion]);
        }
        setValue('submitquestion', '');
        setValue('picture', '');
    };

    useEffect(() => {
        if (answersArray.length) {
            if (questionsArray.length === answersArray.length) {
                questionsListService.submitQuestion(
                    answersArray,
                    questionsArray[iterQuestion - 1].id,
                    profile.data.data[0].id,
                );
            }
        }
    }, [answersArray]);

    const decrease = () => {
        setIterQuestion(iterQuestion - 1);
        setValue('submitquestion', '');
    };

    async function getQuest() {
        const questArray = await questionsListService.questionsData();
        setQuestionsArray(questArray);
    }

    useEffect(() => {
        getQuest();
    }, []);

    return (
        <div>
            <Flex
                px={['55px', '55px', '155px']}
                direction="column"
                flexWrap={'wrap'}
                alignContent={'center'}
                className="bgBlack"
                minH="calc(100vh - 42px)"
                color={'white'}
                justifyContent="flex-start"
                paddingTop={20}
            >
                <Heading marginBottom={8}>Quantox's Team</Heading>

                <Box
                    border={'2px solid white'}
                    minWidth={'60%'}
                    minH={'200px'}
                    maxH={'300px'}
                    p={'50px'}
                >
                    {questionsArray.map((quest, id) => {
                        return (
                            <Box key={id}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {id === iterQuestion && (
                                        <Flex
                                            wrap={'nowrap'}
                                            flexDirection={'column'}
                                        >
                                            <Box>
                                                <BsChevronUp />
                                                {iterQuestion + 1}/
                                                {questionsArray.length}
                                                <BsChevronDown />
                                            </Box>
                                            <Box fontSize={'25px'}>
                                                {quest.attributes.text}
                                                {quest.attributes.type ===
                                                    'text' && (
                                                    <Input
                                                        color={'white'}
                                                        {...register(
                                                            'submitquestion',
                                                            {
                                                                required: true,
                                                                validate: (
                                                                    value,
                                                                ) => {
                                                                    return !!value.trim();
                                                                },
                                                            },
                                                        )}
                                                    />
                                                )}
                                                {quest.attributes.type ===
                                                    'long_text' && (
                                                    <Textarea
                                                        placeholder="Your text here ..."
                                                        {...register(
                                                            'submitquestion',
                                                            {
                                                                required: true,
                                                                validate: (
                                                                    value,
                                                                ) => {
                                                                    return !!value.trim();
                                                                },
                                                            },
                                                        )}
                                                    />
                                                )}
                                                {errors.submitquestion && (
                                                    <Text
                                                        color={'red'}
                                                        textAlign={'center'}
                                                    >
                                                        This input is required
                                                    </Text>
                                                )}
                                                {quest.attributes.type ===
                                                    'image' && (
                                                    <Input
                                                        id="picture"
                                                        width={'300px'}
                                                        type={'file'}
                                                        {...register('picture')}
                                                        backgroundColor={
                                                            'green'
                                                        }
                                                        mt="15px"
                                                        _hover={{
                                                            background: 'white',
                                                            color: 'black',
                                                        }}
                                                        name={'picture'}
                                                        display={'block'}
                                                    />
                                                )}
                                            </Box>

                                            <Flex justifyContent={'flex-end'}>
                                                {id > 0 && (
                                                    <Button
                                                        width={20}
                                                        right={'0px'}
                                                        bg="black"
                                                        color="white"
                                                        border="1px"
                                                        borderColor="white"
                                                        mt="15px"
                                                        marginRight={'30px'}
                                                        _hover={{
                                                            background: 'white',
                                                            color: 'black',
                                                        }}
                                                        onClick={decrease}
                                                    >
                                                        Back
                                                    </Button>
                                                )}
                                                {id <
                                                    questionsArray.length -
                                                        1 && (
                                                    <Button
                                                        width={20}
                                                        right={'0px'}
                                                        bg="black"
                                                        color="white"
                                                        border="1px"
                                                        borderColor="white"
                                                        mt="15px"
                                                        _hover={{
                                                            background: 'white',
                                                            color: 'black',
                                                        }}
                                                        justifySelf={'end'}
                                                        type="submit"
                                                    >
                                                        Next
                                                    </Button>
                                                )}

                                                {questionsArray.length - 1 ===
                                                    id && (
                                                    <Button
                                                        type="submit"
                                                        width={20}
                                                        right={'0px'}
                                                        bg="black"
                                                        color="white"
                                                        border="1px"
                                                        borderColor="white"
                                                        mt="15px"
                                                        _hover={{
                                                            background: 'white',
                                                            color: 'black',
                                                        }}
                                                        onClick={() => {
                                                            openModal();
                                                        }}
                                                    >
                                                        Save
                                                    </Button>
                                                )}
                                            </Flex>
                                        </Flex>
                                    )}
                                </form>
                            </Box>
                        );
                    })}
                </Box>

                <Modal
                    blockScrollOnMount={true}
                    closeOnOverlayClick={false}
                    isOpen={isOpen}
                    size="lg"
                    onClose={closeModal}
                >
                    <ModalOverlay color={'white'} />
                    <ModalContent
                        marginTop={'130px'}
                        color="white"
                        backgroundColor={'green'}
                        border="1px"
                        borderRadius={'15px'}
                        borderColor="white"
                        p={'20px 50px 50px 50px'}
                    >
                        <ModalHeader
                            marginBottom="30px"
                            textAlign={'center'}
                            textTransform={'uppercase'}
                        >
                            Thank you for your submit
                        </ModalHeader>
                        <ModalCloseButton onClick={closeModal} />

                        <Button
                            backgroundColor={'white'}
                            onClick={closeModal}
                            color={'black'}
                            opacity={'0.8'}
                            _hover={{
                                opacity: '1',
                                background: 'white',
                                color: 'black',
                            }}
                        >
                            Close
                        </Button>
                    </ModalContent>
                </Modal>
            </Flex>
        </div>
    );
};

export default SubmitResponsePage;
