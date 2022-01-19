import {
    Box,
    Heading,
    Input,
    Image,
    FormControl,
    FormLabel,
    InputGroup,
    Button,
    Flex,
} from '@chakra-ui/react';

const QuestionsTypeImage = ({ image, onImageChange, fileChooser }) => {
    return (
        <Box borderBottom="1px solid white">
            <Heading
                fontStyle="normal"
                fontSize={{ base: '16px', sm: '20px' }}
                lineHeight="23px"
                color="white"
                ml="28px"
                mt="22px"
                mb="23px"
                mr={{ base: '10px', sm: 0 }}
            >
                Question 3 - Take a photo of your Christmas...
            </Heading>

            <Flex>
                <Image
                    src={image}
                    alt={image}
                    ml="28px"
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
                            whiteSpace={{ base: 'wrap', sm: 'nowrap' }}
                            mr="1px"
                            color="#7B7B7B"
                        >
                            Upload f
                        </FormLabel>
                        <Button
                            fontWeight=" bold"
                            w={{ base: '64px', sm: '122px' }}
                            h={{ base: '22px', sm: '30px' }}
                            lineHeight={{ base: '9px', sm: '18px' }}
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
                            whiteSpace={{ base: 'wrap', sm: 'nowrap' }}
                            onClick={() => {
                                fileChooser.current.click();
                            }}
                        >
                            choose file
                        </Button>
                        <Input
                            type="file"
                            ref={fileChooser}
                            display="none"
                            onChange={onImageChange}
                            accept="image/*"
                        />
                    </InputGroup>
                </FormControl>
            </Flex>
        </Box>
    );
};

export default QuestionsTypeImage;
