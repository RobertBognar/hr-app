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
import GetCompanyQuestionsService from '../../services/GetCompanyQuestionsService';
const SubmitResponse = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [arrayOfAnswers, setArrayOfAnswers] = useState([]);

    const { companyQuestions, getCompanyQ } = useGetQuestionsContext();

    const {
        register,
        handleSubmit,
        getValues,
        resetField,
        formState: { errors },
    } = useForm({
        defaultValues: {
            answer: '',
        },
    });

    let companyId;
    let userData = JSON.parse(localStorage.getItem('userData'));
    let questionsPerPage = 1;
    let pagesVisited = questionsPerPage * pageNumber;
    let totalPages = companyQuestions.length;

    useEffect(() => {
        if (userData && arrayOfAnswers.length == 0) {
            companyId = userData.username;
            getCompanyQ(companyId);
        } else {
            return;
        }
    }, [arrayOfAnswers]);

    const Previous = () => {
        //reset inputs
        resetField('answer');
        resetField('questionId');

        if (pageNumber === 1) {
            return false;
        }
        setPageNumber((prevPageNumber) => prevPageNumber - 1);
    };
    const Next = () => {
        //reset inputs
        resetField('answer');
        resetField('questionId');

        if (pageNumber >= totalPages) {
            return false;
        } else {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
    };

    const getAnswer = (data) => {
        //Collect inputs and store into array of answers

        data.id = Math.round(Math.random() * 1000);
        data.profile = userData.username;
        setArrayOfAnswers([...arrayOfAnswers, data]);

        //go to next question
        Next();
    };
    const Save = () => {
        GetCompanyQuestionsService.answerServis(arrayOfAnswers);
    };
    const displayQuestions = companyQuestions
        .slice(pagesVisited - 1, pagesVisited)
        .map((question) => (
            <form onSubmit={handleSubmit(getAnswer)}>
                <Box key={question.id} w="100%" p={4} color="black">
                    <Text>
                        {pagesVisited}/{totalPages}
                    </Text>

                    <Text w="100%">{question.text}</Text>
                    <Input
                        type="hidden"
                        {...register('questionId')}
                        value={question.id}
                    />
                    {question.type === 'image' ? (
                        <Input
                            type="file"
                            id="myfile"
                            name="myfile"
                            {...register('answer', {
                                required: true,
                            })}
                        />
                    ) : question.type === 'text' ? (
                        <Input
                            type="text"
                            {...register('answer', {
                                required: true,
                            })}
                        />
                    ) : (
                        <Textarea
                            type="long_text"
                            color="black"
                            placeholder="Question text"
                            width="50%"
                            {...register('answer', {
                                required: true,
                            })}
                        />
                    )}
                    <Box>
                        <Flex>
                            <Button onClick={Previous}>Previous</Button>
                            <Button type="submit">Next</Button>
                        </Flex>
                    </Box>
                    <Button onClick={Save}>Save</Button>
                </Box>
            </form>
        ));

    return <>{displayQuestions}</>;
};

export default SubmitResponse;
