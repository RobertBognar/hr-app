import React from "react";
import { Box, Flex, Spacer, Image, Text,Button,Menu,MenuButton,MenuList,MenuItem,} from "@chakra-ui/react"
import {HamburgerIcon} from "@chakra-ui/icons"
import companyLogo from "../../assets/corrpro-companies.svg"
import Tabs from "./Tabs";

const Navbar = ()=>{
   
  
    return(
        
        <Box bg='rgba(241, 241, 241, 1)' color='black' border='1px' alignItems="center" display={[300, 400, 500]}>
            <Flex p={0} >
                <Flex alignItems="center" >
                    <Image w='7%' p={5} src={companyLogo} alt="company"/>
                    <Text fontFamily='Comic Neue'>Company Name</Text>
                </Flex>
                <Spacer />
                    <Menu>
                        <MenuButton as={Button} rightIcon={<HamburgerIcon/>} display={['flex', 'flex', 'none', 'none']}/>
                        <MenuList>
                            <MenuItem>Page one</MenuItem>
                            <MenuItem>Page two</MenuItem>
                            <MenuItem>Page three</MenuItem>
                            
                        </MenuList>
                    </Menu>
                    <Tabs/>
           </Flex>
        </Box>
            

       
    )
}

export default Navbar
