import { Button, Text } from '@chakra-ui/react';

const LogoutButton = () => {
    const onLogout = () => {
        localStorage.clear();
        window.location.href = '/';
    };
    return (
        <div>
            <Button onClick={() => onLogout()} background="transparent">
                <Text color="red">Logout</Text>
            </Button>
        </div>
    );
};

export default LogoutButton;
