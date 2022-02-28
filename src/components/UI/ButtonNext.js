import { Button } from '@chakra-ui/react';

const ButtonNext = () => {
    return (
        <Button
            type="submit"
            bg="black"
            color="whiteAlpha.500"
            border="1px"
            borderColor="gray.200"
            _hover={{
                background: 'white',
                color: 'black',
            }}
        >
            Next
        </Button>
    );
};

export default ButtonNext;
