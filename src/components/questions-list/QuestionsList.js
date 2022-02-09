import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heading, Text, Flex, Button } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import questionsListService from '../../services/QuestionsListService';
import PaginationQuestionsList from './PaginationQuestionsList';

const QuestionsList = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    async function questionArrayFunc() {
        const arr = await questionsListService.questionsData();
        setData(arr);
    }
    useEffect(() => {
        questionArrayFunc();
    }, []);

    const navigate = useNavigate();

    async function handleDelete(id) {
        await questionsListService.deleteQuestion(id);
        questionArrayFunc();
    }

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Flex
                direction={['column', 'row', 'row']}
                justifyContent="space-between"
                alignItems="center"
                py="40px"
            >
                <Heading py="10px" color="white">
                    Questions
                </Heading>
                <Button
                    display="flex"
                    alignItems="end"
                    py="10px"
                    className="question-list-add-btn"
                    onClick={() =>
                        navigate('/questionslistmain/addnewquestion')
                    }
                >
                    <SmallAddIcon w={6} h={6} />
                    Add new question
                </Button>
            </Flex>
            {currentPosts.map((card, id) => {
                return (
                    <Flex
                        direction={['column', 'row', 'row']}
                        key={card.id}
                        color="white"
                        justifyContent="space-between"
                        border="1px"
                        borderColor="white"
                        w="100%"
                        p="25px"
                        mb="25px"
                    >
                        <Flex direction="column">
                            <Text fontWeight="700" fontSize="14px">
                                Question {id + 1}
                            </Text>
                            <Text fontSize="24px">{card.attributes.text}</Text>
                        </Flex>
                        <Flex>
                            {}
                            <Link to={`/questions/${card.id}/edit`}>
                                <Button
                                    bg="black"
                                    color="white"
                                    border="1px"
                                    borderColor="white"
                                    mt="15px"
                                    _hover={{
                                        background: 'white',
                                        color: 'black',
                                    }}
                                >
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                bg="black"
                                color="white"
                                border="1px"
                                borderColor="white"
                                ml="25px"
                                mt="15px"
                                _hover={{
                                    background: 'white',
                                    color: 'black',
                                }}
                                onClick={() => handleDelete(card.id)}
                            >
                                Delete
                            </Button>
                        </Flex>
                    </Flex>
                );
            })}
            <PaginationQuestionsList
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    );
};

export default QuestionsList;
