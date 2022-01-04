import React, { useState } from 'react';

import { Heading, VStack } from '@chakra-ui/layout';
import { Input, Box, Button, FormControl, Flex } from '@chakra-ui/react';
import '@fontsource/comic-neue';
import { FaCloudUploadAlt } from 'react-icons/fa';

import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // submit handler

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <VStack p="40">
            <Box textAlign={'left'} className="Register">
                <Heading
                    fontSize={'28px'}
                    lineHeight={'32.2px'}
                    letterSpacing={'1.12px'}
                    marginBottom={39}
                    className="Register"
                    fontWeight={600}
                    fontFamily={'Comic Neue'}
                >
                    uTeam - Register
                </Heading>
                <FormControl>
                    <Box width={372} className="boxes">
                        <label htmlFor="name-input" fontSize={12}>
                            Name
                        </label>
                        <Input
                            variant="outline"
                            placeholder={'Name'}
                            border="2px"
                            borderColor="black"
                            borderRadius={'0'}
                            _placeholder={{ color: '#7B7B7B' }}
                        />
                    </Box>
                    <Box width={372} className="boxes">
                        <label htmlFor="email-input" fontSize={12}>
                            Email
                        </label>
                        <Input
                            variant={'outline'}
                            placeholder={'Email'}
                            border="2px"
                            borderColor="black"
                            borderRadius={'0'}
                            _placeholder={{ color: '#7B7B7B' }}
                        />
                    </Box>
                    <Box width={372} className="boxes">
                        <label htmlFor="password" fontSize={12}>
                            Password
                        </label>
                        <Input
                            type="password"
                            placeholder={'Password'}
                            border="2px"
                            borderColor="black"
                            borderRadius={'0'}
                            _placeholder={{ color: '#7B7B7B' }}
                        />
                    </Box>
                    <Box width={372} marginBottom={37} position={'relative'}>
                        <label>Profile photo</label>
                        <Box
                            width={372}
                            type="text"
                            placeholder={'Profile photo'}
                            position={'relative'}
                            color={'black'}
                            outline={'none'}
                            _placeholder={{ color: 'red' }}
                            border="2px"
                            borderColor="black"
                            height={50}
                        >
                            <label
                                htmlFor="file-upload"
                                fontSize={12}
                                className="custom-file-upload"
                            >
                                <p> Choose file</p>
                                <i>
                                    <FaCloudUploadAlt
                                        className="fa-cloud"
                                        size={24}
                                        color="blue"
                                    />
                                </i>
                            </label>
                        </Box>
                        <Input id="file-upload" type="file"></Input>{' '}
                    </Box>
                    <Box>
                        <Flex
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <i>Already have account ?</i>
                            <Button
                                onClick={handleSubmit}
                                background={'white'}
                                border={'2px'}
                                borderColor={'black'}
                            >
                                Register
                            </Button>
                        </Flex>
                    </Box>
                </FormControl>
            </Box>
        </VStack>
    );
};

export default Register;
