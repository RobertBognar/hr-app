import React, { useState } from 'react';
import Header from './Header';
import Card from './Card';
import { Box } from '@chakra-ui/react';
import DetailsModal from '../details-modal/DetailsModal';

const GuestHomepage = () => {
    const [modal, setModal] = useState(false);
    const [itemID, setItemID] = useState('');

    const handleModal = (e) => {
        setItemID(e.target.closest('.chakra-stack').id);
        setModal(!modal);
    };
    return (
        <Box className="bgBlack" minH="calc(100vh - 42px)">
            <Header modal={modal} />
            <Card handleModal={handleModal} modal={modal} />
            <DetailsModal itemID={itemID} modal={modal} setModal={setModal} />
        </Box>
    );
};

export default GuestHomepage;
