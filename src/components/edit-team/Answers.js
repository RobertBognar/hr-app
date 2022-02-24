// import { Stack, Box, Button } from '@chakra-ui/react';
// import React, { useRef, useState } from 'react';
// import QuestionsTypeText from './QuestionsTypeText';
// import QuestionsTypeImage from './QuestionsTypeImage';

// const Answers = () => {
//     const fileChooser = useRef(null);

//     const [image, setImage] = useState(null);
//     const onImageChange = (e) => {
//         if (e.target.files && e.target.files[0]) {
//             setImage(URL.createObjectURL(e.target.files[0]));
//         }
//     };

//     const [q1Answer, setQ1Answer] = useState(
//         'Yes, I have a dog and his name is Milutin',
//     );
//     const [q2Answer, setQ2Answer] = useState('Novi Sad');

//     const submitAnswers = (e) => {
//         e.preventDefault();
//         alert(
//             `Q1 answer- ${q1Answer}, Q2 answer- ${q2Answer}, Selected photo - ${fileChooser.current.files[0].name}`,
//         );
//     };

//     return (
//         <Stack
//             border="1px solid white"
//             w={['73vw', '445px', '445px']}
//             color="white"
//         >
//             <Box
//                 borderBottom="1px solid white"
//                 pt={5}
//                 pb="27px"
//                 pl="27px"
//                 fontWeight="bold"
//                 fontSize="12px"
//                 lineHeight="14px"
//                 letterSpacing="0.04em"
//                 color="white"
//             >
//                 Answers
//             </Box>
//             <form onSubmit={submitAnswers}>
//                 <QuestionsTypeText
//                     q1Answer={q1Answer}
//                     setQ1Answer={setQ1Answer}
//                     q2Answer={q2Answer}
//                     setQ2Answer={setQ2Answer}
//                 />
//                 <QuestionsTypeImage
//                     image={image}
//                     onImageChange={onImageChange}
//                     fileChooser={fileChooser}
//                 />

//                 <Button
//                     type="submit"
//                     width="80px"
//                     height="30px"
//                     background="white"
//                     mt="62px"
//                     mb="30px"
//                     float="right"
//                     color="black"
//                     mr="30px"
//                 >
//                     Save
//                 </Button>
//             </form>
//         </Stack>
//     );
// };

// export default Answers;

import {
    Stack,
    Box,
    Button,
    InputGroup,
    Input,
    FormLabel,
    Image,
    Flex,
    FormControl,
} from '@chakra-ui/react';
import React, { useRef, useState, useEffect } from 'react';

import questionsListService from '../../services/QuestionsListService';

