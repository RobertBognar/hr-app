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

    //Get Company Info Add And Connect, Edit With Put
    const onSubmit = (data) => {
        console.log(data);
    };

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

            <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Text color="red">Add New Company Name!</Text>
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
                            required: 'Add New Company Logo File!',
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
                    Edit
                </Button>
            </form>
            <Flex>
                <Text
                    as="i"
                    pt="6px"
                    color="whiteAlpha.900"
                    cursor="pointer"
                    onClick={() => navigate('/companyinfopage')}
                >
                    Back To Company Info Page
                </Text>
            </Flex>
        </Flex>
    );
};

export default EditCompanyInfoPage;
