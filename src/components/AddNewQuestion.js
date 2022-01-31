import React, { useState } from 'react';
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
} from '@chakra-ui/react';
const AddNew = () => {
    const [question, setQuestion] = useState('');
    const [option, setOption] = useState('');

    const saveQuestion = () => {
        addQuestionService.addQuestion(question, option);
        console.log(question, option);
        setQuestion('');
    };

    return (
        <Flex direction="column">
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
                                value={question}
                                placeholder="Question text"
                                width="50%"
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                        </FormControl>
                        <Text color="whiteAlpha.700">Question type</Text>
                        <Select
                            value={option}
                            color="white"
                            width="30%"
                            onChange={(e) => setOption(e.target.value)}
                        >
                            <option value="Text">Text</option>
                            <option value="Long Text">Long Text</option>
                            <option value="Image">Image</option>
                        </Select>
                    </Box>

                    <Button colorScheme="gray" onClick={saveQuestion}>
                        Save
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
};
export default AddNew;
