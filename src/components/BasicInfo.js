import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
} from '@chakra-ui/react';

const BasicInfo = () => {
    const [name, setName] = useState('Michael Jones');

    const fileInput = React.createRef();

    const fileSelected = (e) => {
        console.log(e.target.files[0]);
    };

    const profileInfo = (e) => {
        e.preventDefault();
        alert(`Selected file - ${fileInput.current.files[0].name}`);
    };

    return (
        <div>
            <Heading
                margin="auto"
                w="445px"
                fontSize="28px"
                font-style="normal"
                fontWeight="bold"
                lineHeight="32px"
                letterSpacing=" 0.04em"
                fontFamily=" Comic Neue"
                color=" #000000"
                pb="47px"
                mt={{ base: 14, md: 0, sm: 0 }}
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
                            <Input
                                isRequired
                                ref={fileInput}
                                size="lg"
                                type="file"
                                style={{ color: 'transparent' }}
                                onChange={fileSelected}
                                border="2px solid"
                                borderColor="#000000"
                                borderRadius="none"
                            />
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
