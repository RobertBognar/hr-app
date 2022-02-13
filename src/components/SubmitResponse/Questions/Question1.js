import React from 'react';
import { useForm } from 'react-hook-form';

import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Text,
    Input,
    Button,
    Flex,
} from '@chakra-ui/react';
const Question1 = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    return (
        <Flex direction="column">
            <form onSubmit={handleSubmit()}>
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
                                <Input
                                    color="white"
                                    placeholder="Question text"
                                    width="50%"
                                    {...register('question1', {
                                        required: true,
                                    })}
                                />
                            </FormControl>
                            {errors.question1 && (
                                <FormErrorMessage>
                                    Question text is required!
                                </FormErrorMessage>
                            )}
                        </Box>

                        <Button colorScheme="gray">Next</Button>
                    </Flex>
                </Box>{' '}
            </form>
        </Flex>
    );
};
export default Question1;
