import React, { useState } from 'react';
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
import { useForm } from 'react-hook-form';
import './CompanyInfoPage.css';
import companyInfoService from '../../services/CompanyInfoService';

const EditCompanyInfoPage = () => {
    let navigate = useNavigate();
    const [logoMessageFormat, setLogoMessageFormat] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [logo, setLogo] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //Get Company Info Add And Connect

    return (
        <Flex
            pl={['55px', '55px', '155px']}
            direction="column"
            className="bgBlack"
            minH="calc(100vh - 42px)"
        >
            <Heading py="50px" color="white">
                Edit Company Info
            </Heading>

            <FormControl
                width={['100%', '372px', '372px']}
                maxWidth="calc(100% - 50px)"
            >
                <FormLabel htmlFor="companyName" color="white">
                    Edit Company Name
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
                    Edit Company Logo
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
            {logoMessageFormat && <Text color="red">{logoMessageFormat} </Text>}
            <Flex>
                <Button
                    colorScheme="white"
                    color="black"
                    bg="white"
                    p="5px 25px"
                    mt="20px"
                    onClick={() => navigate('/editcompanyinfo')}
                >
                    Edit
                </Button>
            </Flex>
            <Text
                color="whiteAlpha.900"
                pt="6px"
                fontSize="14px"
                as="i"
                cursor="pointer"
                onClick={() => navigate('/companyinfopage')}
            >
                Back To Company Info Page
            </Text>
        </Flex>
    );
};

export default EditCompanyInfoPage;
