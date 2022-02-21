import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
    Box,
    Text,
    Input,
    Textarea,
    Button,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react';

import { useGetQuestionsContext } from '../../context/GetQuestionsContext';
import GetCompanyQuestionsService from '../../services/GetCompanyQuestionsService';
import { FaCloudUploadAlt } from 'react-icons/fa';
const SubmitResponse = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [arrayOfAnswers, setArrayOfAnswers] = useState([]);
    const [finishedAnswers, setFinishedAnswers] = useState(false);
    const [profileCompanyId, setProfileCompanyId] = useState();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { companyQuestions, getCompanyQ } = useGetQuestionsContext();

    const {
        register,
        handleSubmit,

        resetField,
        formState: { errors },
    } = useForm({
        defaultValues: {
            answer: '',
        },
    });

    let userData = JSON.parse(localStorage.getItem('userData'));
    let questionsPerPage = 1;
    let pagesVisited = questionsPerPage * pageNumber;
    let totalPages = companyQuestions.length;

    async function getCompanyId() {
        let companyId = await GetCompanyQuestionsService.getProfile(
            userData.id,
        );
        if (companyId) setTimeout(setProfileCompanyId(companyId), 1000);
    }
    useEffect(() => {
        if (userData && arrayOfAnswers.length == 0) {
            getCompanyId();

            getCompanyQ(profileCompanyId);
        } else {
            return;
        }
    }, []);

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
        data.profile = userData.id;
        setArrayOfAnswers([...arrayOfAnswers, data]);

        //go to next question
        Next();
    };
    const Save = () => {
        GetCompanyQuestionsService.answerServis(arrayOfAnswers);
        setFinishedAnswers(true);
        onOpen();
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
                        <Box
                            width="100%"
                            marginBottom={37}
                            position={'relative'}
                        >
                            <label>Image</label>
                            <Box
                                width="100%"
                                type="text"
                                placeholder={'Profile photo'}
                                position={'relative'}
                                outline={'none'}
                                _placeholder={{ color: 'red' }}
                                border="2px"
                                height={50}
                                color="white"
                            >
                                <label
                                    htmlFor="file-upload"
                                    fontSize={16}
                                    className="custom-file-upload"
                                >
                                    <p> Choose file</p>
                                    <i>
                                        <FaCloudUploadAlt
                                            className="fa-cloud"
                                            size={24}
                                            color="rgb(71, 131, 42)"
                                        />
                                    </i>
                                </label>
                            </Box>
                            <Input
                                id="file-upload"
                                type="file"
                                {...register('answer', {
                                    required: true,
                                })}
                            />
                        </Box>
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
                    {errors.answer && <Text>Please enter answer</Text>}
                    <Box>
                        <Flex>
                            <Button onClick={Previous}>Previous</Button>
                            <Button type="submit">Next</Button>
                        </Flex>
                    </Box>
                    {pagesVisited == totalPages && (
                        <Button onClick={Save}>Save</Button>
                    )}
                </Box>
                {finishedAnswers && (
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>
                                Thank you for filling the form
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody></ModalBody>

                            <ModalFooter>
                                <Button
                                    colorScheme="blue"
                                    mr={3}
                                    onClick={onClose}
                                >
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                )}
            </form>
        ));

    return <>{displayQuestions}</>;
};

export default SubmitResponse;
