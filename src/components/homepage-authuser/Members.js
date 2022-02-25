import { useEffect, useState } from 'react';

import { Button, Container, Select } from '@chakra-ui/react';
import profile from '../../services/ProfileService';
import MemberCard from './MemberCard';

const Members = () => {
    const [members, setMembers] = useState([]);

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
            <Select
                display="flex"
                justifyContent="center"
                gap={10}
                flexWrap="wrap"
                m="37px auto"
                width="50%"
                maxW={{ base: '82vw', sm: '100vw', lg: '90vw', xl: '80vw' }}
                placeholder="Sort By"
                color="white"
            >
                <option>Name Ascending</option>
                <option>Name Descending</option>
                <option>Joined Ascending</option>
                <option>Joined Descending</option>
            </Select>
            <Button
                display="flex"
                justifyContent="center"
                gap={10}
                flexWrap="wrap"
                m="37px auto"
                maxW={{ base: '82vw', sm: '100vw', lg: '90vw', xl: '80vw' }}
                onClick={() => sortMemberNameAscending()}
            >
                Sort Name Ascending
            </Button>
            <Button
                display="flex"
                justifyContent="center"
                gap={10}
                flexWrap="wrap"
                m="37px auto"
                maxW={{ base: '82vw', sm: '100vw', lg: '90vw', xl: '80vw' }}
                onClick={() => sortMemberNameDescending()}
            >
                Sort Name Descending
            </Button>
            <Button
                display="flex"
                justifyContent="center"
                gap={10}
                flexWrap="wrap"
                m="37px auto"
                maxW={{ base: '82vw', sm: '100vw', lg: '90vw', xl: '80vw' }}
                onClick={() => sortMemberJoinedAscending()}
            >
                Sort Joined Ascending
            </Button>
            <Button
                display="flex"
                justifyContent="center"
                gap={10}
                flexWrap="wrap"
                m="37px auto"
                maxW={{ base: '82vw', sm: '100vw', lg: '90vw', xl: '80vw' }}
                onClick={() => sortMemberJoinedDescending()}
            >
                Sort Joined Descending
            </Button>
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
