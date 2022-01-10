import React from 'react';
import Logo from '../../assets/quantox-logo.png';
import './header.css';
import {
    Heading,
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    Icon,
    Flex,
    Image,
    Select,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <Box px={['15px', '75px', '75px', '75px']}>
            <Flex
                py="25px"
                align="center"
                justify="space-between"
                direction={['column', 'column', 'column', 'column', 'row']}
                borderBottom="1px"
                borderBottomColor="white"
            >
                <Flex align="center">
                    <Box mr="10px" bg="black">
                        <Image src={Logo} alt="Quantox-logo" />
                    </Box>
                    <Heading
                        color="white"
                        fontSize={['36px', '42px', '52px', '52px']}
                    >
                        Quantox's Team
                    </Heading>
                </Flex>

                <Flex
                    align="center"
                    direction={['column', 'column', 'row', 'row', 'row']}
                >
                    <InputGroup mt={['10px', '10px', '0', '0', '0']}>
                        <InputLeftElement>
                            <Icon as={FaSearch} w={6} h={6} color="white" />
                        </InputLeftElement>
                        <Input
                            placeholder="Filter by name"
                            fontWeight="600"
                            fontSize="20px"
                            color="white"
                        />
                    </InputGroup>
                    <Select
                        placeholder="Sort By"
                        color="white"
                        cursor="pointer"
                        m={[
                            '10px 0 0 0',
                            '10px 0 0 0',
                            '0 0 0 10px',
                            '0 0 0 10px',
                            '0 0 0 10px',
                        ]}
                        fontSize="20px"
                    >
                        <option value="option1">First joined</option>
                        <option value="option2">Last joined</option>
                        <option value="option3">Name (A-Z)</option>
                        <option value="option4">Name (Z-A)</option>
                    </Select>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;
