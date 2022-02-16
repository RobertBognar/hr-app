import React from 'react';
import {
    Box,
    Flex,
    VStack,
    Text,
    Input,
    Textarea,
    HStack,
    Button,
} from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

const QuestionCards = ({
    card,
    counter,
    register,
    handleSubmit,
    onSubmit,
    errors,
    questions,
    questionCard,
    handlePreviousButton,
    openModal,
}) => {
    return (
        <Box>
            {counter === questionCard && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex
                        border={'1px solid white'}
                        h={300}
                        ml={200}
                        mt={100}
                        w={600}
                    >
                        <VStack ml={34} color="white" mt={34}>
                            <ChevronUpIcon w={10} h={10} />
                            <Text>
                                {counter + 1}/{questions.length}
                            </Text>
                            <ChevronDownIcon w={10} h={10} />
                        </VStack>
                        <VStack mt={67} ml={34}>
                            <Text
                                fontWeight="600"
                                fontSize="35px"
                                color="white"
                            >
                                {card.attributes.text}
                            </Text>
                            {card.attributes.type === 'text' ? (
                                <>
                                    <Input
                                        id="answer"
                                        type="text"
                                        color="white"
                                        {...register('answerText', {
                                            required: 'Please enter you answer',
                                        })}
                                    />
                                    {errors.answerText && (
                                        <Text color="red">
                                            {errors.answerText.message}
                                        </Text>
                                    )}
                                </>
                            ) : card.attributes.type === 'image' ? (
                                <>
                                    <Input
                                        id="answer"
                                        type="file"
                                        color="white"
                                        {...register('answerFile', {
                                            required: 'Please enter you answer',
                                        })}
                                    />

                                    {errors.answerFile && (
                                        <Text color="red">
                                            {errors.answerFile.message}
                                        </Text>
                                    )}
                                </>
                            ) : (
                                <>
                                    <Textarea
                                        id="answer"
                                        size="sm"
                                        color="white"
                                        {...register('answerText', {
                                            required: 'Please enter you answer',
                                        })}
                                    />

                                    {errors.answerText && (
                                        <Text color="red">
                                            {errors.answerText.message}
                                        </Text>
                                    )}
                                </>
                            )}
                        </VStack>
                    </Flex>

                    <HStack mt={-55} ml={270} gap={283}>
                        {counter !== 0 && (
                            <Button
                                background="black"
                                color="white"
                                border="1px solid white"
                                _hover={{
                                    background: 'white',
                                    color: 'black',
                                }}
                                onClick={() => handlePreviousButton()}
                            >
                                Previous
                            </Button>
                        )}
                        {counter === questions.length - 1 ? (
                            <Button
                                type="submit"
                                background="black"
                                color="white"
                                border="1px solid white"
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
                                ml={382}
                                type="submit"
                                background="black"
                                color="white"
                                border="1px solid white"
                                _hover={{
                                    background: 'white',
                                    color: 'black',
                                }}
                            >
                                Next
                            </Button>
                        )}
                    </HStack>
                </form>
            )}
        </Box>
    );
};

export default QuestionCards;
