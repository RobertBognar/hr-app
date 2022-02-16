import React, { useState, useEffect } from 'react';
import { Heading, Text, Flex, Image, useDisclosure } from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import QuestionCard from './QuestionCard';
import ModalWindow from './ModalWindow';
import './styles.css';
import questionsListService from '../../services/QuestionsListService';

const SubmitResponsePage = () => {
    const [questions, setQuestions] = useState([]);
    const [answersData, setAnswersData] = useState([]);
    const [questionCard, setQuestionCard] = useState(0);
    const navigate = useNavigate();

    async function loadQuestions() {
        const questions = await questionsListService.questionsData();
        setQuestions(questions);
    }
    useEffect(() => {
        loadQuestions();
    }, []);

    const handlePreviousButton = () => {
        setQuestionCard(questionCard - 1);
        setValue('answerText', '');
    };

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = (answer) => {
        if (answer.answerText === '') {
            setAnswersData([...answersData, answer.answerFile[0].name]);
        } else {
            setAnswersData([...answersData, answer.answerText]);
        }
        if (questions.length === questionCard + 1) {
            if (answer.answerText === '') {
                questionsListService.submitQuestions([
                    ...answersData,
                    answer.answerFile[0].name,
                ]);
            } else {
                questionsListService.submitQuestions([
                    ...answersData,
                    answer.answerText,
                ]);
            }
        }
        setQuestionCard(questionCard + 1);
        setValue('answerText', '');
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    const openModal = () => {
        onOpen();
    };

    const closeModal = () => {
        onClose();
        navigate('/');
    };
    return (
        <Flex
            px={['55px', '55px', '155px']}
            direction="column"
            className="bgBlack"
            minH="calc(100vh - 42px)"
            pt={50}
        >
            <Flex>
                <Heading>
                    <Image
                        src="https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.6435-9/169599792_3919817614751042_8008690047092345096_n.png?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=99QoknvKYuEAX_GFuQH&_nc_ht=scontent.fbeg1-1.fna&oh=00_AT_fOgZbnVGdkEytSFq82fNFB57PxmugEB_hMD3WMPrMqw&oe=622BCC49"
                        alt="Quantox"
                        w={100}
                        h={100}
                        ml={200}
                    />
                </Heading>
                <Text color={'white'} mt={7} fontSize={34} fontWeight={'bold'}>
                    Quantox's Team
                </Text>
            </Flex>

            {questions.map((card, counter) => {
                return (
                    <QuestionCard
                        card={card}
                        counter={counter}
                        key={card.id}
                        register={register}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                        errors={errors}
                        questions={questions}
                        questionCard={questionCard}
                        handlePreviousButton={handlePreviousButton}
                        openModal={openModal}
                    />
                );
            })}
            <ModalWindow isOpen={isOpen} closeModal={closeModal} />
        </Flex>
    );
};

export default SubmitResponsePage;
