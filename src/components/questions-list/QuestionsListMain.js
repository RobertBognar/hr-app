import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import QuestionsList from './QuestionsList';

const QuestionsListMain = () => {
    return (
        <Flex
            px={['55px', '55px', '155px']}
            direction="column"
            className="bgBlack"
            minH="calc(100vh - 42px)"
        >
            <QuestionsList />
        </Flex>
    );
};

export default QuestionsListMain;
