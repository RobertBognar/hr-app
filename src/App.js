import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register';
import Login from './components/Login/Login';
import GuestHomepage from './components/guest-homepage/GuestHomepage';
import ProfilePage from './components/my-profile-page/ProfilePage';

import Layout from './components/Layout/Layout';

import HomepageAuthUser from './components/homepage-authuser/HomepageAuthUser';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/board" element={<GuestHomepage />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
