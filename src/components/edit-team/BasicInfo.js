import React, { useState, useRef } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    InputGroup,
} from '@chakra-ui/react';

const BasicInfo = () => {
    const [name, setName] = useState('Michael Jones');

    const fileChooser = useRef(null);

    const submitProfileInfo = (e) => {
        e.preventDefault();
        alert(
            ` Name - ${name}, Selected file - ${fileChooser.current.files[0].name}`,
        );
    };

    return (
        <div>
            <Stack
                border="1px solid white"
                margin="auto"
                w={['73vw', '445px', '445px']}
            >
                <Box
                    borderBottom="1px solid white"
                    pt={5}
                    pb={3}
                    pl={7}
                    fontStyle=" normal"
                    fontWeight=" bold"
                    fontSize=" 12px"
                    lineHeight=" 14px"
                    letterSpacing=" 0.04"
                    color="white"
                >
                    Basic info
                </Box>
                <Box p={7}>
                    <form onSubmit={submitProfileInfo}>
                        <FormControl>
                            <FormLabel
                                htmlFor="name"
                                fontSize="12px"
                                letterSpacing="0.04em"
                                fontWeight="normal"
                                lineHeight="14px"
                                color="white"
                                mb={1}
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
                                borderRadius="none"
                                color="white"
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
                                mb={1}
                                color="white"
                            >
                                Profile Photo
                            </FormLabel>
                            <InputGroup
                                justifyContent="space-between"
                                alignItems="center"
                                border="2px solid white"
                                borderRadius="none"
                            >
                                <FormLabel
                                    htmlFor="file-upload"
                                    fontStyle="normal"
                                    fontWeight="normal"
                                    fontSize="16px"
                                    lineHeight="18px"
                                    color=" #7B7B7B"
                                    mt={3.5}
                                    ml={4}
                                    mb="18px"
                                >
                                    Upload file
                                </FormLabel>
                                <Button
                                    fontWeight=" bold"
                                    fontSize={{
                                        base: '14px',
                                        sm: '16px',
                                        md: '16px',
                                        lg: '16px',
                                    }}
                                    lineHeight="18px"
                                    color="#000000"
                                    background="#DEE0E3"
                                    width="122px"
                                    height="30px"
                                    border-radius=" 4px"
                                    mr={8.5}
                                    mt={2}
                                    mb={3}
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
                        <Box>
                            <Button
                                type="submit"
                                width="80px"
                                height="30px"
                                marginTop="40px"
                                background="white"
                                mb="46px"
                                color="black"
                                float={{ base: 'right' }}
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
