import { Heading, Button, Flex } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';

const Header = () => {
    return (
        <Flex justifyContent="space-around" mt={8.5}>
            <Heading
                fontWeight="bold"
                fontSize="28px"
                lineHeight="32px"
                letterSpacing="0.04em"
                color="#000000"
                fontFamily="Comic Neue"
            >
                Team
            </Heading>

            <Button
                w="231px"
                h="32px"
                background="#FFFFFF"
                border="2px solid #000000"
                borderRadius="4px"
                fontWeight="bold"
                fontSize="16px"
                lineHeight="18px"
                color="#000000"
                fontFamily="Comic Neue"
                leftIcon={<AiOutlinePlus />}
            >
                {' '}
                Add new team member
            </Button>
        </Flex>
    );
};

export default Header;
