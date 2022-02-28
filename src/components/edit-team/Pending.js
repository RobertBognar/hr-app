import {
    Box,
    Button,
    Collapse,
    Container,
    Heading,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import profile from '../../services/ProfileService';
import PendingCard from './PendingCard';

const Pending = () => {
    const [members, setMembers] = useState([]);
    const { isOpen, onToggle } = useDisclosure();

    async function getProfile() {
        const profiles = await profile.getProfilesByStatus();
        setMembers(profiles);
        console.log(profiles);
    }

    async function sortPendingMemberNameAscending() {
        const ascendedPendingProfiles =
            await profile.filterPendingTeamAscending();
        setMembers(ascendedPendingProfiles);
    }

    async function sortPendingMemberNameDescending() {
        const ascendedPendingProfiles =
            await profile.filterPendingTeamDescending();
        setMembers(ascendedPendingProfiles);
    }

    async function sortPendingMemberJoinedAscending() {
        const ascendedJoinedPendingProfiles =
            await profile.filterPendingTeamJoinedAscending();
        setMembers(ascendedJoinedPendingProfiles);
    }

    async function sortPendingMemberJoinedDescending() {
        const descendedJoinedPendingProfiles =
            await profile.filterPendingTeamJoinedDescending();
        setMembers(descendedJoinedPendingProfiles);
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
            <Box className="bgBlack" minH="calc(100vh - 42px)" py={34}>
                <Heading
                    fontWeight="bold"
                    fontSize="28px"
                    lineHeight="32px"
                    letterSpacing="0.04em"
                    color="white"
                    fontFamily="Comic Neue"
                    ml="8em"
                >
                    Pending For Approval
                </Heading>
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
                            onClick={() => sortPendingMemberNameAscending()}
                        >
                            Name Ascending
                        </Text>
                        <Text
                            cursor="pointer"
                            _hover={{
                                color: 'red.400',
                            }}
                            onClick={() => sortPendingMemberNameDescending()}
                        >
                            Name Descending
                        </Text>
                        <Text
                            cursor="pointer"
                            _hover={{
                                color: 'red.400',
                            }}
                            onClick={() => sortPendingMemberJoinedAscending()}
                        >
                            Joined Ascending
                        </Text>
                        <Text
                            cursor="pointer"
                            _hover={{
                                color: 'red.400',
                            }}
                            onClick={() => sortPendingMemberJoinedDescending()}
                        >
                            Joined Descending
                        </Text>
                    </Box>
                </Collapse>
                <Container
                    className="bgBlack"
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
                            <PendingCard
                                card={card}
                                handleDelete={handleDelete}
                                key={id}
                            />
                        );
                    })}
                </Container>
            </Box>
        </div>
    );
};

export default Pending;
