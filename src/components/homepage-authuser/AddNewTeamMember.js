import React, { useState } from 'react';
import { Heading, VStack } from '@chakra-ui/layout';
import { useNavigate } from 'react-router-dom';

import { Input, Box, Button, FormControl, Flex, Link } from '@chakra-ui/react';
import '@fontsource/comic-neue';
import { FaCloudUploadAlt } from 'react-icons/fa';
import profile from '../../services/ProfileService';

const AddNewTeamMember = () => {
    const navigate = useNavigate();
    const [newMember, setNewMember] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [chooseNewFile, setNewChooseNewFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('files', chooseNewFile);
        profile.addNewTeamMember(newMember, newEmail, newPassword, formData);
        setNewMember('');
        setNewEmail('');
        setNewPassword('');
    };

    return (
        <VStack
            py={['20', '40', '40']}
            className="bgBlack"
            minH="calc(100vh - 42px)"
        >
            <Box
                textAlign={'left'}
                className="Register"
                width={['100%', '372px', '372px']}
                maxWidth="calc(100% - 125px)"
            >
                <Heading
                    fontSize="28px"
                    lineHeight={'32.2px'}
                    letterSpacing={'1.12px'}
                    marginBottom={39}
                    className="Register"
                    fontWeight={600}
                    fontFamily={'Comic Neue'}
                    color="white"
                    textAlign={['center', 'left', 'left']}
                    width="100%"
                >
                    Add New Team Member
                </Heading>
                <FormControl color="white">
                    <Box width="100%" className="boxes">
                        <label htmlFor="name-input" fontSize={12}>
                            New Member Name
                        </label>
                        <Input
                            id="nameInput"
                            variant="outline"
                            placeholder={'Name'}
                            border="2px"
                            borderRadius={'0'}
                            _placeholder={{ color: '#7B7B7B' }}
                            onChange={(e) => setNewMember(e.target.value)}
                        />
                    </Box>
                    <Box width="100%" className="boxes">
                        <label htmlFor="email-input" fontSize={12}>
                            New Member Email
                        </label>
                        <Input
                            id="mainInput"
                            variant={'outline'}
                            placeholder={'Email'}
                            border="2px"
                            borderRadius={'0'}
                            _placeholder={{ color: '#7B7B7B' }}
                            onChange={(e) => setNewEmail(e.target.value)}
                        />
                    </Box>
                    <Box width="100%" className="boxes">
                        <label htmlFor="password" fontSize={12}>
                            New Member Password
                        </label>
                        <Input
                            id="passwordInput"
                            type="password"
                            placeholder={'Password'}
                            border="2px"
                            borderRadius={'0'}
                            _placeholder={{ color: '#7B7B7B' }}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </Box>
                    <Box width="100%" marginBottom={37} position={'relative'}>
                        <label>New Member Profile Photo</label>
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
                            onChange={(e) =>
                                setNewChooseNewFile(e.target.files[0])
                            }
                        />
                    </Box>
                    <Box>
                        <Flex
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            width={['100%', '372px', '372px']}
                        >
                            <Link onClick={() => navigate('/team')}>
                                <i>Back To Team Page</i>
                            </Link>
                            <Button
                                onClick={handleSubmit}
                                background={'white'}
                                border={'2px'}
                                borderColor={'black'}
                                color="black"
                            >
                                Save
                            </Button>
                        </Flex>
                    </Box>
                </FormControl>
            </Box>
        </VStack>
    );
};

export default AddNewTeamMember;
