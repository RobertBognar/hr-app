import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Flex, Box, Input, Heading, Button, Text } from '@chakra-ui/react';

import questionsListService from '../../services/QuestionsListService';

const EditQuestion = () => {
    const [question, setQuestion] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted, isSubmitting },
    } = useForm();

    const navigate = useNavigate();

    async function getQuestion() {
        const quest = await questionsListService.getQuestion(id);
        setQuestion(quest);
    }
    useEffect(() => {
        getQuestion();
    }, []);

    const onSubmit = (data) => {
        const inputValue = data.edit;
        questionsListService.editQuestion(id, inputValue);
    };

    const para = useParams();
    const id = para.id;
    useEffect(() => {
        if (isSubmitted && !errors.edit) {
            navigate('/questionslistmain');
        }
    }, [isSubmitted, isSubmitting]);

    return (
        <>
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
                <Heading marginBottom={8}>Edit Question</Heading>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        width={'700px'}
                        color={'white'}
                        {...register('edit', {
                            required: true,
                            validate: (value) => {
                                return !!value.trim();
                            },
                        })}
                        defaultValue={question}
                    />
                    <Box marginTop={8} position={'relative'}>
                        {errors.edit && (
                            <Text color="red" position={'absolute'}>
                                Edit text is required!
                            </Text>
                        )}
                        <Button
                            position={'absolute'}
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
                        >
                            Edit
                        </Button>
                    </Box>
                </form>
            </Flex>
        </>
    );
};

export default EditQuestion;
