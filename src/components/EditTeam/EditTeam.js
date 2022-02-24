import React from 'react';
import {
    Box,
    Text,
    Input,
    Textarea,
    Button,
    Flex,
    Image,
    FormControl,
    FormLabel,
    VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import profile from '../../services/ProfileService';

import { FaCloudUploadAlt } from 'react-icons/fa';
const EditTeam = () => {
    const [oneProfile, setOneProfile] = useState([]);
    const { id } = useParams();

    const {
        register,
        handleSubmit,

        resetField,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
        },
    });
    const handleEdit = (data) => {
        profile.editProfile(id, data);
        resetField('name');
    };

    async function getProfileById() {
        let profileObject = await profile.getProfileById(id);

        setOneProfile(JSON.stringify(profileObject));
    }
    useEffect(() => {
        getProfileById();
    }, []);
    return (
        <Box>
            {console.log(oneProfile)}
            <VStack
                py={['20', '40', '40']}
                className="bgBlack"
                minH="calc(100vh - 42px)"
                color="whiteAlpha.800"
            >
                <Text>Edit Team Member</Text>
                <form onSubmit={handleSubmit(handleEdit)}>
                    <FormControl>
                        <FormLabel htmlFor="email">Name</FormLabel>
                        <Input
                            id="name"
                            type="text"
                            {...register('name')}
                            bg="black"
                            /*  placeholder={oneProfile.attributes.name} */
                        />

                        <Box
                            width="100%"
                            marginBottom={37}
                            position={'relative'}
                        >
                            <Box
                                width="100%"
                                type="text"
                                placeholder={'Profile photo'}
                                position={'relative'}
                                outline={'none'}
                                _placeholder={{ color: 'red' }}
                                border="2px"
                                height={50}
                                color="white"
                            >
                                <FormLabel htmlFor="photo" fontSize={16}>
                                    Profile photo{' '}
                                </FormLabel>
                                <i>
                                    <FaCloudUploadAlt
                                        className="fa-cloud"
                                        size={24}
                                        color="rgb(71, 131, 42)"
                                    />
                                </i>
                                <Input
                                    id="photo"
                                    type="file"
                                    {...register('photo')}
                                    placeholder="upload file"
                                />
                            </Box>
                        </Box>

                        <Button color="black" type="submit">
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </VStack>
        </Box>
    );
};

export default EditTeam;
