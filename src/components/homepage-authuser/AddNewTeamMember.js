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

    const onSubmit = () => {
        profile.createProfile(newMember);
        navigate('/team');
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
                        New member name
                    </FormLabel>
                    <Input
                        id="newMember"
                        type="text"
                        value={newMember}
                        {...register('newMember', {
                            required: 'Please enter your name',
                            validate: (value) => {
                                return !!value.trim();
                            },
                        })}
                        borderRadius="none"
                        placeholder="Member name"
                        color="white"
                        onChange={(e) => setNewMember(e.target.value)}
                    />
                </FormControl>
                {errors.newMember && (
                    <Text color="red">{errors.newMember.message}</Text>
                )}

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
            </form>
        </Flex>
    );
};

export default AddNewTeamMember;
