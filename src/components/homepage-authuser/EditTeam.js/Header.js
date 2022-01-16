import { Heading, Flex, Select, Button, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <Flex
            justifyContent="space-around"
            py={18}
            justify={{ md: 'space-around' }}
            align={{ base: 'center', sm: 'center', md: 'normal' }}
            direction={{ base: 'column', sm: 'column', md: 'row' }}
        >
            <Heading
                fontWeight="bold"
                fontSize="28px"
                lineHeight="32px"
                letterSpacing="0.04em"
                color="white"
                fontFamily="Comic Neue"
                mt={7}
            >
                Edit team member
            </Heading>

            <HStack gap="20px" mt={{ base: '10px', sm: '10px' }}>
                <Flex direction="column" mb={6}>
                    <Text color="white">Status</Text>
                    <Select
                        icon={<MdArrowDropDown />}
                        // onChange={() => {...somethnig...  }}
                        h="40px"
                        color="white"
                        borderRadius="none"
                        w={{
                            base: '120px',
                            sm: '120px',
                            lg: '200px',
                            xl: '256px',
                        }}
                    >
                        <option value={'published'}>Published</option>
                        <option value={'pending'}>Pending</option>
                    </Select>
                </Flex>
                <Button
                    w={91}
                    h={30}
                    fontWeight=" bold"
                    fontSize="16px"
                    lineheight="18px"
                    color="#000000"
                    onClick={() => {
                        // something.delete(`/members/${id}`);
                        navigate('/team');
                    }}
                >
                    Delete
                </Button>
            </HStack>
        </Flex>
    );
};

export default Header;
