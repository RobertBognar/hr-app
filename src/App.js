import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login/Login';
import GuestHomepage from './components/guest-homepage/GuestHomepage';
import ProfilePage from './components/my-profile-page/ProfilePage';
import GuestLayout from './components/Layout/GuestLayout';
import AuthLayout from './components/Layout/AuthLayout';

function App() {
    return (
        <div>
            <BrowserRouter>
                <GuestLayout>
                    <Routes>
                        <Route
                            path="/board"
                            element={<GuestHomepage />}
                        ></Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </GuestLayout>
                <AuthLayout>
                    <Routes>
                        <Route path="/profile" element={<ProfilePage />} />
                    </Routes>
                </AuthLayout>
            </BrowserRouter>
            <BrowserRouter></BrowserRouter>
        </div>
    );
}

export default App;
