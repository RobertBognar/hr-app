import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    Text,
    VStack,
    Divider,
    Center,
} from '@chakra-ui/react';

//Hardcoded SideNavigation, Needs Update When AuthContext Is Done
//Separate Menu Items Depends On User Role With AuthContext
//SideNav Is Not Visible On Guest User
const SideNav = () => {
    const navigate = useNavigate();
    return (
        <Box backgroundColor="transparent" zIndex={1} position={'absolute'}>
            <VStack alignItems="flex-start">
                <Menu>
                    <Text
                        marginTop={10}
                        fontSize={24}
                        lineHeight={'27.6px'}
                        marginLeft={5}
                    >
                        Menu
                    </Text>
                    <MenuItem>
                        <ChevronRightIcon />
                        <Text paddingLeft={3}>Pending For Approval</Text>
                    </MenuItem>
                    <MenuItem>
                        <ChevronRightIcon />
                        <Text paddingLeft={3}>Team</Text>
                    </MenuItem>
                    <MenuItem>
                        <ChevronRightIcon />
                        <Text paddingLeft={3}>Questions</Text>
                    </MenuItem>
                    <MenuItem>
                        <ChevronRightIcon />
                        <Text paddingLeft={3}>Company Info</Text>
                    </MenuItem>
                    <MenuItem>
                        <ChevronRightIcon />
                        <Text paddingLeft={3}>My Profile</Text>
                    </MenuItem>
                </Menu>
            </VStack>
            <Center height='600px'>
                <Divider
                    left={240}
                    top={0}
                    width={'100%'}
                    position={'absolute'}
                    orientation="vertical"
                />
            </Center>
        </Box>
    );
};

export default SideNav;
