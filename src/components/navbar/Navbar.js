import React from "react";
import { Box, Flex, Spacer} from "@chakra-ui/react"

import { Link } from "react-router-dom";




const Navbar = ()=>{


    return(
        
        <Box bg='rgba(241, 241, 241, 1)' p={4} color='black' border='1px' alignItems="center" >
            <Flex>
            <Box  w='20%'>
               <img src='./assets/corrpro-company.svg'/>
              
            </Box>
            <Spacer />
            <Box  w='40vw' fontSize='14px' fontFamily='Comic Neue' display="flex" alignItems="center" justifyContent="space-between">
                
                <Link to='/page-one'> Page one </Link>
                <Link to='/page-two'> Page two </Link>
                <Link to='/page-three'> Page three </Link>
               
            </Box>
           </Flex>
        </Box>
            

       
    )
}

export default Navbar