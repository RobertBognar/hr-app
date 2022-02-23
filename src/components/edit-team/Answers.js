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

import { Stack, Box, Button, InputGroup, Input } from '@chakra-ui/react';
import React, { useRef, useState, useEffect } from 'react';

import questionsListService from '../../services/QuestionsListService';

const Answers = () => {
    const filePicker = useRef(null);
    const [files, setFiles] = useState();
    const [questions, setQuestions] = useState([]);
    const [inputAnswer, setAnswer] = useState([]);

    const submitAnswers = (e) => {
        e.preventDefault();

        questionsListService.submitQuestions([...inputAnswer, files[0].name]);
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
                                <InputGroup
                                    border="1px solid white"
                                    borderRadius="none"
                                    p="8px"
                                    mb="8px"
                                >
                                    <Button
                                        color="black"
                                        onClick={() => {
                                            filePicker.current.click();
                                        }}
                                    >
                                        {' '}
                                        Choose Photo
                                    </Button>

                                    <Input
                                        type="file"
                                        ref={filePicker}
                                        display="none"
                                        onChange={(e) =>
                                            setFiles(e.target.files)
                                        }
                                    />
                                </InputGroup>
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
