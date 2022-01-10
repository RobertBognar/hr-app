import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register';
import Login from './components/Login/Login';
import GuestHomepage from './components/guest-homepage/GuestHomepage';
import ProfilePage from './components/my-profile-page/ProfilePage';
import DetailsModal from './components/details-modal/DetailsModal';

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
                    <Route path="/details/:id" element={<DetailsModal />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
