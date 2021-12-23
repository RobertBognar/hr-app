import React from "react";
import { Box, Flex, Spacer, Image, Text} from "@chakra-ui/react"
import companyLogo from "../assets/corrpro-companies.svg"
import { Link } from "react-router-dom";




const Navbar = ()=>{


    return(
        
        <Box bg='rgba(241, 241, 241, 1)' color='black' border='1px' alignItems="center" >
            <Flex p={0} >
            <Flex alignItems="center" >
                <Image w='7%' p={5} src={companyLogo} alt="company"/>
                <Text fontFamily='Comic Neue'>Company Name</Text>
            </Flex>
               
            <Spacer />
            <Box  w='80vw' fontSize='14px' fontFamily='Comic Neue' display="flex" alignItems="center" justifyContent="space-around">
                
                <Link to='/page-one'> Page one </Link>
                <Link to='/page-two'> Page two </Link>
                <Link to='/page-three'> Page three </Link>
               
            </Box>
           </Flex>
        </Box>
            

       
    )
}

export default Navbar