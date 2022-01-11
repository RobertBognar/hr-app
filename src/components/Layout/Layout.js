import { Fragment } from 'react';

import Navbar from '../Navbar/Navbar';
import SideNav from '../Navbar/SideNav';

//Hardcoded SideNav To Layout, Need To Fix With AuthContext
const Layout = (props) => {
    return (
        <Fragment>
            <Navbar />
            <SideNav />
            <main>{props.children}</main>
        </Fragment>
    );
};

export default Layout;
