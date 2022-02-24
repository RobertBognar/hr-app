import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
    Box,
    Button,
    Text,
    VStack,
    Image,
    Grid,
    GridItem,
    Spacer,
    Flex,
} from '@chakra-ui/react';
import profile from '../../services/ProfileService';

const Team = () => {
    const [profiles, setProfiles] = useState([]);

    const navigate = useNavigate();

    async function profileGet() {
        let getPro = await profile.getProfiles();

        setTimeout(setProfiles(getPro), 1000);
    }

    useEffect(() => {
        profileGet();
    }, []);

    return (
        <>
            <Grid
                templateColumns="repeat(3, 2fr)"
                py={['20', '40', '40']}
                className="bgBlack"
                minH="calc(100vh - 42px)"
                gap={6}
                pl="20%"
            >
                {' '}
                {profiles.length != 0
                    ? profiles.map((oneProfile) => (
                          <Box
                              key={oneProfile.id}
                              bg="whiteAlpha.800"
                              w="60%"
                              p="3%"
                          >
                              <Image />
                              <Flex>
                                  <Flex flexDirection="column">
                                      <Text>
                                          <b>{oneProfile.attributes.name}</b>
                                      </Text>
                                      <Text fontSize="13px">
                                          {oneProfile.attributes.createdAt}
                                      </Text>
                                  </Flex>

                                  <Box>
                                      <Text>Pending</Text>
                                  </Box>
                              </Flex>

                              <Text>{oneProfile.id}</Text>
                              <Flex w="100%" justifyContent="space-between">
                                  <Button
                                      onClick={() =>
                                          navigate(
                                              `/team/${oneProfile.id}/edit`,
                                          )
                                      }
                                  >
                                      Edit
                                  </Button>
                                  <Button>Delete</Button>
                              </Flex>
                          </Box>
                      ))
                    : console.log('sorry')}
            </Grid>
        </>
    );
};

export default Team;
/* <Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
</Grid> */
