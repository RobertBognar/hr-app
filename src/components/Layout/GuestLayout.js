import Navbar from '../Navbar/Navbar';

//Unauthorized Guest View Layout
const GuestLayout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};

export default GuestLayout;
