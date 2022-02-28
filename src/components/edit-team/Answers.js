import React, { useState, useEffect } from 'react';
import { Text, Button, Input, Textarea, Box, Stack } from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import questionsListService from '../../services/QuestionsListService';

import './AddAnswers.css';

const Answers = () => {
    const [data, setData] = useState([]);
    const [answersData, setAnswersData] = useState([]);

    async function questionArrayFunc() {
        const arr = await questionsListService.questionsData();
        setData(arr);
    }
    useEffect(() => {
        questionArrayFunc();
    }, []);

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
        if (data.length) {
            if (answer.answer === '') {
                questionsListService.addAnswersData([
                    ...answersData,
                    // answer.answerFile[0].name,
                ]);
            } else {
                questionsListService.addAnswersData([
                    ...answersData,
                    answer.answer,
                    answer.answerFile[0].name,
                ]);
            }
        }
        setValue('answer', '');
    };

    return (
        <Stack
            border="1px solid white"
            w={['73vw', '445px', '445px']}
            color="white"
        >
            <Box
                borderBottom="1px solid white"
                pt={5}
                pb="27px"
                pl="27px"
                fontWeight="bold"
                fontSize="12px"
                lineHeight="14px"
                letterSpacing="0.04em"
                color="white"
            >
                Answers
            </Box>{' '}
            <form onSubmit={handleSubmit(onSubmit)}>
                {data.map((item, id) => {
                    return (
                        <div key={id}>
                            <Box
                                // textAlign="left"
                                key={item.id}
                                color="white"
                                fontSize="16px"
                                borderBottom="1px solid white"
                                p={7}
                                fontWeight="bold"
                            >
                                <Box
                                    mb="10px"
                                    fontStyle="normal"
                                    fontSize={{ base: '16px', sm: '20px' }}
                                    lineHeight="23px"
                                    color="white"
                                >
                                    Question - {item.attributes.text}
                                </Box>
                                {item.attributes.type === 'text' ? (
                                    <>
                                        <Input
                                            id="questionAnswer"
                                            type="text"
                                            color="white"
                                            className={
                                                errors.answer ? 'redBorder' : ''
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
                                                required: 'can’t be empty',
                                            })}
                                        />
                                        {errors.answerFile && (
                                            <Text
                                                color="red"
                                                textAlign="center"
                                            >
                                                {errors.answerFile.message}
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
                                                errors.answer ? 'redBorder' : ''
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
                            </Box>
                        </div>
                    );
                })}

                <Button
                    type="submit"
                    width="80px"
                    height="30px"
                    background="white"
                    mt="62px"
                    mb="30px"
                    float="right"
                    color="black"
                    mr="30px"
                >
                    Save
                </Button>
            </form>
        </Stack>
    );
};

export default Answers;
