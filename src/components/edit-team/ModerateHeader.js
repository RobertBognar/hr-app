import { Heading, Flex, Button, HStack } from '@chakra-ui/react';
import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import profile from '../../services/ProfileService';
import http from '../../services/HttpService';

const Header = () => {
    const navigate = useNavigate();

    const para = useParams();
    const id = para.id;

    async function getProfileById() {
        const fetchedProfile = await profile.getProfileById(id);
        const user = fetchedProfile.id;
        return user;
    }

    async function handleDelete() {
        const user = await getProfileById();
        await profile.deleteProfile(user);
        navigate('/pendingforapproval');
    }

    const approveUser = async () => {
        try {
            const user = await getProfileById();

            const response = await http.put(`/profiles/${user}`, {
                data: { status: 'published' },
            });
            console.log(response);
            navigate('/pendingforapproval');
            return response;
        } catch (error) {
            return;
        }
    };

    return (
        <Flex
            justifyContent="space-around"
            py={18}
            justify={{ md: 'space-around' }}
            align={{ base: 'center', sm: 'center', md: 'normal' }}
            direction={{ base: 'column', sm: 'column', md: 'row' }}
        >
            <Heading
                fontWeight="bold"
                fontSize="28px"
                lineHeight="32px"
                letterSpacing="0.04em"
                color="white"
                fontFamily="Comic Neue"
                mt={7}
            >
                Moderate team member entry
            </Heading>

            <HStack gap="20px" mt={{ base: '10px', sm: '10px' }}>
                <Button
                    w={91}
                    h={30}
                    fontWeight=" bold"
                    fontSize="16px"
                    lineheight="18px"
                    color="#000000"
                    onClick={() => {
                        approveUser();
                    }}
                >
                    Approve
                </Button>

                <Button
                    w={91}
                    h={30}
                    fontWeight=" bold"
                    fontSize="16px"
                    lineheight="18px"
                    color="#000000"
                    onClick={() => {
                        handleDelete();
                    }}
                >
                    Delete
                </Button>
            </HStack>
        </Flex>
    );
};

export default Header;
