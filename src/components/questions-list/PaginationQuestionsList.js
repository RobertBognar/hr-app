import React from 'react';
import { Button, Text, Box, HStack } from '@chakra-ui/react';

const PaginationQuestionsList = ({ postsPerPage, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= postsPerPage; i++) {
        pageNumbers.push(i);
    }

    const handlePageNumber = (e) => {
        if (e === 'previos') {
            if (currentPage === 1) {
                paginate(1);
            } else {
                paginate(currentPage - 1);
            }
        } else {
            if (currentPage === pageNumbers.length) {
                paginate(pageNumbers.length);
            } else {
                paginate(currentPage + 1);
            }
        }
    };

    return (
        <HStack spacing="15px">
            <Button
                bg="black"
                color="white"
                border="1px"
                borderColor="white"
                _hover={{
                    background: 'white',
                    color: 'black',
                }}
                onClick={() => handlePageNumber('previos')}
            >
                Previous
            </Button>
            {pageNumbers.map((number) => {
                return (
                    <Box key={number}>
                        <Text
                            key={number}
                            onClick={() => paginate(number)}
                            color={currentPage === number ? 'black' : 'white'}
                            cursor="pointer"
                            textAlign="center"
                            w="25px"
                            border="1px"
                            borderColor="white"
                            bg={currentPage === number ? 'white' : ''}
                        >
                            {number}
                        </Text>
                    </Box>
                );
            })}
            <Button
                bg="black"
                color="white"
                border="1px"
                borderColor="white"
                _hover={{
                    background: 'white',
                    color: 'black',
                }}
                onClick={() => handlePageNumber('next')}
            >
                Next
            </Button>
        </HStack>
    );
};

export default PaginationQuestionsList;
