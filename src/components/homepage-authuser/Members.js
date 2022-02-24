import { Container } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import MemberCard from './MemberCard';
import profile from '../../services/ProfileService';

const Members = () => {
    const [members, setMembers] = useState([]);

    async function handleDelete(id) {
        await profile.deleteProfile(id);
        showProfiles();
    }
    async function showProfiles() {
        const profiles = await profile.getProfilesByStatusPublished();

        setMembers(profiles);
        console.log(profiles);
    }

    useEffect(() => {
        showProfiles();
    }, []);

    return (
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
    );
};

export default Members;
