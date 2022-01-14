import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    return (
        <Box
            bgGradient="linear(to-r, rgb(71,124,54), rgb(92, 153, 62))"
            color="black"
            border="1px"
            alignItems="center"
        >
            <Flex p={0}>
                <Flex onClick={() => navigate('/')} alignItems="center">
                    <Image width="10" p={3} src={companyLogo} alt="company" />
                    <Text fontFamily="Comic Neue">Company Name</Text>
                </Flex>
                <Spacer />
                <Menu>
                    <MenuButton
                        as={Button}
                        rightIcon={<HamburgerIcon />}
                        display={['flex', 'flex', 'none', 'none']}
                    />
                    <MenuList>
                        <MenuItem onClick={() => navigate('/login')}>
                            Login
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/register')}>
                            Register
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/profile')}>
                            My Account
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Tabs />
            </Flex>
        </Box>
    );
};

export default Navbar;
