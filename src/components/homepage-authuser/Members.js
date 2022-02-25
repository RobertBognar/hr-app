import { useEffect, useState } from 'react';

import {
    Box,
    Button,
    Collapse,
    Container,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import profile from '../../services/ProfileService';
import MemberCard from './MemberCard';

const Members = () => {
    const [members, setMembers] = useState([]);
    const { isOpen, onToggle } = useDisclosure();

    async function getProfile() {
        const profiles = await profile.getProfilePublished();
        setMembers(profiles);
        console.log(profiles);
    }

    async function sortMemberNameAscending() {
        const ascendedProfiles = await profile.filterTeamAscending();
        setMembers(ascendedProfiles);
        console.log(ascendedProfiles);
    }

    async function sortMemberNameDescending() {
        const descendedProfiles = await profile.filterTeamDescending();
        setMembers(descendedProfiles);
        console.log(descendedProfiles);
    }

    async function sortMemberJoinedAscending() {
        const ascendedProfilesJoined =
            await profile.filterTeamJoinedAscending();
        setMembers(ascendedProfilesJoined);
        console.log(ascendedProfilesJoined);
    }

    async function sortMemberJoinedDescending() {
        const descendedProfilesJoined =
            await profile.filterTeamJoinedDescending();
        setMembers(descendedProfilesJoined);
        console.log(descendedProfilesJoined);
    }

    async function handleDelete(id) {
        await profile.deleteProfile(id);
        getProfile();
    }

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div>
            <Button
                onClick={onToggle}
                justifyContent="center"
                display="flex"
                flexWrap="wrap"
                ml="18em"
                mt="2em"
                colorScheme="lightgray"
                border="1px"
                borderColor="whiteAlpha.800"
                width="14em"
                _hover={{
                    background: 'whiteAlpha.400',
                }}
            >
                Sort By
            </Button>
            <Collapse in={isOpen} animateOpacity>
                <Box
                    justifyContent="center"
                    display="flex"
                    flexWrap="wrap"
                    p="40px"
                    color="white"
                    mt="4"
                    ml="18em"
                    rounded="md"
                    shadow="md"
                    border="1px"
                    borderColor="whiteAlpha.800"
                    width="14em"
                    gap="0.1em"
                >
                    <Text
                        cursor="pointer"
                        _hover={{
                            color: 'red.400',
                        }}
                        onClick={() => sortMemberNameAscending()}
                    >
                        Name Ascending
                    </Text>
                    <Text
                        cursor="pointer"
                        _hover={{
                            color: 'red.400',
                        }}
                        onClick={() => sortMemberNameDescending()}
                    >
                        Name Descending
                    </Text>
                    <Text
                        cursor="pointer"
                        _hover={{
                            color: 'red.400',
                        }}
                        onClick={() => sortMemberJoinedAscending()}
                    >
                        Joined Ascending
                    </Text>
                    <Text
                        cursor="pointer"
                        _hover={{
                            color: 'red.400',
                        }}
                        onClick={() => sortMemberJoinedDescending()}
                    >
                        Joined Descending
                    </Text>
                </Box>
            </Collapse>

            <Container
                display="flex"
                justifyContent="center"
                gap={10}
                flexWrap="wrap"
                m="37px auto"
                w="100%"
                maxW={{ base: '82vw', sm: '100vw', lg: '90vw', xl: '80vw' }}
            >
                {members.map((card, id) => {
                    return (
                        <MemberCard
                            card={card}
                            handleDelete={handleDelete}
                            key={id}
                        />
                    );
                })}
            </Container>
        </div>
    );
};

export default Members;
