import React from 'react';
import {
    Heading,
    Text,
    Flex,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import questionsListService from '../../services/QuestionsListService';
import { useNavigate } from 'react-router-dom';

const AddNewQuestion = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (item) => {
        const attributes = {
            ...item,
        };

        async function addQuestionAndGoBack() {
            await questionsListService.addQuestion(attributes);
            navigate('/questionslistmain');
        }
        addQuestionAndGoBack();
    };

    return (
        <Flex
            px={['55px', '55px', '155px']}
            direction="column"
            className="bgBlack"
            minH="calc(100vh - 42px)"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading py="50px" color="white">
                    Add new Question
                </Heading>
                <FormControl width="100%">
                    <FormLabel htmlFor="question-text" color="white">
                        Question text
                    </FormLabel>
                    <Input
                        id="question-text"
                        type="text"
                        placeholder="Question text"
                        color="white"
                        {...register('text', {
                            required: true,
                            validate: (value) => {
                                return !!value.trim();
                            },
                        })}
                    />
                </FormControl>
                {errors.text && (
                    <Text color="red">Question text is required!</Text>
                )}
                <FormControl mt="50px" w={['100%', '300px', '300px']}>
                    <FormLabel htmlFor="question-type" color="white">
                        Question type
                    </FormLabel>
                    <Select
                        id="question-type"
                        color="white"
                        cursor="pointer"
                        {...register('type')}
                    >
                        <option value="text">Text</option>
                        <option value="long_text">Long text</option>
                        <option value="image">Image</option>
                    </Select>
                </FormControl>
                <Flex mt="50px" justifyContent="space-between">
                    <Button
                        bg="black"
                        color="white"
                        border="1px"
                        borderColor="white"
                        _hover={{
                            background: 'white',
                            color: 'black',
                        }}
                        onClick={() => navigate('/questionslistmain')}
                    >
                        Back
                    </Button>
                    <Button
                        bg="black"
                        color="white"
                        border="1px"
                        borderColor="white"
                        _hover={{
                            background: 'white',
                            color: 'black',
                        }}
                        type="submit"
                    >
                        Save
                    </Button>
                </Flex>
            </form>
        </Flex>
    );
};

export default AddNewQuestion;
