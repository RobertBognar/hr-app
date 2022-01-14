//Authenticated Users Layout

import Navbar from '../Navbar/Navbar';
import SideNav from '../Navbar/SideNav';

const AuthLayout = (props) => {
    return (
        <div>
            <Navbar />
            <SideNav />
            {props.children}
        </div>
    );
};

export default AuthLayout;
