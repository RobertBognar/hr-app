import React, { useState } from 'react';
import { Heading, VStack } from '@chakra-ui/layout';
import { useNavigate } from 'react-router-dom';

import { Input, Box, Button, FormControl } from '@chakra-ui/react';
import '@fontsource/comic-neue';
import { FaCloudUploadAlt } from 'react-icons/fa';
import profile from '../../services/ProfileService';

const AddNewTeamMember = () => {
    const navigate = useNavigate();
    const [newMember, setNewMember] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [chooseFile, setChooseFile] = useState(null);

    async function submitProfileInfo(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('files', chooseFile);
        await profile.addNewTeamMember(
            newMember,
            newEmail,
            newPassword,
            formData,
        );
        navigate('/team');
    }

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
                    Add new team member
                </Heading>
                <form onSubmit={submitProfileInfo}>
                    <FormControl color="white">
                        <Box width="100%" className="boxes">
                            <label htmlFor="name-input" fontSize={12}>
                                Enter your name
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
                                Enter your email
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
                                Enter your password
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
                        <Box
                            width="100%"
                            marginBottom={37}
                            position={'relative'}
                        >
                            <label>Choose your profile photo</label>
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
                                    setChooseFile(e.target.files[0])
                                }
                            />
                        </Box>

                        <Button
                            type="submit"
                            background={'white'}
                            border={'2px'}
                            borderColor={'black'}
                            color="black"
                            float={'right'}
                        >
                            Save
                        </Button>
                    </FormControl>
                </form>
            </Box>
        </VStack>
    );
};

export default AddNewTeamMember;
