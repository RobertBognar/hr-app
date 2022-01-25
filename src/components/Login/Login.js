import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import {
    Input,
    VStack,
    Text,
    SimpleGrid,
    GridItem,
    FormControl,
    FormLabel,
    Button,
    Link,
    Flex,
} from '@chakra-ui/react';

const Login = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuthContext();
    const submitHandler = (event) => {
        event.preventDefault();
        login(email, password);
    };

    return (
        <form onSubmit={submitHandler}>
            <VStack
                className="bgBlack"
                w="full"
                h="full"
                py="40"
                minH="calc(100vh - 42px)"
            >
                <VStack alignItems="flex-start" textAlign={'left'}>
                    <Text
                        fontWeight="700"
                        fontStyle="normal"
                        letterSpacing="4px"
                        fontSize="28"
                        marginRight={['0', '150px', '150px']}
                        color="white"
                    >
                        uTeam - Login
                    </Text>
                </VStack>
                <VStack
                    width={['100%', '372px', '372px']}
                    maxWidth="calc(100% - 125px)"
                >
                    <SimpleGrid
                        columns={1}
                        columnGap={1}
                        rowGap={6}
                        width="100%"
                        mb="25px"
                    >
                        <GridItem paddingTop="5">
                            <FormControl>
                                <FormLabel
                                    htmlFor="email"
                                    fontSize="14px"
                                    letterSpacing="0.04em"
                                    color="white"
                                >
                                    Email
                                </FormLabel>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    border="2px solid"
                                    borderColor="white"
                                    borderRadius="none"
                                    onChange={(e) => setEmail(e.target.value)}
                                    color="white"
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormLabel
                                    htmlFor="password"
                                    fontSize="14px"
                                    letterSpacing="0.04em"
                                    color="white"
                                >
                                    Password
                                </FormLabel>
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    border="2px solid"
                                    borderColor="white"
                                    borderRadius="none"
                                    color="white"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </FormControl>
                        </GridItem>
                    </SimpleGrid>
                    <Flex align="center" justify="space-between" width="100%">
                        <Link
                            fontSize="14px"
                            lineHeight="13.8px"
                            letterSpacing="0.04em"
                            textUnderlineOffset="inherit"
                            color="white"
                            onClick={() => navigate('/register')}
                            as="i"
                        >
                            Don't have an account?
                        </Link>

                        <Button
                            type="submit"
                            width="86px"
                            height="30px"
                            borderRadius="4px"
                            background="white"
                        >
                            Login
                        </Button>
                    </Flex>
                </VStack>
            </VStack>
        </form>
    );
};

export default Login;
