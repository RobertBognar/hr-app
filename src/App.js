import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register';
import Login from './components/Login/Login';
import GuestHomepage from './components/guest-homepage/GuestHomepage';
import ProfilePage from './components/my-profile-page/ProfilePage';
import HomepageAuthUser from './components/homepage-authuser/HomepageAuthUser';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/board" element={<GuestHomepage />} />
                    <Route path="/team" element={<HomepageAuthUser />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
