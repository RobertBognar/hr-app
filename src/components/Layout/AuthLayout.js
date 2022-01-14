//Authenticated Users Layout

import SideNav from '../Navbar/SideNav';

const AuthLayout = (props) => {
    return (
        <div>
            <SideNav />
            {props.children}
        </div>
    );
};

export default AuthLayout;
