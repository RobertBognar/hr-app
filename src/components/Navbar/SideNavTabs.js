import React from 'react';
import {
    Button,
    Divider,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

const SideNavTabs = () => {
    const navigate = useNavigate();
    return (
        <VStack
            display={['none', 'none', 'flex', 'flex']}
            alignItems="flex-start"
        >
            <Menu>
                <Text
                    onClick={() => navigate('/')}
                    marginTop={10}
                    fontSize={24}
                    lineHeight={'27.6px'}
                    marginLeft={5}
                    backgroundColor={'whiteAlpha.600'}
                >
                    Menu
                </Text>
                <MenuItem backgroundColor={'whiteAlpha.600'}>
                    <ChevronRightIcon />
                    <Text paddingLeft={3}>Pending For Approval</Text>
                </MenuItem>
                <MenuItem
                    onClick={() => navigate('/board')}
                    backgroundColor={'whiteAlpha.600'}
                >
                    <ChevronRightIcon />
                    <Text paddingLeft={3}>Team</Text>
                </MenuItem>
                <MenuItem backgroundColor={'whiteAlpha.600'}>
                    <ChevronRightIcon />
                    <Text paddingLeft={3}>Questions</Text>
                </MenuItem>
                <MenuItem backgroundColor={'whiteAlpha.600'}>
                    <ChevronRightIcon />
                    <Text paddingLeft={3}>Company Info</Text>
                </MenuItem>
                <MenuItem
                    onClick={() => navigate('/profile')}
                    backgroundColor={'whiteAlpha.600'}
                >
                    <ChevronRightIcon />
                    <Text paddingLeft={3}>My Profile</Text>
                </MenuItem>
                <Divider
                    left={240}
                    top={-2}
                    width={'100%'}
                    position={'absolute'}
                    orientation="vertical"
                    height="895px"
                    borderLeftWidth={'1px'}
                    borderLeftStyle={'solid'}
                    borderLeftColor={'whiteAlpha.900'}
                    display={['none', 'none', 'flex', 'flex']}
                />
            </Menu>
        </VStack>
    );
};

export default SideNavTabs;
