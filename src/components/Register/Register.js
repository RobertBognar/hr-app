import React, { useState, useEffect } from 'react';
import registration from '../../services/RegisterService';
import company from '../../services/CompanyService';
import { Heading, VStack } from '@chakra-ui/layout';
import { useNavigate } from 'react-router-dom';

import {
    Input,
    Box,
    Button,
    FormControl,
    Flex,
    Link,
    Select,
    Text,
} from '@chakra-ui/react';
import '@fontsource/comic-neue';
import { FaCloudUploadAlt } from 'react-icons/fa';

import './Register.css';
import profile from '../../services/ProfileService';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [chooseFile, setChooseFile] = useState(null);
    const [companies, setCompanies] = useState([]);
    const [idOfCompany, setidOfCompany] = useState('');

    // submit handler

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('files', chooseFile);
        if (!idOfCompany) {
            registration.register(name, email, password, formData, name);
        } else {
            registration.register(name, email, password, formData, idOfCompany);
        }
    };

    async function getComp() {
        const companies = await company.getCompanies();
        setCompanies(companies);
    }

    useEffect(() => {
        getComp();
    }, []);

    console.log(companies);

    return (
        <VStack
            py={['20', '40', '40']}
            className="bgBlack"
            minH="calc(100vh - 42px)"
        >
            <Box
                textAlign={'left'}
                className="Register"
                width={['100%', '372px', '372px']}
                maxWidth="calc(100% - 125px)"
            >
                <Heading
                    fontSize="28px"
                    lineHeight={'32.2px'}
                    letterSpacing={'1.12px'}
                    marginBottom={39}
                    className="Register"
                    fontWeight={600}
                    fontFamily={'Comic Neue'}
                    color="white"
                    textAlign={['center', 'left', 'left']}
                    width="100%"
                >
                    uTeam - Register
                </Heading>
                <FormControl color="white">
                    <Box width="100%" className="boxes">
                        <label htmlFor="name-input" fontSize={12}>
                            Name
                        </label>
                        <Input
                            id="nameInput"
                            variant="outline"
                            placeholder={'Name'}
                            border="2px"
                            borderRadius={'0'}
                            _placeholder={{ color: '#7B7B7B' }}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Box>
                    <Box width="100%" className="boxes">
                        <label htmlFor="email-input" fontSize={12}>
                            Email
                        </label>
                        <Input
                            id="mainInput"
                            variant={'outline'}
                            placeholder={'Email'}
                            border="2px"
                            borderRadius={'0'}
                            _placeholder={{ color: '#7B7B7B' }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Box width="100%" className="boxes">
                        <label htmlFor="password" fontSize={12}>
                            Password
                        </label>
                        <Input
                            id="passwordInput"
                            type="password"
                            placeholder={'Password'}
                            border="2px"
                            borderRadius={'0'}
                            _placeholder={{ color: '#7B7B7B' }}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>
                    <Box width="100%" marginBottom={37} position={'relative'}>
                        <label>Profile photo</label>
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
                            <label
                                htmlFor="file-upload"
                                fontSize={16}
                                className="custom-file-upload"
                            >
                                <p> Choose file</p>
                                <i>
                                    <FaCloudUploadAlt
                                        className="fa-cloud"
                                        size={24}
                                        color="rgb(71, 131, 42)"
                                    />
                                </i>
                            </label>
                        </Box>
                        <Input
                            id="file-upload"
                            type="file"
                            onChange={(e) => setChooseFile(e.target.files[0])}
                        />
                    </Box>
                    <Box>
                        <Text>Choose company</Text>

                        <Select
                            color="white"
                            cursor="pointer"
                            marginBottom={'30px'}
                            value={idOfCompany}
                            onChange={(e) => setidOfCompany(e.target.value)}
                        >
                            <option value="-">-</option>
                            {companies.map((company, id) => {
                                return (
                                    <>
                                        <option value={company.id} key={id}>
                                            {company.attributes.name}
                                        </option>
                                    </>
                                );
                            })}
                            {console.log(idOfCompany)}
                        </Select>
                    </Box>
                    <Box>
                        <Flex
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            width={['100%', '372px', '372px']}
                        >
                            <Link onClick={() => navigate('/login')}>
                                <i>Already have account?</i>
                            </Link>
                            <Button
                                onClick={handleSubmit}
                                background={'white'}
                                border={'2px'}
                                borderColor={'black'}
                                color="black"
                            >
                                Register
                            </Button>
                        </Flex>
                    </Box>
                </FormControl>
            </Box>
        </VStack>
    );
};

export default Register;
