import { Container } from '@chakra-ui/react';
import { useState } from 'react';
import MemberCard from './MemberCard';

const Members = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Miladin Popadic',
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            joined: 'Jan 23rd, 2021',
        },
        {
            id: 2,
            name: 'Slavko Bucanovic',
            image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            joined: 'Aug 18th, 2020',
        },
        {
            id: 3,
            name: 'Ratibor Popovic',
            image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            joined: 'Dec 30th, 2017',
        },
        {
            id: 4,
            name: 'Svetozar Slavkovic',
            image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            joined: 'Nov 3rd, 2015',
        },
        {
            id: 5,
            name: 'Verica Visekruna',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            joined: 'Sep 23rd, 2021',
        },
        {
            id: 6,
            name: 'Svetlana Peric',
            image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
            joined: 'May 21st, 2018',
        },
    ];

    const [members, setMembers] = useState(teamMembers);

    const handleDelete = (id) => {
        const newMembers = members.filter((member) => {
            return member.id !== id;
        });
        setMembers(newMembers);
    };

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
