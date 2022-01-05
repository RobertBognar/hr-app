import React from 'react';
import {
    Box,
    Flex,
    Spacer,
    Image,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import companyLogo from '../../assets/corrpro-companies.svg';
import Tabs from './Tabs';

const Navbar = () => {
    return (
        <Box
            bgGradient="linear(to-r, rgb(71, 131, 42), rgb(153,203,60))"
            color="black"
            border="1px"
            alignItems="center"
            fontWeight="700"
        >
            <Flex p={0}>
                <Flex alignItems="center">
                    <Image width="10" p={3} src={companyLogo} alt="company" />
                    <Text fontFamily="Comic Neue">Company Name</Text>
                </Flex>
                <Spacer />
                <Menu>
                    <MenuButton
                        as={Button}
                        rightIcon={<HamburgerIcon />}
                        display={['flex', 'flex', 'none', 'none']}
                        border="1px"
                        borderColor="black"
                        bg="rgb(71, 131, 42)"
                        m="10px"
                    />
                    <MenuList>
                        <MenuItem>Page one</MenuItem>
                        <MenuItem>Page two</MenuItem>
                        <MenuItem>Page three</MenuItem>
                    </MenuList>
                </Menu>
                <Tabs />
            </Flex>
        </Box>
    );
};

export default Navbar;
