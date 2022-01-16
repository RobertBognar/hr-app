import { Stack, Box, Button } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import QuestionsTypeText from './QuestionsTypeText';
import QuestionsTypeImage from './QuestionsTypeImage';

const Answers = () => {
    const fileChooser = useRef(null);

    const [image, setImage] = useState(null);
    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const [q1Answer, setQ1Answer] = useState(
        'Yes, I have a dog and his name is Milutin',
    );
    const [q2Answer, setQ2Answer] = useState('Novi Sad');

    const submitAnswers = (e) => {
        e.preventDefault();
        alert(
            `Q1 answer- ${q1Answer}, Q2 answer- ${q2Answer}, Selected photo - ${fileChooser.current.files[0].name}`,
        );
    };

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
                <QuestionsTypeText
                    q1Answer={q1Answer}
                    setQ1Answer={setQ1Answer}
                    q2Answer={q2Answer}
                    setQ2Answer={setQ2Answer}
                />
                <QuestionsTypeImage
                    image={image}
                    onImageChange={onImageChange}
                    fileChooser={fileChooser}
                />

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
