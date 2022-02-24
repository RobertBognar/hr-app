import { useEffect, useState } from 'react';

import { Container } from '@chakra-ui/react';
import profile from '../../services/ProfileService';
import MemberCard from './MemberCard';

const Members = () => {
    const [members, setMembers] = useState([]);

    async function getProfile() {
        const profiles = await profile.getProfilePublished();
        setMembers(profiles);
        console.log(profiles);
    }

    async function handleDelete(id) {
        await profile.deleteProfile(id);
        getProfile();
    }

    useEffect(() => {
        getProfile();
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
