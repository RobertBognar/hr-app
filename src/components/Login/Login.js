import {
    Input,
    VStack,
    Text,
    SimpleGrid,
    GridItem,
    FormControl,
    FormLabel,
    Button,
} from '@chakra-ui/react';

const Login = () => {
    //Submit Handler
    const submitHandler = (event) => {
        event.preventDefault();
    };
    return (
        <form onSubmit={submitHandler}>
            <VStack w="full" h="full" p="40" alignItems="center">
                <VStack alignItems="flex-start">
                    <Text
                        fontWeight="700"
                        fontStyle="normal"
                        letterSpacing="4px"
                        fontSize="28"
                    >
                        uTeam - Login
                    </Text>
                </VStack>
                <VStack paddingLeft={36}>
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
                                    border="2px solid"
                                    borderColor="blackAlpha.800"
                                    borderRadius="none"
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
                                    border="2px solid"
                                    borderColor="blackAlpha.800"
                                    borderRadius="none"
                                />
                            </FormControl>
                        </GridItem>
                    </SimpleGrid>
                    <SimpleGrid columns={2} columnGap={1} rowGap={6}>
                        <GridItem>
                            <Text
                                width="130px"
                                fontSize="12px"
                                lineHeight="13.8px"
                                paddingTop="30px"
                                marginRight="51"
                                letterSpacing="0.04em"
                            >
                                Don't have an account?
                            </Text>
                        </GridItem>
                        <GridItem>
                            <Button
                                type="button"
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
