import React, { useEffect, useState } from 'react';
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
import './CompanyInfoPage.css';
import company from '../../services/CompanyService';
import http from '../../services/HttpService';

const CompanyInfoPage = () => {
    const navigate = useNavigate();
    const [logoMessageFormat, setLogoMessageFormat] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [files, setFiles] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const uploadImage = async () => {
        const formData = new FormData();

        formData.append('files', files[0]);

        http.post('/upload', formData)
            .then((response) => {
                const imageId = response.data[0].id;

                http.post('/companies', { image: imageId })
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    async function getCompany() {
        const comp = await company.fetchCompany();
        console.log(comp);
        setCompanyName(comp);
    }

    async function getLogo() {
        const thumblogo = await company.fetchLogo();
        console.log(thumblogo);
        setFiles(thumblogo);
    }

    useEffect(() => {
        getCompany();
        getLogo();
    }, []);

    //Post Data To API
    const onSubmit = (data) => {
        uploadImage();
        company.createCompany(companyName);
        console.log(data);
        setCompanyName('');
        setFiles('');
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
                        value={companyName}
                        {...register('companyName', {
                            required: true,
                            validate: (value) => {
                                return !!value.trim();
                            },
                        })}
                        borderRadius="none"
                        placeholder="Company Name"
                        color="white"
                        onChange={(e) => setCompanyName(e.target.value)}
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
                    <FormLabel htmlFor="companyLogo" color="white">
                        Company Logo
                    </FormLabel>
                    <Input
                        id="companyLogo"
                        type="file"
                        // value={logo}
                        fontSize={['14px', '16px', '16px', '16px']}
                        {...register('companyLogo', {
                            required: 'Company Logo file is required!',
                            validate: (value) => {
                                if (
                                    value[0].type === 'image/jpeg' ||
                                    value[0].type === 'image/svg+xml' ||
                                    value[0].type === 'image/png'
                                ) {
                                    setLogoMessageFormat('');
                                    return value;
                                } else {
                                    setLogoMessageFormat(
                                        'Company Logo file must be in jpeg, png or svg format!',
                                    );
                                    return (value = '');
                                }
                            },
                        })}
                        // onChange={(e) => setLogo(e.target.logo)}
                        onChange={(e) => setFiles(e.target.files)}
                    />
                </FormControl>
                {errors.companyLogo && (
                    <Text color="red">{errors.companyLogo.message} </Text>
                )}
                {logoMessageFormat && (
                    <Text color="red">{logoMessageFormat} </Text>
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
            <Flex>
                <Text
                    mt="6px"
                    colorScheme="white"
                    color="white"
                    as="i"
                    cursor="pointer"
                    onClick={() => {
                        navigate('/editcompany');
                    }}
                >
                    Go To Edit Company Page
                </Text>
            </Flex>
        </Flex>
    );
};

export default CompanyInfoPage;
