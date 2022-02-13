import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
    Box,
    FormControl,
    FormLabel,
    Text,
    Input,
    Textarea,
    Button,
    Flex,
    Select,
    Container,
} from '@chakra-ui/react';

import { useGetQuestionsContext } from '../../context/GetQuestionsContext';

const SubmitResponse = () => {
    const [pageNumber, setPageNumber] = useState(1);

    const { companyQuestions, getCompanyQ } = useGetQuestionsContext();
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    let companyId = '';
    let userData = JSON.parse(localStorage.getItem('userData'));
    let questionsPerPage = 1;
    let pagesVisited = questionsPerPage * pageNumber;
    let totalPages = companyQuestions.length;

    useEffect(() => {
        if (userData) {
            companyId = userData.username;
            getCompanyQ(companyId);
        } else {
            return;
        }
    }, []);
    const Previous = () => {
        if (pageNumber === 1) {
            return false;
        }
        setPageNumber((prevPageNumber) => prevPageNumber - 1);

        console.log(questionsPerPage);
    };
    const Next = () => {
        if (pageNumber >= totalPages) {
            return false;
        }
        setPageNumber((prevPageNumber) => prevPageNumber + 1);

        console.log(questionsPerPage);
    };
    const displayQuestions = companyQuestions
        .slice(pagesVisited - 1, pagesVisited)
        .map((question, id) => (
            <Box key={id} w="100%" p={4} color="black">
                <Text>
                    {pagesVisited}/{totalPages}
                </Text>

                <Text w="100%">{question.text}</Text>

                {question.type === 'image' ? (
                    <Input type="file" id="myfile" name="myfile" />
                ) : question.type === 'text' ? (
                    <Input type="text" />
                ) : (
                    <Textarea
                        type="long_text"
                        color="white"
                        placeholder="Question text"
                        width="50%"
                    />
                )}
                <Box>
                    <Flex>
                        <Button onClick={Previous}>Previous</Button>

                        <Button onClick={Next}>Next</Button>
                    </Flex>
                </Box>
                <Box>Save</Box>
            </Box>
        ));

    return <>{displayQuestions}</>;
};

export default SubmitResponse;
