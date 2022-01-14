import './App.css';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Register from './components/Register/Register';
import Login from './components/Login/Login';
import GuestHomepage from './components/guest-homepage/GuestHomepage';
import ProfilePage from './components/my-profile-page/ProfilePage';

import GuestLayout from './components/Layout/GuestLayout';
import AuthLayout from './components/Layout/AuthLayout';
import Page from './components/pages/Page';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate replace to="/login" />}
                    />
                    <Route
                        path="/board"
                        element={
                            <Page
                                Layout={GuestLayout}
                                Component={GuestHomepage}
                            />
                        }
                    ></Route>
                    <Route
                        path="/login"
                        element={
                            <Page Layout={GuestLayout} Component={Login} />
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <Page Layout={GuestLayout} Component={Register} />
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/profile"
                        element={
                            <Page Layout={AuthLayout} Component={ProfilePage} />
                        }
                    />
                </Routes>
            </BrowserRouter>

import { AuthProvider } from './context/AuthContext';
import HomepageAuthUser from './components/homepage-authuser/HomepageAuthUser';

function App() {
    return (
        <div className="App">
            <AuthProvider>
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
            </AuthProvider>

        </div>
    );
}

export default App;
