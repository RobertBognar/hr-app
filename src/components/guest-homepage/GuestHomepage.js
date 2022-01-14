import React, { useState } from 'react';
import Header from './Header';
import Card from './Card';
import { Box, Modal, useDisclosure } from '@chakra-ui/react';
import DetailsModal from '../details-modal/DetailsModal';

const GuestHomepage = () => {
    const [cardDetails, setcardDetails] = useState({});

    const handleModal = (item) => {
        setcardDetails(item);
        onOpen();
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box className="bgBlack" minH="calc(100vh - 42px)">
            <Header />
            <Card onClick={(item) => handleModal(item)} />
            <Modal
                size="xl"
                blockScrollOnMount={true}
                isOpen={isOpen}
                onClose={onClose}
            >
                <DetailsModal cardDetails={cardDetails} onClose={onClose} />
            </Modal>
        </Box>
    );
};

export default GuestHomepage;
