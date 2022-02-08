import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    Button,
} from '@chakra-ui/react';
import SideNavTabs from './SideNavTabs';

//Hardcoded SideNavigation, Needs Update When AuthContext Is Done
//Separate Menu Items Depends On User Role With AuthContext
//SideNav Is Not Visible On Guest User
const SideNav = () => {
    const navigate = useNavigate();
    return (
        <Box backgroundColor="transparent" zIndex={1} position={'absolute'}>
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton
                            isActive={isOpen}
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            display={['flex', 'flex', 'none', 'none']}
                            marginTop={1}
                        >
                            {isOpen ? 'Close Menu' : 'Open Menu'}
                        </MenuButton>
                        <MenuList backgroundColor={'whiteAlpha.900'}>
                            <MenuItem>Pending For Approval</MenuItem>
                            <MenuItem onClick={() => navigate('/board')}>
                                Team
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/addnew')}>
                                Questions
                            </MenuItem>
                            <MenuItem>Company</MenuItem>
                            <MenuItem onClick={() => navigate('/profile')}>
                                My Profile
                            </MenuItem>
                        </MenuList>
                    </>
                )}
            </Menu>
            <SideNavTabs />
        </Box>
    );
};

export default SideNav;
