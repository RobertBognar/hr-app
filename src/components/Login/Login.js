import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
} from '@chakra-ui/react';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Submit Handler
    const submitHandler = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:1337/auth/local', {
                email: email,
                password: password,
            })
            .then((response) => {
                console.log('User profile ', response.data.user);
                console.log('User token ', response.data.jwt);
            })
            .catch((error) => {
                console.log('An error occurred:', error.message);
            });
    };
    return (
        <form onSubmit={submitHandler}>
            <VStack w="full" h="full" p="40">
                <VStack alignItems="flex-start" textAlign={'left'}>
                    <Text
                        fontWeight="700"
                        fontStyle="normal"
                        letterSpacing="4px"
                        fontSize="28"
                        marginRight={150}
                    >
                        uTeam - Login
                    </Text>
                </VStack>
                <VStack>
                    <SimpleGrid
                        columns={1}
                        columnGap={1}
                        rowGap={6}
                        width="372px"
                    >
                        <GridItem paddingTop="5">
                            <FormControl>
                                <FormLabel
                                    htmlFor="email"
                                    fontSize="12px"
                                    letterSpacing="0.04em"
                                >
                                    Email
                                </FormLabel>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    border="2px solid"
                                    borderColor="blackAlpha.800"
                                    borderRadius="none"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormLabel
                                    htmlFor="password"
                                    fontSize="12px"
                                    letterSpacing="0.04em"
                                >
                                    Password
                                </FormLabel>
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    border="2px solid"
                                    borderColor="blackAlpha.800"
                                    borderRadius="none"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </FormControl>
                        </GridItem>
                    </SimpleGrid>
                    <SimpleGrid columns={2} columnGap={1} rowGap={6}>
                        <GridItem marginTop="6">
                            <Link
                                width="130px"
                                fontSize="12px"
                                lineHeight="13.8px"
                                marginRight="51"
                                letterSpacing="0.04em"
                                textUnderlineOffset="inherit"
                                onClick={() => navigate('/register')}
                            >
                                Don't have an account?
                            </Link>
                        </GridItem>
                        <GridItem>
                            <Button
                                type="submit"
                                width="86px"
                                height="30px"
                                marginLeft="99"
                                marginTop="4"
                                borderRadius="4px"
                                background="white"
                                border="2px solid"
                                borderColor="blackAlpha.800"
                            >
                                Login
                            </Button>
                        </GridItem>
                    </SimpleGrid>
                </VStack>
            </VStack>
        </form>
    );
};

export default Login;
