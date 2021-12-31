import React, { useState, useRef } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    InputGroup,
} from '@chakra-ui/react';

const BasicInfo = () => {
    const [name, setName] = useState('Michael Jones');

    const fileChooser = useRef(null);

    const profileInfo = (e) => {
        e.preventDefault();
        alert(
            ` Name - ${name}, Selected file - ${fileChooser.current.files[0].name}`,
        );
    };

    return (
        <div>
            <Heading
                margin="auto"
                w="445px"
                fontSize="28px"
                fontStyle="normal"
                fontWeight="bold"
                lineHeight="32px"
                letterSpacing=" 0.04em"
                fontFamily=" Comic Neue"
                color="#000000"
                pb="47px"
                mt={{ base: 14, sm: 14, md: 14, lg: 0 }}
            >
                My Profile
            </Heading>
            <Stack border="1px solid #000000" margin="auto" w="445px">
                <Box borderBottom="1px solid #000000" pt={5} pb={3} pl={7}>
                    Basic info
                </Box>
                <Box p={7}>
                    <form onSubmit={profileInfo}>
                        <FormControl>
                            <FormLabel
                                htmlFor="name"
                                fontSize="12px"
                                letterSpacing="0.04em"
                                fontWeight="normal"
                                lineHeight="14px"
                                color="#000000"
                            >
                                Name
                            </FormLabel>
                            <Input
                                isRequired
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fontStyle="normal"
                                fontWeight="normal"
                                fontSize="16px"
                                lineHeight="18px"
                                border="2px solid"
                                borderColor="#000000"
                                borderRadius="none"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel
                                htmlFor="profilePhoto"
                                fontSize="12px"
                                letterSpacing="0.04em"
                                fontWeight="normal"
                                lineHeight="14px"
                                mt={6}
                            >
                                Profile Photo
                            </FormLabel>
                            <InputGroup
                                justifyContent="space-between"
                                alignItems="center"
                                border="2px solid"
                                borderColor="#000000"
                                borderRadius="none"
                            >
                                <FormLabel
                                    htmlFor="file-upload"
                                    fontStyle="normal"
                                    fontWeight="normal"
                                    fontSize="16px"
                                    lineHeight="18px"
                                    color=" #7B7B7B"
                                    mt={2}
                                    ml={4}
                                    mb={4}
                                >
                                    Upload File
                                </FormLabel>
                                <Button
                                    fontWeight=" bold"
                                    fontSize="16px"
                                    lineHeight="18px"
                                    color="#000000"
                                    background="#DEE0E3"
                                    width="122px"
                                    height="30px"
                                    border=" 2px solid #000000"
                                    border-radius=" 4px"
                                    mr={8.5}
                                    mb={1}
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
                                />
                            </InputGroup>
                        </FormControl>
                        <Box alignSelf="self-end">
                            <Button
                                type="submit"
                                width="80px"
                                height="30px"
                                border="2px solid"
                                borderColor="#000000"
                                marginTop="40px"
                                background="white"
                                mb={2}
                                float="right"
                            >
                                Save
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Stack>
        </div>
    );
};

export default BasicInfo;
