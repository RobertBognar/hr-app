import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Box,
} from '@chakra-ui/react';

const Security = () => {
    const [emailAddress, setEmailAddress] = useState('petar@quantox.com');
    const [currentPassword, setCurrentPassword] = useState('*******');
    const [newPassword, setNewPassword] = useState('*******');

    const securityDataSave = (e) => {
        e.preventDefault();
        alert(
            `Email: ${emailAddress}, Current password: ${currentPassword}, New password ${newPassword}`,
        );
    };

    return (
        <div>
            <Stack
                border="1px solid white"
                margin="auto"
                w={['73%', '445px', '445px']}
                mt={{ base: 14, sm: 14, md: 14, lg: 110 }}
                color="white"
            >
                <Box borderBottom="1px solid white" pt={5} pb={3} pl={7}>
                    Security
                </Box>
                <Box pl={7} pr={7} pb={5}>
                    <form onSubmit={securityDataSave}>
                        <FormControl>
                            <FormLabel
                                htmlFor="email"
                                fontSize="12px"
                                letterSpacing="0.04em"
                                fontWeight="normal"
                                lineHeight="14px"
                                pt="43px"
                                mb={0}
                            >
                                Email
                            </FormLabel>
                            <Input
                                variant="unstyled"
                                isRequired
                                type="email"
                                value={emailAddress}
                                onChange={(e) =>
                                    setEmailAddress(e.target.value)
                                }
                                fontStyle="normal"
                                fontWeight="normal"
                                fontSize="20px"
                                lineHeight="23px"
                                readOnly
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel
                                htmlFor="password"
                                fontSize="12px"
                                letterSpacing="0.04em"
                                fontWeight="normal"
                                lineHeight="14px"
                                mt="21px"
                                mb={1}
                            >
                                Current Password
                            </FormLabel>
                            <Input
                                isRequired
                                type="password"
                                value={currentPassword}
                                onChange={(e) =>
                                    setCurrentPassword(e.target.value)
                                }
                                border="2px solid"
                                //    borderColor="#000000"
                                borderRadius="none"
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel
                                htmlFor="password"
                                fontSize="12px"
                                letterSpacing="0.04em"
                                fontWeight="normal"
                                lineHeight="14px"
                                mt="17px"
                                mb={1}
                            >
                                New Password
                            </FormLabel>
                            <Input
                                isRequired
                                type="password"
                                id="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                border="2px solid"
                                borderRadius="none"
                            />
                        </FormControl>

                        <Box alignSelf="self-end">
                            <Button
                                type="submit"
                                width="80px"
                                height="30px"
                                mt="26px"
                                mb={2}
                                background="white"
                                float="right"
                                color="black"
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

export default Security;
