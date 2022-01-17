import { Stack, Box, Heading, Input } from '@chakra-ui/react';

const QuestionsTypeText = ({
    q1Answer,
    setQ1Answer,
    q2Answer,
    setQ2Answer,
}) => {
    return (
        <Stack>
            <Box borderBottom="1px solid white" p={7}>
                <Heading
                    fontStyle="normal"
                    fontSize={{ base: '16px', sm: '20px' }}
                    lineHeight="23px"
                    color="white"
                    mb="21px"
                >
                    Question 1 - Do you have a pet?
                </Heading>
                <Input
                    type="text"
                    value={q1Answer}
                    onChange={(e) => setQ1Answer(e.target.value)}
                    border=" 2px solid white"
                    borderRadius="none"
                ></Input>
            </Box>

            <Box borderBottom="1px solid white" p={7}>
                <Heading
                    fontStyle="normal"
                    fontSize={{ base: '16px', sm: '20px' }}
                    lineHeight="23px"
                    color="white"
                    mb="21px"
                >
                    Question 2 - Which city do you live in?
                </Heading>
                <Input
                    type="text"
                    value={q2Answer}
                    onChange={(e) => setQ2Answer(e.target.value)}
                    border=" 2px solid white"
                    borderRadius="none"
                ></Input>
            </Box>
        </Stack>
    );
};

export default QuestionsTypeText;
