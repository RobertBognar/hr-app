import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
    Heading,
    Text,
    Flex,
    Input,
    FormControl,
    FormLabel,
    Button,
} from '@chakra-ui/react';
import profile from '../../services/ProfileService';

const AddNewTeamMember = () => {
    const navigate = useNavigate();
    const [newMember, setNewMember] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        profile.createProfile(newMember);
        setNewMember('');
    };

    return (
        <Flex
            pl={['55px', '55px', '155px']}
            direction="column"
            className="bgBlack"
            minH="calc(100vh - 42px)"
        >
            <Heading py="50px" color="white">
                Add New Member
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                    width={['100%', '372px', '372px']}
                    maxWidth="calc(100% - 50px)"
                >
                    <FormLabel htmlFor="newMember" color="white">
                        New Member Name
                    </FormLabel>
                    <Input
                        id="newMember"
                        type="text"
                        value={newMember}
                        {...register('newMember', {
                            required: true,
                            validate: (value) => {
                                return !!value.trim();
                            },
                        })}
                        borderRadius="none"
                        placeholder="Member Name"
                        color="white"
                        onChange={(e) => setNewMember(e.target.value)}
                    />
                </FormControl>
                {errors.newMember && <Text color="red">Name is required!</Text>}

                <Button
                    type="submit"
                    colorScheme="white"
                    color="black"
                    bg="white"
                    p="5px 25px"
                    mt="20px"
                >
                    Save
                </Button>
                <Text
                    color="white"
                    onClick={() => navigate('/team')}
                    cursor="pointer"
                >
                    Go Back To Team Page
                </Text>
            </form>
        </Flex>
    );
};

export default AddNewTeamMember;
