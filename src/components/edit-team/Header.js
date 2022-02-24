import { Heading, Flex, Select, Button, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import http from '../../services/HttpService';
import profile from '../../services/ProfileService';

const Header = () => {
    const navigate = useNavigate();

    const para = useParams();
    const id = para.id;

    //FETCH & DELETE PROFILE FROM EDIT TEAM PAGE - DELETE BUTTON
    async function getProfileById() {
        const fetchedProfile = await profile.fetchProfileById(id);
        const user = fetchedProfile.id;
        return user;
    }

    async function handleDelete() {
        const user = await getProfileById();
        await profile.deleteProfile(user);
        navigate('/team');
    }

    //CHANGE STATUS
    const changeStatus = async (option) => {
        try {
            const user = await getProfileById();

            const response = await http.put(`/profiles/${user}`, {
                data: { status: option },
            });
            console.log(response);
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
                Edit team member
            </Heading>

            <HStack gap="20px" mt={{ base: '10px', sm: '10px' }}>
                <Flex direction="column" mb={6}>
                    <Text color="white">Status</Text>
                    <Select
                        icon={<MdArrowDropDown />}
                        // value={option}
                        onChange={(e) => changeStatus(e.target.value)}
                        h="40px"
                        color="white"
                        borderRadius="none"
                        w={{
                            base: '120px',
                            sm: '120px',
                            lg: '200px',
                            xl: '256px',
                        }}
                    >
                        <option value="">Select</option>
                        <option value={'published'}>Published</option>
                        <option value={'pending'}>Pending</option>
                    </Select>
                </Flex>
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
