import React from 'react';
import { useForm } from 'react-hook-form';
import addQuestionService from '../services/AddQuestionService';
import {
    Box,
    FormControl,
    FormLabel,
    Text,
    Input,
    Button,
    Flex,
    Select,
    Textarea,
    InputGroup,
} from '@chakra-ui/react';
const AddNew = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();
    let option;
    const saveQuestion = () => {
        const question = getValues('question');
        option = getValues('questionType');
        localStorage.setItem('optionType', option);
        addQuestionService.addQuestion(question, option);
    };
    let getOption = localStorage.getItem('optionType');
    console.log(getOption);
    return (
        <Flex direction="column">
            <form onSubmit={handleSubmit(saveQuestion)}>
                <Box
                    className="bgBlack"
                    width="100%"
                    direction={{ base: 'column', md: 'row' }}
                    justify={{ base: 'center' }}
                    alignItems="center"
                    ml="0 "
                    gap={10}
                    py={{ base: 14, sm: 14, md: 14, lg: 0 }}
                >
                    <Flex direction="column" align="center">
                        <Box width="60%" lineHeight="2em">
                            <Text color="white">Add new Question</Text>

                            <FormControl>
                                <FormLabel color="whiteAlpha.700">
                                    Question text
                                </FormLabel>
                                {option === 'Image' ? (
                                    <InputGroup>
                                        <Input
                                            type={'file'}
                                            color="white"
                                            placeholder="Question text"
                                            width="50%"
                                            {...register('question', {
                                                required: true,
                                            })}
                                        />
                                    </InputGroup>
                                ) : option === 'text' ? (
                                    <Input
                                        type="text"
                                        color="white"
                                        placeholder="Question text"
                                        width="50%"
                                        {...register('question', {
                                            required: true,
                                        })}
                                    />
                                ) : (
                                    <Textarea
                                        type="long_text"
                                        color="white"
                                        placeholder="Question text"
                                        width="50%"
                                        {...register('question', {
                                            required: true,
                                        })}
                                    />
                                )}
                            </FormControl>
                            {errors.question && (
                                <Text color="red">
                                    Question text is required!
                                </Text>
                            )}
                            <Text color="whiteAlpha.700">Question type</Text>
                            <Select
                                color="white"
                                width="30%"
                                {...register('questionType')}
                            >
                                <option value="text">Text</option>
                                <option value="long_text">Long Text</option>
                                <option value="image">Image</option>
                            </Select>
                        </Box>

                        <Button colorScheme="gray" onClick={saveQuestion}>
                            Save
                        </Button>
                    </Flex>
                </Box>{' '}
            </form>
        </Flex>
    );
};
export default AddNew;
