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
import upload from '../../services/UploadService';

const CompanyInfoPage = () => {
    let id;
    const navigate = useNavigate();
    const [logoMessageFormat, setLogoMessageFormat] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [logo, setLogo] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    async function getCompany() {
        const comp = await company.fetchCompany();
        setCompanyName(comp);
    }

    useEffect(() => {
        getCompany();
    }, []);

    //Post Data To API
    const onSubmit = (data) => {
        // upload.upload(logo);
        company.createCompany(companyName);
        console.log(companyName, logo);
        console.log(data);
        setCompanyName('');
        setLogo('');
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
                        value={logo}
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
                        onChange={(e) => setLogo(e.target.value)}
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
