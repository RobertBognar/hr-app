import React, { useState } from 'react';
import {
    Heading,
    Text,
    Flex,
    Input,
    FormControl,
    FormLabel,
    Button,
    InputGroup,
    Image,
    Box,
} from '@chakra-ui/react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const CompanyInfoPage = () => {
    const [logoImage, setLogoImage] = useState('');
    const [logoMessageFormat, setLogoMessageFormat] = useState(false);
    const [logoMessage, setLogoMessage] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (logoImage) {
            const allData = { ...data, logoImage };
        } else if (!logoImage) {
            setLogoMessage(true);
        }
    };

    const inputImage = (event) => {
        if (
            event.target.files[0].type === 'image/jpeg' ||
            event.target.files[0].type === 'image/svg+xml'
        ) {
            setLogoImage(event.target.files[0].name);
            setLogoMessageFormat(false);
            setLogoMessage(false);
        } else {
            setLogoMessageFormat(true);
            setLogoMessage(false);
            setLogoImage('');
        }
    };

    return (
        <Flex
            pl={['55px', '55px', '155px']}
            direction="column"
            className="bgBlack"
            minH="calc(100vh - 42px)"
        >
            <Heading py="50px" color="white">
                Company Info
            </Heading>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                    width={['100%', '372px', '372px']}
                    maxWidth="calc(100% - 50px)"
                >
                    <FormLabel htmlFor="companyName" color="white">
                        Company Name
                    </FormLabel>
                    <Input
                        id="companyName"
                        type="text"
                        {...register('companyName', {
                            required: true,
                            validate: (value) => {
                                return !!value.trim();
                            },
                        })}
                        borderRadius="none"
                        placeholder="Company Name"
                        color="white"
                    />
                </FormControl>
                {errors.companyName && (
                    <Text color="red">Company Name is required!</Text>
                )}
                <FormControl
                    width={['100%', '372px', '372px']}
                    maxWidth="calc(100% - 50px)"
                    mt="20px"
                >
                    <FormLabel color="white">Company Logo</FormLabel>
                    <InputGroup
                        justifyContent="space-between"
                        alignItems="center"
                        border="1px solid"
                        borderColor="white"
                        borderRadius="none"
                    >
                        <Text color="gray.400" ml="15px">
                            Company Name
                        </Text>
                        <FormLabel
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            w="150px"
                            htmlFor="companyLogo"
                            fontStyle="normal"
                            fontWeight="normal"
                            fontSize="16px"
                            lineHeight="18px"
                            mt="6px"
                            bg="white"
                            color="black"
                            p="5px 15px"
                            cursor="pointer"
                        >
                            choose file
                            <FaCloudUploadAlt
                                size={24}
                                color="rgb(71, 131, 42)"
                                ml="15px"
                            />
                        </FormLabel>
                        <Input
                            id="companyLogo"
                            type="file"
                            onChange={inputImage}
                        />
                    </InputGroup>
                </FormControl>
                {logoMessage
                    ? !logoMessageFormat && (
                          <Text color="red">
                              Company Logo file is required!
                          </Text>
                      )
                    : ''}
                {logoImage && (
                    <Text color="white" fontSize="36px">
                        {logoImage}
                    </Text>
                )}
                {logoMessageFormat && (
                    <Text color="red">
                        Company Logo file must be in jpeg or svg format!
                    </Text>
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

export default CompanyInfoPage;