const Answers = () => {
    const filePicker = useRef(null);
    const [files, setFiles] = useState();
    const [questions, setQuestions] = useState([]);
    const [inputAnswer, setAnswer] = useState([]);

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFiles(URL.createObjectURL(e.target.files[0]));
        }
    };

    const submitAnswers = (e) => {
        e.preventDefault();

        questionsListService.submitQuestions([...inputAnswer, files]);
    };

    const listQuestions = async () => {
        try {
            const getAllQuestions = await questionsListService.questionsData();
            setQuestions(getAllQuestions);
        } catch (error) {
            return;
        }
    };
    useEffect(() => {
        listQuestions();
    }, []);

    return (
        <Stack
            border="1px solid white"
            w={['73vw', '445px', '445px']}
            color="white"
        >
            <Box
                borderBottom="1px solid white"
                pt={5}
                pb="27px"
                pl="27px"
                fontWeight="bold"
                fontSize="12px"
                lineHeight="14px"
                letterSpacing="0.04em"
                color="white"
            >
                Answers
            </Box>
            <form onSubmit={submitAnswers}>
                {questions.map((questions) => (
                    <Box
                        textAlign="left"
                        key={questions.id}
                        p="10px 20px"
                        color="white"
                        borderBottom="1px solid white"
                        fontSize="16px"
                    >
                        <Box
                            fontStyle="normal"
                            fontSize={{ base: '16px', sm: '20px' }}
                            lineHeight="23px"
                            color="white"
                            mt="22px"
                            mb="23px"
                            mr={{ base: '10px', sm: 0 }}
                            fontWeight={'bold'}
                        >
                            Question - {questions.attributes.text}
                        </Box>
                        <Box>
                            {questions.attributes.type === 'image' ? (
                                <Flex>
                                    <Image
                                        src={files}
                                        alt={files}
                                        mr="13px"
                                        mb="36px"
                                        border="1px solid white"
                                        minW={{ base: '110px', sm: '172px' }}
                                        minH={{ base: '110px', sm: '124px' }}
                                        maxW={{ base: '110px', sm: '172px' }}
                                        maxH={{ base: '110px', sm: '124px' }}
                                    />

                                    <FormControl>
                                        <FormLabel
                                            htmlFor="profilePhoto"
                                            fontSize="12px"
                                            letterSpacing="0.04em"
                                            fontWeight="normal"
                                            lineHeight="14px"
                                        >
                                            Change photo
                                        </FormLabel>
                                        <InputGroup
                                            alignItems="center"
                                            border="2px solid"
                                            borderRadius="none"
                                            w={{ base: '93px', sm: '202px' }}
                                            h={{ base: '30px', sm: '50px' }}
                                        >
                                            <FormLabel
                                                htmlFor="file-upload"
                                                fontStyle="normal"
                                                fontWeight="normal"
                                                fontSize={{
                                                    base: '10px',
                                                    sm: '16px',
                                                }}
                                                lineHeight="10px"
                                                mt={3.5}
                                                ml={{ base: '1', sm: '16px' }}
                                                mb="18px"
                                                whiteSpace={{
                                                    base: 'wrap',
                                                    sm: 'nowrap',
                                                }}
                                                mr="1px"
                                                color="#7B7B7B"
                                            >
                                                Upload f
                                            </FormLabel>
                                            <Button
                                                fontWeight=" bold"
                                                w={{
                                                    base: '64px',
                                                    sm: '122px',
                                                }}
                                                h={{ base: '22px', sm: '30px' }}
                                                lineHeight={{
                                                    base: '9px',
                                                    sm: '18px',
                                                }}
                                                color="#000000"
                                                background="#DEE0E3"
                                                border-radius=" 4px"
                                                mr={{ base: '2px', sm: '8.5' }}
                                                mt={2}
                                                mb={{ base: '2', sm: '3' }}
                                                fontSize={{
                                                    base: '12px',
                                                    sm: '16px',
                                                }}
                                                whiteSpace={{
                                                    base: 'wrap',
                                                    sm: 'nowrap',
                                                }}
                                                onClick={() => {
                                                    filePicker.current.click();
                                                }}
                                            >
                                                choose file
                                            </Button>
                                            <Input
                                                type="file"
                                                ref={filePicker}
                                                display="none"
                                                onChange={onImageChange}
                                                accept="image/*"
                                                onBlur={(e) =>
                                                    setFiles(e.target.files)
                                                }
                                            />
                                        </InputGroup>
                                    </FormControl>
                                </Flex>
                            ) : (
                                <Input
                                    type="text"
                                    p="8px"
                                    mb="8px"
                                    borderRadius="none"
                                    onBlur={(e) =>
                                        setAnswer([
                                            ...inputAnswer,
                                            e.target.value,
                                        ])
                                    }
                                    required
                                />
                            )}
                        </Box>
                    </Box>
                ))}

                <Button
                    type="submit"
                    width="80px"
                    height="30px"
                    background="white"
                    mt="62px"
                    mb="30px"
                    float="right"
                    color="black"
                    mr="30px"
                >
                    Save
                </Button>
            </form>
        </Stack>
    );
};

export default Answers;
