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

const AddNewQuestion = ({ setAddNewQuestion, data, setData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (item) => {
        const singleData = { id: Math.random(), ...item };
        setData([...data, singleData]);
        setAddNewQuestion(false);
    };

    return (
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
                    {...register('question', {
                        required: true,
                        validate: (value) => {
                            return !!value.trim();
                        },
                    })}
                />
            </FormControl>
            {errors.question && (
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
                    {...register('questionType')}
                >
                    <option value="Text">Text</option>
                    <option value="Long text">Long text</option>
                    <option value="Image">Image</option>
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
                    onClick={() => setAddNewQuestion(false)}
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
    );
};

export default AddNewQuestion;
