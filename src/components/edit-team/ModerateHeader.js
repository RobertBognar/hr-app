import { Button, Flex, Heading, HStack } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import http from '../../services/HttpService';
import profile from '../../services/ProfileService';

const ModerateHeader = () => {
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
        navigate('/pendingforapproval');
    }

    //APPROVE MEMBER - PUBLISH THEM

    const approvePublishStatus = async () => {
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
                Moderate Team Member Entry
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
                        approvePublishStatus();
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

export default ModerateHeader;
