import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    Text,
    VStack,
} from '@chakra-ui/react';

//Hardcoded SideNavigation, Needs Update When AuthContext Is Done
//Separate Menu Items Depends On User Role
const SideNav = () => {
    return (
        <Box>
            <VStack alignItems="flex-start">
                <Menu>
                    <Text marginLeft={5}>Menu</Text>
                    <MenuItem>
                        <ChevronRightIcon />
                        <Text>Pending For Approval</Text>
                    </MenuItem>
                    <MenuItem>
                        <ChevronRightIcon />
                        <Text>Team</Text>
                    </MenuItem>
                    <MenuItem>
                        <ChevronRightIcon />
                        <Text>Questions</Text>
                    </MenuItem>
                    <MenuItem>
                        <ChevronRightIcon />
                        <Text>Company Info</Text>
                    </MenuItem>
                </Menu>
            </VStack>
        </Box>
    );
};

export default SideNav;
