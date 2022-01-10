import { Fragment } from 'react';

import Navbar from '../Navbar/Navbar';
import SideNav from '../Navbar/SideNav';

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
