import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Button,
} from '@chakra-ui/react';

const ModalWindow = ({ isOpen, closeModal }) => {
    return (
        <Modal
            size="md"
            isCentered
            closeOnOverlayClick={false}
            motionPreset="slideInBottom"
            isOpen={isOpen}
            onClose={() => closeModal()}
        >
            <ModalOverlay />
            <ModalContent p={'50px'}>
                <ModalHeader mb="30px" color={'black'} textAlign={'center'}>
                    Thank you for the answers
                </ModalHeader>

                <Button colorScheme="green" onClick={() => closeModal()}>
                    Close
                </Button>
            </ModalContent>
        </Modal>
    );
};

export default ModalWindow;
