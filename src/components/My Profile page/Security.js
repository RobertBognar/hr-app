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
    const [emailAdress, setEmailAddress] = useState('petar@quantox.com');
    const [currentPassword, setCurrentPassword] = useState('*******');
    const [newPassword, setNewPassword] = useState('*******');

    const securityDataSave = (e) => {
        e.preventDefault();
        alert(
            `Email: ${emailAdress}, Current password: ${currentPassword}, New password ${currentPassword}`,
        );
    };

    return (
        <div>
            <Stack
                border="1px solid #000000"
                margin="auto"
                w="445px"
                mt={{ base: 14, sm: 14, md: 14, lg: 135 }}
            >
                <Box borderBottom="1px solid #000000" pt={5} pb={3} pl={7}>
                    Security
                </Box>
                <Box p={5}>
                    <form onSubmit={securityDataSave}>
                        <FormControl>
                            <FormLabel
                                htmlFor="email"
                                fontSize="12px"
                                letterSpacing="0.04em"
                                fontWeight="normal"
                                lineHeight="14px"
                                mt={7}
                            >
                                Email
                            </FormLabel>
                            <Input
                                variant="unstyled"
                                isRequired
                                type="email"
                                value={emailAdress}
                                onChange={(e) =>
                                    setEmailAddress(e.target.value)
                                }
                                fontStyle="normal"
                                fontWeight="normal"
                                fontSize="20px"
                                lineHeight="23px"
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel
                                htmlFor="password"
                                fontSize="12px"
                                letterSpacing="0.04em"
                                fontWeight="normal"
                                lineHeight="14px"
                                mt="18px"
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
                                borderColor="#000000"
                                borderRadius="4px"
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
                                borderColor="#000000"
                                borderRadius="4px"
                            />
                        </FormControl>

                        <Box alignSelf="self-end">
                            <Button
                                type="submit"
                                width="80px"
                                height="30px"
                                border="2px solid"
                                borderColor="#000000"
                                mt={6}
                                mb={2}
                                background="white"
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

export default Security;
